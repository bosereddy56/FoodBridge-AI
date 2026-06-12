import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "restaurant",
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
        "/auth/register",
        form
      );

      alert(
        "Registration Successful"
      );

      console.log(res.data);
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
          Register
        </h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black mb-4"
        />

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

        <select
          name="role"
          onChange={handleChange}
          className="w-full p-3 rounded bg-black mb-4"
        >
          <option value="restaurant">
            Restaurant
          </option>

          <option value="ngo">
            NGO
          </option>
        </select>

        <button className="bg-green-500 w-full p-3 rounded">
          Register
        </button>

      </form>
    </div>
  );
}