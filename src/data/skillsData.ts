import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiPython,
  SiLaravel,
  SiPhp,
  SiGit,
  SiGithub,
  SiMysql,
  SiAmazonwebservices,
  SiTerraform,
  SiApacheairflow,
  SiDbt,
} from 'react-icons/si';
import {
  FaUsers,
  FaPuzzlePiece,
  FaChartPie,
  FaChartBar,
  FaDatabase,
  FaFileExcel,
  FaCalculator,
  FaProjectDiagram,
} from 'react-icons/fa';
import { BsChatDotsFill, BsLightningChargeFill } from 'react-icons/bs';
import { GoGoal } from 'react-icons/go';
import { CgRepeat } from 'react-icons/cg';
import { TbSql, TbTransform } from 'react-icons/tb';
import { VscTools, VscCode } from 'react-icons/vsc';
import { MdDataObject, MdDashboard } from 'react-icons/md';
import { IoAnalytics } from 'react-icons/io5';
import { DiScrum } from 'react-icons/di';

export type SkillCategory = 'dados' | 'frontend' | 'backend' | 'soft';

export type Skill = {
  name: string;
  icon: IconType;
  category: SkillCategory;
};

export const dataSkills: Skill[] = [
  { name: 'AWS', icon: SiAmazonwebservices, category: 'dados' },
  { name: 'Terraform', icon: SiTerraform, category: 'dados' },
  { name: 'Apache Airflow', icon: SiApacheairflow, category: 'dados' },
  { name: 'dbt', icon: SiDbt, category: 'dados' },
  { name: 'ETL', icon: FaProjectDiagram, category: 'dados' },
  { name: 'Python', icon: SiPython, category: 'dados' },
  { name: 'SQL', icon: TbSql, category: 'dados' },
  { name: 'MySQL', icon: SiMysql, category: 'dados' },
  { name: 'SQL Server', icon: FaDatabase, category: 'dados' },
  { name: 'Power BI', icon: FaChartBar, category: 'dados' },
  { name: 'Excel', icon: FaFileExcel, category: 'dados' },
  { name: 'Power Query', icon: TbTransform, category: 'dados' },
  { name: 'Modelagem de Dados', icon: MdDataObject, category: 'dados' },
  { name: 'Análise de Dados', icon: IoAnalytics, category: 'dados' },
  { name: 'Visualização de Dados', icon: FaChartPie, category: 'dados' },
  { name: 'Dashboards', icon: MdDashboard, category: 'dados' },
  { name: 'Estatística Básica', icon: FaCalculator, category: 'dados' },
];

export const frontendSkills: Skill[] = [
  { name: 'HTML5', icon: SiHtml5, category: 'frontend' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
  { name: 'React.js', icon: SiReact, category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend' },
  { name: 'Design Responsivo', icon: VscTools, category: 'frontend' },
];

export const backendAndToolsSkills: Skill[] = [
  { name: 'PHP', icon: SiPhp, category: 'backend' },
  { name: 'Laravel', icon: SiLaravel, category: 'backend' },
  { name: 'Git', icon: SiGit, category: 'backend' },
  { name: 'GitHub', icon: SiGithub, category: 'backend' },
  { name: 'VSCode', icon: VscCode, category: 'backend' },
  { name: 'SCRUM', icon: DiScrum, category: 'backend' },
];

export const softSkills: Skill[] = [
  { name: 'Trabalho em Equipe', icon: FaUsers, category: 'soft' },
  { name: 'Comunicação', icon: BsChatDotsFill, category: 'soft' },
  { name: 'Proatividade', icon: BsLightningChargeFill, category: 'soft' },
  { name: 'Adaptabilidade', icon: CgRepeat, category: 'soft' },
  { name: 'Pensamento Estratégico', icon: GoGoal, category: 'soft' },
  { name: 'Resolução de Problemas', icon: FaPuzzlePiece, category: 'soft' },
];

export const skillCategories: { id: 'all' | SkillCategory; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'dados', label: 'Dados, Cloud & BI' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'backend', label: 'Back-end & Ferramentas' },
  { id: 'soft', label: 'Soft Skills' },
];

export const allSkills: Skill[] = [
  ...dataSkills,
  ...frontendSkills,
  ...backendAndToolsSkills,
  ...softSkills,
];
