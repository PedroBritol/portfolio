import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import Header from "@/components/templates/Header";
import Link from "next/link";
import Footer from "@/components/templates/Footer";

export default async function ProjectPage({ params }: { params: { id: string} }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 relative pb-20">
      <Header/>
      <div className="bg-neutral-950 min-h-full container mt-10 mx-auto px-4 py-20 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:items-start">
          <div className="flex-1 w-full text-justify lg:w-2/3 mr-6">
            <p className="text-lg mb-6">{project.text}</p>
            {project.text2 && (
              <>
                <h3 className="text-2xl font-semibold mb-4">{project.textTittle2}</h3>
                <p className="mb-4">{project.text2}</p>
              </>
            )}
            {project.text3 && (
              <>
                <h3 className="text-2xl font-semibold mb-4">{project.textTittle3}</h3>
                <p className="mb-4">{project.text3}</p>
              </>
            )}
            <ul className="mt-10 list-disc list-inside">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 ">
          {
            project.imageUrl.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={project.title}
                width={200}
                height={200}
                className="rounded-lg mb-3 w-full h-auto"
                priority
              />
            ))
          }
          </div>
        </div>
        {project.frame && (
          <div className="flex flex-col items-center w-full">
            <h2 className="mt-10 text-4xl font-bold">Projeto Power BI</h2>
            <div className="flex mt-10 w-full h-[250px] sm:h-[410px] md:h-[500px] lg:h-[640px] xl:h-[780px] 2xl:h-[900px]">
              {project.frame}
            </div>
            <div className="mt-6 mr-2 w-full break-words">
              <span className="w-full">Link do projeto:</span>
              <Link href={project.src} passHref target="_blank" rel="noopener noreferrer" className="contents text-blue-500 underline cursor-pointer">
                  {project.src}
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
