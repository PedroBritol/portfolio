import { projectsData } from "@/data/projectsData";
import { srcSet } from "@/lib/img";
import { mainAction, resumeUrl, whatsappUrl } from "@/data/contact";

/**
 * nav-split (sorteado): as palavras à esquerda, o logo no centro, a ação principal à direita.
 * "Projetos" abre um painel com os prints dos projetos. system.js cuida do menu no celular.
 * `base` é "" na home e "/" nas páginas internas, para os links voltarem às seções.
 */
export default function Header({ base = "" }: { base?: string }) {
  return (
    <header className="nav nav--split">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Pular para o conteúdo</a>
        <a className="nav__logo" href={base ? "/" : "#top"}>
          <img src="/img/logo4.webp" alt="" width={28} height={28} className="nav__logo-img" />
          Pedro Brito
        </a>
        <nav className="nav__links" aria-label="Principal">
          <div className="nav__item"><a className="nav__link" href={`${base}#servicos`}>Serviços</a></div>
          <div className="nav__item">
            <a className="nav__link" href={`${base}#projetos`}>
              Projetos{" "}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                {projectsData.map((p) => (
                  <a className="menu-card span-4" href={`/projetos/${p.id}`} key={p.id}>
                    <div className="panel">
                      <img className="frame__img" src={p.images[0].src} srcSet={srcSet(p.images[0].src, p.images[0].width)} sizes="411px" alt="" width={p.images[0].width} height={p.images[0].height} loading="lazy" />
                    </div>
                    <span className="t-card">{p.title}</span>
                    <span className="t-small muted">{p.stack.join(", ")}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="nav__item"><a className="nav__link" href={`${base}#sobre`}>Sobre</a></div>
          <div className="nav__item"><a className="nav__link" href={resumeUrl} download>Currículo</a></div>
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{mainAction}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
