import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <h1 className="text-7xl font-bold leading-tight">
          FoodBridge AI
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl">
          Connecting restaurants with NGOs using AI-powered
          food rescue technology to reduce food waste and
          fight hunger.
        </p>

        <div className="flex gap-4 mt-10">

          <Link
            to="/create-donation"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold"
          >
            Donate Food
          </Link>

          <Link
            to="/ngo-dashboard"
            className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10"
          >
            View Donations
          </Link>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-gray-400">
              Meals Saved
            </h2>

            <p className="text-5xl font-bold text-green-400 mt-4">
              12K+
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-gray-400">
              NGOs Connected
            </h2>

            <p className="text-5xl font-bold text-blue-400 mt-4">
              150+
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-gray-400">
              Restaurants
            </h2>

            <p className="text-5xl font-bold text-yellow-400 mt-4">
              500+
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h2 className="text-gray-400">
              AI Accuracy
            </h2>

            <p className="text-5xl font-bold text-purple-400 mt-4">
              95%
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-bold mb-12">
          Why FoodBridge AI?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              AI Food Scoring
            </h3>

            <p className="text-gray-400">
              Predict food freshness and quality
              using AI analysis.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Smart NGO Matching
            </h3>

            <p className="text-gray-400">
              Automatically recommend NGOs
              for faster food distribution.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Waste Reduction
            </h3>

            <p className="text-gray-400">
              Reduce food waste while helping
              communities in need.
            </p>
          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="bg-linear-to-r from-green-600 to-blue-600">

          <h2 className="text-5xl font-bold mb-4">
            Join The Food Rescue Mission
          </h2>

          <p className="text-xl mb-8">
            Help reduce food waste and feed communities.
          </p>

          <Link
            to="/create-donation"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold"
          >
            Start Donating
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400">
        FoodBridge AI © 2026 | Built with MERN + AI
      </footer>

    </div>
  );
}