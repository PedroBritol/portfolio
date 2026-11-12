'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 'projects', label: 'Projetos', href: '/#projects' },
  { id: 'skills', label: 'Habilidades', href: '/#skills' },
  { id: 'sobremim', label: 'Sobre Mim', href: '/#sobremim' },
  { id: 'curriculo', label: 'Currículo', href: '/#curriculo' },
  { id: 'contact', label: 'Contato', href: '/#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname.startsWith('/projetos') ? 'projects' : '');
      return;
    }

    const sectionIds = navLinks.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30'
          : 'bg-neutral-950/45 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-lg font-semibold text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-violet-400 rounded-md"
          aria-label="Pedro Brito - Ir para o início"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo4.png"
            alt="Logo Pedro Brito"
            width={36}
            height={36}
            className="w-9 h-9 object-contain rounded-md"
            priority
          />
          <span className="tracking-tight">Pedro Brito</span>
        </Link>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="size-10 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-violet-400 transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {isMenuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-nav-menu"
          className={`w-full md:w-auto md:flex md:items-center md:gap-2 transition-all duration-200 ${
            isMenuOpen ? 'block pt-4 pb-2' : 'hidden'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-violet-400 ${
                    isActive
                      ? 'text-violet-300 bg-violet-500/15 border border-violet-500/25'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/Pedro_Henrique_Brito_Lucas.pdf"
              download="Pedro_Henrique_Brito_Lucas.pdf"
              onClick={handleLinkClick}
              className="mt-2 md:mt-0 md:ml-2 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium bg-violet-600/90 hover:bg-violet-500 text-white shadow-sm shadow-violet-950/50 transition-colors focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              <FiDownload className="size-4" />
              <span>Currículo PDF</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
