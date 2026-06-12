import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#020617] border-b border-white/10 px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-green-400"
        >
          FoodBridge AI
        </Link>

        <div className="flex gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/ngo-dashboard"
            className="hover:text-green-400 transition"
          >
            NGO
          </Link>

          <Link
            to="/restaurant-dashboard"
            className="hover:text-green-400 transition"
          >
            Restaurant
          </Link>

          <Link
            to="/admin-dashboard"
            className="hover:text-green-400 transition"
          >
            Admin
          </Link>

          <Link
            to="/login"
            className="hover:text-green-400 transition"
          >
            Login
          </Link>
          <Link
  to="/history"
  className="hover:text-green-400 transition"
>
  History
</Link>

        </div>
      </div>
    </nav>
  );
}