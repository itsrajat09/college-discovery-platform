"use client";
import { useState } from "react";
import Link from "next/link";

export default function CollegePage() {
  const [search, setSearch] = useState("");

  const colleges = [
    {
      name: "DTU",
      location: "Delhi",
      fees: "₹2,00,000",
      rating: "4.5 ⭐",
    },
    {
      name: "NSUT",
      location: "Delhi",
      fees: "₹2,20,000",
      rating: "4.4 ⭐",
    },
    {
      name: "IIIT Delhi",
      location: "Delhi",
      fees: "₹3,50,000",
      rating: "4.6 ⭐",
    },
    {
      name: "VIT",
      location: "Vellore",
      fees: "₹4,00,000",
      rating: "4.3 ⭐",
    },
  ];

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Colleges
      </h1>

      <input
        type="text"
        placeholder="Search College..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded w-full mb-6"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filteredColleges.map((college, index) => (
  <Link key={index} href="/college/dtu">
    <div className="bg-white p-4 rounded shadow border cursor-pointer hover:shadow-lg">
      <h2 className="font-bold text-xl">
        {college.name}
      </h2>

      <p>{college.location}</p>
      <p>{college.fees}</p>
      <p>{college.rating}</p>
    </div>
  </Link>
))}
      </div>
    </div>
  );
}