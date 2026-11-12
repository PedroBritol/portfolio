
import ProfileCard from '../../../Reactbits/ProfileCard'
import { FiDownload } from 'react-icons/fi';

export default function AboutMe() {
    return (
      <section id="sobremim" className="py-20">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Sobre Mim</h2>
            <div className='contents lg:flex'>
                <ProfileCard
                  name="PEDRO BRITO"
                  title="Analista e dev"
                  handle="pedro-britol"
                  status="Online"
                  contactText="LINKEDIN"
                  avatarUrl="/avatar.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  showBehindGradient={false}
                  className="mb-12 lg:mb-0"
                />
                <div className='flex-col lg:ml-16 lg:flex lg:justify-center'>
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
                  <div className='mt-10 flex justify-center'>
                    <a
                      href="/Pedro_Henrique_Brito_Lucas.pdf"
                      download="Pedro_Henrique_Brito_Lucas.pdf"
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transform transition duration-300 hover:scale-105 flex items-center space-x-2"
                    >
                      <FiDownload className="h-5 w-5" />
                      <span>Baixar Currículo</span>
                    </a>
                    <a
                      href="https://wa.me/5533999046688?text=Oi%2C%20tudo%20bem!%20Vim%20pelo%20seu%20site"
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transform transition duration-300 hover:scale-105 flex items-center space-x-2 ml-4"
                    >
                      <span>Entrar em Contato</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
      </section>
    );
    }