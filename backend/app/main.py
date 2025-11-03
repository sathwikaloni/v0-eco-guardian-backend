from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import routing, music
from app.utils.config import CORS_ORIGINS, DEBUG

app = FastAPI(
    title="EcoGuardian API",
    description="Smart, Safe & Green Route Companion Backend",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS if CORS_ORIGINS != ["*"] else "*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(routing.router, prefix="/routing", tags=["Routing"])
app.include_router(music.router, prefix="/music", tags=["Music"])

# Health check endpoint
@app.get("/health")
def health_check():
    """Check if the API is running."""
    return {"status": "ok", "service": "EcoGuardian API"}

# Root endpoint
@app.get("/")
def root():
    """Get API information."""
    return {
        "name": "EcoGuardian API",
        "version": "1.0.0",
        "description": "Smart, Safe & Green Route Companion Backend",
        "endpoints": {
            "routing": "/routing/eco-route",
            "music": "/music/recommend",
            "health": "/health"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=DEBUG)
