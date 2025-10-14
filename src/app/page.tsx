import Contact from "@/components/templates/Contact";
import Header from "@/components/templates/Header";
import Hero from "@/components/templates/Hero";
import Projects from "@/components/templates/Projects";
import Skills from "@/components/templates/Skills";
import Image from "next/image";
import ClickSpark from './../../Reactbits/ClickSpark';
import Curriculo from "@/components/templates/Resume";
import Sobremim from "@/components/templates/AboutMe";
import Footer from "@/components/templates/Footer";
import Particles from "../../Reactbits/Particles";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
    <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: "-10", top: 0, left: 0 }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className=" w-full h-full top-0 left-0"
      />
  </div>
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
