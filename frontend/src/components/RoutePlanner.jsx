"use client"

import { useState } from "react"

export default function RoutePlanner() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [mode, setMode] = useState("driving")
  const [route, setRoute] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRoute = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/routing/eco-route?origin=${origin}&destination=${destination}&mode=${mode}`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch route")
      }

      const data = await response.json()
      setRoute(data)
    } catch (err) {
      setError(err.message)
      setRoute(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Eco Route Planner</h2>

      <form onSubmit={fetchRoute} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Origin (lat,lon)"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            placeholder="Destination (lat,lon)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="driving">Driving</option>
            <option value="cycling">Cycling</option>
            <option value="walking">Walking</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition disabled:opacity-50"
        >
          {loading ? "Planning Route..." : "Plan Eco Route"}
        </button>
      </form>

      {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">Error: {error}</div>}

      {route && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Route Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Distance</p>
              <p className="text-2xl font-bold text-green-600">{route.distance_km} km</p>
            </div>
            <div>
              <p className="text-gray-600">Duration</p>
              <p className="text-2xl font-bold text-green-600">{route.duration_minutes} min</p>
            </div>
            <div>
              <p className="text-gray-600">CO₂ Saved</p>
              <p className="text-2xl font-bold text-green-600">{route.co2_saved_kg} kg</p>
            </div>
            <div>
              <p className="text-gray-600">Mode</p>
              <p className="text-2xl font-bold text-green-600 capitalize">{route.mode}</p>
            </div>
          </div>
          <p className="mt-4 text-green-700 font-medium">{route.message}</p>
        </div>
      )}
    </div>
  )
}
