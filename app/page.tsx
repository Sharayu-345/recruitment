import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CommitteesSection from "@/components/CommitteesSection";
import Recruitment from "@/components/Recruitment";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* COMMITTEE */}
      <section id="committee">
        <CommitteesSection />
      </section>

     <section id="recruitment">
  <Recruitment />
</section>

  
    </>
  );
}