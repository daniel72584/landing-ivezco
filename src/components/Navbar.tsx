"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/lib/company-data";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#lineas", label: "Líneas de Productos" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Barra superior de contacto corporativo */}
      <div className="bg-[#002B5B] px-4 py-2 text-xs text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-semibold text-white">
              Distribuidor Oficial de Lubricantes Gazpromneft y G-Energy en
              Colombia
            </span>
            <span className="hidden text-sky-300/60 md:inline">|</span>
            <span className="hidden text-slate-200 md:inline">
              {COMPANY_DATA.fullAddress}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-medium">
            <a
              href={`mailto:${COMPANY_DATA.email}`}
              className="transition hover:text-amber-300"
            >
              {COMPANY_DATA.email}
            </a>
            <a
              href={`tel:+${COMPANY_DATA.phone1Raw}`}
              className="font-semibold text-amber-300 transition hover:text-white"
            >
              Tel.: {COMPANY_DATA.phone1Display}
            </a>
            <a
              href={`tel:+${COMPANY_DATA.phone2Raw}`}
              className="hidden transition hover:text-amber-300 sm:inline"
            >
              {COMPANY_DATA.phone2Display}
            </a>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#004B93] text-lg font-black tracking-tight text-white shadow-sm">
            DV
          </div>
          <div>
            <span className="block text-xl font-black tracking-tight text-[#002B5B]">
              DIVEZCO
            </span>
            <span className="block text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Gazpromneft &amp; G-Energy Colombia
            </span>
          </div>
        </Link>

        {/* Enlaces de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#004B93]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón de acción principal */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contacto"
            className="rounded-lg border border-[#004B93] px-4 py-2.5 text-sm font-bold text-[#004B93] transition hover:bg-slate-50"
          >
            Solicitar Asesoría
          </a>
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#E65100] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#CC4700]"
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú de navegación"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-slate-200 bg-white px-4 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#004B93]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#E65100] px-5 py-3 text-sm font-bold text-white"
            >
              Cotizar por WhatsApp ({COMPANY_DATA.phone1Display})
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
