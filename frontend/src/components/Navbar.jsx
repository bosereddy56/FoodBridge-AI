import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    user,
    logout,
  } = useContext(AuthContext);

  const handleLogout = () => {
    logout();

    alert(
      "Logged Out Successfully"
    );

    navigate("/login");
  };

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

        {/* Menu */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className={navLink("/")}
          >
            Home
          </Link>

          <Link
            to="/ngo-dashboard"
            className={navLink(
              "/ngo-dashboard"
            )}
          >
            NGO
          </Link>

          <Link
            to="/restaurant-dashboard"
            className={navLink(
              "/restaurant-dashboard"
            )}
          >
            Restaurant
          </Link>

          <Link
            to="/admin-dashboard"
            className={navLink(
              "/admin-dashboard"
            )}
          >
            Admin
          </Link>

          <Link
            to="/history"
            className={navLink(
              "/history"
            )}
          >
            History
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-green-400 font-semibold">
                  {user?.role || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}