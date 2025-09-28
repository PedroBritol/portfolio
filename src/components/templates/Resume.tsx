export default function Resume() {
    return (
      <section id="curriculo" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Curriculo</h2>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <h2 className="text-white font-extrabold text-2xl mb-8" >Experiências</h2>
            <h2 className="text-white font-extrabold text-2xl mb-8" >Educação</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full break-words">
            <div className="flex flex-col items-start border-l-[#522c8f] border-l-2 pl-4 relative">
                <div className="flex flex-col mb-8  w-full ">
                    <div className="absolute bg-neutral-900 w-3 h-3 rounded-full left-[-7px] border-2 border-[#522c8f]"></div>
                    <h3 className="mt-[-6px] text-amber-50 text-xl font-bold">Estágio em Análise de dados</h3>
                    <span className="text-amber-50 text-xs">Prefeitura de São Mateus – São Mateus ES | fevereiro de 2025 - atualmente</span>
                    <span className="text-amber-50 mt-2">Atuo na criação de dashboards e relatórios interativos utilizando Power BI e Excel, apoiando a análise e o monitoramento de indicadores educacionais. Realizo processos de ETL com Power Query, limpando e transformando dados provenientes de arquivos como Excel e Google Sheets. <br/>
                    - Responsável pela criação e manutenção de relatórios e dashboards interativos com Excel e Power BI o que reduziram o tempo de análise de indicadores e contribuíram na identificação de possíveis problemas/gargalos. <br/>
                    - Apoio à tomada de decisão por meio da análise de dados e indicadores

                    </span>
                </div>
                <div className="flex flex-col  w-full ">
                  <div className="absolute bg-neutral-900 w-3 h-3 rounded-full left-[-7px] border-2 border-[#522c8f]"></div>
                  <h3 className="mt-[-6px] text-amber-50 text-xl font-bold">Assessor de Desenvolvimento</h3>
                  <span className="text-amber-50 text-xs">Adapti Soluções Web (Empresa Júnior) | março de 2022 – abril de 2023</span>
                  <span className="text-amber-50 mt-2">
                    Participei de projetos reais como desenvolvedor full stack, utilizando tecnologias como Next.js, TypeScript, Laravel e MySQL, além de metodologias ágeis como Scrum. Atuei tanto no front-end quanto no back-end, colaborando no desenvolvimento de sistemas e sites.<br/>
                    - Implementei aplicações full-stack com Next.js, Tailwind CSS, Type Script, Laravel, HTML, CSS, MySQL 
                    - Adoção da metodologia SCRUM <br/>
                    - Uso de Git/GitHub no versionamento de código <br/>
                    - Participei de projetos de sistemas internos e sites para empresas reais <br/>
                    - Integrei com equipe ágil e apliquei conceitos de desenvolvimento web <br/>
                    - Aprendi na prática tecnologias back-end e front-end <br />
                    - Desenvolvi habilidades de comunicação e trabalho em equipe
                  </span>
                </div>
            </div>
            <div className="mt-16 md:mt-0 flex flex-col items-start border-l-[#522c8f] border-l-2 pl-4 relative">
              <div className="flex flex-col w-full ">
                  <div className="absolute bg-neutral-900 w-3 h-3 rounded-full left-[-7px] border-2 border-[#522c8f]"></div>
                  <h3 className="mt-[-6px] text-amber-50 text-xl font-bold">Cursando Engenharia da Computação </h3>
                  <span className="text-amber-50 text-xs">Universidade Federal do Espírito Santo - CEUNES São Mateus ES</span>
                  <span className="text-amber-50 mt-2">
                    Principais disciplinas: Estrtura de Dados I, Estrutura de Dados II, Engenharia de Software, Banco de Dados, Programação Orientada à Objetos, Estatística básica, Cálculos (1, 2 e 3), Física 1 e 2.<br/>
                    - Membro do Centro Acadêmico de Engenharia da Computação (CAEC) – 2023
                  </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }