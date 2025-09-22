export type Project = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    stack: string[];
};

export const projects: Project[] = [
    {
    id: "1",
    imageUrl: "/dashboard1.png",
    title: "Dashboard de Frotas",
    description:
    "Sistema de gerenciamento de frotas desenvolvido com Power BI e Excel, permitindo o monitoramento e a análise de dados de veículos.",
    stack: ["Power BI", "Excel", "Power Query"],
    },
    {
    id: "2",
    imageUrl: "/portfolio.png",
    title: "Este Site",
    description:
    "Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meu portfólio, habilidades e informações de contato.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
},
];