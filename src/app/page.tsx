import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import {
  BENEFIT_PILLARS,
  COMPANY_DATA,
  FEATURED_PRODUCTS,
  PRODUCT_CATEGORIES,
  REPRESENTED_BRANDS,
  UNSPLASH_PHOTOS,
} from "@/lib/company-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HomePage() {
  return (
    <div id="inicio" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        {/* PORTADA PRINCIPAL (HERO) CON FOTOGRAFÍA REAL DE UNSPLASH */}
        <section className="relative overflow-hidden bg-[#001F42] text-white">
          <div className="absolute inset-0">
            <Image
              src={`${basePath}${UNSPLASH_PHOTOS.heroMotorOil.url}`}
              alt={UNSPLASH_PHOTOS.heroMotorOil.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001833]/95 via-[#00264D]/85 to-[#001833]/55" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-widest text-amber-400 uppercase">
                Representante y Distribuidor Oficial en Colombia
              </p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Lubricantes Europeos de Alta Tecnología para su Motor y su Flota
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
                En <strong>{COMPANY_DATA.legalName}</strong> distribuimos
                para el mercado colombiano las marcas{" "}
                <strong>Gazpromneft, G-Profi y G-Energy</strong>. Ofrecemos
                aceites de motor, fluidos hidráulicos, refrigerantes y grasas
                que protegen sus equipos y optimizan su rendimiento bajo las
                condiciones de operación más exigentes.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E65100] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#CC4700]"
                >
                  Ver Catálogo de Productos
                </a>
                <a
                  href={COMPANY_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#002B5B]"
                >
                  Hablar con un Asesor Comercial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FRANJA DE MARCAS REPRESENTADAS */}
        <section
          aria-label="Marcas representadas"
          className="border-b border-slate-200 bg-slate-50 py-10"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {REPRESENTED_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="border-l-4 border-[#004B93] pl-5"
                >
                  <h2 className="text-xl font-black tracking-wide text-[#002B5B]">
                    {brand.name}
                  </h2>
                  <p className="mt-0.5 text-xs font-bold text-[#E65100] uppercase">
                    {brand.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {brand.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN QUIÉNES SOMOS CON FOTOGRAFÍA */}
        <section id="nosotros" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-bold tracking-widest text-[#E65100] uppercase">
                  Sobre Nosotros
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-[#002B5B] sm:text-4xl">
                  Respaldo y Suministro Confiable para el Sector Automotriz e
                  Industrial en Colombia
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  <strong>{COMPANY_DATA.legalName}</strong> es una compañía
                  colombiana con sede en la ciudad de Bogotá, D.C., dedicada a
                  la importación y comercialización de lubricantes, fluidos y
                  grasas de calidad europea.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Al igual que la red oficial de distribución de{" "}
                  <strong>Oil Motor</strong> en Suramérica, ponemos a
                  disposición de talleres especializados, lubricentros,
                  empresas de transporte de carga, constructoras e industrias un
                  portafolio certificado por los principales fabricantes de
                  motores y maquinaria a nivel mundial.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-base font-bold text-[#002B5B]">
                      Asesoría Técnica Especializada
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Le orientamos en la selección de la viscosidad y
                      especificación exacta para cada vehículo o equipo de su
                      operación.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#002B5B]">
                      Atención a Nivel Nacional
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Despachamos desde nuestra sede en Bogotá (
                      {COMPANY_DATA.address}) hacia todas las regiones del país.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative h-64 overflow-hidden rounded-xl shadow-md sm:h-80">
                    <Image
                      src={`${basePath}${UNSPLASH_PHOTOS.workshopService.url}`}
                      alt={UNSPLASH_PHOTOS.workshopService.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-xl shadow-md sm:mt-8 sm:h-80">
                    <Image
                      src={`${basePath}${UNSPLASH_PHOTOS.aboutFleet.url}`}
                      alt={UNSPLASH_PHOTOS.aboutFleet.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LÍNEAS DE PRODUCTOS CON FOTOGRAFÍAS REALES DE UNSPLASH */}
        <section
          id="lineas"
          className="border-y border-slate-200 bg-slate-50 py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-widest text-[#004B93] uppercase">
                Nuestras Líneas de Negocio
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#002B5B] sm:text-4xl">
                Soluciones para Cada Tipo de Motor y Maquinaria
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Contamos con referencias específicas para el parque automotor
                liviano, el transporte pesado de carga y los equipos
                industriales.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {PRODUCT_CATEGORIES.map((cat) => (
                <article
                  key={cat.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={`${basePath}${cat.photoUrl}`}
                      alt={cat.photoAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                    <div className="absolute right-4 bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">
                        {cat.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-amber-300">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {cat.description}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                        {cat.applications.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="font-bold text-[#004B93]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-2">
                      <a
                        href="#catalogo"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004B93] transition hover:text-[#E65100]"
                      >
                        <span>Ver productos de esta línea</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE PRODUCTOS DESTACADOS */}
        <section id="catalogo" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#E65100] uppercase">
                  Catálogo Destacado
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-[#002B5B] sm:text-4xl">
                  Referencias Principales Gazpromneft y G-Energy
                </h2>
                <p className="mt-2 max-w-2xl text-base text-slate-600">
                  Consulte nuestras referencias de mayor rotación para ventas al
                  por mayor y al detal. Solicite fichas técnicas y precios para
                  distribuidores o flotas.
                </p>
              </div>
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#004B93] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#003870]"
              >
                Solicitar Lista de Precios Completa
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PRODUCTS.map((product) => {
                const productWhatsappUrl = `https://wa.me/${COMPANY_DATA.phone1Raw}?text=${encodeURIComponent(
                  `Buen día, ${COMPANY_DATA.legalName}. Me gustaría recibir cotización del producto ${product.name} (${product.presentation}).`
                )}`;

                return (
                  <article
                    key={product.id}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#004B93]/40 hover:shadow-lg"
                  >
                    <div>
                      <div className="relative flex items-center justify-center bg-slate-900 p-6">
                        {product.tag && (
                          <span className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#002B5B] shadow-sm">
                            {product.tag}
                          </span>
                        )}
                        <Image
                          src={`${basePath}${product.image}`}
                          alt={product.name}
                          width={260}
                          height={260}
                          className="h-48 w-48 object-contain"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-bold tracking-wider text-[#E65100] uppercase">
                            {product.brand}
                          </span>
                          <span className="text-slate-500">
                            {product.presentation}
                          </span>
                        </div>

                        <h3 className="mt-2 text-lg font-extrabold text-[#002B5B]">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-[#004B93]">
                          {product.specs}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
                      <a
                        href={productWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#004B93] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#003870]"
                      >
                        <span>Cotizar este producto</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PILARES DE CALIDAD (Los 4 beneficios de Oil Motor) */}
        <section className="bg-[#002B5B] py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                Respaldo Internacional
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                ¿Por qué elegir lubricantes Gazpromneft y G-Energy?
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFIT_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/15 bg-white/5 p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E65100] text-sm font-black text-white">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN DE CONTACTO CORPORATIVO */}
        <section id="contacto" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Información de contacto de Inversiones Divezco S.A.S. */}
              <div className="lg:col-span-5">
                <p className="text-xs font-bold tracking-widest text-[#E65100] uppercase">
                  Contacto Comercial
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-[#002B5B] sm:text-4xl">
                  Comuníquese con Nosotros
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Estamos a su disposición para atender solicitudes de
                  cotización, suministro para flotas, compras al por mayor y
                  asesoría técnica sobre toda nuestra línea de lubricantes.
                </p>

                <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div>
                    <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Empresa Distribuidora
                    </h3>
                    <p className="mt-1 text-lg font-extrabold text-[#002B5B]">
                      {COMPANY_DATA.legalName}
                    </p>
                    <p className="text-sm font-medium text-slate-600">
                      NIT: {COMPANY_DATA.nit}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Dirección en Bogotá
                    </h3>
                    <p className="mt-1 text-base font-bold text-slate-800">
                      {COMPANY_DATA.address}
                    </p>
                    <p className="text-sm text-slate-600">
                      {COMPANY_DATA.city}, {COMPANY_DATA.country}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Líneas Telefónicas y WhatsApp
                    </h3>
                    <div className="mt-2 flex flex-col gap-1.5">
                      <a
                        href={`tel:+${COMPANY_DATA.phone1Raw}`}
                        className="text-base font-bold text-[#004B93] transition hover:text-[#E65100]"
                      >
                        {COMPANY_DATA.phone1Display}
                      </a>
                      <a
                        href={`tel:+${COMPANY_DATA.phone2Raw}`}
                        className="text-base font-bold text-[#004B93] transition hover:text-[#E65100]"
                      >
                        {COMPANY_DATA.phone2Display}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Correo Electrónico
                    </h3>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="mt-1 block text-base font-bold text-[#004B93] transition hover:text-[#E65100]"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA CORPORATIVO */}
      <footer className="bg-[#001833] py-12 text-sm text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="text-lg font-black text-white">
                {COMPANY_DATA.legalName}
              </p>
              <p className="mt-1 text-xs font-semibold text-amber-400">
                NIT {COMPANY_DATA.nit} • Bogotá, D.C., Colombia
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Distribuidor oficial en Colombia de lubricantes europeos
                Gazpromneft, G-Profi y G-Energy para vehículos livianos,
                transporte pesado, maquinaria amarilla e industria.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-white uppercase">
                Navegación Rápida
              </p>
              <ul className="mt-3 space-y-2 text-xs">
                <li>
                  <a href="#inicio" className="hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="hover:text-white">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#lineas" className="hover:text-white">
                    Líneas de Productos
                  </a>
                </li>
                <li>
                  <a href="#catalogo" className="hover:text-white">
                    Catálogo Destacado
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white">
                    Contacto y Cotizaciones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-white uppercase">
                Atención al Cliente
              </p>
              <ul className="mt-3 space-y-2 text-xs">
                <li>Dirección: {COMPANY_DATA.fullAddress}</li>
                <li>
                  Correo:{" "}
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="text-amber-300 hover:underline"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </li>
                <li>
                  Teléfonos:{" "}
                  <a
                    href={`tel:+${COMPANY_DATA.phone1Raw}`}
                    className="hover:text-white"
                  >
                    {COMPANY_DATA.phone1Display}
                  </a>{" "}
                  /{" "}
                  <a
                    href={`tel:+${COMPANY_DATA.phone2Raw}`}
                    className="hover:text-white"
                  >
                    {COMPANY_DATA.phone2Display}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {COMPANY_DATA.legalName} — Todos los
              derechos reservados.
            </p>
            <p>
              Fotografías bajo licencia libre de Unsplash • Bogotá, D.C.,
              Colombia
            </p>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={COMPANY_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comunicarse por WhatsApp con Inversiones Divezco S.A.S."
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-xs font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#1EBE5B]"
      >
        <span>WhatsApp Comercial • {COMPANY_DATA.phone1Display}</span>
      </a>
    </div>
  );
}
