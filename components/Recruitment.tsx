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
  className="bg-[#0B1849] py-12 md:py-20 px-4 sm:px-6"
>
<div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-8 md:p-10">

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
              <option>FY</option>
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
            placeholder="Why do you want to join the Placement Club?"
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