
import ProfileCard from './../../../Reactbits/ProfileCard'

export default function Sobremim() {
    return (
      <section id="sobremim" className="py-20">
        <div>
        </div>
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Sobre Mim</h2>
            <ProfileCard
              name="PEDRO BRITO"
              title="Analista e dev"
              handle="pedrobrito04"
              status="Online"
              contactText="INSTAGRAM"
              avatarUrl="/avatar.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              showBehindGradient={false}
              className="mb-12"
            />
          <div className=" flex text-justify space-y-6">
            <p className="text-amber-50">
              Sou estudante de engenharia da computação, apaixonado por tecnologia. Gosto de criar soluções 
              práticas, trabalhar em equipe e estou sempre em busca de aprendizado contínuo e novas experiências. Tenho 
              experiência com projetos reais e uma base sólida em desenvolvimento web e análise de dados. Tenho 
              experiência prática na criação de dashboards interativos (Power BI, Excel), tratamento de dados via Power 
              Query, modelagem de dados e uso de SQL para análise exploratória. Tenho um perfil colaborativo, facilidade 
              para trabalhar em equipe, proativo e com facilidade em aprender novas tecnologias e comunicar dados para 
              públicos diversos. 
            </p>

          </div>
          <div>
            

          </div>
        </div>
      </section>
    );
    }