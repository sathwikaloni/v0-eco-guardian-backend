import RoutePlanner from "../components/RoutePlanner"
import WeatherCard from "../components/WeatherCard"
import MusicRecommender from "../components/MusicRecommender"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-2">EcoGuardian</h1>
        <p className="text-gray-600 text-lg">Smart, Safe & Green Route Companion</p>
      </div>

      <RoutePlanner />
      <WeatherCard />
      <MusicRecommender />
    </div>
  )
}
