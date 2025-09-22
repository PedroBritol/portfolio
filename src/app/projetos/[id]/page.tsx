import { notFound } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    title: "Dashboard de Frotas",
    description:
      "Sistema de gerenciamento de frotas desenvolvido com Power bi e Excel, permitindo o monitoramento e a análise de dados de veículos.",
    stack: ["Power BI", "Excel", "Power Query"],
    image: "/dashboard1.png",
    id: "1",
  },
  {
    title: "Este Site",
    description:
      "Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meu portfólio, habilidades e informações de contato.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/portfolio.png",
    id: "2",
  },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.image}
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
