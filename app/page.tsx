import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <nav className="bg-black text-white p-4 flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/college">College</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/login">Login</Link>
      </nav>

      <div className="bg-blue-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          College Discovery Platform
        </h1>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Find Your Dream College
        </h2>

        <input
          type="text"
          placeholder="Search Colleges..."
          className="w-full border p-3 rounded-lg"
        />
        <Link href="/college">
  <button className="bg-blue-600 text-white px-6 py-3 rounded mt-4">
    Explore Colleges
  </button>
</Link>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">DTU</h3>
            <p>Delhi</p>
            <p>Fees: ₹2,00,000</p>
            <p>Rating: 4.5 ⭐</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">NSUT</h3>
            <p>Delhi</p>
            <p>Fees: ₹2,20,000</p>
            <p>Rating: 4.4 ⭐</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">IIIT Delhi</h3>
            <p>Delhi</p>
            <p>Fees: ₹3,50,000</p>
            <p>Rating: 4.6 ⭐</p>
          </div>
        </div>
      </div>
    </main>
  );
}