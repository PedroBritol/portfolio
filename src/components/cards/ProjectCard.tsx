import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

type ProjectCardProps = {
  id: string;
  imageUrl: string;
  title: string;
  categoryLabel: string;
  description: string;
  stack: string[];
  externalLink?: string;
};

const ProjectCard = ({
  imageUrl,
  title,
  categoryLabel,
  description,
  stack,
  id,
  externalLink,
}: ProjectCardProps) => {
  const isExternal = Boolean(externalLink);
  const href = externalLink || `/projetos/${id}`;

  const cardContent = (
    <>
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-950 border-b border-white/10">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-950/80 backdrop-blur-md text-violet-200 border border-violet-500/30">
          {categoryLabel}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-200 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-medium text-violet-300 group-hover:text-violet-200">
          <span>{isExternal ? 'Acessar no Google Drive' : 'Ver detalhes do projeto'}</span>
          {isExternal ? (
            <FiExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : (
            <FiArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </>
  );

  const cardClassName =
    'group flex flex-col h-full rounded-2xl bg-neutral-900/75 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 shadow-xl shadow-black/30 hover:shadow-violet-950/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:outline-2 focus-visible:outline-violet-400';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClassName}>
      {cardContent}
    </Link>
  );
};

export default ProjectCard;
