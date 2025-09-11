export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg mb-8">
            Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar!
          </p>
          <a 
            href="mailto:seu-email@dominio.com" 
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            Enviar E-mail
          </a>
          <div className="mt-8 text-lg">
            <p>Ou me encontre no <a href="https://linkedin.com/in/pedro-britol" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">LinkedIn</a>.</p>
          </div>
        </div>
      </section>
    );
  }