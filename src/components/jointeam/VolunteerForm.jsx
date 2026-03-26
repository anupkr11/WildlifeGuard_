import React, { useState } from "react";

const VolunteerForm = () => {
  const [isIndian, setIsIndian] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    aadhaar: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://wildlifeguard-backend.onrender.com/jointeam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        Volunteer Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />

        <select
          name="country"
          value={formData.country}
          onChange={(e) => {
            handleChange(e);
            setIsIndian(e.target.value === "India");
          }}
          required
          className="w-full border px-4 py-3 rounded-lg"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Other">Other</option>
        </select>

        {isIndian && (
          <input
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={formData.aadhaar}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded-lg"
          />
        )}

        <textarea
          name="interest"
          placeholder="Why do you want to join this initiative?"
          value={formData.interest}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition text-2xl"
        >
          Join as Volunteer
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
