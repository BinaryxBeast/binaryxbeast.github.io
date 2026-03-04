import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link" aria-label="Skip to main content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ClientEffects />
    </>
  );
}
