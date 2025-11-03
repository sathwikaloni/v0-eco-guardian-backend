"use client"

import { useState, useEffect } from "react"

export default function WeatherCard() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated weather data - replace with real API call if needed
    const mockWeather = {
      temp: 22,
      condition: "Sunny",
      humidity: 65,
      windSpeed: 12,
      location: "Your Location",
    }
    setWeather(mockWeather)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="bg-white rounded-lg shadow-lg p-6 text-center">Loading weather...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Weather Insights</h2>

      {weather && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-gray-600">Temperature</p>
            <p className="text-3xl font-bold text-blue-600">{weather.temp}°C</p>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-gray-600">Condition</p>
            <p className="text-3xl font-bold text-blue-600">{weather.condition}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-gray-600">Humidity</p>
            <p className="text-3xl font-bold text-blue-600">{weather.humidity}%</p>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-gray-600">Wind Speed</p>
            <p className="text-3xl font-bold text-blue-600">{weather.windSpeed} km/h</p>
          </div>
        </div>
      )}
    </div>
  )
}
