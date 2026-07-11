import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Users,
  Lightbulb,
  Rocket,
  Quote,
  Sparkles,
  Award,
  Target,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07153A] py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FE7F2D]/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      {/* ================= FLOATING PARTICLES ================= */}

      {/* Top row */}
      <div className="absolute left-[6%] top-[8%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[22%] top-[12%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[38%] top-[6%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute left-[55%] top-[15%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[70%] top-[9%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[85%] top-[14%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[55%] top-[15%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[70%] top-[9%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[85%] top-[14%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>

      {/* Middle row */}
      <div className="absolute left-[10%] top-[38%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[28%] top-[45%] h-3 w-3 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[45%] top-[35%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[60%] top-[48%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute left-[75%] top-[40%] h-3 w-3 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[90%] top-[46%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
       <div className="absolute left-[60%] top-[48%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute left-[75%] top-[40%] h-3 w-3 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[90%] top-[46%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>

      {/* Lower-middle row */}
      <div className="absolute left-[4%] top-[62%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[18%] top-[68%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[35%] top-[60%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[52%] top-[70%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[68%] top-[63%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[82%] top-[72%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>
       <div className="absolute left-[52%] top-[70%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[68%] top-[63%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[82%] top-[72%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>

      {/* Bottom row */}
      <div className="absolute left-[8%] top-[88%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute left-[25%] top-[92%] h-3 w-3 rounded-full bg-white animate-ping"></div>
      <div className="absolute left-[42%] top-[86%] h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></div>
      <div className="absolute left-[58%] top-[93%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[74%] top-[87%] h-3 w-3 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[90%] top-[91%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>
        <div className="absolute left-[58%] top-[93%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[74%] top-[87%] h-3 w-3 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[90%] top-[91%] h-2 w-2 rounded-full bg-cyan-300 animate-ping"></div>

      {/* Soft Glow Orbs */}
      <div className="absolute left-[15%] top-[35%] h-24 w-24 rounded-full bg-[#FE7F2D]/10 blur-3xl"></div>
      <div className="absolute left-[70%] top-[55%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute left-[40%] top-[80%] h-20 w-20 rounded-full bg-[#FE7F2D]/5 blur-3xl"></div>
       <div className="absolute left-[70%] top-[55%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute left-[40%] top-[80%] h-20 w-20 rounded-full bg-[#FE7F2D]/5 blur-3xl"></div>
      {/* Extra right-side particles */}
      <div className="absolute right-[4%] top-[20%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-pulse"></div>
      <div className="absolute right-[10%] top-[45%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>
      <div className="absolute right-[6%] top-[70%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute right-[16%] top-[30%] h-2 w-2 rounded-full bg-white animate-ping"></div>
      <div className="absolute right-[20%] top-[60%] h-3 w-3 rounded-full bg-[#FE7F2D] animate-pulse"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HERO ================= */}

        <div className="text-center">

         

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Building

            <span className="block bg-gradient-to-r from-[#FE7F2D] via-orange-300 to-[#FE7F2D] bg-clip-text text-transparent">

              Future Leaders

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">

            We empower students with leadership, communication,
            professionalism and real corporate exposure through
            activities, workshops, placement drives and practical
            experiences beyond classrooms.

          </p>

  
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <Target className="text-[#FE7F2D]" />

              <span className="font-semibold uppercase tracking-widest text-[#FE7F2D]">

                Why Choose Us

              </span>

            </div>

            <h3 className="text-4xl font-bold">

              Transforming Potential Into

              <span className="block text-[#FE7F2D]">

                Professional Excellence

              </span>

            </h3>

            <p className="mt-8 text-lg leading-8 text-white/70">

              Rise & Recruit is more than a club.

              It is a platform where students experience teamwork,

              leadership, placement preparation and real-world

              professional culture before entering industry.

            </p>

            <div className="mt-10 space-y-6">

              {[
                {
                  icon: Brain,
                  title: "Learning Beyond Classrooms",
                  desc: "Gain practical exposure through workshops, events and live responsibilities.",
                },
                {
                  icon: Users,
                  title: "Corporate Networking",
                  desc: "Interact with HR professionals, alumni and recruiters.",
                },
                {
                  icon: Award,
                  title: "Leadership Development",
                  desc: "Build confidence, communication and decision-making abilities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#FE7F2D] hover:shadow-[0_20px_60px_rgba(254,127,45,.25)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FE7F2D]/0 via-[#FE7F2D]/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="relative flex items-start gap-5">

                    <div className="rounded-2xl bg-[#FE7F2D]/15 p-4 text-[#FE7F2D]">

                      <item.icon size={24} />

                    </div>

                    <div>

                      <h4 className="text-xl font-bold">

                        {item.title}

                      </h4>

                      <p className="mt-2 text-white/70 leading-7">

                        {item.desc}

                      </p>

                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-[#FE7F2D]/20 blur-[120px]" />

            <div className="relative h-[620px]">

              {/* Main Image */}

              <div className="absolute right-0 top-0 h-[340px] w-[82%] overflow-hidden rounded-[32px] border border-white/10 shadow-2xl transition duration-500 hover:scale-105">

                <Image
                  src="/images/three.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

              {/* Left Image */}

              <div className="absolute bottom-0 left-0 h-[250px] w-[52%] overflow-hidden rounded-[28px] border border-white/10 shadow-xl transition duration-500 hover:-translate-y-3 hover:rotate-2">

                <Image
                  src="/images/one.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

              {/* Right Image */}

              <div className="absolute bottom-10 right-0 h-[230px] w-[40%] overflow-hidden rounded-[28px] border border-white/10 shadow-xl transition duration-500 hover:translate-y-2 hover:-rotate-2">

                <Image
                  src="/images/two.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

              {/* Floating Card */}

              <div className="absolute left-12 top-8 rounded-3xl border border-white/10 bg-white/10 px-7 py-6 backdrop-blur-xl">

                <h4 className="text-4xl font-black text-[#FE7F2D]">

                  150+

                </h4>

                <p className="text-white/70">

                  Students Connected

                </p>

              </div>

              {/* Floating Card */}

              <div className="absolute bottom-0 right-12 rounded-3xl border border-white/10 bg-white/10 px-7 py-6 backdrop-blur-xl">

                <h4 className="text-4xl font-black text-[#FE7F2D]">

                  10+

                </h4>

                <p className="text-white/70">

                  Placement Activities

                </p>

              </div>

            </div>

          </div>

        </div>
                {/* ===================== STATS ===================== */}

        <div className="mt-32">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "200+",
                label: "Students Impacted",
              },
              {
                number: "30+",
                label: "Placement Drives",
              },
              {
                number: "10+",
                label: "Workshops & Sessions",
              },
              {
                number: "30+",
                label: "Industry Experts network",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#FE7F2D] hover:bg-[#FE7F2D]/10 hover:shadow-[0_20px_40px_rgba(254,127,45,.25)]"
              >
                <h3 className="text-5xl font-black text-[#FE7F2D]">
                  {item.number}
                </h3>

                <p className="mt-3 text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>



        {/* ================= WHY JOIN ================= */}

        <div className="mt-32">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm uppercase tracking-[5px] text-[#FE7F2D] font-semibold backdrop-blur transition-all duration-300 hover:border-[#FE7F2D]/50 hover:bg-[#FE7F2D]/10 hover:shadow-[0_10px_30px_rgba(254,127,45,.25)]">

              Why Join Rise & Recruit

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Experience Growth

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">

              Build confidence, improve communication skills,
              connect with professionals and prepare yourself for
              successful placement opportunities.

            </p>

          </div>


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              {
                icon: Brain,
                title: "Learn by Doing",
                desc: "Participate in real events, workshops, interviews and leadership opportunities.",
              },
              {
                icon: Users,
                title: "Professional Network",
                desc: "Meet HRs, alumni and industry experts to expand your career opportunities.",
              },
              {
                icon: Lightbulb,
                title: "Confidence Building",
                desc: "Develop communication, teamwork and presentation skills through practical experiences.",
              },
              {
                icon: Rocket,
                title: "Placement Ready",
                desc: "Understand recruitment processes and corporate expectations before placements begin.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#FE7F2D] hover:shadow-[0_25px_50px_rgba(254,127,45,.25)]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#FE7F2D]/0 via-[#FE7F2D]/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative">

                  <div className="mb-6 inline-flex rounded-2xl bg-[#FE7F2D]/15 p-4 text-[#FE7F2D]">

                    <item.icon size={30} />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-5 leading-8 text-white/70">

                    {item.desc}

                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>



        {/* ================= JOURNEY ================= */}

        <div className="mt-36">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 uppercase tracking-[5px] text-[#FE7F2D] font-semibold backdrop-blur transition-all duration-300 hover:border-[#FE7F2D]/50 hover:bg-[#FE7F2D]/10 hover:shadow-[0_10px_30px_rgba(254,127,45,.25)]">

              Our Journey

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Growing Together

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">

              Every activity strengthens leadership,
              communication, teamwork and industry exposure,
              preparing students for professional success.

            </p>

          </div>


          <div className="relative mx-auto mt-20 max-w-5xl">

            {/* Line */}

            <div className="absolute left-5 top-0 h-full w-[3px] bg-gradient-to-b from-[#FE7F2D] via-orange-300 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

            {[
              {
                title: "Club Formation",
                desc: "A student initiative dedicated to leadership, innovation and placement excellence.",
              },
              {
                title: "Industry Interaction",
                desc: "HR sessions, expert talks and placement guidance from professionals.",
              },
              {
                title: "Workshops & Events",
                desc: "Communication, aptitude, resume building and technical workshops.",
              },
              {
                title: "Career Success",
                desc: "Helping students become confident and industry-ready professionals.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className={`relative mb-14 flex ${
                  i % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >

                <div className="absolute left-5 top-7 z-20 h-5 w-5 rounded-full border-4 border-[#07153A] bg-[#FE7F2D] lg:left-1/2 lg:-translate-x-1/2" />

                <div className="ml-14 w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#FE7F2D] hover:shadow-[0_20px_50px_rgba(254,127,45,.25)] lg:ml-0 lg:w-[43%]">

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-8 text-white/70">

                    {item.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
                {/* ================= WORDS OF ENCOURAGEMENT ================= */}

        <div className="mt-36">

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold uppercase tracking-[5px] text-[#FE7F2D] backdrop-blur transition-all duration-300 hover:border-[#FE7F2D]/50 hover:bg-[#FE7F2D]/10 hover:shadow-[0_10px_30px_rgba(254,127,45,.25)]">

              Words of Encouragement

            </span>

            <h2 className="mt-5 text-5xl font-black">

              Guiding Our Journey

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">

              The <span className="font-semibold text-[#FE7F2D]">Rise & Recruit Club</span> is privileged to receive continuous encouragement from academic leaders and industry experts whose vision inspires students to become confident professionals and future leaders.

            </p>

          </div>


          {/* Director Message */}

          <div className="mt-16">

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white to-gray-100 p-10 shadow-[0_25px_60px_rgba(0,0,0,.35)]">

              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FE7F2D]/10 blur-[100px]" />

              <Quote
                size={55}
                className="relative z-10 text-[#FE7F2D]"
              />

              <h3 className="relative z-10 mt-6 text-4xl font-black text-[#0B1849]">

                Message from the Director

              </h3>

              <p className="relative z-10 mt-8 text-lg leading-10 text-gray-700">

                <span className="font-bold text-[#0B1849]">

                  "Rise & Recruit Club

                </span>{" "}

                reflects the true spirit of holistic education by empowering students through leadership, practical exposure, teamwork and professionalism. Such initiatives prepare students not only for successful careers but also for lifelong learning and responsible leadership."

              </p>

              <div className="relative z-10 mt-8 h-1 w-32 rounded-full bg-[#FE7F2D]" />

              <p className="relative z-10 mt-8 text-2xl font-bold text-[#0B1849]">

                ~ Director, RIT

              </p>

            </div>

          </div>



          {/* Industry Appreciation */}

          <div className="mt-24">

            <div className="text-center">

              <h2 className="text-4xl font-black">

                Industry Appreciation

              </h2>

              <p className="mt-4 text-white/60">

                Inspiring words from professionals who have appreciated and guided our students.

              </p>

            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              {[
                {
                  name: "Purohit Sir",
                  role: "HR | Atlas Copco",
                  quote:
                    "Rise & Recruit nurtures confident, professional and industry-ready students.",
                },
                {
                  name: "Saylee Pawar",
                  role: "HR | Xperate",
                  quote:
                    "An excellent platform that bridges the gap between academics and industry through practical learning.",
                },
                {
                  name: "Amol Dixit",
                  role: "APTTECH Trainer",
                  quote:
                    "Consistent learning, aptitude and communication are the keys to placement success.",
                },
              ].map((item, i) => (

                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#FE7F2D] hover:shadow-[0_30px_60px_rgba(254,127,45,.25)]"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-[#FE7F2D]/0 via-[#FE7F2D]/10 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <Quote
                    size={32}
                    className="relative z-10 text-[#FE7F2D]"
                  />

                  <p className="relative z-10 mt-6 italic leading-8 text-white/80">

                    "{item.quote}"

                  </p>

                  <div className="relative z-10 my-6 h-px bg-white/10" />

                  <h3 className="relative z-10 text-xl font-bold">

                    {item.name}

                  </h3>

                  <p className="relative z-10 mt-1 text-[#FE7F2D]">

                    {item.role}

                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* CTA */}

          

        </div>

      </div>

    </section>

  );
}
