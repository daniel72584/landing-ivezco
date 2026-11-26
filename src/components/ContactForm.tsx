"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_DATA } from "@/lib/company-data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState("Vehículos Livianos");
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanPhone || !cleanEmail || !cleanMessage) {
      return;
    }

    const summary = [
      `Hola ${COMPANY_DATA.legalName}, solicito cotización / asesoría técnica:`,
      `• Nombre: ${cleanName}`,
      company.trim() ? `• Empresa / Taller / Flota: ${company.trim()}` : null,
      `• Teléfono: ${cleanPhone}`,
      `• Correo: ${cleanEmail}`,
      `• Línea de interés: ${segment}`,
      `• Mensaje: ${cleanMessage}`,
    ]
      .filter(Boolean)
      .join("\n");

    if (channel === "whatsapp") {
      const waLink = `https://wa.me/${COMPANY_DATA.phone1Raw}?text=${encodeURIComponent(summary)}`;
      window.open(waLink, "_blank", "noopener,noreferrer");
    } else {
      const subject = encodeURIComponent(
        `Cotización Lubricantes Gazpromneft / G-Energy - ${cleanName}`
      );
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:${COMPANY_DATA.email}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-[#0A1628]/90 p-6 shadow-2xl sm:p-8"
    >
      <div className="mb-6">
        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-bold tracking-wider text-sky-400 uppercase">
          Atención Directa Colombia
        </span>
        <h3 className="mt-3 text-2xl font-extrabold text-white">
          Envíanos un mensaje o solicita cotización
        </h3>
        <p className="mt-1.5 text-sm text-slate-400">
          Completa tus datos y comunícate de inmediato con{" "}
          <strong className="text-slate-200">{COMPANY_DATA.legalName}</strong>{" "}
          en Bogotá D.C.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold tracking-wider text-slate-300 uppercase"
          >
            Nombre completo *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Carlos Gómez"
            className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#060E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-bold tracking-wider text-slate-300 uppercase"
          >
            Empresa / Flota / Lubricentro
          </label>
          <input
            id="contact-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Opcional"
            className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#060E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-bold tracking-wider text-slate-300 uppercase"
          >
            Teléfono / Celular *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+57 300 000 0000"
            className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#060E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-bold tracking-wider text-slate-300 uppercase"
          >
            Correo electrónico *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@empresa.com"
            className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#060E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-segment"
          className="block text-xs font-bold tracking-wider text-slate-300 uppercase"
        >
          Categoría de producto requerida
        </label>
        <select
          id="contact-segment"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#060E1A] px-4 py-3 text-sm text-white focus:border-sky-500 focus:outline-none"
        >
          <option value="Lubricantes para Vehículos Livianos">
            Lubricantes para Vehículos Livianos (Gazpromneft / G-Energy)
          </option>
          <option value="Productos para Camiones y Maquinarias">
            Productos para Camiones y Maquinarias (Diesel Premium / G-Profi)
          </option>
          <option value="Aceites Hidráulicos HLP y Refrigerantes OAT">
            Aceites Hidráulicos HLP 46 y Refrigerantes Antifreeze SF 12+
          </option>
          <option value="Aditivos y Grasas Premium">
            Aditivos y Grasas Premium (Grease LX EP 2)
          </option>
          <option value="Distribución Mayorista / Flotas">
            Distribución Mayorista / Atención a Flotas y Talleres
          </option>
        </select>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="block text-xs font-bold tracking-wider text-slate-300 uppercase"
        >
          Mensaje o referencias a cotizar *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Indícanos viscosidades (10W-40, 15W-40, 5W-30, HLP 46), presentaciones (1L, 4L, 20L, tambor) o fichas técnicas requeridas..."
          className="mt-1.5 w-full rounded-xl border border-slate-700/80 bg-[#060E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          onClick={() => setChannel("whatsapp")}
          className="flex-1 cursor-pointer rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-teal-500"
        >
          Enviar por WhatsApp ({COMPANY_DATA.phone1Display})
        </button>
        <button
          type="submit"
          onClick={() => setChannel("email")}
          className="flex-1 cursor-pointer rounded-xl border border-sky-500/50 bg-sky-500/10 px-5 py-3.5 text-sm font-bold text-sky-300 transition hover:bg-sky-500/20"
        >
          Enviar a {COMPANY_DATA.email}
        </button>
      </div>

      {submitted && (
        <p className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-300">
          ¡Listo! Se abrió tu canal de contacto directo con Inversiones Divezco
          SAS. También puedes llamarnos al {COMPANY_DATA.phone1Display} o{" "}
          {COMPANY_DATA.phone2Display}.
        </p>
      )}
    </form>
  );
}
