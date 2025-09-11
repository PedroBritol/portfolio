import Contact from "@/components/templates/Contact";
import Header from "@/components/templates/Header";
import Hero from "@/components/templates/Hero";
import Projects from "@/components/templates/Projects";
import Skills from "@/components/templates/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
