import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLink = (path) =>
    `transition duration-300 ${
      location.pathname === path
        ? "text-green-400 font-semibold"
        : "text-white hover:text-green-400"
    }`;

  return (
    <nav className="bg-[#020617] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-green-400"
        >
          FoodBridge AI
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className={navLink("/")}
          >
            Home
          </Link>

          <Link
            to="/ngo-dashboard"
            className={navLink("/ngo-dashboard")}
          >
            NGO
          </Link>

          <Link
            to="/restaurant-dashboard"
            className={navLink("/restaurant-dashboard")}
          >
            Restaurant
          </Link>

          <Link
            to="/admin-dashboard"
            className={navLink("/admin-dashboard")}
          >
            Admin
          </Link>

          <Link
            to="/history"
            className={navLink("/history")}
          >
            History
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="px-4 py-2 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition duration-300"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="px-4 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition duration-300"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}