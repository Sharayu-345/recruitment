import Image from "next/image";
import { Brain, Users, Lightbulb, Rocket, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#0B1849] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building Future Leaders
            <br />
            Through Experience
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/70 leading-8">
            We are a platform that transforms students into confident leaders
            through real-world exposure and hands-on experiences. Learning here
            goes beyond classrooms, focusing on action, collaboration, and
            growth through every opportunity.
          </p>

        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="space-y-10">

            <h3 className="text-2xl font-semibold">
              What Makes Us Different
            </h3>

            <div className="space-y-4">

              {[
                {
                  title: "Learning Beyond Classrooms",
                  desc: "Real exposure through activities and leadership roles."
                },
                {
                  title: "Industry-Level Experience",
                  desc: "Interaction with HRs and professionals in real scenarios."
                },
                {
                  title: "Leadership in Action",
                  desc: "Build confidence, teamwork and decision-making skills."
                }
              ].map((item, i) => (

                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#FE7F2D]/60 hover:shadow-[0_0_25px_rgba(254,127,45,0.15)]"
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-[#FE7F2D]/0 via-[#FE7F2D]/5 to-[#FE7F2D]/0 opacity-0 group-hover:opacity-100 transition" />

                  <p className="relative z-10 font-semibold">
                    {item.title}
                  </p>

                  <p className="relative z-10 mt-1 text-sm text-white/60">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="grid grid-cols-2 gap-4">

              <div className="relative col-span-2 h-64 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/three.jpeg"
                  alt="Main"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-44 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/one.jpeg"
                  alt="One"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-44 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/two.jpeg"
                  alt="Two"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            <div className="absolute -z-10 left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE7F2D]/10 blur-[120px]" />

          </div>

        </div>

        {/* ================= WHY JOIN ================= */}

        <div className="mt-28">

          <h2 className="text-center text-4xl font-bold">
            Why Join Us
          </h2>

          <p className="mt-3 text-center text-white/60">
            Build skills. Gain exposure. Become industry-ready.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {[
              {
                icon: Brain,
                title: "Learn by Doing",
                desc: "Gain practical experience through real events and leadership roles."
              },
              {
                icon: Users,
                title: "Strong Network",
                desc: "Connect with peers, mentors, HRs and professionals."
              },
              {
                icon: Lightbulb,
                title: "Personality Growth",
                desc: "Improve communication, confidence and leadership skills."
              },
              {
                icon: Rocket,
                title: "Career Ready",
                desc: "Understand corporate culture and placement processes."
              }
            ].map((item, i) => (

              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[#FE7F2D]/60 hover:shadow-[0_0_25px_rgba(254,127,45,0.2)] hover:scale-[1.02]"
              >

                <div className="flex items-center gap-3 text-[#FE7F2D] font-semibold">
                  <item.icon size={20} />
                  {item.title}
                </div>

                <p className="mt-4 text-white/70">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

{/* ================= WORDS OF ENCOURAGEMENT ================= */}

<div className="mt-28">

  {/* Heading */}
  <div className="text-center">

    <span className="text-[#FE7F2D] text-sm font-semibold uppercase tracking-[4px]">
      Words of Encouragement
    </span>

    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
      Guiding Our Journey
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-white/70 leading-8">
      The <span className="font-semibold text-[#FE7F2D]">Rise & Recruit Club </span>
      is privileged to receive continuous encouragement from our academic
      leaders and industry experts. Their vision motivates students to
      become confident professionals and future leaders.
    </p>

  </div>

  {/* ================= DIRECTOR MESSAGE ================= */}

  <div className="mt-14 flex justify-center">

    <div className="group max-w-4xl rounded-3xl bg-white p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(254,127,45,0.25)]">

      <Quote
        size={46}
        className="text-[#FE7F2D]"
      />

      <h3 className="mt-5 text-3xl font-bold text-[#0B1849]">
        Message from the Director
      </h3>

      <p className="mt-6 text-lg leading-9 text-gray-600">
        <span className="font-semibold text-[#0B1849]">
          "Rise & Recruit Club
        </span>{" "}
        reflects the true spirit of holistic education by empowering students
        with leadership qualities, practical exposure, confidence, and
        professionalism. Such initiatives prepare our students not only for
        successful careers but also for lifelong learning and responsible
        leadership."
      </p>

      <div className="mt-8 h-1 w-24 rounded-full bg-[#FE7F2D]" />

      <p className="mt-6 text-xl font-bold text-[#0B1849]">
        ~ Director, RIT
      </p>

    </div>

  </div>

  {/* ================= INDUSTRY APPRECIATION ================= */}

  <div className="mt-20">

    <h3 className="text-center text-3xl font-bold">
      Industry Appreciation
    </h3>

    <p className="mt-3 text-center text-white/60">
      Inspiring words from professionals who have appreciated and guided our students.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {[
        {
          name: "Purohit Sir",
          role: "HR | Atlas Copco",
          quote:
            "Rise & Recruit nurtures confident, professional and industry-ready students."
        },
        {
          name: "Saylee Jadhav",
          role: "HR | Xperate",
          quote:
            "An excellent platform that bridges the gap between academics and industry through practical learning."
        },
        {
          name: "Amol Dixit",
          role: "APTTECH Trainer",
          quote:
            "Consistent learning, aptitude, and communication are the keys to placement success."
        }
      ].map((item, index) => (

        <div
          key={index}
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[#FE7F2D] hover:bg-[#FE7F2D]/10 hover:shadow-[0_0_30px_rgba(254,127,45,0.25)]"
        >

          <Quote
            size={24}
            className="text-[#FE7F2D]"
          />

          <p className="mt-4 text-sm italic leading-7 text-white/80">
            "{item.quote}"
          </p>

          <div className="my-5 h-px bg-white/10" />

          <h4 className="text-lg font-bold text-white">
            {item.name}
          </h4>

          <p className="text-sm font-medium text-[#FE7F2D]">
            {item.role}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>
      </div>
    </section>
  );
}