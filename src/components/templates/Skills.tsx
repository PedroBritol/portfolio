import LogoLoop from './../../../Reactbits/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiMysql } from 'react-icons/si';
import { HiOutlineChartBar, HiDatabase } from "react-icons/hi";


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <HiOutlineChartBar />, title: "Power BI", href: "https://powerbi.microsoft.com" },
  { node: <SiMysql />, title: "My Sql", href: "https://" },
  { node: <HiDatabase />, title: "Sql Server", href: "https://" },
];

const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "PHP", "Laravel", "Python", "PySpark", "Pandas",
    "SQL", "MySQL", "PostgreSQL", "Git", "Docker", "Tailwind CSS"
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Habilidades Técnicas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }} className="mt-10">
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#2e2d2d"
        ariaLabel="Technology partners"
        className="text-amber-100"
      />
    </div>
      </section>
    );
  }