"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Committees", href: "/#committee" },
  { name: "Recruitment", href: "/#recruitment" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#0B1849]/90 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Rise & Recruit"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>
            <h1 className="text-white font-bold text-lg md:text-2xl">
              Rise & Recruit
            </h1>

            <p className="text-gray-300 text-xs md:text-sm">
              RIT Student Club
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-blue-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex w-full md:w-auto gap-3">
          <button className="flex-1 md:flex-none border border-white/30 rounded-xl px-5 py-2 text-white hover:bg-white/10">
            Admin Login
          </button>

          <button className="flex-1 md:flex-none rounded-xl px-5 py-2 bg-blue-500 text-white hover:bg-blue-600">
            Apply Now →
          </button>
        </div>

      </nav>
    </header>
  );
}