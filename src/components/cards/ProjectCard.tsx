
import Image from 'next/image';
import {projects} from '@/data/projects';
import Link from 'next/link';

type ProjectCardProps = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  stack: string[];
};

const ProjectCard = ({ imageUrl, title, description, stack, id }: ProjectCardProps) => {
  return (
    
      
              <Link key={id} className="cursor-pointer bg-stone-950 border-purple-950 border p-6 rounded-lg shadow-lg max-w-[400px] mx-auto hover:scale-105 transition-transform duration-300 relative"
                href={`/projetos/${id}`}
                >
                <Image
                  src={imageUrl}
                  alt={title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />

                <h3 className="text-2xl font-bold text-[#522c8f] mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm text-white px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </Link>
  );
};

export default ProjectCard;