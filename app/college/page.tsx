"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CollegePage() {
  const [search, setSearch] = useState("");

  const colleges = [
    { id: "dtu", name: "DTU", location: "Delhi", fees: "₹2,00,000", rating: "4.5 ⭐" },
    { id: "nsut", name: "NSUT", location: "Delhi", fees: "₹2,20,000", rating: "4.4 ⭐" },
    { id: "iiitd", name: "IIIT Delhi", location: "Delhi", fees: "₹3,50,000", rating: "4.6 ⭐" },
    { id: "iitd", name: "IIT Delhi", location: "Delhi", fees: "₹2,50,000", rating: "4.8 ⭐" },
    { id: "vit", name: "VIT", location: "Vellore", fees: "₹4,00,000", rating: "4.3 ⭐" },
  ];

  const filtered = colleges.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-6"
      >
        🎓 Explore Top Colleges
      </motion.h1>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {filtered.map((college, index) => (
          <Link key={college.id} href={`/college/${college.id}`}>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-5 cursor-pointer border hover:shadow-xl transition"
            >

              <h2 className="text-xl font-bold text-blue-600">
                {college.name}
              </h2>

              <p className="text-gray-600 mt-1">
                📍 {college.location}
              </p>

              <p className="mt-2 text-gray-700">
                💰 {college.fees}
              </p>

              <div className="mt-2 inline-block bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                ⭐ {college.rating}
              </div>

              <div className="mt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                  View Details →
                </button>
              </div>

            </motion.div>

          </Link>
        ))}

      </div>
    </div>
  );
}