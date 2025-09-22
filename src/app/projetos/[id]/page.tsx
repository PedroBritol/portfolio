import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="bg-neutral-950 container mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="text-lg mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
