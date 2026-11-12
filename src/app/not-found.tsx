import Link from 'next/link';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-lg w-full text-center rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md p-8 sm:p-10 shadow-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500/15 text-violet-300 border border-violet-500/30">
            Erro 404
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Página não encontrada
          </h1>
          <p className="mt-3 text-neutral-400 leading-relaxed">
            O endereço que você tentou acessar não existe ou foi movido. Explore os projetos ou volte para a página inicial.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
            >
              Voltar para o Início
            </Link>
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-200 font-medium transition-colors"
            >
              Ver Projetos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

