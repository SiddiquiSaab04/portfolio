import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
