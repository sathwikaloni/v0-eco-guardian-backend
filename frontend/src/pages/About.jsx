export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About EcoGuardian</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Mission</h2>
            <p>
              EcoGuardian is dedicated to making sustainable travel accessible and enjoyable. We help users plan
              eco-friendly routes, stay informed about weather conditions, and enjoy curated music that matches their
              travel mood.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Eco-friendly route planning with CO₂ emission tracking</li>
              <li>Real-time weather insights for your journey</li>
              <li>Mood-based music recommendations via Spotify</li>
              <li>Multiple travel modes: driving, cycling, and walking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Environmental Impact</h2>
            <p>
              By choosing eco-friendly routes and sustainable travel modes, you can significantly reduce your carbon
              footprint. EcoGuardian helps track and visualize the CO₂ you save with each journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">Technology Stack</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Backend: FastAPI (Python)</li>
              <li>Frontend: React + Tailwind CSS</li>
              <li>Route Planning: OpenRouteService API</li>
              <li>Weather Data: OpenWeatherMap API</li>
              <li>Music: Spotify API</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
