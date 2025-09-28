import { IconType } from 'react-icons';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiPython, SiLaravel, SiPhp, SiFigma, SiGit, SiGithub, SiMysql,
} from 'react-icons/si';
import {
  FaUsers, FaPuzzlePiece, FaBrain, FaChartPie, FaChartBar, FaDatabase, FaFileExcel, FaCalculator 
} from 'react-icons/fa';
import { BsChatDotsFill, BsLightningChargeFill } from 'react-icons/bs';
import { GoGoal } from 'react-icons/go';
import { CgRepeat } from 'react-icons/cg';
import { TbSql, TbTransform } from "react-icons/tb";
import { VscTools, VscCode } from "react-icons/vsc"; // Ícone do VSCode vem daqui
import { MdDataObject, MdDashboard } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { DiScrum } from "react-icons/di";

type Skill = {
  name: string;
  icon: IconType;
};
const frontendSkills: Skill[] = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Design Responsivo', icon: VscTools },
];

const backendSkills: Skill[] = [
  { name: 'PHP', icon: SiPhp },
  { name: 'Laravel', icon: SiLaravel },
];

const dataSkills: Skill[] = [
  { name: 'Python', icon: SiPython },
  { name: 'SQL', icon: TbSql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'SQL Server', icon: FaDatabase },
  { name: 'Power BI', icon: FaChartBar },
  { name: 'Excel', icon: FaFileExcel },
  { name: 'Power Query', icon: TbTransform },
  { name: 'Modelagem de Dados', icon: MdDataObject },
  { name: 'Análise de Dados', icon: IoAnalytics },
  { name: 'Visualização de Dados', icon: FaChartPie },
  { name: 'Dashboards', icon: MdDashboard },
  { name: 'Estatística Básica', icon: FaCalculator },
];

const otherSkills: Skill[] = [
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'VSCode', icon: VscCode },
  { name: 'SCRUM', icon: DiScrum },
];

const softSkills: Skill[] = [
  { name: 'Trabalho em Equipe', icon: FaUsers },
  { name: 'Comunicação', icon: BsChatDotsFill },
  { name: 'Proatividade', icon: BsLightningChargeFill },
  { name: 'Adaptabilidade', icon: CgRepeat },
  { name: 'Pensamento Estratégico', icon: GoGoal },
  { name: 'Resolução de Problemas', icon: FaPuzzlePiece },
];

export const allSkills: Skill[] = [
  ...frontendSkills,
  ...backendSkills,
  ...dataSkills,
  ...otherSkills,
  ...softSkills,
];