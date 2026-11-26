import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import {
  BENEFIT_PILLARS,
  COMPANY_DATA,
  FEATURED_PRODUCTS,
  PRODUCT_CATEGORIES,
  REPRESENTED_BRANDS,
} from "@/lib/company-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HomePage() {
  return (
    <div id="inicio" className="min-h-screen bg-[#060E1A] text-slate-100">
      <Navbar />

      <main>
        {/* HERO SECTION (Replicating oilmotorchile.com value proposition for Colombia) */}
        <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#071426] via-[#060E1A] to-[#081529] py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,132,199,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.14),transparent_45%)]"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Hero Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-extrabold tracking-widest text-sky-400 uppercase">
                  <span>Representante y Distribuidor Oficial en Colombia</span>
                  <span className="text-amber-400">•</span>
                  <span className="text-amber-300">
                    {COMPANY_DATA.legalName}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Lubricantes de{" "}
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
                    Tecnología Europea
                  </span>{" "}
                  para Máxima Exigencia
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Somos distribuidores en Colombia de las marcas europeas{" "}
                  <strong className="font-bold text-white">
                    GAZPROMNEFT, G-PROFI y G-ENERGY
                  </strong>
                  . Entregamos soluciones avanzadas de lubricación para{" "}
                  <strong className="text-sky-300">
                    vehículos livianos, camiones, maquinarias, flotas, talleres
                    e industria
                  </strong>
                  , respaldados por estándares internacionales API, ACEA y DIN.
                </p>

                {/* Primary Hero CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#productos"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-4 text-sm font-extrabold tracking-wide text-white shadow-xl shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500"
                  >
                    Ver Catálogo de Productos
                  </a>
                  <a
                    href={COMPANY_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-amber-500/50 bg-amber-500/10 px-7 py-4 text-sm font-extrabold tracking-wide text-amber-300 transition hover:bg-amber-500/20"
                  >
                    Solicitar Cotización • {COMPANY_DATA.phone1Display}
                  </a>
                </div>

                {/* Quick Trust Credentials */}
                <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Marcas Oficiales
                    </dt>
                    <dd className="mt-1 text-lg font-extrabold text-white">
                      Gazpromneft & G-Energy
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Sede Principal
                    </dt>
                    <dd className="mt-1 text-lg font-extrabold text-sky-400">
                      Bogotá D.C., Colombia
                    </dd>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <dt className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Respaldo Legal DIAN
                    </dt>
                    <dd className="mt-1 text-lg font-extrabold text-amber-400">
                      NIT {COMPANY_DATA.nit}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Hero Product Graphic (LCP Priority Image) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-lg rounded-3xl border border-sky-500/25 bg-[#09182E]/80 p-4 shadow-2xl shadow-sky-950/60">
                  <Image
                    src={`${basePath}/images/hero-engine.svg`}
                    alt="Lubricantes Gazpromneft, G-Profi y G-Energy distribuidos en Colombia por Inversiones Divezco SAS"
                    width={640}
                    height={480}
                    priority
                    className="h-auto w-full rounded-2xl"
                  />
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-[#060E1A]/90 px-4 py-3 text-xs">
                    <div>
                      <p className="font-bold text-white">
                        Disponibilidad en Bogotá y Despachos Nacionales
                      </p>
                      <p className="text-slate-400">
                        Presentaciones de 1L, 4L, Bidón 20L y Tambor 205L
                      </p>
                    </div>
                    <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 font-bold text-emerald-400">
                      Stock Activo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 CORE PILLARS (Exact pillars from oilmotorchile.com) */}
        <section
          id="beneficios"
          aria-labelledby="pillars-heading"
          className="border-b border-slate-800/70 bg-[#050B15] py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase">
                Estándares Internacionales
              </span>
              <h2
                id="pillars-heading"
                className="mt-2 text-3xl font-black text-white sm:text-4xl"
              >
                ¿Por qué elegir lubricantes Gazpromneft y G-Energy?
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFIT_PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#091526] p-6 transition hover:-translate-y-1 hover:border-sky-500/50"
                >
                  <div>
                    <span className="inline-block rounded-lg bg-sky-500/15 px-3 py-1 text-xs font-extrabold text-sky-400">
                      {pillar.metric}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REPRESENTANTE OFICIAL / QUIÉNES SOMOS SECTION */}
        <section
          id="nosotros"
          aria-labelledby="about-heading"
          className="border-b border-slate-800/70 bg-[#071120] py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-extrabold tracking-widest text-amber-400 uppercase">
                  Quiénes Somos • Colombia
                </span>
                <h2
                  id="about-heading"
                  className="mt-4 text-3xl font-black text-white sm:text-4xl"
                >
                  Representantes y Distribuidores de Alta Tecnología Europea
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  Siguiendo el modelo de excelencia de{" "}
                  <strong className="text-white">Oil Motor</strong> en
                  Latinoamérica,{" "}
                  <strong className="text-sky-400">
                    {COMPANY_DATA.legalName}
                  </strong>{" "}
                  (NIT {COMPANY_DATA.nit}) acerca al mercado colombiano el
                  portafolio de lubricantes, fluidos hidráulicos, refrigerantes
                  y grasas de{" "}
                  <strong className="text-white">
                    Gazpromneft, G-Profi y G-Energy
                  </strong>
                  .
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  Operamos desde nuestra sede principal en{" "}
                  <strong className="text-white">
                    {COMPANY_DATA.fullAddress}
                  </strong>
                  , brindando atención técnica personalizada, suministro
                  confiable para flotas de transporte pesado, maquinaria
                  industrial, talleres automotrices y distribuidores en todo el
                  territorio nacional.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-[#0A182D] p-4">
                    <p className="text-xs font-bold tracking-wider text-sky-400 uppercase">
                      Razón Social Oficial
                    </p>
                    <p className="mt-1 text-base font-extrabold text-white">
                      {COMPANY_DATA.legalName}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      NIT: {COMPANY_DATA.nit} • CIIU {COMPANY_DATA.ciiuCode}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-[#0A182D] p-4">
                    <p className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                      Ubicación & Despachos
                    </p>
                    <p className="mt-1 text-base font-extrabold text-white">
                      {COMPANY_DATA.address}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {COMPANY_DATA.city} — {COMPANY_DATA.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Represented Brands Cards */}
              <div className="space-y-4 lg:col-span-6">
                {REPRESENTED_BRANDS.map((brand) => (
                  <div
                    key={brand.name}
                    className="rounded-2xl border border-slate-800 bg-[#0A172B] p-6 shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-block rounded-lg bg-gradient-to-r ${brand.accent} px-3.5 py-1 text-sm font-black tracking-wider text-white`}
                      >
                        {brand.name}
                      </span>
                      <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                        Calidad Europea Certificada
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold text-white">
                      {brand.tagline}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                      {brand.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3 PRODUCT CATEGORIES (Replicating oilmotorchile.com categories) */}
        <section
          id="categorias"
          aria-labelledby="categories-heading"
          className="border-b border-slate-800/70 bg-[#060E1A] py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase">
                Soluciones Integrales de Lubricación
              </span>
              <h2
                id="categories-heading"
                className="mt-2 text-3xl font-black text-white sm:text-4xl"
              >
                Líneas de Productos para Cada Sector
              </h2>
              <p className="mt-3 text-base text-slate-300">
                Cubrimos todas las necesidades de lubricación automotriz,
                transporte de carga, maquinaria amarilla, sistemas hidráulicos y
                mantenimiento industrial.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {PRODUCT_CATEGORIES.map((cat) => (
                <article
                  key={cat.id}
                  className={`flex flex-col justify-between rounded-3xl border bg-[#0A1628] p-8 transition ${cat.accentColor}`}
                >
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-bold tracking-wider text-sky-400 uppercase">
                      {cat.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {cat.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-slate-800 pt-5 text-xs text-slate-200">
                      {cat.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="font-bold text-sky-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#productos"
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-sky-400 transition hover:text-sky-300"
                    >
                      <span>Explorar referencias</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED CATALOG SECTION (Exact references from oilmotorchile.com adapted for Colombia quotes) */}
        <section
          id="productos"
          aria-labelledby="catalog-heading"
          className="border-b border-slate-800/70 bg-[#050C17] py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">
                  Catálogo Oil Motor • Colombia
                </span>
                <h2
                  id="catalog-heading"
                  className="mt-2 text-3xl font-black text-white sm:text-4xl"
                >
                  Productos Destacados Gazpromneft & G-Energy
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-300">
                  Referencias principales para entrega inmediata y cotización al
                  por mayor o detal a través de{" "}
                  <strong className="text-white">
                    {COMPANY_DATA.legalName}
                  </strong>
                  .
                </p>
              </div>
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-sky-500/40 bg-sky-500/10 px-5 py-3 text-xs font-extrabold tracking-wider text-sky-300 uppercase transition hover:bg-sky-500/20"
              >
                Solicitar Ficha Técnica o Lista de Precios
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PRODUCTS.map((product) => {
                const productWhatsappUrl = `https://wa.me/${COMPANY_DATA.phone1Raw}?text=${encodeURIComponent(
                  `Hola ${COMPANY_DATA.legalName}, me interesa cotizar el producto ${product.name} (${product.presentation}).`
                )}`;

                return (
                  <article
                    key={product.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-[#091628] transition hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-950/50"
                  >
                    <div>
                      <div className="relative bg-[#071120] p-6">
                        {product.badge && (
                          <span className="absolute top-4 left-4 z-10 rounded-full bg-sky-500/20 px-3 py-1 text-[11px] font-extrabold text-sky-300 backdrop-blur-sm">
                            {product.badge}
                          </span>
                        )}
                        <Image
                          src={`${basePath}${product.image}`}
                          alt={product.name}
                          width={360}
                          height={360}
                          className="mx-auto h-56 w-56 object-contain transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-extrabold tracking-wider text-amber-400 uppercase">
                            {product.brand}
                          </span>
                          <span className="text-slate-400">
                            {product.presentation}
                          </span>
                        </div>

                        <h3 className="mt-2 text-xl font-black text-white">
                          {product.name}
                        </h3>

                        <p className="mt-1.5 text-xs font-semibold text-sky-400">
                          {product.specs}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-slate-300">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-800/80 bg-[#071222] px-6 py-4">
                      <a
                        href={productWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-xs font-extrabold tracking-wider text-white uppercase transition hover:from-sky-400 hover:to-blue-500"
                      >
                        <span>Cotizar Referencia</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT & OFFICIAL RUT DIVEZCO 2026 DATA SECTION */}
        <section
          id="contacto"
          aria-labelledby="contact-heading"
          className="bg-gradient-to-b from-[#060E1A] to-[#040912] py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column: Corporate & RUT Contact Details */}
              <div className="lg:col-span-5">
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-extrabold tracking-widest text-sky-400 uppercase">
                  Canales Oficiales de Contacto
                </span>
                <h2
                  id="contact-heading"
                  className="mt-4 text-3xl font-black text-white sm:text-4xl"
                >
                  Contáctanos en Colombia
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Comunícate directamente con nuestro equipo comercial y técnico
                  en Bogotá D.C. para cotizaciones, fichas técnicas, pedidos
                  mayoristas y convenios para flotas.
                </p>

                {/* Verified Corporate Card from RUT DIVEZCO 2026.pdf */}
                <div className="mt-8 space-y-5 rounded-3xl border border-slate-800 bg-[#0A1628] p-6 shadow-xl">
                  <div className="border-b border-slate-800 pb-4">
                    <p className="text-xs font-bold tracking-wider text-sky-400 uppercase">
                      Razón Social & NIT (RUT DIAN)
                    </p>
                    <p className="mt-1 text-lg font-black text-white">
                      {COMPANY_DATA.legalName}
                    </p>
                    <p className="text-sm font-semibold text-amber-400">
                      NIT: {COMPANY_DATA.nit}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Dirección Principal
                    </p>
                    <p className="mt-1 text-base font-bold text-white">
                      {COMPANY_DATA.address}
                    </p>
                    <p className="text-xs text-slate-300">
                      {COMPANY_DATA.city}, {COMPANY_DATA.country}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Teléfonos & WhatsApp Corporativo
                    </p>
                    <div className="mt-1.5 flex flex-col gap-1.5">
                      <a
                        href={`tel:+${COMPANY_DATA.phone1Raw}`}
                        className="text-base font-extrabold text-sky-400 transition hover:text-sky-300"
                      >
                        📞 {COMPANY_DATA.phone1Display} (Línea Principal)
                      </a>
                      <a
                        href={`tel:+${COMPANY_DATA.phone2Raw}`}
                        className="text-base font-extrabold text-sky-400 transition hover:text-sky-300"
                      >
                        📞 {COMPANY_DATA.phone2Display} (Línea Comercial 2)
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Correo Electrónico Oficial
                    </p>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="mt-1 block text-base font-extrabold text-amber-300 transition hover:text-amber-200"
                    >
                      ✉️ {COMPANY_DATA.email}
                    </a>
                  </div>

                  <div className="border-t border-slate-800 pt-4 text-xs text-slate-400">
                    <p>
                      <strong className="text-slate-200">
                        Representante Legal:
                      </strong>{" "}
                      {COMPANY_DATA.legalRepresentative}
                    </p>
                    <p className="mt-1">
                      <strong className="text-slate-200">
                        Actividad Principal:
                      </strong>{" "}
                      CIIU {COMPANY_DATA.ciiuCode} — Comercio de autopartes,
                      lubricantes y fluidos para vehículos automotores.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact / Quote Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#03070E] py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="text-base font-black text-white">
                {COMPANY_DATA.legalName}
              </p>
              <p className="mt-1 font-semibold text-sky-400">
                NIT {COMPANY_DATA.nit} • Bogotá D.C., Colombia
              </p>
              <p className="mt-3 leading-relaxed">
                Distribuidor oficial en Colombia de lubricantes europeos
                Gazpromneft, G-Profi y G-Energy para vehículos livianos,
                camiones, maquinaria pesada e industria.
              </p>
            </div>

            <div>
              <p className="font-extrabold tracking-wider text-slate-200 uppercase">
                Líneas de Productos
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#productos" className="hover:text-sky-400">
                    GAZPROMNEFT Premium L 10W-40
                  </a>
                </li>
                <li>
                  <a href="#productos" className="hover:text-sky-400">
                    GAZPROMNEFT Diesel Premium 15W-40
                  </a>
                </li>
                <li>
                  <a href="#productos" className="hover:text-sky-400">
                    GAZPROMNEFT Aceite Hidráulico HLP 46
                  </a>
                </li>
                <li>
                  <a href="#productos" className="hover:text-sky-400">
                    GAZPROMNEFT Antifreeze SF 12+ & Grease LX EP 2
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-extrabold tracking-wider text-slate-200 uppercase">
                Datos de Contacto (RUT)
              </p>
              <ul className="mt-3 space-y-2">
                <li>📍 {COMPANY_DATA.fullAddress}</li>
                <li>
                  ✉️{" "}
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="text-sky-400 hover:underline"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </li>
                <li>
                  📞{" "}
                  <a
                    href={`tel:+${COMPANY_DATA.phone1Raw}`}
                    className="hover:text-sky-400"
                  >
                    {COMPANY_DATA.phone1Display}
                  </a>{" "}
                  /{" "}
                  <a
                    href={`tel:+${COMPANY_DATA.phone2Raw}`}
                    className="hover:text-sky-400"
                  >
                    {COMPANY_DATA.phone2Display}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/70 pt-6 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {COMPANY_DATA.legalName} (NIT{" "}
              {COMPANY_DATA.nit}). Todos los derechos reservados.
            </p>
            <p className="text-slate-500">
              Inspirado en Oil Motor • Adaptado para Colombia
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (like oilmotorchile.com) */}
      <a
        href={COMPANY_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Inversiones Divezco SAS"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-5 py-3.5 text-xs font-extrabold text-white shadow-2xl shadow-emerald-600/40 transition hover:scale-105 hover:bg-emerald-400"
      >
        <span className="h-2.5 w-2.5 animate-ping rounded-full bg-white" />
        <span>WhatsApp Divezco • {COMPANY_DATA.phone1Display}</span>
      </a>
    </div>
  );
}
