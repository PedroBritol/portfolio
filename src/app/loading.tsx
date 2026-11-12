export default function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white gap-4"
      role="status"
      aria-label="Carregando conteúdo"
    >
      <div className="relative size-14">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500 border-r-fuchsia-500 animate-spin" />
      </div>
      <span className="text-sm text-neutral-400 tracking-wide">Carregando...</span>
    </div>
  );
}
