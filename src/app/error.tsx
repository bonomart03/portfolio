"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-32 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Algo salió mal</h1>
      <p className="mt-4 text-muted">Ocurrió un error inesperado. Probá de nuevo.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-accent-foreground"
      >
        Reintentar
      </button>
    </div>
  );
}
