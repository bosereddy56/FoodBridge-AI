import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post(
        "/auth/login",
        form
      );

      // Save Login Data
      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      login(
        res.data.user,
        res.data.token
      );

      alert("Login Successful");

      const role =
        res.data.user?.role;

      // Role Based Redirect
      if (role === "restaurant") {
        navigate(
          "/restaurant-dashboard"
        );
      } else if (role === "ngo") {
        navigate("/ngo-dashboard");
      } else if (role === "admin") {
        navigate(
          "/admin-dashboard"
        );
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl w-full max-w-md"
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl bg-black/40 text-white mb-4 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl bg-black/40 text-white mb-6 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 transition p-3 rounded-xl font-semibold"
        >
          {loading
            ? "Logging In..."
            : "Login"}
        </button>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}