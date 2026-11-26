import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { COMPANY_DATA } from "@/lib/company-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://daniel72584.github.io/landing-ivezco";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY_DATA.legalName} | Lubricantes Gazpromneft, G-Profi y G-Energy en Colombia`,
    template: `%s | ${COMPANY_DATA.legalName}`,
  },
  description:
    "Distribuidor oficial en Colombia de lubricantes europeos Gazpromneft, G-Profi y G-Energy. Aceites de motor para vehículos livianos, camiones, maquinaria pesada, hidráulicos HLP, refrigerantes OAT y grasas EP. Inversiones Divezco SAS - Bogotá D.C.",
  keywords: [
    "Gazpromneft Colombia",
    "G-Energy Colombia",
    "G-Profi Colombia",
    "Inversiones Divezco SAS",
    "Lubricantes europeos Colombia",
    "Aceite 10W40 Gazpromneft",
    "Diesel Premium 15W40",
    "Aceite Hidráulico HLP 46",
    "Antifreeze SF 12+",
    "Grease LX EP 2",
    "Lubricantes Bogotá",
  ],
  authors: [{ name: COMPANY_DATA.legalName }],
  creator: COMPANY_DATA.legalName,
  publisher: COMPANY_DATA.legalName,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: `${COMPANY_DATA.shortName} - Gazpromneft & G-Energy Colombia`,
    title: `${COMPANY_DATA.legalName} | Lubricantes Gazpromneft y G-Energy Colombia`,
    description:
      "Soluciones europeas de lubricación para vehículos livianos, transporte pesado, flotas e industria en Colombia. Contacto directo en Bogotá D.C.",
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
    <html
      lang="es-CO"
      className={`${inter.variable} ${montserrat.variable} dark`}
    >
      <body className="min-h-screen bg-[#060E1A] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
