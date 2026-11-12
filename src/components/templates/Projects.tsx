import ProjectCard from './../cards/ProjectCard';
import {projectsData} from '@/data/projectsData';

  export default function Projects() {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((card, index) => (
                <ProjectCard
                  key={index}
                  id={card.id}
                  imageUrl={card.imageUrl[0]}
                  title={card.title}
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