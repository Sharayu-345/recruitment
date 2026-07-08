import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1849]">

      {/* Background Decorations */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-12 px-4 sm:px-6 py-16 lg:py-20 lg:flex-row">

        {/* LEFT SIDE */}
        <div className="max-w-3xl text-center lg:text-left">

<span className="mt-8 inline-flex items-center whitespace-nowrap rounded-full border border-[#FE7F2D]/40 bg-[#FE7F2D]/10 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#FE7F2D] backdrop-blur shadow-lg shadow-[#FE7F2D]/10 transition hover:bg-[#FE7F2D]/20">
  Recruitment 2026 • Applications Open
</span>


          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
            Igniting Minds.
            <br />
            <span className="text-orange-400">
              Inspiring Leaders.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-9 text-white/80">
            More than a club, we are a community that transforms potential into
            leadership. We believe in learning by doing, leading with purpose,
            and growing through every experience. From organizing impactful
            events to embracing new challenges, we build confidence, teamwork,
            and professionalism. Together, we prepare tomorrow's changemakers
            to lead with vision, integrity, and excellence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link
  href="/#recruitment"
  className="rounded-xl bg-white px-8 py-4 text-center text-lg font-bold  hover:bg-[#FF9E20] text-[#0B1849] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Apply Now
</Link>

           <Link
  href="/#committee"
  className="rounded-xl bg-white px-8 py-4 text-center hover:bg-[#FF9E20] hover:text-[#0B1849] text-lg font-bold text-[#0B1849] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Explore Committees
</Link>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">50+</h2>
              <p className="mt-2 text-white/70">Members</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">30+</h2>
              <p className="mt-2 text-white/70">Companies</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">10+</h2>
              <p className="mt-2 text-white/70">Events</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">4</h2>
              <p className="mt-2 text-white/70">Committees</p>
            </div>

          </div>

        </div>

      {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div className="relative flex w-full items-center justify-center lg:w-1/2 min-h-[380px] sm:min-h-[500px] lg:min-h-[700px]">

  {/* Background Glow */}
<div className="
absolute
h-[300px] w-[300px]
sm:h-[450px] sm:w-[450px]
lg:h-[600px] lg:w-[600px]
rounded-full
bg-blue-500/20
blur-[150px]
">
</div>

  {/* Decorative Rings */}
  <div className="absolute h-[260px] w-[260px]
sm:h-[360px] sm:w-[360px]
lg:h-[520px] lg:w-[520px] rounded-full border border-cyan-300/20 animate-pulse"></div>
  <div className="absolute h-[210px] w-[210px]
sm:h-[300px] sm:w-[300px]
lg:h-[420px] lg:w-[420px] rounded-full border border-white/10"></div>
  <div className="absolute h-[160px] w-[160px]
sm:h-[230px] sm:w-[230px]
lg:h-[320px] lg:w-[320px] rounded-full border border-blue-300/20"></div>

 {/* Logo */}
<div
className="
relative z-20 flex
h-[220px] w-[220px]
sm:h-[300px] sm:w-[300px]
lg:h-[380px] lg:w-[380px]
items-center justify-center
rounded-full
border border-white/20
bg-transparent
shadow-[0_30px_90px_rgba(0,0,0,0.45)]
transition-all duration-500
hover:scale-105
"
>
  <div className="absolute inset-5 rounded-full border border-white/10"></div>

  <Image
    src="/images/logo.jpeg"
    alt="Rise & Recruit Club"
    width={220}
    height={220}
    className="rounded-full object-cover w-[150px] sm:w-[200px] lg:w-[280px] h-auto"
    priority
  />
</div>

  {/* Floating Cards */}

  <div className="hidden lg:block absolute top-8 left-8 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl hover:scale-105 transition">
    <p className="text-sm font-semibold text-white">Leadership</p>
  </div>

  <div className="hidden lg:block absolute top-12 right-10 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl hover:scale-105 transition">
    <p className="text-sm font-semibold text-white">Innovation</p>
  </div>

  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl hover:scale-105 transition">
    <p className="text-sm font-semibold text-white">Teamwork</p>
  </div>

  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl hover:scale-105 transition">
    <p className="text-sm font-semibold text-white">Recruitment</p>
  </div>

  <div className="hidden lg:block absolute bottom-16 left-10 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl hover:scale-105 transition">
    <p className="text-sm font-semibold text-white">Networking</p>
  </div>

  <div className="hidden lg:block absolute bottom-10 right-12 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl hover:scale-105 transition">
    <p className="text-sm font-semibold text-white">Growth</p>
  </div>

  <div className="hidden lg:block absolute top-[28%] left-16 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-lg">
    <p className="text-xs text-white">Professionalism</p>
  </div>

  <div className="hidden lg:block absolute top-[70%] right-20 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-lg">
    <p className="text-xs text-white">Opportunities</p>
  </div>

  {/* Decorative Dots */}

  <div className="hidden lg:block absolute top-24 left-1/2 h-3 w-3 rounded-full bg-cyan-400 animate-ping"></div>

  <div className="hidden lg:block absolute bottom-28 left-1/3 h-2 w-2 rounded-full bg-white animate-pulse"></div>

  <div className="hidden lg:block absolute top-1/3 right-24 h-2 w-2 rounded-full bg-blue-300 animate-pulse"></div>

  <div className="hidden lg:block absolute bottom-20 right-1/3 h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>

</div>

      </div>
    </section>
  );
}