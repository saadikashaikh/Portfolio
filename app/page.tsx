import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechTape from "@/components/TechTape";
import Highlights from "@/components/Highlights";
import ProjectStack from "@/components/ProjectStack";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechTape />
        <Highlights />
        <ProjectStack />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
