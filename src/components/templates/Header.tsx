'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-neutral-900 backdrop-blur-sm text-sm py-3 dark:bg-neutral-900">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" aria-label="Brand" onClick={handleLinkClick}>
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-white">
              <Image
                src="/logo4.png"
                alt="Logo"
                width={100}
                height={0}
                className='w-10 h-10 object-cover'
              />
              Pedro Brito
            </span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-300 basis-full grow sm:block ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {/* <Link className="font-medium text-purple-900 focus:outline-hidden" href="#projects" aria-current="page" onClick={handleLinkClick}>Projetos</Link> */}
            <Link className="font-medium text-white hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/#projects" onClick={handleLinkClick}>Projetos</Link>
            <Link className="font-medium text-white hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/#skills" onClick={handleLinkClick}>Habilidades</Link>
            <Link className="font-medium text-white hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/#sobremim" onClick={handleLinkClick}>Sobre Mim</Link>
            <Link className="font-medium text-[#4c238d] hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/#curriculo" onClick={handleLinkClick}>Curriculo</Link>
            <Link className="font-medium text-white hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/#contact" onClick={handleLinkClick}>Contato</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}