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
    <header className="fixed top-0 z-50 w-full overflow-hidden bg-[#07153A]/90 backdrop-blur-lg border-b border-white/10">
      {/* ================= BACKGROUND GLOW (Same Theme as About) ================= */}

      <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-[#FE7F2D]/20 blur-[80px]" />

      <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px]" />

      {/* ================= GRID (Same Theme as About) ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(to right,#ffffff 1px,transparent 1px),
          linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <nav className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 gap-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div
            className="
            relative
            rounded-full
            transition-transform
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
            "
          >
            <div className="absolute inset-0 rounded-full bg-[#FE7F2D]/0 blur-md transition duration-500 group-hover:bg-[#FE7F2D]/40" />
            <Image
              src="/images/logo.jpeg"
              alt="Rise & Recruit"
              sizes="(max-width: 768px) 100vw, 50vw"
              width={55}
              height={55}
              className="relative rounded-full border border-white/10 transition duration-500 group-hover:border-[#FE7F2D]/50"
            />
          </div>

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
              className="group relative text-white transition duration-300 hover:text-[#FE7F2D] hover:-translate-y-0.5"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#FE7F2D] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex w-full md:w-auto gap-3">
          <Link
            href="/admin/login"
            className="
            flex-1 md:flex-none
            rounded-xl
            border
            border-white/30
            bg-white/5
            px-5
            py-2
            text-center
            text-white
            backdrop-blur
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#FE7F2D]/50
            hover:bg-white/10
            hover:shadow-[0_10px_25px_rgba(0,0,0,.25)]
            active:translate-y-0
            "
          >
            Admin Login
          </Link>

          <Link
            href="/#recruitment"
            className="
            flex-1 md:flex-none
            rounded-xl
            px-5
            py-2
            text-center
            font-semibold
            text-white
            bg-[#FE7F2D]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-orange-500
            hover:shadow-[0_15px_35px_rgba(254,127,45,.4)]
            active:translate-y-0
            active:shadow-none
            "
          >
            Apply Now →
          </Link>
        </div>
      </nav>
    </header>
  );
}
