import DecryptedText from "../../../Reactbits/DecryptedText";
import LiquidEther from "../../../Reactbits/LiquidEther";
import RotatingText from "../../../Reactbits/RotatingText";
import TextType from "../../../Reactbits/TextType";

export default function Hero() {
    return (
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
            autoResumeDelay={100}
            autoRampDuration={0.6}
          />
        <div className="container mx-auto px-4 absolute z-1">
          <h2 className="text-6xl font-kademono font-bold mb-4 text-start ">Olá, eu sou <br/> Pedro Brito</h2>
            {/* <TextType
              text={["Analista de Dados & Desenvolvedor Web", "Desenvolvedor Web & Analista de Dados"]}
              typingSpeed={75}
              pauseDuration={4000}
              loop={true}
              showCursor={true}
              cursorCharacter="_"
              textColors={["#fffff"]}
              className="text-2xl font-semibold mt-8"
            /> */}
            <div className="flex mt-8 text-2xl font-semibold justify-start">
              <RotatingText
                texts={['Analista de Dados', 'Desenvolvedor Web']}
                mainClassName=" px-2 sm:px-2 md:px-3 bg-[#5227FF] text-white  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          <p className="hidden sm:block mt-6 mx-auto text-4xl font-bold text-start text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] via-[#ff33a3] via-33% to-[#5227FF]">
          TRANSFORMANDO DADOS EM INSIGHTS E IDEIAS <br/> EM APLICAÇÕES WEB ROBUSTAS E ESCALÁVEIS.
          </p>
          <p className="block sm:hidden mt-6 mx-auto text-4xl font-bold text-start text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] via-[#ff33a3] to-[#5227FF]">
          TRANSFORMANDO DADOS EM INSIGHTS E IDEIAS EM APLICAÇÕES WEB ROBUSTAS E ESCALÁVEIS.
          </p>
        </div>
      </section>
    );
  }