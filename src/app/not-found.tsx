import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#060E1A] px-6 text-center text-slate-100">
      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-sky-400 uppercase">
        Error 404
      </span>
      <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-slate-300">
        La ruta que buscas no existe o fue trasladada. Regresa al portal
        principal de Inversiones Divezco SAS.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-sky-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sky-500"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
