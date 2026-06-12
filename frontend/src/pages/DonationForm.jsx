import { useState } from "react";
import API from "../services/api";

export default function DonationForm() {
  const [form, setForm] = useState({
    foodName: "",
    quantity: "",
    expiryTime: "",
    location: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await API.post(
        "/donations/create",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Donation Created Successfully");

      setForm({
        foodName: "",
        quantity: "",
        expiryTime: "",
        location: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to create donation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center items-center p-6">
      <form
        onSubmit={submitHandler}
        className="bg-white/5 border border-white/10 p-10 rounded-3xl w-full max-w-lg"
      >
        <h2 className="text-4xl text-white mb-8 font-bold">
          Create Donation
        </h2>

        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          value={form.foodName}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black text-white mb-4 outline-none"
          required
        />

        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black text-white mb-4 outline-none"
          required
        />

        <input
          type="text"
          name="expiryTime"
          placeholder="Expiry Time"
          value={form.expiryTime}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black text-white mb-4 outline-none"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black text-white mb-4 outline-none"
          required
        />

        <div className="mb-4">
          <label className="block text-white mb-2">
            Upload Food Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full text-white"
          />
        </div>

        {form.image && (
          <div className="mb-6">
            <img
              src={form.image}
              alt="Preview"
              className="w-full h-56 object-cover rounded-xl border border-white/10"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 transition p-3 rounded-xl text-white font-semibold"
        >
          {loading
            ? "Creating Donation..."
            : "Donate Food"}
        </button>
      </form>
    </div>
  );
}