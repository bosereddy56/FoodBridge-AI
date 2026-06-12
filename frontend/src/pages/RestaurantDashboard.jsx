import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function RestaurantDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    claimed: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/donations/all");

        const donations = res.data.donations;

        setStats({
          total: donations.length,
          available: donations.filter(
            (d) => d.status === "Available"
          ).length,
          claimed: donations.filter(
            (d) => d.status === "Claimed"
          ).length,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Restaurant Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Total Donations
          </h2>

          <p className="text-5xl font-bold text-blue-400 mt-4">
            {stats.total}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Available
          </h2>

          <p className="text-5xl font-bold text-green-400 mt-4">
            {stats.available}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Claimed
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">
            {stats.claimed}
          </p>
        </div>
      </div>

      <Link
        to="/create-donation"
        className="inline-block mt-10 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold"
      >
        + Create New Donation
      </Link>
    </div>
  );
}