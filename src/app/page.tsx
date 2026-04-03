"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 relative min-h-screen  text-white flex flex-col items-center justify-center px-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-black to-purple-900" />
        <h1 className="text-red-500">I Love You schatzi</h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center"
        >
          Hi, I'm <span className="text-blue-500">Rajiv</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-2xl"
        >
          MERN Stack Developer | AI Builder | Future SaaS Founder I build
          scalable web apps, AI systems, and automated cloud solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl">
            View Projects
          </button>
          <button className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-800">
            Contact Me
          </button>
        </motion.div>
      </main>
      <Projects />
    </>
  );
}
