import { useEffect, useState } from "react";
import API from "../services/api";

export default function DonationHistory() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await API.get("/donations/all");

        if (res.data.success) {
          setDonations(res.data.donations);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const filteredDonations =
    donations.filter((donation) =>
      donation.foodName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Loading History...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Donation History
      </h1>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full md:w-96 p-3 rounded-xl bg-white/10 border border-white/10 mb-8 outline-none"
      />

      <div className="overflow-x-auto bg-white/5 rounded-3xl border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="bg-white/10">
              <th className="p-4 text-left">
                Food
              </th>

              <th className="p-4 text-left">
                Quantity
              </th>

              <th className="p-4 text-left">
                Location
              </th>

              <th className="p-4 text-left">
                AI Score
              </th>

              <th className="p-4 text-left">
                Recommendation
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredDonations.map(
              (donation) => (
                <tr
                  key={donation._id}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-4">
                    {donation.foodName}
                  </td>

                  <td className="p-4">
                    {donation.quantity}
                  </td>

                  <td className="p-4">
                    {donation.location}
                  </td>

                  <td className="p-4">
                    {donation.aiScore}
                  </td>

                  <td className="p-4">
                    {
                      donation.aiRecommendation
                    }
                  </td>

                  <td
                    className={`p-4 font-bold ${
                      donation.status ===
                      "Delivered"
                        ? "text-purple-400"
                        : donation.status ===
                          "Claimed"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {donation.status}
                  </td>

                  <td className="p-4">
                    {new Date(
                      donation.createdAt
                    ).toLocaleDateString()}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}