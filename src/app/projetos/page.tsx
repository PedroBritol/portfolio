import type { Metadata } from 'next';
import Header from '@/components/templates/Header';
import Projects from '@/components/templates/Projects';
import Footer from '@/components/templates/Footer';
import ClickSpark from '../../../Reactbits/ClickSpark';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Confira os projetos de Pedro Brito em Análise de Dados (Power BI, Excel, Power Query) e Desenvolvimento Web (Next.js, TypeScript, Laravel).',
  alternates: {
    canonical: '/projetos',
  },
};

export default function ProjectsIndexPage() {
  return (
    <ClickSpark
      sparkColor="#c4b5fd"
      sparkSize={10}
      sparkRadius={16}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
        <Header />
        <main className="flex-1 pt-16">
          <Projects />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

