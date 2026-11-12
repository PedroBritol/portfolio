'use client';

import { useState } from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import { projectsData, type ProjectCategory } from '@/data/projectsData';

type FilterOption = 'all' | ProjectCategory;

const filters: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'dados', label: 'Dados & BI' },
  { id: 'web', label: 'Desenvolvimento Web' },
  { id: 'certificados', label: 'Certificações' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Meus Projetos
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Soluções práticas unindo análise de dados, Business Intelligence e desenvolvimento web full stack.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar projetos por categoria"
        >
          {filters.map((filter) => {
            const count =
              filter.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === filter.id).length;
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-950/50'
                    : 'bg-neutral-900/80 text-neutral-300 border border-white/10 hover:border-violet-500/40 hover:text-white'
                }`}
              >
                {filter.label}
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className={`grid gap-8 mx-auto ${
            filteredProjects.length === 1
              ? 'grid-cols-1 max-w-xl'
              : 'grid-cols-1 md:grid-cols-2 max-w-5xl'
          }`}
        >
          {filteredProjects.map((card) => (
            <ProjectCard
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl[0]}
              title={card.title}
              categoryLabel={card.categoryLabel}
              description={card.description}
              stack={card.stack || []}
              externalLink={card.externalLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
