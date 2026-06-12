import { useEffect, useState } from "react";
import API from "../services/api";

export default function NGODashboard() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDonations = async () => {
    try {
      setLoading(true);

      const res = await API.get("/donations/all");

      if (res.data.success) {
        setDonations(res.data.donations);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to load donations");
    } finally {
      setLoading(false);
    }
  };

  const claimDonation = async (id) => {
    try {
      await API.put(`/donations/claim/${id}`);

      alert("Donation Claimed Successfully");

      fetchDonations();
    } catch (error) {
      console.error(error);
      alert("Failed to claim donation");
    }
  };

  const deliverDonation = async (id) => {
    try {
      await API.put(`/donations/deliver/${id}`);

      alert("Donation Delivered Successfully");

      fetchDonations();
    } catch (error) {
      console.error(error);
      alert("Failed to deliver donation");
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Loading Donations...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        NGO Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {donations.map((donation) => (
          <div
            key={donation._id}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg"
          >
            {donation.image ? (
              <img
                src={donation.image}
                alt={donation.foodName}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="h-56 bg-slate-700 flex items-center justify-center">
                No Image Available
              </div>
            )}

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                {donation.foodName}
              </h2>

              <p>
                <strong>Quantity:</strong>{" "}
                {donation.quantity}
              </p>

              <p>
                <strong>Expiry:</strong>{" "}
                {donation.expiryTime}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {donation.location}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="bg-blue-500 px-4 py-1 rounded-full">
                  AI Score: {donation.aiScore}
                </span>

                <span
                  className={`font-bold ${
                    donation.status === "Claimed"
                      ? "text-yellow-400"
                      : donation.status === "Delivered"
                      ? "text-purple-400"
                      : "text-green-400"
                  }`}
                >
                  {donation.status}
                </span>
              </div>

              <div className="mt-4 p-3 bg-white/5 rounded-xl">
                <p className="text-green-400 font-semibold">
                  🤖 AI Recommendation
                </p>

                <p>
                  {donation.aiRecommendation}
                </p>
              </div>

              <div className="mt-3 p-3 bg-white/5 rounded-xl">
                <p className="text-cyan-400 font-semibold">
                  🔮 AI Prediction
                </p>

                <p>
                  {donation.aiPrediction ||
                    "No prediction available"}
                </p>
              </div>

              <div className="mt-3 p-3 bg-white/5 rounded-xl">
                <p className="text-purple-400 font-semibold">
                  🎯 Recommended NGO
                </p>

                <p>
                  {donation.recommendedNGO}
                </p>
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={() =>
                    claimDonation(
                      donation._id
                    )
                  }
                  disabled={
                    donation.status !==
                    "Available"
                  }
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    donation.status ===
                    "Available"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-600"
                  }`}
                >
                  Claim
                </button>

                <button
                  onClick={() =>
                    deliverDonation(
                      donation._id
                    )
                  }
                  disabled={
                    donation.status !==
                    "Claimed"
                  }
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    donation.status ===
                    "Claimed"
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-gray-600"
                  }`}
                >
                  Deliver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}