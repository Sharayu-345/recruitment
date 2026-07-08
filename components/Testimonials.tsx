"use client";

const testimonials = [
  {
    title: "Building Future Leaders",
    message:
      "The Rise & Recruit Club is a commendable initiative that reflects the spirit of leadership, innovation, and student development at RIT. By creating opportunities beyond academics, the club empowers students to build confidence, teamwork, and professional excellence.",
    author: "Director, RIT",
  },
  {
    title: "A Vision Turned Into Reality",
    message:
      "The vision behind establishing the Rise & Recruit Club was to create a platform where students could lead, learn, and prepare themselves for successful careers. Watching the club continue to grow with purpose and dedication is truly inspiring.",
    author: "Training & Placement Officer, RIT",
  },
  {
    title: "Industry Appreciates Prepared Talent",
    message:
      "Students associated with the Rise & Recruit Club demonstrate enthusiasm, professionalism, and a willingness to learn. Such initiatives play a vital role in developing industry-ready graduates equipped with both technical and interpersonal skills.",
    author: "Purohit Sir, HR - Atlas Copco",
  },
  {
    title: "Inspiring Student Excellence",
    message:
      "The Rise & Recruit Club is an excellent example of how student-led initiatives transform learning into practical experience. It encourages collaboration, leadership, and career readiness while inspiring students to achieve greater heights.",
    author: "Training & Placement Officer, KIT",
  },

 {
  title: "Building Careers Through Collaboration",
  message:
    "The efforts of the Rise & Recruit Club in preparing students for placements and professional growth are truly appreciable. Such initiatives nurture confidence, responsibility, and the mindset needed to succeed in today's competitive world.",
  author: "Training & Placement Officer, GCK",
},
{
  title: "Confidence Through Preparation",
  message:
    "The consistent efforts of the Rise & Recruit Club in organizing aptitude sessions, training programs, and career-oriented activities have created an inspiring learning environment where students continuously improve, challenge themselves, and grow with confidence.",
  author: "Amol Dixit, Aptitude Trainer",
},
{
  title: "Leadership Beyond the Classroom",
  message:
    "The Rise & Recruit Club is shaping responsible young leaders who understand the value of discipline, teamwork, and service. Such platforms inspire students to take initiative, contribute positively to society, and prepare themselves for meaningful careers.",
  author: "Pranil Gilda, DYSP",
},
{
  title: "Together Towards Excellence",
  message:
    "Every achievement of the Rise & Recruit Club reflects the passion, dedication, and teamwork of its members. By creating opportunities to learn, lead, and grow together, the club continues to inspire students to pursue excellence in every step of their professional journey.",
  author: "Rise & Recruit Club, RIT",
},
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#0B1849] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-[#FF9E20] font-semibold tracking-[4px] uppercase">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-white mt-3">
            Words That Inspire Us
          </h2>

          <div className="w-28 h-1 bg-[#FF9E20] rounded-full mx-auto mt-5"></div>

          <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-8">
            The journey of the <span className="text-[#FF9E20] font-semibold">Rise & Recruit Club</span>
            {" "}is strengthened by the encouragement of visionary leaders,
            industry experts and mentors who continue to inspire us in shaping
            future professionals.
          </p>

        </div>

        {/* Cards */}

        <div className="space-y-14">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className={`flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl border-l-8 border-[#FF9E20] hover:-translate-y-2 transition-all duration-300">

                <div className="text-6xl text-[#FF9E20] leading-none">
                  ❝
                </div>

                <h3 className="text-2xl font-bold text-[#0B1849] mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8 text-[17px]">
                  {item.message}
                </p>

                <div className="w-20 h-1 bg-[#FF9E20] rounded-full mt-7"></div>

                <p className="mt-6 text-[#0B1849] font-bold text-lg">
                  ~ {item.author}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}