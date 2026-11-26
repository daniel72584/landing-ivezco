"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/lib/company-data";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Representante Oficial" },
  { href: "#categorias", label: "Líneas de Negocio" },
  { href: "#productos", label: "Catálogo Destacado" },
  { href: "#beneficios", label: "Tecnología Europea" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060E1A]/90 backdrop-blur-md">
      {/* Top Corporate Bar with RUT Divezco Details */}
      <div className="border-b border-slate-800/60 bg-[#040912] px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-semibold text-sky-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {COMPANY_DATA.legalName} • NIT {COMPANY_DATA.nit}
            </span>
            <span className="hidden text-slate-500 sm:inline">|</span>
            <span className="hidden sm:inline">
              📍 {COMPANY_DATA.fullAddress}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-medium">
            <a
              href={`mailto:${COMPANY_DATA.email}`}
              className="transition hover:text-sky-400"
            >
              ✉️ {COMPANY_DATA.email}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:+${COMPANY_DATA.phone1Raw}`}
              className="transition hover:text-sky-400"
            >
              📞 {COMPANY_DATA.phone1Display}
            </a>
            <a
              href={`tel:+${COMPANY_DATA.phone2Raw}`}
              className="hidden transition hover:text-sky-400 md:inline"
            >
              / {COMPANY_DATA.phone2Display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-blue-700 to-amber-500 p-[2px] shadow-lg shadow-sky-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#071324] font-black tracking-tighter text-white">
              <span className="text-sky-400">G</span>
              <span className="text-amber-400">D</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-white">
                DIVEZCO
              </span>
              <span className="rounded bg-sky-500/15 px-2 py-0.5 text-[10px] font-extrabold tracking-widest text-sky-400 uppercase">
                COLOMBIA
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Gazpromneft • G-Energy • G-Profi
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500"
          >
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú de navegación"
          className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-slate-200 transition hover:border-sky-500 hover:text-white lg:hidden"
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

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-slate-800 bg-[#071324] px-4 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800/70 hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-bold text-white"
            >
              Cotizar por WhatsApp ({COMPANY_DATA.phone1Display})
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
