export default function ComparePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Compare Colleges
      </h1>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">Feature</th>
            <th className="border p-3">DTU</th>
            <th className="border p-3">NSUT</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">Location</td>
            <td className="border p-3">Delhi</td>
            <td className="border p-3">Delhi</td>
          </tr>

          <tr>
            <td className="border p-3">Fees</td>
            <td className="border p-3">₹2,00,000</td>
            <td className="border p-3">₹2,20,000</td>
          </tr>

          <tr>
            <td className="border p-3">Rating</td>
            <td className="border p-3">4.5 ⭐</td>
            <td className="border p-3">4.4 ⭐</td>
          </tr>

          <tr>
            <td className="border p-3">Placement</td>
            <td className="border p-3">22 LPA</td>
            <td className="border p-3">21 LPA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}