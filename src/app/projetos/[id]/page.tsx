import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiLayers } from 'react-icons/fi';
import { projectsData } from '@/data/projectsData';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';
import ProjectSliderCard from '@/components/cards/ProjectSliderCard';
import ClickSpark from '../../../../Reactbits/ClickSpark';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projetos/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Pedro Brito`,
      description: project.description,
      images: project.imageUrl[0]
        ? [
            {
              url: project.imageUrl[0],
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) return notFound();

  const internalProjects = projectsData.filter((p) => !p.externalLink);
  const currentIndex = internalProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? internalProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < internalProjects.length - 1
      ? internalProjects[currentIndex + 1]
      : null;

  const actionUrl = project.src || project.externalLink;
  const actionLabel = project.srcLabel || 'Acessar Projeto';

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

        <main className="flex-1 container mx-auto px-4 sm:px-6 pt-28 pb-20 max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-violet-300 transition-colors"
            >
              <FiArrowLeft className="size-4" />
              <span>Voltar para Projetos</span>
            </Link>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
              {project.categoryLabel}
            </span>
          </div>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-3xl">
              {project.subtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              {project.text && (
                <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-6">
                  <h2 className="text-lg font-semibold text-white mb-3">
                    Visão Geral
                  </h2>
                  <p className="text-neutral-300 leading-relaxed">{project.text}</p>
                </div>
              )}

              {project.sections?.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-6"
                >
                  <h2 className="text-lg font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3 text-sm sm:text-base text-neutral-300">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="leading-relaxed flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 rounded-full bg-violet-400 shrink-0"
                        />
                        <span>
                          {item.label && (
                            <strong className="text-white font-semibold">
                              {item.label}:{' '}
                            </strong>
                          )}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {project.stack && project.stack.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                    <FiLayers className="size-4 text-violet-400" />
                    <span>Tecnologias Utilizadas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-violet-500/15 border border-violet-500/25 text-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {actionUrl && (
                <div className="pt-2">
                  <a
                    href={actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-950/50 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{actionLabel}</span>
                    <FiExternalLink className="size-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 lg:sticky lg:top-24">
              <ProjectSliderCard imageUrl={project.imageUrl} title={project.title} />
            </div>
          </div>

          {project.frameSrc && (
            <section className="mt-16" aria-label="Dashboard interativo Power BI">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/75 overflow-hidden shadow-2xl">
                <div className="px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-neutral-900">
                  <div className="flex items-center gap-2.5">
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                      Dashboard Interativo — Power BI
                    </h2>
                  </div>
                  <a
                    href={project.frameSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-violet-300 hover:text-violet-200 transition-colors"
                  >
                    <span>Abrir em nova aba</span>
                    <FiExternalLink className="size-3.5" />
                  </a>
                </div>
                <div className="w-full h-[300px] sm:h-[460px] md:h-[560px] lg:h-[680px] bg-neutral-950">
                  <iframe
                    title={project.frameTitle || project.title}
                    src={project.frameSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          )}

          {(prevProject || nextProject) && (
            <nav
              aria-label="Navegação entre projetos"
              className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {prevProject ? (
                <Link
                  href={`/projetos/${prevProject.id}`}
                  className="group rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-violet-500/45 p-5 flex items-center gap-3 transition-colors"
                >
                  <FiArrowLeft className="size-5 text-violet-400 shrink-0 transition-transform group-hover:-translate-x-1" />
                  <div>
                    <span className="block text-xs text-neutral-400">Projeto anterior</span>
                    <span className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {prevProject.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && (
                <Link
                  href={`/projetos/${nextProject.id}`}
                  className="group rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-violet-500/45 p-5 flex items-center justify-end text-right gap-3 transition-colors"
                >
                  <div>
                    <span className="block text-xs text-neutral-400">Próximo projeto</span>
                    <span className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {nextProject.title}
                    </span>
                  </div>
                  <FiArrowRight className="size-5 text-violet-400 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </nav>
          )}
        </main>

        <Footer />
      </div>
    </ClickSpark>
  );
}
