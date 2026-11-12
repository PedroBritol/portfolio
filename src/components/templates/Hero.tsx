import Link from 'next/link';
import { FiArrowDown, FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { LazyLiquidEther } from '@/components/effects/LazyBackgrounds';
import RotatingText from '../../../Reactbits/RotatingText';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full bg-neutral-950 text-white flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0">
        <LazyLiquidEther
          colors={['#5227FF', '#9A5CFF', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.45}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.0}
          takeoverDuration={0.25}
          autoResumeDelay={1500}
          autoRampDuration={0.6}
        />
      </div>

      {/* Subtle readability gradient over fluid shader */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,14,0.35)_0%,rgba(10,10,14,0.78)_75%,rgba(10,10,14,0.95)_100%)]"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur-md text-xs sm:text-sm text-neutral-200 mb-6">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
            </span>
            <span>São Mateus, ES • Engenharia da Computação (UFES)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
            Olá, eu sou{' '}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-400">
              Pedro Brito
            </span>
          </h1>

          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-3 mt-6 text-base sm:text-xl md:text-2xl font-semibold">
            <span className="text-neutral-300 font-medium">Atuação em</span>
            <RotatingText
              texts={['Engenharia de Dados', 'Analista de Dados', 'Desenvolvedor Web']}
              mainClassName="whitespace-nowrap inline-flex items-center h-9 sm:h-11 px-3.5 sm:px-4 bg-violet-600/90 border border-violet-400/30 text-white overflow-hidden justify-center rounded-xl shadow-lg shadow-violet-950/50 leading-none"
              splitBy="words"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2400}
            />
          </div>

          <p className="mt-7 text-xl sm:text-3xl lg:text-[2rem] font-bold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-400 to-indigo-300 max-w-3xl">
            Transformando dados em insights e ideias em aplicações web robustas e escaláveis.
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Experiência prática com pipelines ETL, AWS, Apache Airflow, dbt, Terraform, Python, SQL e dashboards em Power BI, além de desenvolvimento full stack com Next.js, TypeScript e Laravel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-900/40 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              <span>Ver Projetos</span>
              <FiArrowRight className="size-4" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              <span>Entrar em Contato</span>
            </Link>

            <a
              href="/Pedro_Henrique_Brito_Lucas.pdf"
              download="Pedro_Henrique_Brito_Lucas.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-200 font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              <FiDownload className="size-4" />
              <span>Baixar CV</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-neutral-400">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Conecte-se</span>
            <span className="h-px w-8 bg-white/15" aria-hidden="true" />
            <a
              href="https://github.com/PedroBritol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Pedro Brito"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-violet-400/40 transition-colors"
            >
              <FiGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-britol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Pedro Brito"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-violet-400/40 transition-colors"
            >
              <FiLinkedin className="size-4" />
            </a>
            <a
              href="mailto:pb_lucasbol@hotmail.com"
              aria-label="Enviar e-mail para Pedro Brito"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-violet-400/40 transition-colors"
            >
              <FiMail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Rolar para a seção de projetos"
        className="hidden sm:inline-flex items-center justify-center absolute bottom-6 left-1/2 -translate-x-1/2 z-10 size-10 rounded-full border border-white/15 bg-neutral-900/60 backdrop-blur-sm text-neutral-300 hover:text-white hover:border-violet-400/50 transition-colors animate-bounce"
      >
        <FiArrowDown className="size-4" />
      </a>
    </section>
  );
}
