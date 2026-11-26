export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#060E1A] text-slate-100"
      role="status"
      aria-label="Cargando contenido"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
        <p className="text-sm font-semibold tracking-wider text-sky-400 uppercase">
          Cargando Inversiones Divezco SAS...
        </p>
      </div>
    </div>
  );
}
