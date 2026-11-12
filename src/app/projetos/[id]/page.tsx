import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import { srcSet } from "@/lib/img";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title}: projeto de Pedro Brito`,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.id}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) notFound();

  const [cover, ...rest] = project.images;

  return (
    <>
      <Header base="/" />
      <main id="top">
        <section className="section project" aria-labelledby="project-h">
          <div className="wrap">
            <div className="grid grid--top">
              <div className="span-5">
                <h1 id="project-h">{project.title}</h1>
                <p className="t-lead">{project.intro}</p>
                {project.sections.map((s) => (
                  <div key={s.title} className="project__part">
                    <h2 className="t-card">{s.title}</h2>
                    <p>{s.text}</p>
                  </div>
                ))}
                <p className="t-small muted">{project.stack.join(" · ")}</p>
                <div className="btn-row">
                  {project.powerBi && (
                    <a className="btn btn--primary" href="#painel">Abrir o painel</a>
                  )}
                  {project.repo && (
                    <a className="btn btn--secondary" href={project.repo} target="_blank" rel="noopener noreferrer">Ver o código no GitHub</a>
                  )}
                </div>
              </div>
              <div className="frame frame--photo frame--shot span-7 start-6" style={{ aspectRatio: `${cover.width} / ${cover.height}` }}>
                <img className="frame__img" src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} fetchPriority="high" />
              </div>
            </div>
            {rest.length > 0 && (
              <div className="grid project__shots">
                {rest.map((img) => (
                  <div key={img.src} className="frame frame--photo frame--shot span-6" style={{ aspectRatio: `${img.width} / ${img.height}` }}>
                    <img className="frame__img" src={img.src} srcSet={srcSet(img.src, img.width)} sizes="(max-width: 1023px) 100vw, 628px" alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            )}
            {project.powerBi && (
              <div id="painel" className="project__embed">
                <h2>O painel publicado</h2>
                <iframe title={`${project.title} no Power BI`} src={project.powerBi} loading="lazy" allowFullScreen />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer base="/" />
    </>
  );
}
