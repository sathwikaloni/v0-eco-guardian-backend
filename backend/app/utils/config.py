import os
from dotenv import load_dotenv

load_dotenv()

# API Keys
ORS_KEY = os.getenv("ORS_KEY", "")
OWM_KEY = os.getenv("OWM_KEY", "")
SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID", "")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET", "")

# Debug mode
DEBUG = os.getenv("DEBUG", "false").lower() == "true"

# CORS Origins
CORS_ORIGINS_STR = os.getenv("CORS_ORIGINS", "*")
CORS_ORIGINS = (
    [origin.strip() for origin in CORS_ORIGINS_STR.split(",")] 
    if CORS_ORIGINS_STR != "*" 
    else ["*"]
)
