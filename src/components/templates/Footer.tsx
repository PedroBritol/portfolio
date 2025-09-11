export default function Footer() {
    return (
      <footer className="bg-neutral-900 py-6">
        <div className="container mx-auto px-4 text-center text-amber-50">
          <p>&copy; {new Date().getFullYear()} Pedro Brito. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }