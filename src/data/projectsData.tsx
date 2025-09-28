import React from 'react';
export type ProjectProps = {
    id: string;
    imageUrl: string[];
    title: string;
    description: string;
    stack: string[];
    frame?: React.ReactNode;
    src: string;
    text: string;
    textTittle2?: string;
    text2?: string;
    textTittle3?: string;
    text3?: string;
};

export const projectsData: ProjectProps[] = [
    {
    id: "1",
    imageUrl:["/dashboard1.png", "/dashboard2.png"],
    title: "Dashboard de Frotas",
    description:
    "Sistema de gerenciamento de frotas desenvolvido com Power BI e Excel, permitindo o monitoramento e a análise de dados de veículos.",
    stack: ["Power BI", "Excel", "Power Query"],
    frame: <iframe title="Dashboard Frotas" width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiOWEyNWQwN2QtYTEwNi00ZTI3LWExY2UtNTI3YjZjODVkYTE4IiwidCI6ImE4MDRiZjBjLTRjYTUtNDFkOS04MmZmLTQ3N2M1YjlmMzRiNCJ9" frameBorder="0" allowFullScreen={true}></iframe>,
    src: "https://app.powerbi.com/view?r=eyJrIjoiOWEyNWQwN2QtYTEwNi00ZTI3LWExY2UtNTI3YjZjODVkYTE4IiwidCI6ImE4MDRiZjBjLTRjYTUtNDFkOS04MmZmLTQ3N2M1YjlmMzRiNCJ9",
    text: "Este projeto visa a criação de um dashboard de frotas para monitoramento e análise de veículos e sua performance, utilizando Power BI. A solução foi desenvolvida com o objetivo de otimizar a gestão da frota e fornecer insights acionáveis a partir de dados históricos e operacionais.",
    textTittle2: "Tecnologias e Processos Utilizados:",
    text2: "Power BI: Utilizado para construção do dashboard interativo, fornecendo visualizações dinâmicas e intuitivas. ETL com Power Query: O processo de Extração, Transformação e Carga (ETL) foi realizado utilizando o Power Query. Dados foram extraídos de planilhas Excel, transformados de acordo com as necessidades analíticas (limpeza, formatação e agregações), e carregados diretamente para o Power BI para análise.Fonte de Dados: Os dados foram extraídos de arquivos Excel contendo informações sobre os veículos, como: distância percorrida, manutenção realizada, consumo de combustível, entre outros.",
    textTittle3: "Principais Funcionalidades do Dashboard:",
    text3: "Indicadores de Desempenho: Visão clara e objetiva de KPIs essenciais, como quilometragem total, consumo médio de combustível, custos operacionais e status de manutenção. Análise por Veículo e Periodicidade: Permite análise detalhada por veículo, com possibilidade de filtro por períodos específicos (mensal, trimestral, anual). Comparação de Performance: Comparação entre diferentes veículos da frota, permitindo identificar os mais eficientes e aqueles que precisam de atenção. Alertas e Ações: Filtros dinâmicos e gráficos de fácil leitura para identificar problemas de desempenho, como altos custos com combustível ou necessidade de manutenção."
},
    {
    id: "2",
    imageUrl: ["/portfolio.png"],
    title: "Este Site",
    description:
    "Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meu portfólio, habilidades e informações de contato.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    src: "",
    text: "Em desenvolvimento"
},
];