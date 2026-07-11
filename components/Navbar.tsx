"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Committees", href: "/#committee" },
  { name: "Recruitment", href: "/#recruitment" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160; // offset for fixed navbar height

      let current = "Home";

      for (const link of navLinks) {
        if (link.href === "/") continue;

        const id = link.href.replace("/#", "");
        const el = document.getElementById(id);

        if (el && el.offsetTop <= scrollPos) {
          current = link.name;
        }
      }

      setActiveLink(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Navigation — centered in the navbar */}
        <div className="hidden md:flex items-center gap-14 md:absolute md:left-1/2 md:-translate-x-1/2">
          {navLinks.map((item) => {
            const isActive = activeLink === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                group relative transition duration-300 hover:-translate-y-0.5
                ${isActive ? "text-[#FE7F2D]" : "text-white hover:text-[#FE7F2D]"}
                `}
              >
                {item.name}
                <span
                  className={`
                  absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#FE7F2D] transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-9 flex-wrap justify-center">
          {navLinks.map((item) => {
            const isActive = activeLink === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                text-sm transition duration-300
                ${isActive ? "text-[#FE7F2D] font-semibold" : "text-white/80 hover:text-[#FE7F2D]"}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
