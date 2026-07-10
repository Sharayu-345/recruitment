import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07153A] text-white">
      {/* ================= BACKGROUND GLOW (Same Theme as About) ================= */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FE7F2D]/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* ================= GRID (Same Theme as About) ================= */}

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
      

      {/* Middle row */}
      <div className="absolute left-[10%] top-[38%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[28%] top-[45%] h-3 w-3 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[45%] top-[35%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      

      {/* Lower-middle row */}
      <div className="absolute left-[4%] top-[62%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[18%] top-[68%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[35%] top-[60%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>
     

      {/* Bottom row */}
      <div className="absolute left-[8%] top-[88%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[25%] top-[92%] h-3 w-3 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[42%] top-[86%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>
     

      {/* Soft Glow Orbs */}
      <div className="absolute left-[15%] top-[35%] h-24 w-24 rounded-full bg-[#FE7F2D]/10 blur-3xl"></div>
      <div className="absolute left-[70%] top-[55%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>
      {/* Extra right-side particles */}
      <div className="absolute right-[4%] top-[20%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute right-[10%] top-[45%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute right-[6%] top-[70%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute right-[16%] top-[30%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute right-[20%] top-[60%] h-3 w-3 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        {/* ================= TOP ================= */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* ================= CLUB INFO ================= */}
          <div className="group">
            <h2 className="text-2xl font-bold">
              Rise & Recruit Club
            </h2>

            <div className="mt-3 h-[3px] w-14 rounded-full bg-[#FE7F2D] transition-all duration-500 group-hover:w-24" />

            <p className="mt-4 leading-7 text-white/70">
              A student-driven community at RIT dedicated to leadership,
              teamwork, innovation, and career development through events,
              industry interaction, and hands-on learning experiences.
            </p>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-4 text-white/70">
              {/* Email */}
              <a
                href="mailto:riseandrecruitclub@gmail.com"
                className="group flex items-center gap-3 transition duration-300 hover:text-[#FE7F2D]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition duration-300 group-hover:border-[#FE7F2D]/50 group-hover:bg-[#FE7F2D]/10 group-hover:-translate-y-0.5">
                  <Mail className="h-4 w-4" />
                </span>
                riseandrecruitclub@gmail.com
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rit_rise_and_recruit_club?igsh=NDhlY2docGI3d3h3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition duration-300 hover:text-[#FE7F2D]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 transition duration-300 group-hover:border-[#FE7F2D]/50 group-hover:bg-[#FE7F2D]/10 group-hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 1.5h-9A4 4 0 0 0 3.5 7.5v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4zm-4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>
                @rit_rise_and_recruit_club
              </a>

              {/* Address */}
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                Rajaramnagar, Ishwarpur, Maharashtra
              </div>
            </div>
          </div>

          {/* ================= OUR INSTITUTION ================= */}
          <div
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#FE7F2D]/40
            hover:shadow-[0_20px_45px_rgba(254,127,45,.18)]
            "
          >
            <div
              className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#FE7F2D]/0
              via-[#FE7F2D]/10
              to-transparent
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
              "
            />

            <div className="relative">
              <Image
                src="/images/rit.jpeg"
                alt="RIT College Logo"
                width={100}
                height={100}
                className="h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
              />

              <h3 className="mb-5 mt-4 text-lg font-semibold">
                Our Institution
              </h3>

              <p className="leading-7 text-white/70">
                <a
                  href="https://ritindia.edu/ritwebsite/website/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white transition-colors duration-300 hover:text-[#FE7F2D]"
                >
                  Rajarambapu Institute of Technology (RIT)
                </a>
                <br />
                Rajaramnagar, Ishwarpur
                <br />
                Maharashtra - 415414
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Rise & Recruit Club, RIT. All Rights Reserved.
          </p>

          <p className="text-sm text-white/60">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/sharayu-more-55a690295"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white italic transition-colors duration-300 hover:text-[#FE7F2D]"
            >
              Sharayu More
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
