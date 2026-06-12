import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-green-500/20 blur-[150px] rounded-full top-20 left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full bottom-20 right-20"></div>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-black leading-tight"
      >
        Save Food.
        <br />
        Feed People.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-xl text-gray-300 max-w-3xl"
      >
        AI-powered platform connecting
        Restaurants, NGOs and Volunteers
        to reduce food waste and create
        social impact.
      </motion.p>

      <div className="flex gap-5 mt-10">
        <button className="bg-green-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
          Start Donating
        </button>

        <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition">
          Learn More
        </button>
      </div>

    </section>
  );
}