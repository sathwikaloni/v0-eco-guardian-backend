import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          🌍 EcoGuardian
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
