import LogoLoop from '../../../Reactbits/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiMysql } from 'react-icons/si';
import { HiOutlineChartBar, HiDatabase } from "react-icons/hi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import SkillCard from '@/components/cards/SkillsCard';
import { allSkills } from '@/data/skillsData';



const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <HiOutlineChartBar />, title: "Power BI", href: "https://powerbi.microsoft.com" },
  { node: <SiMysql />, title: "My Sql", href: "https://" },
  { node: <HiDatabase />, title: "Sql Server", href: "https://" },
  { node: <PiMicrosoftExcelLogoFill />, title: "Excel", href: "https://www.microsoft.com/excel" },
];

  export default function Skills() {
    return (
      <section id="skills" className="py-20">

        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Minhas Habilidades
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-16">
            {allSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>

        <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }} className="mt-40">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#20a0a0a"
            ariaLabel="Technology partners"
            className="text-white"
          />
        </div>
      </section>
    );
  }