import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-900 px-6 py-6 text-center text-sm text-white">
        &copy; 2026 Benjamin Moreno Torres &middot; Berlin, Germany
      </footer>
    </>
  );
}
