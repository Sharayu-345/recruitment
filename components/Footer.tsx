import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1849] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* ================= TOP ================= */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* ================= CLUB INFO ================= */}
          <div>
            <h2 className="text-2xl font-bold">
              Rise & Recruit Club
            </h2>

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
                className="flex items-center gap-3 transition hover:text-[#FE7F2D]"
              >
                <Mail className="h-4 w-4" />
                riseandrecruitclub@gmail.com
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rit_rise_and_recruit_club?igsh=NDhlY2docGI3d3h3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-[#FE7F2D]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 1.5h-9A4 4 0 0 0 3.5 7.5v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4zm-4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>

                @rit_rise_and_recruit_club
              </a>

              {/* Address */}
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Rajaramnagar, Ishwarpur, Maharashtra
              </div>

            </div>

          </div>

          {/* ================= OUR INSTITUTION ================= */}
          <div>

<Image
  src="/images/rit.jpeg"
  alt="RIT College Logo"
  width={100}
  height={100}
  className="h-auto"
/>

            <h3 className="mb-5 text-lg font-semibold">
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

        {/* ================= BOTTOM ================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center md:flex-row">

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Rise & Recruit Club, RIT. All Rights Reserved.
          </p>

          <p className="text-sm text-white/60">
            Designed & Developed by{" "}
            <span className="font-semibold text-white italic">
              Sharayu More
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}