import DecryptedText from "../../../Reactbits/DecryptedText";
import LiquidEther from "../../../Reactbits/LiquidEther";

export default function Hero() {
    return (
      //style={{ width: '100%', height: 600, position: 'relative' }}
      <section style={{ width: '100%', height: '100vh', position: 'relative' }} className=" bg-neutral-950 text-white min-h-screen flex items-center justify-center text-center">
          <LiquidEther
            colors={[ '#5227FF', '#9A5CFF', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        <div className="container mx-auto px-4 absolute z-1">
          <h2 className="text-5xl font-kademono  font-bold mb-4 ">Olá, eu sou Pedro Brito</h2>
          <p className="text-2xl text-blue-900">
          <DecryptedText
            text="Desenvolvedor Web & Analista de Dados"
            animateOn="view"
            revealDirection="start"
            sequential={true}
            speed={10}
            />


          </p>
          <p className="mt-6 max-w-2xl mx-auto">
            Transformando dados em insights e ideias em aplicações web robustas e escaláveis.
          </p>
        </div>
      </section>
    );
  }