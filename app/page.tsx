"use client"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">🌍 EcoGuardian</h1>
          <p className="text-gray-600">Smart, Safe & Green Route Companion</p>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-3">Welcome to EcoGuardian API</h2>
          <p className="text-lg text-gray-600">
            A complete full-stack application for eco-friendly route planning with weather insights and music
            recommendations.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-2 rounded font-semibold transition ${
              activeTab === "overview" ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-2 rounded font-semibold transition ${
              activeTab === "backend" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Backend Setup
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2 rounded font-semibold transition ${
              activeTab === "frontend" ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Frontend Setup
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Project Overview</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="text-xl font-bold text-green-700 mb-2">🛣️ Route Planning</h4>
                <p className="text-gray-700">
                  Find eco-friendly routes using OpenRouteService API with CO₂ emission tracking.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="text-xl font-bold text-blue-700 mb-2">🌤️ Weather Insights</h4>
                <p className="text-gray-700">
                  Get real-time weather data for your travel destination using OpenWeatherMap API.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <h4 className="text-xl font-bold text-purple-700 mb-2">🎵 Music Recommendations</h4>
                <p className="text-gray-700">Enjoy mood-based Spotify playlists tailored for your journey.</p>
              </div>
            </div>

            <h4 className="text-lg font-bold text-gray-800 mb-4">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Multiple travel modes: Driving, Cycling, Walking</li>
              <li>CO₂ emission calculation and tracking</li>
              <li>Real-time weather data integration</li>
              <li>Spotify API integration for mood-based playlists</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>CORS-enabled for frontend integration</li>
            </ul>
          </div>
        )}

        {/* Backend Tab */}
        {activeTab === "backend" && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">Backend Setup (FastAPI)</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">📁 Project Structure</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                  {`backend/
├── app/
│   ├── main.py
│   ├── routes/
│   │   ├── routing.py
│   │   ├── music.py
│   │   └── __init__.py
│   └── utils/
│       └── config.py
├── requirements.txt
└── .env`}
                </pre>
              </div>

              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">🚀 Quick Start</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                  {`# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Create .env file with your API keys
# ORS_KEY, OWM_KEY, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET

# Run the server
uvicorn app.main:app --reload`}
                </pre>
              </div>

              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">📡 API Endpoints</h4>
                <div className="space-y-2">
                  <p className="font-mono bg-gray-100 p-2 rounded">GET /routing/eco-route</p>
                  <p className="font-mono bg-gray-100 p-2 rounded">GET /music/recommend</p>
                  <p className="font-mono bg-gray-100 p-2 rounded">GET /health</p>
                  <p className="font-mono bg-gray-100 p-2 rounded">GET /</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">🔑 Required API Keys</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>OpenRouteService API Key (ORS_KEY)</li>
                  <li>OpenWeatherMap API Key (OWM_KEY)</li>
                  <li>Spotify Client ID & Secret</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Frontend Tab */}
        {activeTab === "frontend" && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Frontend Setup (React + Vite)</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-purple-600 mb-2">📁 Project Structure</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                  {`frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── RoutePlanner.jsx
│   │   ├── WeatherCard.jsx
│   │   └── MusicRecommender.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js`}
                </pre>
              </div>

              <div>
                <h4 className="text-lg font-bold text-purple-600 mb-2">🚀 Quick Start</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                  {`# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`}
                </pre>
              </div>

              <div>
                <h4 className="text-lg font-bold text-purple-600 mb-2">🎨 Features</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>React 18 with Vite bundler</li>
                  <li>Tailwind CSS for styling</li>
                  <li>React Router for navigation</li>
                  <li>Responsive design (mobile-first)</li>
                  <li>Real-time API integration</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-purple-600 mb-2">⚙️ Configuration</h4>
                <p className="text-gray-700 mb-2">Update .env.local:</p>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm">
                  {`VITE_API_URL=http://127.0.0.1:8000`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Deployment Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🚀 Deployment</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="text-lg font-bold text-blue-700 mb-3">Backend (Render)</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                <li>Push code to GitHub</li>
                <li>Connect Render to GitHub repo</li>
                <li>Set environment variables</li>
                <li>Deploy FastAPI service</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="text-lg font-bold text-purple-700 mb-3">Frontend (Vercel)</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                <li>Push code to GitHub</li>
                <li>Import project to Vercel</li>
                <li>Set API URL environment variable</li>
                <li>Deploy React app</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Files Generated */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📦 Generated Files</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-blue-700 mb-3">Backend Files</h4>
              <ul className="space-y-1 text-sm text-gray-700 font-mono">
                <li>✓ backend/app/main.py</li>
                <li>✓ backend/app/utils/config.py</li>
                <li>✓ backend/app/routes/routing.py</li>
                <li>✓ backend/app/routes/music.py</li>
                <li>✓ backend/requirements.txt</li>
                <li>✓ backend/.env</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple-700 mb-3">Frontend Files</h4>
              <ul className="space-y-1 text-sm text-gray-700 font-mono">
                <li>✓ frontend/src/App.jsx</li>
                <li>✓ frontend/src/components/*</li>
                <li>✓ frontend/src/pages/*</li>
                <li>✓ frontend/package.json</li>
                <li>✓ frontend/vite.config.js</li>
                <li>✓ frontend/tailwind.config.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>EcoGuardian - Smart, Safe & Green Route Companion</p>
          <p className="text-gray-400 text-sm mt-2">© 2025 • Full-Stack Web Application</p>
        </div>
      </footer>
    </div>
  )
}
