import Contact from "@/components/templates/Contact";
import Header from "@/components/templates/Header";
import Hero from "@/components/templates/Hero";
import Projects from "@/components/templates/Projects";
import Skills from "@/components/templates/Skills";
import Image from "next/image";
import ClickSpark from './../../Reactbits/ClickSpark';
import Curriculo from "@/components/templates/Curriculo";
import Sobremim from "@/components/templates/Sobremim";
import Footer from "@/components/templates/Footer";

export default function Home() {
  return (
    <main>
      <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Sobremim />
        <Curriculo />
        <Contact />
        <Footer />
      </ClickSpark>
    </main>
  );
}
