"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es-CO">
      <body className="flex min-h-screen items-center justify-center bg-[#060E1A] px-6 text-center text-slate-100">
        <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Error crítico de aplicación
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Por favor recarga la página o contáctanos directamente a
            divezco@hotmail.com.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-500"
          >
            Recargar página
          </button>
        </div>
      </body>
    </html>
  );
}
