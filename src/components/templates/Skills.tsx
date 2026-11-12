'use client';

import { useState } from 'react';
import LogoLoop from '../../../Reactbits/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiPython,
  SiAmazonwebservices,
  SiTerraform,
  SiApacheairflow,
  SiDbt,
} from 'react-icons/si';
import { HiOutlineChartBar, HiDatabase } from 'react-icons/hi';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import SkillCard from '@/components/cards/SkillsCard';
import { allSkills, skillCategories, type SkillCategory } from '@/data/skillsData';

const techLogos = [
  { node: <SiAmazonwebservices />, title: 'AWS', href: 'https://aws.amazon.com' },
  { node: <SiApacheairflow />, title: 'Apache Airflow', href: 'https://airflow.apache.org' },
  { node: <SiDbt />, title: 'dbt', href: 'https://www.getdbt.com' },
  { node: <SiTerraform />, title: 'Terraform', href: 'https://www.terraform.io' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <HiOutlineChartBar />, title: 'Power BI', href: 'https://powerbi.microsoft.com' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <HiDatabase />, title: 'SQL Server', href: 'https://www.microsoft.com/sql-server' },
  { node: <PiMicrosoftExcelLogoFill />, title: 'Excel', href: 'https://www.microsoft.com/excel' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiLaravel />, title: 'Laravel', href: 'https://laravel.com' },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | SkillCategory>('all');

  const visibleSkills =
    selectedCategory === 'all'
      ? allSkills
      : allSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-3">
            Competências
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Minhas Habilidades
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Ferramentas, linguagens e competências aplicadas em engenharia de dados, análise de dados e desenvolvimento full stack.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filtrar habilidades por categoria"
        >
          {skillCategories.map((category) => {
            const count =
              category.id === 'all'
                ? allSkills.length
                : allSkills.filter((s) => s.category === category.id).length;
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-violet-700 text-white shadow-md shadow-violet-950/50'
                    : 'bg-neutral-900/80 text-neutral-300 border border-white/10 hover:border-violet-500/40 hover:text-white'
                }`}
              >
                {category.label}
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-violet-950/65 text-white' : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {visibleSkills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className="mt-16 relative overflow-hidden py-4 border-y border-white/5 bg-neutral-950/40">
        <LogoLoop
          logos={techLogos}
          speed={55}
          direction="left"
          logoHeight={42}
          gap={48}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Tecnologias utilizadas por Pedro Brito"
          className="text-neutral-300"
        />
      </div>
    </section>
  );
}
