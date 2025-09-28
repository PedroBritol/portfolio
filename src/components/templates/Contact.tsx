import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      icon: FaEnvelope,
      title: 'E-mail',
      info: 'pb_lucasbol@hotmail.com',
      href: 'mailto:pb_lucasbol@hotmail.com',
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      info: '(33) 99904-6688',
      href: "https://wa.me/5533999046688?text=Oi%2C%20tudo%20bem!%20Vim%20pelo%20seu%20site"
    },
    {
      icon: FaLinkedin,
      title: 'Linkedin',
      info: '@pedro-britol',
      href: 'https://www.linkedin.com/in/pedro-britol/',
    },
    {
      icon: FaGithub,
      title: 'Github',
      info: '@PedroBritol',
      href: 'https://github.com/PedroBritol',
    },
  ];

  return (
    <section id="contact" className="py-20 text-white pb-40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Entre em Contato</h2>
        <p className="text-lg mb-8 text-neutral-300 max-w-2xl mx-auto">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar através do meu e-mail ou me encontrar nas minhas redes.
        </p>
        
        <div className="flex justify-center mb-16">
          <a 
            href="mailto:pb_lucasbol@hotmail.com" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
          >
            ENVIAR E-MAIL
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-center flex flex-col items-center"
            >

              <div className="p-4 bg-neutral-800 border border-neutral-700 rounded-full transition-all duration-300 group-hover:bg-purple-600 group-hover:border-purple-500">
                <link.icon 
                  className="size-8 text-purple-400 transition-all duration-300 group-hover:text-white" 
                />
              </div>

              <p className="font-bold text-lg mt-4">{link.title}</p>
              <p className="text-neutral-400">{link.info}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}