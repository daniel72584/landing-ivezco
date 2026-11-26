"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_DATA } from "@/lib/company-data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState("Lubricantes para Vehículos Livianos");
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
      `Buen día, ${COMPANY_DATA.legalName}. Deseo solicitar una cotización o asesoría comercial:`,
      `• Nombre: ${cleanName}`,
      company.trim() ? `• Empresa / Taller / Flota: ${company.trim()}` : null,
      `• Teléfono de contacto: ${cleanPhone}`,
      `• Correo electrónico: ${cleanEmail}`,
      `• Línea de interés: ${segment}`,
      `• Solicitud: ${cleanMessage}`,
    ]
      .filter(Boolean)
      .join("\n");

    if (channel === "whatsapp") {
      const waLink = `https://wa.me/${COMPANY_DATA.phone1Raw}?text=${encodeURIComponent(summary)}`;
      window.open(waLink, "_blank", "noopener,noreferrer");
    } else {
      const subject = encodeURIComponent(
        `Solicitud de cotización Gazpromneft / G-Energy - ${cleanName}`
      );
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:${COMPANY_DATA.email}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-10"
    >
      <h3 className="text-2xl font-bold text-[#002B5B]">
        Envíenos su solicitud de cotización
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Complete el siguiente formulario y un asesor comercial de{" "}
        <strong className="font-semibold text-slate-800">
          {COMPANY_DATA.legalName}
        </strong>{" "}
        se pondrá en contacto con usted a la mayor brevedad.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-slate-700"
          >
            Nombre y apellidos *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej.: Juan Carlos Rodríguez"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#004B93] focus:ring-2 focus:ring-[#004B93]/20 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="block text-sm font-semibold text-slate-700"
          >
            Empresa, flota o lubricentro
          </label>
          <input
            id="contact-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Nombre de su empresa (opcional)"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#004B93] focus:ring-2 focus:ring-[#004B93]/20 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-slate-700"
          >
            Teléfono o celular *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ej.: 310 000 0000"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#004B93] focus:ring-2 focus:ring-[#004B93]/20 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-slate-700"
          >
            Correo electrónico *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nombre@empresa.com.co"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#004B93] focus:ring-2 focus:ring-[#004B93]/20 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-segment"
          className="block text-sm font-semibold text-slate-700"
        >
          Línea de productos de su interés
        </label>
        <select
          id="contact-segment"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#004B93] focus:ring-2 focus:ring-[#004B93]/20 focus:outline-none"
        >
          <option value="Lubricantes para Vehículos Livianos">
            Lubricantes para Vehículos Livianos (Gazpromneft / G-Energy)
          </option>
          <option value="Productos para Camiones y Maquinaria Pesada">
            Lubricantes para Camiones y Maquinaria Pesada (Diesel Premium /
            G-Profi)
          </option>
          <option value="Aceites Hidráulicos y Refrigerantes">
            Aceites Hidráulicos HLP 46 y Refrigerantes Antifreeze SF 12+
          </option>
          <option value="Grasas Lubricantes de Extrema Presión">
            Grasas Lubricantes de Extrema Presión (Grease LX EP 2)
          </option>
          <option value="Distribución Mayorista o Atención a Flotas">
            Distribución Mayorista / Suministro para Flotas y Talleres
          </option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-slate-700"
        >
          Detalle de su requerimiento *
          <span className="block text-xs font-normal text-slate-500">
            Indíquenos las viscosidades, presentaciones o referencias que desea
            cotizar.
          </span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escriba aquí su mensaje..."
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#004B93] focus:ring-2 focus:ring-[#004B93]/20 focus:outline-none"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          onClick={() => setChannel("whatsapp")}
          className="flex-1 cursor-pointer rounded-lg bg-[#E65100] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#CC4700]"
        >
          Enviar solicitud por WhatsApp
        </button>
        <button
          type="submit"
          onClick={() => setChannel("email")}
          className="flex-1 cursor-pointer rounded-lg border border-[#004B93] bg-white px-6 py-3.5 text-sm font-bold text-[#004B93] transition hover:bg-slate-50"
        >
          Enviar por correo electrónico
        </button>
      </div>

      {submitted && (
        <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-800">
          Muchas gracias por comunicarse con {COMPANY_DATA.legalName}. Se ha
          abierto su canal de atención directa; también puede llamarnos a las
          líneas {COMPANY_DATA.phone1Display} o {COMPANY_DATA.phone2Display}.
        </p>
      )}
    </form>
  );
}
