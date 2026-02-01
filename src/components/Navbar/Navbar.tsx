import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex items-center">
      {/* LEFT: Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Customer Support</h1>

      {/* CENTER: Main navigation */}
      <ul className="flex gap-6 text-gray-700 font-medium mx-auto">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/tickets" className="hover:text-blue-600 transition">Dashboard</Link>
        </li>
      </ul>

      {/* RIGHT: Auth links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/register" className="hover:text-blue-600 transition">Register</Link>
        <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
      </div>
    </nav>
  );
}
