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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1849]/80 backdrop-blur-xl">
      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">

          <div className="relative">
            <Image
              src="/images/logo.jpeg"
              alt="Rise & Recruit Logo"
              width={48}
              height={48}
              className="rounded-full border border-white/20 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition" />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-wide text-white">
              Rise & Recruit
            </h1>

            <p className="text-xs font-medium text-white/60">
              RIT Student Club, RIT
            </p>
          </div>

        </Link>


        {/* NAV LINKS */}
        <nav className="hidden items-center gap-10 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[15px] font-semibold text-white/80 transition-all duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

        </nav>


{/* BUTTONS */}
<div className="flex items-center gap-3">

  {/* ADMIN LOGIN */}
  <Link
    href="/admin/login"
    className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
  >
    Admin Login
  </Link>

  {/* APPLY BUTTON */}
  <Link
    href="/#recruitment"
    className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-bold text-[#0B1849] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/30"
  >
    Apply Now →
  </Link>

</div>

      </div>

    </header>
  );
}