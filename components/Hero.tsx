import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
  className="
  relative
  overflow-hidden
  bg-[#07153A]
  pt-4
  md:pt-4
  "
>
      {/* ===================================================== */}
      {/* BACKGROUND GLOWS (Same Theme as About / Committee) */}
      {/* ===================================================== */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FE7F2D]/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/3 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-white/5 blur-[150px]" />

      {/* Bottom Ambient Glow */}
      <div className="absolute left-1/2 bottom-[-180px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#FE7F2D]/5 blur-[220px]" />

      {/* ===================================================== */}
      {/* GRID (Same Theme as About / Committee) */}
      {/* ===================================================== */}

      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FE7F2D]/5 to-transparent" />

      {/* ===================================================== */}
      {/* LEFT-OF-PAGE FLOATING PARTICLES */}
      {/* ===================================================== */}

      <div className="absolute left-[4%] top-[10%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>

      <div className="absolute left-[11%] top-[18%] h-3 w-3 rounded-full bg-white animate-pulse"></div>

      <div className="absolute left-[20%] top-[28%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>

      <div className="absolute left-[8%] top-[40%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>

      <div className="absolute left-[17%] top-[54%] h-3 w-3 rounded-full bg-white animate-ping"></div>

      <div className="absolute left-[6%] top-[70%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>

      <div className="absolute left-[20%] bottom-[20%] h-3 w-3 rounded-full bg-[#FE7F2D] animate-ping"></div>

      <div className="absolute left-[10%] bottom-[10%] h-2 w-2 rounded-full bg-white animate-pulse"></div>

      {/* Soft Glow Orbs */}

      <div className="absolute left-[16%] top-[42%] h-24 w-24 rounded-full bg-[#FE7F2D]/10 blur-3xl"></div>

      <div className="absolute left-[8%] bottom-[18%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>

      {/* Decorative Accent */}

      <div className="absolute left-12 top-1/2 h-28 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#FE7F2D]/70 to-transparent"></div>

      {/* ===================================================== */}

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center lg:justify-between gap-14 px-6 py-0 lg:py-16 lg:flex-row">
        {/* ================= LEFT ================= */}

        <div className="max-w-3xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-[#FE7F2D]/40 bg-[#FE7F2D]/10 px-6 py-3 text-sm font-bold uppercase tracking-[3px] text-[#FE7F2D] backdrop-blur">
            Recruitment 2026 • Applications Open
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1] md:text-6xl lg:text-7xl">
            <span className="block tracking-tight text-white">
              Igniting{" "}
              <span className="bg-gradient-to-r from-[#FE7F2D] via-[#FFD56A] to-[#FE7F2D] bg-clip-text text-transparent">
                Minds.
              </span>
            </span>

            <span className="mt-3 block tracking-tight text-white">
              Inspiring{" "}
              <span className="bg-gradient-to-r from-[#FE7F2D] via-[#FFD56A] to-[#FE7F2D] bg-clip-text text-transparent animate-pulse">
                Leaders.
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
            More than a club, Rise & Recruit develops confident,
            responsible and industry-ready students through
            leadership, teamwork, innovation and practical exposure.
            Every activity prepares students to succeed in both
            academics and professional careers.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/#recruitment"
              className="rounded-xl bg-[#FE7F2D] px-8 py-4 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(254,127,45,.35)]"
            >
              Apply Now
            </Link>

            <Link
              href="/#committee"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur transition duration-300 hover:border-[#FE7F2D] hover:bg-[#FE7F2D]/10"
            >
              Explore Committees
            </Link>
          </div>
        </div>

        {/* ================= RIGHT STARTS HERE ================= */}

        <div className="relative flex w-full items-center justify-center lg:w-1/2 min-h-[650px]">
          {/* ===================================================== */}
          {/* BACKGROUND GLOWS */}
          {/* ===================================================== */}

          <div className="absolute h-[650px] w-[650px] rounded-full bg-[#FE7F2D]/10 blur-[180px]" />

          <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[160px]" />

          <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-[#FE7F2D]/10 via-transparent to-cyan-400/10 blur-[120px]" />

          {/* ===================================================== */}
          {/* DECORATIVE RINGS */}
          {/* ===================================================== */}

          <div className="absolute h-[560px] w-[560px] rounded-full border border-white/10 animate-pulse"></div>

          <div className="absolute h-[470px] w-[470px] rounded-full border border-cyan-300/20"></div>

          <div className="absolute h-[390px] w-[390px] rounded-full border border-[#FE7F2D]/20"></div>

          {/* Outer Rotating Ring */}

          <div className="absolute h-[620px] w-[620px] rounded-full border border-dashed border-white/10 animate-spin [animation-duration:35s]"></div>

          {/* Inner Rotating Ring */}

          <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#FE7F2D]/20 animate-spin [animation-duration:18s] [animation-direction:reverse]"></div>

          {/* ===================================================== */}
          {/* LOGO */}
          {/* ===================================================== */}

          <div
            className="
            relative
            z-20
            flex
            h-[220px] w-[220px]
            sm:h-[300px] sm:w-[300px]
            lg:h-[380px] lg:w-[380px]
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/5
            backdrop-blur-xl
            shadow-[0_30px_90px_rgba(0,0,0,.45)]
            transition-all
            duration-500
            hover:scale-105
          "
          >
            <div className="absolute inset-5 rounded-full border border-white/10"></div>

            <div className="absolute inset-10 rounded-full border border-[#FE7F2D]/20"></div>

            <Image
              src="/images/logo.jpeg"
              alt="Rise & Recruit Club"
              width={280}
              height={280}
              priority
              className="rounded-full object-cover w-[150px] sm:w-[210px] lg:w-[280px] h-auto"
            />
          </div>

          {/* ===================================================== */}
          {/* FLOATING GLASS CARDS */}
          {/* ===================================================== */}

          <div className="hidden lg:block absolute top-[14%] left-[22%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#FE7F2D]/40">
            <p className="font-semibold text-white">Leadership</p>
          </div>

          <div className="hidden lg:block absolute top-[24%] right-[12%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40">
            <p className="font-semibold text-white">Innovation</p>
          </div>

          <div className="hidden lg:block absolute bottom-[20%] left-[15%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#FE7F2D]/40">
            <p className="font-semibold text-white">Networking</p>
          </div>

          <div className="hidden lg:block absolute bottom-[12%] right-[24%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40">
            <p className="font-semibold text-white">Growth</p>
          </div>

          <div className="hidden lg:block absolute top-[44%] left-[4%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#FE7F2D]/40">
            <p className="font-semibold text-white">Teamwork</p>
          </div>

          <div className="hidden lg:block absolute top-[60%] right-[8%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40">
            <p className="font-semibold text-white">Mentorship</p>
          </div>

          <div className="hidden lg:block absolute top-[6%] left-[44%] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#FE7F2D]/40">
            <p className="font-semibold text-white">Confidence</p>
          </div>

          {/* ===================================================== */}
          {/* PARTICLES HUGGING THE LOGO — LEFT SIDE */}
          {/* (mirrors the right-side set below, pulled in close   */}
          {/*  to the logo instead of sitting near the page edge)  */}
          {/* ===================================================== */}

          <div className="absolute top-[20%] left-[32%] h-3 w-3 rounded-full bg-[#FE7F2D] animate-ping"></div>

          <div className="absolute top-[30%] left-[26%] h-2 w-2 rounded-full bg-white animate-pulse"></div>

          <div className="absolute top-[42%] left-[22%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>

          <div className="absolute top-[55%] left-[24%] h-3 w-3 rounded-full bg-[#FE7F2D] animate-pulse"></div>

          <div className="absolute top-[65%] left-[30%] h-2 w-2 rounded-full bg-white animate-ping"></div>

          <div className="absolute top-[75%] left-[36%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>

          <div className="absolute left-[24%] top-[48%] h-16 w-16 rounded-full bg-[#FE7F2D]/10 blur-2xl"></div>

          {/* ===================================================== */}
          {/* PARTICLES HUGGING THE LOGO — RIGHT SIDE */}
          {/* ===================================================== */}

          <div className="absolute top-[20%] right-[32%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>

          <div className="absolute top-[30%] right-[26%] h-2 w-2 rounded-full bg-white animate-pulse"></div>

          <div className="absolute top-[42%] right-[22%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>

          <div className="absolute top-[55%] right-[24%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>

          <div className="absolute top-[65%] right-[30%] h-2 w-2 rounded-full bg-white animate-ping"></div>

          <div className="absolute top-[75%] right-[36%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>

          <div className="absolute right-[24%] top-[48%] h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl"></div>

          {/* ===================================================== */}
          {/* WIDER AMBIENT PARTICLES (top / bottom of container) */}
          {/* ===================================================== */}

          <div className="absolute top-[8%] left-[50%] h-2 w-2 rounded-full bg-white animate-pulse"></div>

          <div className="absolute bottom-[8%] left-[42%] h-2 w-2 rounded-full bg-white animate-pulse"></div>

          <div className="absolute bottom-[10%] right-[38%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>

          {/* ===================================================== */}
          {/* GLOW ORBS */}
          {/* ===================================================== */}

          <div className="absolute left-[20%] top-[35%] h-20 w-20 rounded-full bg-[#FE7F2D]/10 blur-3xl"></div>

          <div className="absolute right-[18%] bottom-[26%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>

          <div className="absolute left-[42%] bottom-[10%] h-16 w-16 rounded-full bg-white/5 blur-2xl"></div>

          {/* ===================================================== */}
          {/* ACCENT LINES */}
          {/* ===================================================== */}

          <div className="absolute left-10 top-1/2 h-28 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#FE7F2D]/70 to-transparent"></div>

          <div className="absolute right-10 top-1/2 h-28 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent"></div>

          {/* Extra Ambient Glow */}

          <div className="absolute h-[760px] w-[760px] rounded-full bg-[#FE7F2D]/5 blur-[220px]"></div>
        </div>
      </div>

    </section>
  );
}
