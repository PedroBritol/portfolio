
import Image from 'next/image';

type ProjectCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  stack: string[];
};

const ProjectCard = ({ imageUrl, title, description, stack, id }: ProjectCardProps) => {
  return (
    <div className="bg-neutral-950 border-2 border-purple-950  rounded-lg shadow-lg overflow-hidden mx-2 h-full flex flex-col hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-52">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-[#522c8f] mb-2">{title}</h3>
        <p className="text-neutral-300 ">{description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
                  {stack.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm text-white px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
        <button
          className="mt-4 self-start bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#522c8f] transition-colors duration-300">
          <a  
          href={`/projetos/${id}`}
        >
          Saiba Mais

          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;