from fastapi import APIRouter, HTTPException, Query
import requests
import base64
from app.utils.config import SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET

router = APIRouter()

def get_spotify_token():
    """Get Spotify API access token using Client Credentials flow."""
    if not SPOTIFY_CLIENT_ID or not SPOTIFY_CLIENT_SECRET:
        raise HTTPException(
            status_code=500, 
            detail="Spotify credentials not configured"
        )
    
    auth_str = f"{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}"
    auth_bytes = auth_str.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")
    
    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": f"Basic {auth_base64}",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {"grant_type": "client_credentials"}
    
    response = requests.post(url, headers=headers, data=data, timeout=10)
    response.raise_for_status()
    
    return response.json()["access_token"]

@router.get("/recommend")
def recommend_music(mood: str = Query(..., description="Mood: happy, calm, focus, energetic")):
    """
    Get music playlist recommendations based on mood.
    Returns playlist names and Spotify URLs.
    """
    
    try:
        token = get_spotify_token()
        
        # Map moods to Spotify search queries
        mood_queries = {
            "happy": "happy upbeat party",
            "calm": "relaxing chill ambient",
            "focus": "focus study concentration",
            "energetic": "workout gym energy"
        }
        
        query = mood_queries.get(mood, "upbeat happy")
        
        # Search for playlists on Spotify
        url = "https://api.spotify.com/v1/search"
        headers = {"Authorization": f"Bearer {token}"}
        params = {
            "q": query,
            "type": "playlist",
            "limit": 5
        }
        
        response = requests.get(url, headers=headers, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        playlists = []
        for playlist in data.get("playlists", {}).get("items", []):
            playlists.append({
                "name": playlist["name"],
                "url": playlist["external_urls"]["spotify"],
                "image": playlist["images"][0]["url"] if playlist["images"] else None,
                "total_tracks": playlist["tracks"]["total"]
            })
        
        return {
            "success": True,
            "mood": mood,
            "playlists": playlists,
            "message": f"Found {len(playlists)} playlists for {mood} mood"
        }
    
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Spotify API Error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid request: {str(e)}")
