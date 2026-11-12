import ProfileCard from '../../../Reactbits/ProfileCard';
import { FiDownload, FiMapPin, FiBookOpen, FiCode } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="sobremim" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-3">
            Perfil
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Sobre Mim
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="shrink-0 flex justify-center">
            <ProfileCard
              name="PEDRO BRITO"
              title="Eng. de Dados & Dev"
              handle="pedro-britol"
              status="Online"
              contactText="LinkedIn"
              contactHref="https://www.linkedin.com/in/pedro-britol/"
              avatarUrl="/avatar.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              showBehindGradient={true}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-2xl">
            <div className="flex flex-wrap gap-2.5 mb-6 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/80 border border-white/10 text-neutral-200">
                <FiBookOpen className="size-3.5 text-violet-400" />
                Engenharia da Computação — UFES
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/80 border border-white/10 text-neutral-200">
                <FiMapPin className="size-3.5 text-violet-400" />
                São Mateus, ES
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/80 border border-white/10 text-neutral-200">
                <FiCode className="size-3.5 text-violet-400" />
                Dados, Cloud & Full Stack
              </span>
            </div>

            <div className="space-y-4 text-neutral-200 text-base sm:text-lg leading-relaxed text-left">
              <p>
                Sou estudante de Engenharia da Computação na UFES, apaixonado por tecnologia. Gosto de criar soluções práticas, trabalhar em equipe e estou sempre em busca de aprendizado contínuo e novas experiências.
              </p>
              <p>
                Tenho experiência prática com Engenharia e Análise de Dados e Desenvolvimento Web — atuando com pipelines ETL em nuvem usando AWS, Terraform, Apache Airflow, dbt, Python e SQL, além da criação de dashboards em Power BI e Excel e aplicações web full stack. Tenho perfil colaborativo, proativo e facilidade em comunicar dados para públicos diversos.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="/Pedro_Henrique_Brito_Lucas.pdf"
                download="Pedro_Henrique_Brito_Lucas.pdf"
                className="inline-flex items-center justify-center gap-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-violet-950/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FiDownload className="size-5" />
                <span>Baixar Currículo</span>
              </a>
              <a
                href="https://wa.me/5533999046688?text=Oi%2C%20tudo%20bem!%20Vim%20pelo%20seu%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="size-5 text-emerald-400" />
                <span>Entrar em Contato</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
