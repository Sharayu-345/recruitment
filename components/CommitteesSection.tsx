"use client";

const leadership = [
  { title: "Head", desc: "Leads overall club vision, coordination, and execution." },
  { title: "Co-Head", desc: "Supports Head and ensures smooth management." },
  { title: "Secretary", desc: "Handles documentation, meetings, and records." },
  { title: "Treasurer", desc: "Manages budgeting, finance, and expenditures." },
  { title: "Chief Placement Coordinator", desc: "Drives placement activities and industry connections." },
  { title: "Chief Media & Publicity", desc: "Manages branding, social media, and outreach." },
  { title: "Chief Training & Skill Development", desc: "Organizes workshops and skill-building sessions." },
  { title: "Chief Feedback & Analysis", desc: "Collects feedback and improves club performance." },
];

const committees = [
  {
    title: "Placement Coordination",
    desc: "Connects students with recruiters and manages placement drives.",
  },
  {
    title: "Skill Development",
    desc: "Conducts technical and soft skill training sessions.",
  },
  {
    title: "Media & Publicity",
    desc: "Handles social media, branding, and event promotion.",
  },
  {
    title: "Documentation & Feedback",
    desc: "Maintains records and gathers feedback for improvement.",
  },
];

export default function CommitteesSection() {
  return (
    <section className="bg-[#0B1849] text-white py-20 px-6">
      
      {/* HEADER */}
     

      {/* LEADERSHIP */}
      <div className="mb-20">
        <h3 className="text-3xl font-semibold mb-8 text-center text-white/90">
          Heads
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((item, idx) => (
            <div
              key={idx}
              className="
                relative p-6 rounded-2xl
                bg-white/10 backdrop-blur-xl
                border border-white/10
                transition-all duration-300
                hover:scale-105
                hover:border-[#FF9E20]
                hover:shadow-[0_0_25px_rgba(255,158,32,0.35)]
              "
            >
              {/* glow accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#FF9E20] rounded-t-2xl transition-all duration-300 group-hover:w-full"></div>

              <h4 className="text-lg font-bold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-300 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* COMMITTEES */}
      <div>
        <h3 className="text-3xl font-semibold mb-8 text-center text-white/90">
          Committees
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {committees.map((item, idx) => (
            <div
              key={idx}
              className="
                p-7 rounded-2xl
                bg-white/10 backdrop-blur-xl
                border border-white/10
                transition-all duration-300
                hover:scale-[1.03]
                hover:border-[#FF9E20]
                hover:shadow-[0_0_30px_rgba(255,158,32,0.3)]
              "
            >
              <h4 className="text-xl font-bold text-white">
                {item.title}
              </h4>
              <p className="text-gray-300 mt-2">
                {item.desc}
              </p>

              {/* bottom accent bar */}
              <div className="mt-4 h-[2px] w-0 bg-[#FF9E20] transition-all duration-300 hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}