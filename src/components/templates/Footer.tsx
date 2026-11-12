import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-britol/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/PedroBritol',
    icon: FaGithub,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5533999046688?text=Oi%2C%20tudo%20bem!%20Vim%20pelo%20seu%20site',
    icon: FaWhatsapp,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/pedrobrito04',
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-neutral-950/90 backdrop-blur-md py-8">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-neutral-300">
        <div className="text-center sm:text-left">
          <Link href="/" className="font-semibold text-white hover:text-violet-300 transition-colors">
            Pedro Brito
          </Link>
          <p className="text-xs text-neutral-400 mt-1">
            Engenharia de Dados, BI & Dev Web • São Mateus, ES
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="size-10 rounded-full border border-white/10 bg-white/5 hover:bg-violet-600/20 hover:border-violet-400/50 text-neutral-300 hover:text-violet-300 flex items-center justify-center transition-all duration-200"
            >
              <item.icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-neutral-400 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Pedro Henrique Brito Lucas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
