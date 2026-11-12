import Contact from '@/components/templates/Contact';
import Header from '@/components/templates/Header';
import Hero from '@/components/templates/Hero';
import Projects from '@/components/templates/Projects';
import Skills from '@/components/templates/Skills';
import ClickSpark from './../../Reactbits/ClickSpark';
import Resume from '@/components/templates/Resume';
import AboutMe from '@/components/templates/AboutMe';
import Footer from '@/components/templates/Footer';
import Particles from '../../Reactbits/Particles';

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#c4b5fd"
      sparkSize={10}
      sparkRadius={16}
      sparkCount={8}
      duration={400}
    >
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none"
        >
          <Particles
            particleColors={['#ffffff', '#c4b5fd', '#a78bfa']}
            particleCount={120}
            particleSpread={10}
            speed={0.08}
            particleBaseSize={90}
            moveParticlesOnHover={true}
            particleHoverFactor={0.6}
            alphaParticles={true}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>

        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <Skills />
          <AboutMe />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}
