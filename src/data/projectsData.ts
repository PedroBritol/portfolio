export type Project = {
  id: string;
  title: string;
  /** Uma linha para o card da home. */
  summary: string;
  stack: string[];
  /** Prints do projeto em /public/img, o primeiro é a capa. */
  images: { src: string; alt: string; width: number; height: number }[];
  intro: string;
  sections: { title: string; text: string }[];
  /** Painel publicado no Power BI (abre dentro da página do projeto). */
  powerBi?: string;
  repo?: string;
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Dashboard de Frotas em Power BI",
    summary: "Painel em Power BI com receita, custo e entregas de uma transportadora, por mês, estado e veículo.",
    stack: ["Power BI", "Excel", "Power Query", "DAX"],
    images: [
      { src: "/img/frotas1.webp", alt: "Página inicial do Dashboard de Frotas com receita bruta, custo total, resultado operacional e entregas", width: 1230, height: 693 },
      { src: "/img/frotas2.webp", alt: "Página de entregas do Dashboard de Frotas", width: 1228, height: 693 },
      { src: "/img/frotas3.webp", alt: "Página de receitas com receita por tipo de veículo e por estado", width: 1229, height: 693 },
      { src: "/img/frotas4.webp", alt: "Página de custos do Dashboard de Frotas", width: 1226, height: 691 },
      { src: "/img/frotas5.webp", alt: "Tabela detalhada de viagens do Dashboard de Frotas", width: 1230, height: 692 },
    ],
    intro:
      "Dashboard para acompanhar a frota de uma transportadora: quanto cada veículo rodou, gastou e rendeu. Feito em Power BI a partir de planilhas Excel com o histórico de viagens, manutenções e combustível.",
    sections: [
      {
        title: "Como foi feito",
        text: "Os dados vieram de planilhas Excel. No Power Query limpei, formatei e agreguei as tabelas, e no Power BI montei o modelo e as medidas em DAX.",
      },
      {
        title: "O que o painel mostra",
        text: "Receita bruta, custo total, resultado operacional, ticket médio e entregas, comparados com o mês e o ano anteriores. Filtros por estado, ano, mês, motorista, placa e tipo de veículo, e rankings por estado e por tipo de veículo.",
      },
    ],
    powerBi:
      "https://app.powerbi.com/view?r=eyJrIjoiOWEyNWQwN2QtYTEwNi00ZTI3LWExY2UtNTI3YjZjODVkYTE4IiwidCI6ImE4MDRiZjBjLTRjYTUtNDFkOS04MmZmLTQ3N2M1YjlmMzRiNCJ9",
  },
  {
    id: "3",
    title: "Imuniza, sistema de vacinação",
    summary: "Sistema web em Laravel para cadastrar vacinas, pessoas e doses aplicadas, com relatórios em PDF.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    images: [
      { src: "/img/imuniza4.webp", alt: "Lista de vacinas do Imuniza com doses, fabricante, validade e ações", width: 1280, height: 613 },
      { src: "/img/imuniza1.webp", alt: "Tela de cadastro do Imuniza", width: 1280, height: 614 },
      { src: "/img/imuniza2.webp", alt: "Lista de pessoas cadastradas no Imuniza", width: 1280, height: 618 },
      { src: "/img/imuniza3.webp", alt: "Lista de empresas cadastradas no Imuniza", width: 1280, height: 620 },
    ],
    intro:
      "Sistema web para controlar a vacinação: quem tomou qual vacina, quantas doses e quando. Escrito em Laravel com telas em Blade e banco MySQL.",
    sections: [
      {
        title: "O que ele faz",
        text: "Cadastro, edição e exclusão de vacinas, pessoas e empresas; registro de cada dose aplicada; relatórios de vacinação em PDF.",
      },
      {
        title: "Tecnologias",
        text: "Laravel e Blade no back-end, MySQL para os dados e Bootstrap para as telas funcionarem no celular e no computador.",
      },
    ],
    repo: "https://github.com/pedrobritol/imuniza",
  },
  {
    id: "2",
    title: "Este portfólio em Next.js",
    summary: "Meu portfólio em Next.js e TypeScript, com os projetos, a experiência e os contatos.",
    stack: ["Next.js", "TypeScript"],
    images: [
      { src: "/img/site.webp", alt: "Primeira tela deste portfólio", width: 1440, height: 900 },
    ],
    intro:
      "O site que você está vendo. Feito em Next.js e TypeScript, com uma página por projeto e uma página inicial que carrega rápido no celular.",
    sections: [
      {
        title: "Como é feito",
        text: "Páginas geradas no servidor, imagens em WebP com tamanho definido e nenhuma animação em WebGL, para abrir rápido em conexões fracas.",
      },
    ],
    repo: "https://github.com/pedrobritol/portfolio",
  },
];

export const certificatesUrl =
  "https://drive.google.com/drive/folders/1jTRO6-xGluFgw3KiEBguxJnTRl5SkQop?usp=sharing";
