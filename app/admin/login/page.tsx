"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("admin", "true");
        router.push("/admin/dashboard");
      } else {
        alert("Invalid Email or Password");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1849] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-[#0B1849]">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Rise & Recruit Admin Panel
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Admin Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF9E20] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FF9E20] outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#FF9E20] hover:bg-orange-500 transition py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}