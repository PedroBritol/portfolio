import { FiAward, FiBook, FiBriefcase, FiCpu, FiDownload } from 'react-icons/fi';

export default function Resume() {
  return (
    <section id="curriculo" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-3">
            Trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Currículo
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Experiências profissionais, formação acadêmica e certificações relevantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Coluna: Experiências */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                <FiBriefcase className="size-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experiências</h3>
            </div>

            <div className="border-l-2 border-violet-500/40 pl-6 space-y-6">
              <article className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-emerald-400"
                />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">
                    Estagiário de Engenharia de Dados
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Abr 2026 – Atual
                  </span>
                </div>
                <p className="text-sm font-medium text-violet-300 mb-3">
                  EloGroup · Estágio | Rio de Janeiro, RJ (Remoto)
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                  Atuo no desenvolvimento e manutenção de pipelines de dados e processos de ETL em ambiente cloud, apoiando a estruturação e disponibilização de dados para análises.
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-300 list-disc list-inside">
                  <li>
                    Desenvolvimento e manutenção de pipelines de ETL utilizando Python e SQL.
                  </li>
                  <li>
                    Orquestração e acompanhamento de fluxos e rotinas de dados com Apache Airflow.
                  </li>
                  <li>
                    Transformação, modelagem e validação de dados utilizando dbt.
                  </li>
                  <li>
                    Utilização de serviços em nuvem da AWS para armazenamento e processamento de dados.
                  </li>
                  <li>
                    Provisionamento e versionamento de infraestrutura como código com Terraform.
                  </li>
                </ul>
              </article>

              <article className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-violet-400"
                />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">
                    Estagiário em Análise de Dados
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Fev 2026 – Abr 2026
                  </span>
                </div>
                <p className="text-sm font-medium text-violet-300 mb-3">
                  Rumo Atuarial – Consultoria em Estatística e Atuária · Estágio | Belo Horizonte, MG (Remoto)
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-300 list-disc list-inside">
                  <li>
                    Tratamento e manipulação de grandes volumes de dados utilizando Python.
                  </li>
                  <li>
                    Desenvolvimento de dashboards interativos no Power BI para acompanhamento de indicadores.
                  </li>
                  <li>
                    Criação de fluxos de transformação de dados no Power Query para limpeza, padronização e consolidação.
                  </li>
                  <li>
                    Análise exploratória de dados para identificação de inconsistências e oportunidades de melhoria.
                  </li>
                  <li>
                    Utilização de Excel como ferramenta de apoio para validação, análise pontual e conferência de dados.
                  </li>
                </ul>
              </article>

              <article className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-violet-400"
                />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">
                    Estagiário em Análise de Dados
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Fev 2025 – Fev 2026
                  </span>
                </div>
                <p className="text-sm font-medium text-violet-300 mb-3">
                  Prefeitura Municipal de São Mateus · Estágio | São Mateus, ES
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                  Atuei na criação de dashboards e relatórios interativos utilizando Power BI e Excel, apoiando a análise e o monitoramento de indicadores educacionais e processos de ETL.
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-300 list-disc list-inside">
                  <li>
                    Criação e manutenção de relatórios e dashboards interativos com Excel e Power BI, reduzindo o tempo de análise de KPIs e apoiando a tomada de decisão.
                  </li>
                  <li>
                    Extração, transformação e carga de dados (ETL) via Power Query a partir de arquivos Excel e Google Sheets.
                  </li>
                  <li>
                    Desenvolvimento de tabelas dinâmicas e aplicação de funções avançadas (PROCV, SOMASE/SOMASES, CONT.SES, ÍNDICE + CORRESP, SE/SEERRO) para cruzamento de dados.
                  </li>
                  <li>
                    Suporte à operação do sistema Presença, Censo Escolar e administração do Google Workspace.
                  </li>
                </ul>
              </article>

              <article className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-violet-400"
                />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">
                    Assessor de Desenvolvimento
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Mar 2022 – Abr 2023
                  </span>
                </div>
                <p className="text-sm font-medium text-violet-300 mb-3">
                  Adapti Soluções Web (Empresa Júnior)
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                  Participei de projetos reais como desenvolvedor full stack, atuando tanto no front-end quanto no back-end no desenvolvimento de sistemas internos e sites para empresas.
                </p>
                <ul className="space-y-1.5 text-sm text-neutral-300 list-disc list-inside">
                  <li>
                    Implementação de aplicações full stack com Next.js, Tailwind CSS, TypeScript, Laravel, HTML, CSS e MySQL.
                  </li>
                  <li>
                    Adoção da metodologia ágil SCRUM e versionamento com Git/GitHub em equipe.
                  </li>
                  <li>
                    Desenvolvimento de comunicação técnica e colaboração em entregas para clientes reais.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* Coluna: Educação, Certificações & Stack */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <FiBook className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Educação</h3>
              </div>

              <div className="border-l-2 border-violet-500/40 pl-6">
                <article className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-violet-400"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-white">
                      Engenharia da Computação
                    </h4>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      Cursando
                    </span>
                  </div>
                  <p className="text-sm font-medium text-violet-300 mb-3">
                    Universidade Federal do Espírito Santo (UFES) – CEUNES São Mateus, ES
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                    <strong className="text-neutral-100">Principais disciplinas:</strong> Estrutura de Dados I e II, Engenharia de Software, Banco de Dados, Programação Orientada a Objetos, Estatística Básica, Cálculo (1, 2 e 3) e Física (1 e 2).
                  </p>
                  <ul className="space-y-1.5 text-sm text-neutral-300 list-disc list-inside">
                    <li>
                      Membro do Centro Acadêmico de Engenharia da Computação (CAEC) – 2023.
                    </li>
                    <li>
                      Participação ativa na empresa júnior Adapti – Soluções Web.
                    </li>
                  </ul>
                </article>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <FiAward className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Cursos & Certificações</h3>
              </div>

              <div className="border-l-2 border-violet-500/40 pl-6">
                <div className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-violet-400"
                  />
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <p className="font-semibold text-white">Power BI</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Universo BI Treinamentos</p>
                    </li>
                    <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <p className="font-semibold text-white">SQL</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Universo BI Treinamentos</p>
                    </li>
                    <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <p className="font-semibold text-white">Excel</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Universo BI Treinamentos</p>
                    </li>
                    <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <p className="font-semibold text-white">Next.js</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Udemy</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <FiCpu className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Foco Técnico Atual</h3>
              </div>

              <div className="border-l-2 border-violet-500/40 pl-6">
                <div className="relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 p-6 shadow-lg space-y-4">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-7 size-3 rounded-full bg-neutral-950 border-2 border-violet-400"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-2">
                      Engenharia & Análise de Dados
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Terraform', 'Apache Airflow', 'dbt', 'SQL', 'Python', 'ETL', 'Power BI', 'Power Query'].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-500/25 text-violet-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-2">
                      Desenvolvimento Web Full Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PHP', 'MySQL'].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/Pedro_Henrique_Brito_Lucas.pdf"
            download="Pedro_Henrique_Brito_Lucas.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-violet-600/90 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-950/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FiDownload className="size-5" />
            <span>Baixar Currículo (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
