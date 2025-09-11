const projects = [
    {
      title: "Sistema de Gestão de Documentos",
      description: "Plataforma web construída com Laravel e Next.js para gerenciar, versionar e compartilhar documentos de forma segura.",
      stack: ["Next.js", "Laravel", "TypeScript", "MySQL"],
    },
    {
      title: "Dashboard de Análise de Vendas",
      description: "Painel interativo que processa e visualiza dados de vendas em tempo real, utilizando PySpark para o ETL e Power BI para a visualização.",
      stack: ["Python", "PySpark", "Pandas", "Power BI"],
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm text-cyan-300 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }