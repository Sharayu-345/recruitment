"use client";

import { useState } from "react";
const committees = [
  "Media & Publicity Committee",
  "Training & Skill Development Committee",
  "Placement Coordination Committee",
  "Event Management Committee",
];

export default function Recruitment() {
  const [formData, setFormData] = useState({
    name: "",
    prn:"",
    email: "",
    phone: "",
    course: "",
    year: "",
    department: "",
    section: "",
    stay: "",
    pref1: "",
    pref2: "",
    pref3: "",
    pref4: "",
    pref5: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.name,
        prn: formData.prn,
        email: formData.email,
        mobile: formData.phone,
        course: formData.course,
        year: formData.year,
        department: formData.department,
        accommodation: formData.stay,
        preference1: formData.pref1,
        preference2: formData.pref2,
        preference3: formData.pref3,
        preference4: formData.pref4,
        whyJoin: formData.message,
      }),
    });

    if (!response.ok) {
  const errorText = await response.text();
  console.log("SERVER ERROR:", errorText);
  alert("Server Error");
  return;
}

const data = await response.json();

   if (data.success) {
  alert("Application Submitted Successfully!");

  setFormData({
    name: "",
    prn: "",
    email: "",
    phone: "",
    course: "",
    year: "",
    department: "",
    section: "",
    stay: "",
    pref1: "",
    pref2: "",
    pref3: "",
    pref4: "",
    pref5: "",
    message: "",
  });
} else {
  alert(data.message);
}
  } catch (error) {
    console.error(error);
    alert("Failed to submit application.");
  }
};
const getAvailableCommittees = (currentPref: string) => {
  const selected = [
    formData.pref1,
    formData.pref2,
    formData.pref3,
    formData.pref4,
  ];

  return committees.filter(
    (committee) =>
      committee === formData[currentPref as keyof typeof formData] ||
      !selected.includes(committee)
  );
};

  return (
    <section
      id="recruitment"
      className="relative overflow-hidden bg-[#07153A] py-12 md:py-20 px-4 sm:px-6"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FE7F2D]/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#ffffff 1px,transparent 1px),
          linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= FLOATING PARTICLES ================= */}

      {/* Top row */}
      <div className="absolute left-[6%] top-[8%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[22%] top-[12%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[38%] top-[6%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute left-[55%] top-[15%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[70%] top-[9%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[85%] top-[14%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>

      {/* Middle row */}
      <div className="absolute left-[10%] top-[38%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[28%] top-[45%] h-3 w-3 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[45%] top-[35%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[60%] top-[48%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute left-[75%] top-[40%] h-3 w-3 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[90%] top-[46%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>

      {/* Lower-middle row */}
      <div className="absolute left-[4%] top-[62%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[18%] top-[68%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[35%] top-[60%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[52%] top-[70%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[68%] top-[63%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[82%] top-[72%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>

      {/* Bottom row */}
      <div className="absolute left-[8%] top-[88%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[25%] top-[92%] h-3 w-3 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[42%] top-[86%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[58%] top-[93%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[74%] top-[87%] h-3 w-3 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[90%] top-[91%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>

      {/* Soft Glow Orbs */}
      <div className="absolute left-[15%] top-[35%] h-24 w-24 rounded-full bg-[#FE7F2D]/10 blur-3xl"></div>
      <div className="absolute left-[70%] top-[55%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute left-[40%] top-[80%] h-20 w-20 rounded-full bg-[#FE7F2D]/5 blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FE7F2D]/5 to-transparent" />

      <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-8 md:p-10">

       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0B1849]">
          Recruitment Form
        </h2>

        <p className="text-center text-gray-600 text-sm sm:text-base mt-2 mb-6 md:mb-8">
          Fill in your details to apply for the Placement Club.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
          />
          {/* PRN / Roll Number */}
<input
  type="text"
  name="prn"
  placeholder="PRN / Roll Number"
  required
  value={formData.prn}
  onChange={handleChange}
  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
/>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="College Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
          />

          {/* Mobile */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
          />

          {/* Course & Year */}
          <div className="grid md:grid-cols-2 gap-5">

            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Choose Course</option>
              <option>B.Tech</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>

            <select
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Choose Year</option>
              
              <option>SY</option>
              <option>TY</option>
              
            </select>

          </div>

          {/* Department & Section */}
          <div className="grid md:grid-cols-2 gap-5">

            <select
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Choose Department</option>
              <option>Computer Engineering</option>
              <option>Computer Science & Information Technology</option>
              <option>Artificial Intelligence & Data Science</option>
              <option>Electronics & Telecommunication</option>
              <option>Robotics and Automation</option>
              <option>Mechatronics Engineering</option>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>

            {/* Accommodation */}
          <select
            name="stay"
            required
            value={formData.stay}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-[#FF9E20] outline-none"
          >
            <option value="">Choose Accommodation</option>
            <option>College Hostel</option>
            <option>Localite (Lives with Family)</option>
            <option>Outside Stay (PG / Flat / Room)</option>
          </select>

          </div>

          

          <hr className="my-6" />

          <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1849]">
            Committee Preferences
          </h3>

          <p className="text-gray-600 mb-4">
            Select your preferences from 1 (highest) to 4 (lowest).
          </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<select
  name="pref1"
  required
  value={formData.pref1}
  onChange={handleChange}
  className="border rounded-lg px-4 py-3"
>
  <option value="">1st Preference</option>
  {getAvailableCommittees("pref1").map((committee) => (
    <option key={committee} value={committee}>
      {committee}
    </option>
  ))}
</select>

<select
  name="pref2"
  required
  value={formData.pref2}
  onChange={handleChange}
  className="border rounded-lg px-4 py-3"
>
  <option value="">2nd Preference</option>
  {getAvailableCommittees("pref2").map((committee) => (
    <option key={committee} value={committee}>
      {committee}
    </option>
  ))}
</select>

<select
  name="pref3"
  required
  value={formData.pref3}
  onChange={handleChange}
  className="border rounded-lg px-4 py-3"
>
  <option value="">3rd Preference</option>
  {getAvailableCommittees("pref3").map((committee) => (
    <option key={committee} value={committee}>
      {committee}
    </option>
  ))}
</select>

<select
  name="pref4"
  required
  value={formData.pref4}
  onChange={handleChange}
  className="border rounded-lg px-4 py-3"
>
  <option value="">4th Preference</option>
  {getAvailableCommittees("pref4").map((committee) => (
    <option key={committee} value={committee}>
      {committee}
    </option>
  ))}
</select>

          </div>

          

          {/* Why Join */}
          <textarea
            name="message"
            rows={5}
            placeholder="Why do you want to join the Placement Club?(1 or 2 sentence)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
          />

          <button
            type="submit"
            className="w-full bg-[#FF9E20] hover:bg-orange-500 transition text-black font-semibold py-3 rounded-lg"
          >
            Submit Application
          </button>

        </form>

      </div>
    </section>
  );
}