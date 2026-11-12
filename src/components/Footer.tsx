import Arrow from "./Arrow";
import { email, githubUrl, instagramUrl, linkedinUrl, mainAction, whatsappUrl } from "@/data/contact";

/** footer.closing: close-type (o h2 e o botão grande) e footer-columns, numa tela só. */
export default function Footer({ base = "" }: { base?: string }) {
  return (
    <footer className="footer closing g2m" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Conte qual é o seu projeto</h2>
            <p className="t-lead">Estou aberto a vagas, estágios e projetos. Respondo pelo WhatsApp ou pelo e-mail {email}.</p>
          </div>
          <a className="btn btn--primary btn--xl" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {mainAction}
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-6 stack-5">
              <a className="nav__logo" href={base ? "/" : "#top"}>
                <img src="/img/logo4.webp" alt="" width={28} height={28} className="nav__logo-img" loading="lazy" />
                Pedro Brito
              </a>
              <p className="footer__lede">Dados e desenvolvimento web em São Mateus, ES.</p>
            </div>
            <div className="span-3 start-7 footer__col">
              <h3>Site</h3>
              <ul>
                <li><a href={`${base}#servicos`}>Serviços</a></li>
                <li><a href={`${base}#projetos`}>Projetos</a></li>
                <li><a href={`${base}#sobre`}>Sobre</a></li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>Contato</h3>
              <ul>
                <li><a href={`mailto:${email}`}>E-mail</a></li>
                <li><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {new Date().getFullYear()} Pedro Brito</span>
            <span>Nomes e logos de produtos são marcas de seus donos.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
