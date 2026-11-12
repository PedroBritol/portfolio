import React from 'react';
type ProjectProps = {
    id: string;
    imageUrl: string[];
    title: string;
    description: string;
    stack?: string[];
    frame?: React.ReactNode;
    src?: string;
    text: string;
    textTittle2?: string;
    text2?: string;
    textTittle3?: string;
    text3?: string;
    externalLink?: string;
};

export const projectsData: ProjectProps[] = [
    {
        id: "1",
        imageUrl:["/frotas1.png", "/frotas2.png", "/frotas3.png", "/frotas4.png", "/frotas5.png"],
        title: "Dashboard de Frotas",
        description:"Sistema de gerenciamento de frotas desenvolvido com Power BI e Excel, permitindo o monitoramento e a análise de dados de veículos.",
        stack: ["Power BI", "Excel", "Power Query", "DAX"],
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
        imageUrl: ["/portfolio.jpg", "/portfolio2.png", "/portfolio3.png"],
        title: "Este Site",
        description:"Site pessoal desenvolvido com Next.js e Tailwind CSS, apresentando meu portfólio, habilidades e informações de contato.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        src: "https://github.com/pedrobritol/portfolio",
        text: "Este projeto é o desenvolvimento do meu site pessoal, que serve como um portfólio para exibir meus projetos, habilidades e informações de contato. Construído com Next.js, uma poderosa estrutura React para aplicações web, e estilizado com Tailwind CSS, o site é responsivo e moderno. Ele inclui seções detalhadas sobre minha experiência, projetos anteriores e links para minhas redes sociais e repositórios de código. Além disso, o site foi projetado para ser facilmente expansível, permitindo a adição de novos projetos e atualizações de conteúdo de forma eficiente.",
    },
    {
        id: "3",
        imageUrl: ["/imuniza4.png", "/imuniza1.png", "/imuniza2.png", "/imuniza3.png"],
        title: "Imuniza",
        description: "Sistema de gerenciamento de vacinação desenvolvido com Laravel.",
        stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        src: "https://github.com/pedrobritol/imuniza",
        text: "O projeto '“Imuniza é um sistema web para gerenciamento de dados de vacinação, desenvolvido em Laravel (PHP) com interface Blade e funcionalidades estruturais para controle de imunização. O projeto permite cadastrar vacinas, pessoas, registros de aplicação, emitir relatórios em PDF e gerenciar as associações entre indivíduos e doses. A aplicação utiliza MySQL para armazenamento de dados e Bootstrap para uma interface responsiva.",
        textTittle2: "Tecnologias Utilizadas:",
        text2: "Laravel: Framework PHP utilizado para o desenvolvimento do backend, fornecendo uma estrutura robusta para construção de aplicações web. Blade: Motor de templates do Laravel, utilizado para criar views dinâmicas e reutilizáveis. MySQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar informações sobre vacinas, pessoas e registros de aplicação. Bootstrap: Biblioteca CSS utilizada para garantir que a interface do usuário seja responsiva e visualmente atraente.",
        textTittle3: "Principais Funcionalidades:",
        text3: "Funcionalidades incluem CRUD completo, Cadastro de Vacinas: Permite adicionar, editar e remover vacinas do sistema. Cadastro de Pessoas: Funcionalidade para gerenciar informações pessoais dos indivíduos. Registro de Aplicações: Sistema para registrar quando uma vacina foi aplicada a uma pessoa específica. Relatórios em PDF: Geração de relatórios detalhados sobre o status de vacinação. Interface Responsiva: Utilização do Bootstrap para garantir que o sistema seja acessível em diferentes dispositivos."
    },
    {
        id: "10",
        imageUrl: ["/certificados.png"],
        title: "Certificados",
        description: "Coleção de certificados obtidos em cursos e treinamentos, demonstrando minhas habilidades e conhecimentos adquiridos.",
        text: "",
        externalLink: "https://drive.google.com/drive/folders/1jTRO6-xGluFgw3KiEBguxJnTRl5SkQop?usp=sharing"
    }
];
