import {
  useState,
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

import API from "../services/api";

import {
  useNavigate,
} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [form, setForm] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        form
      );

      login(
        res.data.user,
        res.data.token
      );

      alert("Login Success");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-10 rounded-2xl w-100"
      >
        <h2 className="text-3xl mb-5">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black mb-4"
        />

        <button className="bg-green-500 w-full p-3 rounded">
          Login
        </button>

      </form>
    </div>
  );
}