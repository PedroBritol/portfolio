"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import ProjectCard from './../cards/ProjectCard';

const projects = [
    {
      id: 1,
      imageUrl: "/dashboard1.png",
      title: "Dashboard de Frotas",
      description: "Sistema de gerenciamento de frotas desenvolvido com Power bi e Excel, permitindo o monitoramento e a análise de dados de veículos.",
      stack: ["Power BI", "Excel", "Power Query"],

    },
    {
      id: 2,
      imageUrl: "/portfolio.png",
      title: "Este Site",
      description: "Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meu portfólio, habilidades e informações de contato.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 3,
      imageUrl: "/dashboard1.png",
      title: "Dashboard de Frotas",
      description: "Sistema de gerenciamento de frotas desenvolvido com Power bi e Excel, permitindo o monitoramento e a análise de dados de veículos.",
      stack: ["Power BI", "Excel", "Power Query"],

    },
    {
      id: 4,
      imageUrl: "/portfolio.png",
      title: "Este Site",
      description: "Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meu portfólio, habilidades e informações de contato.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 5,
      imageUrl: "/dashboard1.png",
      title: "Dashboard de Frotas",
      description: "Sistema de gerenciamento de frotas desenvolvido com Power bi e Excel, permitindo o monitoramento e a análise de dados de veículos.",
      stack: ["Power BI", "Excel", "Power Query"],

    },
  ];
  


  export default function Projects() {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} className="cursor-pointer bg-stone-950 border-purple-950 border p-6 rounded-lg shadow-lg max-w-[400px] mx-auto hover:scale-105 transition-transform duration-300 relative"
                href={`/projetos/${project.id}`}
                target="_blank"
                >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />

                <h3 className="text-2xl font-bold text-[#522c8f] mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm text-white px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 py-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              navigation={false}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              grabCursor={true}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 0 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
              }}
              className="custom-swiper !pb-12 !py-3"
            >
              {projects.map((card) => (
                <SwiperSlide key={card.id}>
                  <ProjectCard
                    id={card.id}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                    stack={card.stack}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }