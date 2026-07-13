"use client";

import { useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const hasError = searchParams.get("error") === "1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#0B1849]">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to access the Rise & Recruit dashboard.
        </p>

        <form action="/api/admin-login" method="POST" className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            required
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF9E20]"
          />

          {hasError && (
            <p className="text-red-600 text-sm text-center">
              Invalid credentials
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF9E20] hover:bg-orange-500 transition text-black font-semibold py-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}