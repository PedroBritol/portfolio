export type ProjectCategory = 'dados' | 'web' | 'certificados';

export interface ProjectDetailSection {
  title: string;
  items: {
    label?: string;
    text: string;
  }[];
}

export interface ProjectProps {
  id: string;
  imageUrl: string[];
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  stack?: string[];
  frameSrc?: string;
  frameTitle?: string;
  src?: string;
  srcLabel?: string;
  text: string;
  sections?: ProjectDetailSection[];
  externalLink?: string;
}

export const projectsData: ProjectProps[] = [
  {
    id: '1',
    imageUrl: ['/frotas1.png', '/frotas2.png', '/frotas3.png', '/frotas4.png', '/frotas5.png'],
    title: 'Dashboard de Frotas',
    subtitle: 'Monitoramento logístico, custos operacionais e KPIs em tempo real',
    category: 'dados',
    categoryLabel: 'Dados & BI',
    description:
      'Sistema analítico de gerenciamento de frotas desenvolvido com Power BI e Excel, permitindo o monitoramento de custos, entregas e performance de veículos.',
    stack: ['Power BI', 'Excel', 'Power Query', 'DAX'],
    frameSrc:
      'https://app.powerbi.com/view?r=eyJrIjoiOWEyNWQwN2QtYTEwNi00ZTI3LWExY2UtNTI3YjZjODVkYTE4IiwidCI6ImE4MDRiZjBjLTRjYTUtNDFkOS04MmZmLTQ3N2M1YjlmMzRiNCJ9',
    frameTitle: 'Dashboard de Frotas - Power BI',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiOWEyNWQwN2QtYTEwNi00ZTI3LWExY2UtNTI3YjZjODVkYTE4IiwidCI6ImE4MDRiZjBjLTRjYTUtNDFkOS04MmZmLTQ3N2M1YjlmMzRiNCJ9',
    srcLabel: 'Abrir Dashboard em Tela Cheia',
    text: 'Este projeto tem como objetivo o desenvolvimento de um dashboard completo de gestão de frotas para monitoramento de veículos, custos e eficiência logística no Power BI. A solução transforma dados operacionais brutos em indicadores claros para apoiar decisões gerenciais.',
    sections: [
      {
        title: 'Tecnologias e Processos Utilizados',
        items: [
          {
            label: 'Power BI & DAX',
            text: 'Construção do painel interativo com medidas DAX para comparativos temporais (mês anterior e ano anterior), margem operacional e ticket médio.',
          },
          {
            label: 'ETL com Power Query',
            text: 'Extração, limpeza, padronização e modelagem de dados provenientes de planilhas operacionais em Excel.',
          },
          {
            label: 'Base Analítica',
            text: 'Consolidação de registros de viagens, quilometragem percorrida, peso transportado, consumo e despesas por tipo de veículo.',
          },
        ],
      },
      {
        title: 'Principais Funcionalidades do Dashboard',
        items: [
          {
            label: 'Indicadores de Desempenho',
            text: 'Visão consolidada de receita bruta, custo total, resultado operacional, ticket médio e total de entregas realizadas.',
          },
          {
            label: 'Análise por Veículo e Periodicidade',
            text: 'Segmentadores dinâmicos por estado, ano e mês para acompanhar a evolução histórica e identificar sazonalidades.',
          },
          {
            label: 'Comparação de Performance',
            text: 'Rankings por estado e categoria de veículo, destacando operações mais rentáveis e pontos de atenção.',
          },
          {
            label: 'Tooltips e Navegação Contextual',
            text: 'Gráficos interativos com detalhamento sob demanda para investigar variações de margem e custos.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    imageUrl: ['/portfolio.jpg', '/portfolio2.png', '/portfolio3.png'],
    title: 'Este Site',
    subtitle: 'Portfólio profissional com Next.js, TypeScript e visualizações interativas',
    category: 'web',
    categoryLabel: 'Desenvolvimento Web',
    description:
      'Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meus projetos, habilidades técnicas, currículo e canais de contato.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    src: 'https://github.com/pedrobritol/portfolio',
    srcLabel: 'Ver Repositório no GitHub',
    text: 'Este projeto é o meu portfólio oficial, criado para reunir minha trajetória em Engenharia de Dados, Análise de Dados e Desenvolvimento Web em uma experiência moderna, responsiva e de alta performance.',
    sections: [
      {
        title: 'Arquitetura e Tecnologias',
        items: [
          {
            label: 'Next.js App Router & TypeScript',
            text: 'Estrutura modular com tipagem estática, geração de páginas estáticas de projetos e metadados otimizados para SEO.',
          },
          {
            label: 'Tailwind CSS & Componentes Interativos',
            text: 'Interface responsiva com estética dark, shaders WebGL (Three.js e OGL), animações fluidas e galeria interativa com Swiper.',
          },
          {
            label: 'Acessibilidade e SEO',
            text: 'Estrutura semântica, sitemap dinâmico, Open Graph, dados estruturados (JSON-LD) e suporte a preferências de movimento reduzido.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    imageUrl: ['/imuniza4.png', '/imuniza1.png', '/imuniza2.png', '/imuniza3.png'],
    title: 'Imuniza',
    subtitle: 'Sistema web para gestão de vacinação, doses e relatórios em PDF',
    category: 'web',
    categoryLabel: 'Desenvolvimento Web',
    description:
      'Sistema completo de gerenciamento de dados de vacinação desenvolvido com Laravel, MySQL e Bootstrap, com emissão de relatórios em PDF.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    src: 'https://github.com/pedrobritol/imuniza',
    srcLabel: 'Ver Repositório no GitHub',
    text: 'O Imuniza é um sistema web para gerenciamento de dados de vacinação, desenvolvido em Laravel (PHP) com templates Blade e arquitetura voltada ao controle de imunização. A aplicação permite cadastrar vacinas, pessoas, empresas e registros de aplicação, além de emitir relatórios em PDF.',
    sections: [
      {
        title: 'Tecnologias Utilizadas',
        items: [
          {
            label: 'Laravel (PHP)',
            text: 'Framework backend responsável pelas regras de negócio, rotas, validações, relacionamentos Eloquent e geração de relatórios.',
          },
          {
            label: 'Blade Templates',
            text: 'Motor de renderização do Laravel utilizado para criar interfaces dinâmicas, layouts reutilizáveis e formulários.',
          },
          {
            label: 'MySQL',
            text: 'Banco de dados relacional para persistência estruturada de vacinas, cidadãos, empresas e histórico de doses aplicadas.',
          },
          {
            label: 'Bootstrap',
            text: 'Estilização responsiva para garantir usabilidade consistente em desktops, tablets e celulares.',
          },
        ],
      },
      {
        title: 'Principais Funcionalidades',
        items: [
          {
            label: 'CRUD Completo',
            text: 'Cadastro, listagem, visualização detalhada, edição e exclusão de vacinas, pessoas e empresas.',
          },
          {
            label: 'Registro de Aplicações',
            text: 'Associação direta entre indivíduos e doses recebidas, mantendo o histórico atualizado de imunização.',
          },
          {
            label: 'Relatórios em PDF',
            text: 'Exportação de relatórios estruturados para acompanhamento e conferência dos registros de vacinação.',
          },
        ],
      },
    ],
  },
  {
    id: '10',
    imageUrl: ['/certificados.png'],
    title: 'Certificados',
    subtitle: 'Formações complementares em SQL, Power BI, Excel e Next.js',
    category: 'certificados',
    categoryLabel: 'Certificações',
    description:
      'Coleção de certificados obtidos em cursos e treinamentos nas áreas de Análise de Dados, Business Intelligence e Desenvolvimento Web.',
    stack: ['SQL', 'Power BI', 'Excel', 'Next.js'],
    srcLabel: 'Abrir Pasta de Certificados',
    text: 'Repositório com certificados de conclusão de cursos e formações complementares em análise de dados, SQL, Power BI, Excel e desenvolvimento web com Next.js.',
    externalLink: 'https://drive.google.com/drive/folders/1jTRO6-xGluFgw3KiEBguxJnTRl5SkQop?usp=sharing',
  },
];
