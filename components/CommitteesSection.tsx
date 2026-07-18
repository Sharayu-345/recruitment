"use client";

const leadership = [
  { title: "Head", desc: "Leads overall club vision, coordination, and execution." },
  { title: "Co-Head", desc: "Supports Head and ensures smooth management." },
  { title: "Secretary", desc: "Handles documentation, meetings, and records." },
  { title: "Treasurer", desc: "Manages budgeting, finance, and expenditures." },
  { title: "Chief Placement Coordinator", desc: "Drives placement activities and industry connections." },
  { title: "Chief Media & Publicity", desc: "Manages branding, social media, and outreach." },
  { title: "Chief Training & Skill Development", desc: "Organizes workshops and skill-building sessions." },
  { title: "Chief Event Manager", desc: "Creates schedules and coordinates all activities." },
];

const committees = [
  {
    title: "Placement Coordination",
    desc: "Connects students with recruiters and manages placement drives.",
    responsibilities: [
      "Coordinate with visiting companies and ensure smooth conduction of placement drives from start to finish.",
      "Handle on-ground documentation, attendance records, and candidate paperwork during recruitment sessions.",
      "Manage hospitality for recruiters and collect structured feedback after every drive to improve future processes.",
    ],
  },
  {
    title: "Skill Development",
    desc: "Conducts technical and soft skill training sessions.",
    responsibilities: [
      "Plan and conduct technical and soft-skill training sessions to prepare students for interviews and placements.",
      "Organize hands-on workshops that help students build practical, industry-relevant skills.",
      "Continuously identify skill gaps among students and design sessions to support their overall growth.",
    ],
  },
  {
    title: "Media & Publicity",
    desc: "Handles social media, branding, and event promotion.",
    responsibilities: [
      "Capture photos, bites, and short videos whenever a company visits, showcasing the club's activities.",
      "Promote club events and drives across social media platforms to boost visibility and engagement.",
      "Maintain consistent branding and create promotional content for every major initiative.",
    ],
  },
  {
    title: "Event Management",
    desc: "Plans and manages recruitment drives, workshops, seminars, and other campus events.",
    responsibilities: [
      "Plan and execute end-to-end logistics for every event, from setup to closing.",
      "Handle decoration, venue arrangement, and on-ground coordination for a professional event experience.",
      "Manage scheduling, resources, and real-time troubleshooting to ensure events run smoothly.",
    ],
  },
];

export default function CommitteeSection() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#07153A]
      py-24
      px-6
      text-white
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
        absolute
        left-0
        top-0
        h-96
        w-96
        rounded-full
        bg-[#FE7F2D]/20
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        right-0
        bottom-0
        h-96
        w-96
        rounded-full
        bg-blue-500/10
        blur-[180px]
        "
      />

      {/* ================= GRID OVERLAY ================= */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        "
        style={{
          backgroundImage: `
          linear-gradient(to right,#ffffff 1px,transparent 1px),
          linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-[#FE7F2D]/5
        to-transparent
        "
      />
{/* ================= FLOATING PARTICLES ================= */}

      {/* Top row */}
      <div className="absolute left-[6%] top-[8%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[22%] top-[12%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[38%] top-[6%] h-3 w-3 rounded-full bg-cyan-300 animate-ping"></div>
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

      {/* Lower-middle row */}
      <div className="absolute left-[4%] top-[62%] h-2 w-2 rounded-full bg-white animate-pulse"></div>
      <div className="absolute left-[18%] top-[68%] h-2 w-2 rounded-full bg-[#FE7F2D] animate-ping"></div>
      <div className="absolute left-[35%] top-[60%] h-3 w-3 rounded-full bg-cyan-300 animate-pulse"></div>
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

      {/* Soft Glow Orbs */}
      <div className="absolute left-[15%] top-[35%] h-24 w-24 rounded-full bg-[#FE7F2D]/10 blur-3xl"></div>
      <div className="absolute left-[70%] top-[55%] h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute left-[40%] top-[80%] h-20 w-20 rounded-full bg-[#FE7F2D]/5 blur-3xl"></div>
      <div className="relative mx-auto max-w-7xl">
        {/* ================= LEADERSHIP SECTION ================= */}

        <div className="mb-24">
          <div className="text-center mb-14">
            <span
              className="
              uppercase
              tracking-[5px]
              text-sm
              font-semibold
              text-[#FE7F2D]
              "
            >
              Leadership Team
            </span>

            <h2 className="mt-5 text-5xl font-black">
              Our <span className="text-[#FE7F2D]">Heads</span>
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-white/70
              "
            >
              The people steering the club forward — coordinating
              every drive, session, and event end to end.
            </p>
          </div>

          <div
            className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
            [perspective:1000px]
            "
          >
            {leadership.map((item, idx) => (
              <div
                key={idx}
                className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                [transform-style:preserve-3d]
                hover:-translate-y-3
                hover:[transform:rotateX(6deg)_rotateY(-6deg)]
                hover:border-[#FE7F2D]
                hover:shadow-[0_25px_60px_rgba(254,127,45,.3)]
                "
              >
                {/* Hover sheen */}
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

                {/* Number badge */}
                <div
                  className="
                  relative
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#FE7F2D]/15
                  font-black
                  text-[#FE7F2D]
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                  "
                >
                  0{idx + 1}
                </div>

                <div className="relative">
                  <h4 className="text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-4 leading-7 text-white/70">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="
                    mt-7
                    h-[3px]
                    w-0
                    rounded-full
                    bg-[#FE7F2D]
                    transition-all
                    duration-500
                    group-hover:w-full
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMMITTEES SECTION ================= */}

        <div>
          <div className="text-center mb-14">
            <span
              className="
              uppercase
              tracking-[5px]
              text-sm
              font-semibold
              text-[#FE7F2D]
              "
            >
              
            </span>

            <h2 className="mt-5 text-5xl font-black">
              Working <span className="text-[#FE7F2D]">Committees</span>
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-white/70
              "
            >
              Focused teams working together to plan, promote,
              and deliver every club initiative.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 [perspective:1200px]">
            {committees.map((item, idx) => (
              <div
                key={idx}
                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                [transform-style:preserve-3d]
                hover:-translate-y-3
                hover:[transform:rotateX(4deg)_rotateY(4deg)]
                hover:border-[#FE7F2D]
                hover:shadow-[0_30px_70px_rgba(254,127,45,.3)]
                "
              >
                {/* Hover sheen */}
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
                  <div className="flex items-center justify-between">
                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#FE7F2D]/15
                      text-xl
                      font-black
                      text-[#FE7F2D]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                      "
                    >
                      0{idx + 1}
                    </div>

                    <div
                      className="
                      h-10
                      w-10
                      rounded-full
                      border
                      border-[#FE7F2D]/30
                      bg-[#FE7F2D]/10
                      transition
                      duration-500
                      group-hover:rotate-45
                      "
                    />
                  </div>

                  <h4 className="mt-8 text-3xl font-black">
                    {item.title}
                  </h4>
                  <p className="mt-5 text-lg leading-8 text-white/70">
                    {item.desc}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="mt-6 space-y-3">
                    {item.responsibilities.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="flex items-start gap-3 text-base leading-7 text-white/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FE7F2D]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="
                    mt-8
                    h-[3px]
                    w-16
                    rounded-full
                    bg-[#FE7F2D]
                    transition-all
                    duration-500
                    group-hover:w-full
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
