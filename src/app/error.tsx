"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#060E1A] px-6 text-center text-slate-100">
      <div className="max-w-md rounded-2xl border border-red-500/30 bg-slate-900/80 p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">
          Ocurrió un problema inesperado
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          No pudimos cargar esta sección correctamente. Por favor intenta de
          nuevo.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-500"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
