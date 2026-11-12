'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiCopy, FiExternalLink } from 'react-icons/fi';

const EMAIL = 'pb_lucasbol@hotmail.com';

const contactLinks = [
  {
    icon: FaEnvelope,
    title: 'E-mail',
    info: EMAIL,
    href: `mailto:${EMAIL}`,
    isExternal: false,
  },
  {
    icon: FaPhone,
    title: 'Telefone / WhatsApp',
    info: '(33) 99904-6688',
    href: 'https://wa.me/5533999046688?text=Oi%2C%20tudo%20bem!%20Vim%20pelo%20seu%20site',
    isExternal: true,
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    info: '@pedro-britol',
    href: 'https://www.linkedin.com/in/pedro-britol/',
    isExternal: true,
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    info: '@PedroBritol',
    href: 'https://github.com/PedroBritol',
    isExternal: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-3">
          Contato
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight">
          Entre em Contato
        </h2>
        <p className="text-base sm:text-lg mb-8 text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Estou aberto a novas oportunidades, projetos e colaborações. Sinta-se à vontade para enviar um e-mail, chamar no WhatsApp ou conectar-se pelas redes.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5 mb-14">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-7 rounded-xl text-base shadow-lg shadow-violet-950/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaEnvelope className="size-4" />
            <span>Enviar E-mail</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-100 font-semibold py-3 px-6 rounded-xl text-base transition-all duration-200 cursor-pointer"
          >
            {copied ? (
              <>
                <FiCheck className="size-4 text-emerald-400" />
                <span className="text-emerald-300">E-mail copiado!</span>
              </>
            ) : (
              <>
                <FiCopy className="size-4 text-violet-300" />
                <span>Copiar E-mail</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/5533999046688?text=Oi%2C%20tudo%20bem!%20Vim%20pelo%20seu%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200 font-semibold py-3 px-6 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="size-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="group relative rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/25"
            >
              {link.isExternal && (
                <FiExternalLink
                  aria-hidden="true"
                  className="size-3.5 text-neutral-500 group-hover:text-violet-300 absolute top-4 right-4 transition-colors"
                />
              )}
              <div className="p-4 bg-violet-500/10 border border-violet-500/20 rounded-full transition-all duration-300 group-hover:bg-violet-600 group-hover:border-violet-400">
                <link.icon className="size-6 text-violet-300 transition-colors duration-300 group-hover:text-white" />
              </div>
              <p className="font-bold text-base text-white mt-4">{link.title}</p>
              <p className="text-sm text-neutral-400 mt-1 break-all group-hover:text-neutral-200 transition-colors">
                {link.info}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
