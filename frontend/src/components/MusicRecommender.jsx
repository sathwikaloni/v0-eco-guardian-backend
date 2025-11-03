"use client"

import { useState } from "react"

export default function MusicRecommender() {
  const [mood, setMood] = useState("happy")
  const [playlists, setPlaylists] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRecommendations = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`http://127.0.0.1:8000/music/recommend?mood=${mood}`)

      if (!response.ok) {
        throw new Error("Failed to fetch playlists")
      }

      const data = await response.json()
      setPlaylists(data.playlists)
    } catch (err) {
      setError(err.message)
      setPlaylists(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Music for Your Travel</h2>

      <form onSubmit={fetchRecommendations} className="space-y-4">
        <div className="flex gap-4">
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="happy">Happy</option>
            <option value="calm">Calm</option>
            <option value="focus">Focus</option>
            <option value="energetic">Energetic</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Get Playlists"}
          </button>
        </div>
      </form>

      {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">Error: {error}</div>}

      {playlists && (
        <div className="mt-6 space-y-3">
          <h3 className="text-lg font-semibold text-purple-700">Recommended Playlists</h3>
          {playlists.map((playlist, idx) => (
            <a
              key={idx}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-purple-50 hover:bg-purple-100 rounded border border-purple-200 transition"
            >
              <div className="flex items-center gap-4">
                {playlist.image && (
                  <img src={playlist.image || "/placeholder.svg"} alt={playlist.name} className="w-16 h-16 rounded" />
                )}
                <div className="flex-1">
                  <p className="font-bold text-purple-700">{playlist.name}</p>
                  <p className="text-sm text-gray-600">{playlist.total_tracks} tracks</p>
                </div>
                <span className="text-purple-600 font-bold">→</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
