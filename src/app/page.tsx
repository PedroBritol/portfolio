/*
  type: service (site-kind other) · dark ground kept at the client's request (the skill's light deal waived)
  deal: hero split, nav nav-split, close close-type, footer footer-columns, rhythm dark-band,
        buttons arrow, mark: the client's own logo (dealt dots not used), palette: brand (logo blue #2f6fe0 on #0e1014),
        type source-serif (Source Serif 4 / Libre Franklin)
  moments: picture-develops in #sobre (the dashboard comes up as the section enters: the work, shown once);
           pinned-chapters dealt second, not used: the page has five sections, one moment
*/
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import { certificatesUrl, projectsData } from "@/data/projectsData";
import { mainAction, resumeUrl, whatsappUrl } from "@/data/contact";
import { srcSet } from "@/lib/img";

const tools = [
  { id: "power-bi", name: "Power BI", w: 30, h: 40, cls: "ic-tall" },
  { id: "xlsx", name: "Excel", w: 40, h: 40 },
  { id: "python", name: "Python", w: 40, h: 40 },
  { id: "mysql", name: "MySQL", w: 40, h: 39 },
  { id: "laravel", name: "Laravel", w: 39, h: 40 },
  { id: "php", name: "PHP", w: 40, h: 21, cls: "ic-wide" },
  { id: "nextjs", name: "Next.js", w: 40, h: 40 },
  { id: "react", name: "React", w: 40, h: 36 },
  { id: "typescript", name: "TypeScript", w: 40, h: 40 },
  { id: "tailwindcss", name: "Tailwind CSS", w: 40, h: 24, cls: "ic-land" },
  { id: "git", name: "Git", w: 40, h: 40 },
  { id: "github", name: "GitHub", w: 40, h: 39, cls: "ic-ink" },
  { id: "figma", name: "Figma", w: 27, h: 40, cls: "ic-tall" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero hero--split" data-enter aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <h1 id="hero-h">Dashboards em Power BI e sistemas web</h1>
                <p className="hero__lead">
                  Sou Pedro Brito, estudante de Engenharia da Computação na UFES em São Mateus, ES. Monto painéis de
                  indicadores em Power BI e Excel e sistemas em Laravel e Next.js.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {mainAction}
                    <Arrow />
                  </a>
                  <a className="btn btn--secondary" href="#projetos">Ver projetos</a>
                </div>
              </div>
              <div className="hero__media hero__media--portrait span-6 start-7">
                <img
                  src="/img/avatar.webp"
                  alt="Pedro Brito, sorrindo, de camiseta preta"
                  width={432}
                  height={577}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="portrait"
                />
                <div className="ly-float">
                  <div className="ly-float__row"><span className="ly-live">Agora</span><span>desde fev. 2025</span></div>
                  <div className="ly-float__title">Estágio em análise de dados na Prefeitura de São Mateus</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicos" aria-labelledby="servicos-h">
          <div className="wrap grid grid--top">
            <div className="span-5">
              <div className="section-head">
                <h2 id="servicos-h">Painéis, planilhas e sistemas web</h2>
                <p>Das planilhas soltas ao painel publicado, ou do banco de dados ao sistema no ar.</p>
              </div>
              <ul className="rows">
                <li><span className="rows__name">Dashboards<small>Indicadores com filtros por período, região e categoria</small></span><span className="rows__value">Power BI</span></li>
                <li><span className="rows__name">Tratamento de dados<small>Planilhas do Excel e do Google Sheets limpas e unidas</small></span><span className="rows__value">Power Query</span></li>
                <li><span className="rows__name">Consultas e análise<small>Análise exploratória e modelagem de dados</small></span><span className="rows__value">SQL</span></li>
                <li><span className="rows__name">Sistemas web<small>Cadastros, relatórios em PDF e áreas administrativas</small></span><span className="rows__value">Laravel</span></li>
                <li><span className="rows__name">Sites<small>Páginas em React e Next.js, com TypeScript</small></span><span className="rows__value">Next.js</span></li>
              </ul>
            </div>
            <div className="frame frame--photo frame--shot span-6 start-7">
              <img
                className="frame__img"
                src="/img/frotas3.webp"
                srcSet={srcSet("/img/frotas3.webp", 1229)}
                sizes="(max-width: 1023px) 100vw, 628px"
                alt="Página de receitas do Dashboard de Frotas, com receita por estado e por tipo de veículo"
                width={1229}
                height={693}
                loading="lazy"
                decoding="async"
                data-source="client"
                data-subject="dashboard"
              />
            </div>
          </div>
        </section>

        <section className="section ground-inverse" id="projetos" aria-labelledby="projetos-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projetos-h">Projetos em Power BI, Laravel e Next.js</h2>
              <p>Cada projeto tem uma página com os prints, as tecnologias e o link para o código ou o painel.</p>
            </div>
            <div className="grid">
              {projectsData.map((p) => (
                <article className="card card--row card--open span-4" key={p.id}>
                  <h3>
                    <a href={`/projetos/${p.id}`}>{p.title}</a>
                  </h3>
                  <p>{p.summary}</p>
                  <div className="panel">
                    <img
                      className="frame__img"
                      src={p.images[0].src}
                      srcSet={srcSet(p.images[0].src, p.images[0].width)}
                      sizes="(max-width: 1023px) 100vw, 411px"
                      alt={p.images[0].alt}
                      width={p.images[0].width}
                      height={p.images[0].height}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: "left top" }}
                      data-source="client"
                      data-subject="project"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section g2m" id="sobre" aria-labelledby="sobre-h">
          <div className="wrap grid grid--top">
            <div className="span-6">
              <div className="section-head">
                <h2 id="sobre-h">Estágio em dados, empresa júnior e UFES</h2>
              </div>
              <ul className="rows">
                <li><span className="rows__name">Estágio em análise de dados<small>Prefeitura de São Mateus, desde fev. 2025: indicadores da educação</small></span></li>
                <li><span className="rows__name">Assessor de desenvolvimento<small>Adapti, empresa júnior da UFES, 2022 a 2023</small></span></li>
                <li><span className="rows__name">Engenharia da Computação<small>UFES, campus CEUNES, cursando</small></span></li>
              </ul>
              <ul className="tools" aria-label="Ferramentas que uso">
                {tools.map((t) => (
                  <li key={t.id} className="ic-tile ic-tile--40" title={t.name}>
                    <img className={`ic ${t.cls ?? ""}`} src={`/assets/icons/${t.id}.svg`} alt={t.name} width={t.w} height={t.h} loading="lazy" />
                  </li>
                ))}
              </ul>
              <div className="btn-row">
                <a className="link" href={resumeUrl} download>Baixar o currículo em PDF</a>
                <a className="link" href={certificatesUrl} target="_blank" rel="noopener noreferrer">Ver os certificados</a>
              </div>
            </div>
            <figure className="develop span-6 start-7" data-moment="picture-develops">
              <img
                src="/img/dashboard1.webp"
                srcSet={srcSet("/img/dashboard1.webp", 1280)}
                sizes="(max-width: 1023px) 100vw, 628px"
                alt="Página inicial do Dashboard de Frotas com receita, custos e entregas por estado"
                width={1280}
                height={719}
                loading="lazy"
                decoding="async"
                data-source="client"
                data-subject="dashboard"
              />
            </figure>
          </div>
        </section>
      </main>
      <Footer />
      <nav className="actionbar" aria-label="Ação rápida">
        <a className="btn btn--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{mainAction}</a>
      </nav>
    </>
  );
}
