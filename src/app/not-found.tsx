import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-32 sm:px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Página no encontrada</h1>
      <p className="mt-4 text-muted">El contenido que buscás no existe o fue movido.</p>
      <Link href="/" className="mt-8 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-accent-foreground">
        Volver al inicio
      </Link>
    </div>
  );
}
