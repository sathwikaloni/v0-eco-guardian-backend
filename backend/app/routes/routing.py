from fastapi import APIRouter, HTTPException, Query
import requests
from app.utils.config import ORS_KEY

router = APIRouter()

@router.get("/eco-route")
def get_eco_route(
    origin: str = Query(..., description="Origin coordinates (lat,lon)"),
    destination: str = Query(..., description="Destination coordinates (lat,lon)"),
    mode: str = Query("driving", description="Travel mode: driving, cycling, walking")
):
    """
    Fetch eco-friendly route data from OpenRouteService.
    Returns distance, duration, and estimated CO2 savings.
    """
    
    if not ORS_KEY:
        raise HTTPException(
            status_code=500, 
            detail="OpenRouteService API key not configured"
        )
    
    try:
        # Map mode to ORS profile
        profile_map = {
            "driving": "driving-car",
            "cycling": "cycling-regular",
            "walking": "foot-walking"
        }
        profile = profile_map.get(mode, "driving-car")
        
        # Parse coordinates
        origin_coords = list(map(float, origin.split(",")))
        dest_coords = list(map(float, destination.split(",")))
        
        # Call OpenRouteService API
        url = f"https://api.openrouteservice.org/v2/directions/{profile}"
        headers = {"Authorization": ORS_KEY}
        payload = {
            "coordinates": [origin_coords, dest_coords],
            "format": "json"
        }
        
        response = requests.post(url, json=payload, headers=headers, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if not data.get("routes"):
            raise HTTPException(status_code=404, detail="Route not found")
        
        route = data["routes"][0]
        distance = route["summary"]["distance"] / 1000  # Convert to km
        duration = route["summary"]["duration"] / 60  # Convert to minutes
        
        # Calculate CO2 savings based on mode
        co2_per_km = {
            "driving": 0.192,  # kg CO2 per km
            "cycling": 0,
            "walking": 0
        }
        co2_saved = distance * co2_per_km.get(mode, 0.192)
        
        return {
            "success": True,
            "distance_km": round(distance, 2),
            "duration_minutes": round(duration, 2),
            "mode": mode,
            "co2_saved_kg": round(co2_saved, 2),
            "message": f"Eco-friendly {mode} route found!"
        }
    
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"API Error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid request: {str(e)}")
