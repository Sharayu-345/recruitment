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
        {/* ================= MOBILE TOP ROW — logo left, compact badge right ================= */}
        <div className="flex md:hidden w-full items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative rounded-full transition-transform duration-500 group-hover:scale-110">
              <div className="absolute inset-0 rounded-full bg-[#FE7F2D]/0 blur-md transition duration-500 group-hover:bg-[#FE7F2D]/40" />
              <Image
                src="/images/logo.jpeg"
                alt="Rise & Recruit"
                sizes="15vw"
                width={40}
                height={40}
                className="relative rounded-full border border-white/10"
              />
            </div>

            <div>
              <h1 className="text-white font-bold text-sm leading-tight">
                Rise & Recruit
              </h1>
              <p className="text-gray-300 text-[10px] leading-tight">
                RIT Student Club
              </p>
            </div>
          </Link>

          {/* Compact decorative 3D badge for mobile */}
          <div className="[perspective:600px]">
            <div className="group relative [transform-style:preserve-3d] transition-transform duration-500">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl border border-white/5 bg-white/5 [transform:translateZ(-10px)]" />

              <div className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,.4)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE7F2D] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE7F2D]" />
                </span>

                <div className="leading-tight">
                  <p className="text-white text-[10px] font-bold uppercase tracking-wide">
                    Since 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo (desktop) */}
        <Link href="/" className="hidden md:flex group items-center gap-3">
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

        {/* ================= RIGHT — Decorative 3D Stacked Card (desktop only) ================= */}
        <div className="hidden md:block absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 [perspective:800px]">
          <div className="group relative [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(-10deg)_rotateX(6deg)]">
            {/* Back layer — creates stacked depth */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-white/5 bg-white/5 [transform:translateZ(-18px)]" />

            {/* Mid layer */}
            <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl border border-white/10 bg-white/5 [transform:translateZ(-9px)]" />

            {/* Front layer */}
            <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,.4)] transition-all duration-500 group-hover:border-[#FE7F2D]/40 group-hover:shadow-[0_20px_45px_rgba(254,127,45,.25)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE7F2D] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FE7F2D]" />
              </span>

              <div className="leading-tight">
                <p className="text-white text-xs font-bold uppercase tracking-wide">
                  Since 2025
                </p>
                <p className="text-white/50 text-[11px]">
                  Growing Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
