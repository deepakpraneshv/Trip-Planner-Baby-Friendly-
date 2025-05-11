import { useState } from "react";

export default function PlanForm() {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    transportMode: "",
    notes: "",
    items: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitting...");

    const newTrip = {
      ...formData,
      items: formData.items.split(",").map(i => i.trim()).filter(Boolean)
    };

    fetch("http://localhost:5000/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTrip)
    })
      .then(res => res.json())
      .then(data => {
        console.log("✅ Trip saved:", data);
        alert("Trip added!");
      })
      .catch(err => {
        console.error("❌ Error saving trip:", err.message);
        alert("Error: " + err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Plan a Baby-Friendly Trip</h2>

      <input type="text" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} required />
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
      <input type="text" name="transportMode" placeholder="Transport Mode" value={formData.transportMode} onChange={handleChange} required />
      <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
      <input type="text" name="items" placeholder="Items (comma separated)" value={formData.items} onChange={handleChange} required />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Trip</button>
    </form>
  );
}