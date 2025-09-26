export default function Contact() {
    return (
      <section id="contact" className="py-20 text-whit">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Entre em Contato</h2>
          <p className="text-lg mb-8 text-white">
            Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar!
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:pb_lucasbol@hotmail.com" 
              className=" bg-lime-600 hover:bg-[#522c8f7a] text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
            >
              ENVIAR E-MAIL
            </a>
          </div>
          <div className="mt-20 text-lg text-white flex justify-center">
            <p className="">Ou me encontre no <a href="https://linkedin.com/in/pedro-britol" target="_blank" rel="noopener noreferrer" className="text-lime-600 underline">LinkedIn</a>.</p>
          </div>
        </div>
      </section>
    );
  }