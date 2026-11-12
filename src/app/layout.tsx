import type { Metadata, Viewport } from "next";
import KitScripts from "@/components/KitScripts";
import { Analytics } from "@vercel/analytics/react";

const title = "Pedro Brito: dashboards em Power BI e sistemas web";
const description =
  "Portfólio de Pedro Brito, estudante de Engenharia da Computação na UFES em São Mateus, ES: painéis em Power BI e Excel, sistemas em Laravel e sites em Next.js.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.pedrobritol.com.br"),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title,
    description: "Painéis em Power BI e sistemas web de Pedro Brito, de São Mateus, ES.",
    url: "https://www.pedrobritol.com.br",
    siteName: "Pedro Brito",
    images: [{ url: "/share.jpg", width: 1440, height: 900, alt: "Primeira tela do portfólio de Pedro Brito" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "other", "page-type": "service" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0e1014",
};

/* Paleta do taste skill (start.mjs brand): fundo escuro mantido a pedido, o azul vem do logo.
   Tem que vir depois do system.css, por isso fica inline no <head>. */
const rootCss = `
:root {
  --p-bg: #0e1014; --p-surface: #171a20; --p-ink: #eceef2; --p-muted: #9aa1ad;
  --p-accent: #2f6fe0; --p-accent-ink: #ffffff; --p-action: #2f6fe0; --p-action-ink: #ffffff;
  --p-inv-bg: #eceef2; --p-inv-surface: #dadce0; --p-inv-ink: #0e1014; --p-inv-muted: #585a5f;
  --p-inv-accent: #2f6fe0; --p-inv-accent-ink: #ffffff; --p-inv-action: #2f6fe0; --p-inv-action-ink: #ffffff;
  --font-display: "Source Serif 4", Georgia, serif;
  --font-text: "Libre Franklin", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.02em;
  --display-tracking-xl: -0.026em;
}
/* page CSS: só o que o kit não tem */
.nav__logo-img { width: 28px; height: 28px; object-fit: contain; flex: none; }
.nav__logo { display: inline-flex; align-items: center; gap: 10px; }
.rows .rows__name small { display: block; font-weight: 400; color: var(--muted); font-size: var(--t-small); }
.tools { display: flex; flex-wrap: wrap; gap: var(--s-2); margin: var(--s-6) 0 var(--s-4); padding: 0; list-style: none; }
/* o retrato é um recorte com fundo transparente: fica sobre a superfície da página */
.hero__media--portrait { background: color-mix(in oklab, var(--ink) 9%, var(--bg)); }
.hero__media--portrait > img { object-position: 50% 20%; }
/* desktop: o texto do hero centralizado na altura da foto (pedido do cliente; o kit alinha pelo topo) */
@media (min-width: 1024px) { .hero--split .hero__text { align-self: center; } }
/* no celular o card cobriria o rosto; o mesmo fato está em #sobre */
@media (max-width: 639px) { .hero__media--portrait > .ly-float { display: none; } }
#servicos .frame { aspect-ratio: 4 / 3; }
/* tablet: serviços fica lado a lado numa tela; projetos e sobre empilham em duas */
@media (min-width: 640px) and (max-width: 1023px) {
  #servicos .grid > .span-5 { grid-column: span 6; }
  #servicos .grid > .frame { grid-column: 7 / -1; margin-top: 0; }
  #projetos { --h: 2; }
  #sobre .develop { aspect-ratio: 16 / 9; }
}
/* celular: serviços cabe numa tela sem as linhas de detalhe; projetos em duas; sobre em dois grupos */
@media (max-width: 639px) {
  #servicos .rows small, #servicos .section-head > p { display: none; }
  #servicos .frame { aspect-ratio: 16 / 9; }
  #projetos { --hm: 2; }
  #sobre .develop { aspect-ratio: 1 / 1; margin-top: 0; }
  .card h3 > a { display: inline-flex; align-items: center; min-height: 44px; }
}
.develop { margin: 0; border-radius: var(--r-lg); overflow: hidden; height: min(560px, var(--ly-fit, 560px)); }
.develop > img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: left top; }
@media (max-width: 1023px) { .develop { height: auto; aspect-ratio: 4 / 3; margin-top: var(--s-7); } }
.frame--shot > .frame__img { object-position: left top; }
/* página de projeto: uma página de leitura, não uma pilha de telas */
main > section.project { height: auto; min-height: 100svh; }
.project h1 { font-size: var(--t-h2); margin: 0 0 var(--s-5); }
.project__part { margin-top: var(--s-6); }
.project__part > h2 { margin: 0 0 var(--s-2); }
.project__shots { margin-top: var(--s-6); row-gap: var(--s-5); }
.project__embed { margin-top: var(--s-8); }
.project__embed > h2 { margin: 0 0 var(--s-6); }
.project__embed > iframe { display: block; width: 100%; aspect-ratio: 16 / 10; border: 0; border-radius: var(--r-lg); background: var(--g-alt); }
@media (max-width: 1023px) { .project .frame--shot { grid-column: 1 / -1; } }
`;

const enterScript =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-type="service"
      data-radius="soft"
      data-buttons="arrow"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400..600&family=Libre+Franklin:wght@400..600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: rootCss }} />
        <script dangerouslySetInnerHTML={{ __html: enterScript }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/picture-develops/moment.js" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
