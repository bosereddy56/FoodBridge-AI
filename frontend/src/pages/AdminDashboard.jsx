import { useEffect, useState } from "react";
import API from "../services/api";
import AdminCharts from "../components/AdminCharts";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    claimed: 0,
    delivered: 0,
    aiAverage: 0,
    mealsSaved: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/donations/all");

        const donations = res.data.donations;

        const total = donations.length;

        const available = donations.filter(
          (d) => d.status === "Available"
        ).length;

        const claimed = donations.filter(
          (d) => d.status === "Claimed"
        ).length;

        const delivered = donations.filter(
          (d) => d.status === "Delivered"
        ).length;

        const aiAverage =
          donations.length > 0
            ? (
                donations.reduce(
                  (sum, d) => sum + (d.aiScore || 0),
                  0
                ) / donations.length
              ).toFixed(1)
            : 0;

        const mealsSaved = total * 25;

        setStats({
          total,
          available,
          claimed,
          delivered,
          aiAverage,
          mealsSaved,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Total Donations
          </h2>

          <p className="text-5xl font-bold mt-4 text-blue-400">
            {stats.total}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Available
          </h2>

          <p className="text-5xl font-bold mt-4 text-green-400">
            {stats.available}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Claimed
          </h2>

          <p className="text-5xl font-bold mt-4 text-yellow-400">
            {stats.claimed}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Delivered
          </h2>

          <p className="text-5xl font-bold mt-4 text-purple-400">
            {stats.delivered}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Avg AI Score
          </h2>

          <p className="text-5xl font-bold mt-4 text-cyan-400">
            {stats.aiAverage}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h2 className="text-gray-400">
            Meals Saved
          </h2>

          <p className="text-5xl font-bold mt-4 text-orange-400">
            {stats.mealsSaved}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <AdminCharts
          available={stats.available}
          claimed={stats.claimed}
          delivered={stats.delivered}
        />
      </div>
    </div>
  );
}