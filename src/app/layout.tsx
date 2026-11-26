import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { COMPANY_DATA } from "@/lib/company-data";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const montserrat = localFont({
  src: "./fonts/montserrat-latin.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://daniel72584.github.io/landing-ivezco";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY_DATA.shortName} Colombia | Distribuidor Oficial de Lubricantes Gazpromneft y G-Energy`,
    template: `%s | ${COMPANY_DATA.legalName}`,
  },
  description:
    "Distribuidor oficial en Colombia de los lubricantes europeos Gazpromneft, G-Profi y G-Energy. Soluciones de lubricación para vehículos livianos, transporte pesado, maquinaria e industria. Inversiones Divezco S.A.S., Bogotá, D.C.",
  keywords: [
    "Gazpromneft Colombia",
    "G-Energy Colombia",
    "G-Profi Colombia",
    "Inversiones Divezco SAS",
    "Lubricantes europeos Colombia",
    "Aceite 10W40 Gazpromneft",
    "Diesel Premium 15W40",
    "Aceite Hidráulico HLP 46",
    "Lubricantes Bogotá",
  ],
  authors: [{ name: COMPANY_DATA.legalName }],
  creator: COMPANY_DATA.legalName,
  publisher: COMPANY_DATA.legalName,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: `${COMPANY_DATA.shortName} - Lubricantes Gazpromneft y G-Energy en Colombia`,
    title: `${COMPANY_DATA.legalName} | Lubricantes Gazpromneft y G-Energy en Colombia`,
    description:
      "Soluciones europeas de lubricación para vehículos livianos, transporte de carga, flotas e industria en Colombia. Atención directa en Bogotá, D.C.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#004B93] selection:text-white">
        {children}
      </body>
    </html>
  );
}
