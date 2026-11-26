export interface ProductItem {
  id: string;
  name: string;
  brand: "GAZPROMNEFT" | "G-ENERGY" | "G-PROFI";
  category:
    | "Lubricantes para Vehículos Livianos"
    | "Productos para Camiones y Maquinarias"
    | "Aditivos y Grasas Premium";
  presentation: string;
  specs: string;
  description: string;
  image: string;
  badge?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accentColor: string;
}

export interface BenefitPillar {
  title: string;
  description: string;
  metric: string;
}

/**
 * Official company & contact data extracted directly from RUT DIVEZCO 2026.pdf (Formulario DIAN 141143480751)
 */
export const COMPANY_DATA = {
  legalName: "INVERSIONES DIVEZCO SAS",
  shortName: "DIVEZCO SAS",
  brandTitle: "OIL MOTOR COLOMBIA • DIVEZCO",
  nit: "900.472.419-1",
  nitRaw: "900472419-1",
  country: "Colombia",
  department: "Bogotá D.C.",
  city: "Bogotá, D.C.",
  address: "CL 15 # 25 - 57",
  fullAddress: "Calle 15 # 25 - 57, Bogotá D.C., Colombia",
  email: "divezco@hotmail.com",
  phone1Display: "+57 310 553 8025",
  phone1Raw: "573105538025",
  phone2Display: "+57 310 814 4535",
  phone2Raw: "573108144535",
  legalRepresentative: "Iván Camilo Rodríguez Montes",
  ciiuCode: "4530",
  whatsappUrl:
    "https://wa.me/573105538025?text=Hola%20Inversiones%20Divezco%20SAS,%20quisiera%20cotizar%20lubricantes%20Gazpromneft%20/%20G-Energy%20en%20Colombia.",
  whatsappSecondaryUrl:
    "https://wa.me/573108144535?text=Hola%20Inversiones%20Divezco%20SAS,%20quisiera%20asesor%C3%ADa%20t%C3%A9cnica%20sobre%20lubricantes%20Gazpromneft.",
} as const;

export const REPRESENTED_BRANDS = [
  {
    name: "GAZPROMNEFT",
    tagline: "Lubricantes Industriales, Diésel Pesado y Automotrices",
    description:
      "Gama integral de aceites de motor, fluidos hidráulicos HLP, refrigerantes OAT y grasas de extrema presión diseñados bajo estándares europeos API, ACEA y DIN.",
    accent: "from-sky-500 to-blue-700",
  },
  {
    name: "G-ENERGY",
    tagline: "Tecnología Sintética Adaptativa (ACF) para Vehículos Modernos",
    description:
      "Línea premium 100% sintética aprobada por fabricantes europeos, asiáticos y americanos para máxima protección contra el desgaste y ahorro de combustible.",
    accent: "from-orange-500 to-amber-600",
  },
  {
    name: "G-PROFI",
    tagline: "Soluciones Heavy-Duty para Flotas, Camiones y Maquinaria",
    description:
      "Formulaciones especializadas para servicio severo On-Highway y Off-Highway en transporte de carga, minería, construcción y sector agroindustrial.",
    accent: "from-cyan-500 to-blue-600",
  },
] as const;

export const BENEFIT_PILLARS: BenefitPillar[] = [
  {
    title: "Tecnología Europea",
    description:
      "Fórmulas avanzadas desarrolladas bajo exigentes estándares internacionales de calidad y aprobaciones OEM.",
    metric: "API • ACEA • DIN",
  },
  {
    title: "Máximo Rendimiento",
    description:
      "Mejora la eficiencia operativa del motor, prolonga su vida útil y optimiza su desempeño en arranque en frío y alta carga.",
    metric: "+35% Estabilidad Térmica",
  },
  {
    title: "Protección Superior",
    description:
      "Reduce significativamente el desgaste prematuro, la oxidación, la corrosión y los depósitos en condiciones severas.",
    metric: "Antidesgaste Avanzado",
  },
  {
    title: "Eficiencia Comprobada",
    description:
      "Ayuda a disminuir el consumo de combustible y aceite, optimizar intervalos de drenaje y reducir costos de mantenimiento.",
    metric: "Ahorro en Flotas",
  },
];

export const PRODUCT_CATEGORIES: CategoryCard[] = [
  {
    id: "vehiculos-livianos",
    title: "Lubricantes para Vehículos Livianos",
    subtitle: "Automóviles, SUVs, camionetas y flotas comerciales ligeras",
    description:
      "Aceites sintéticos y semisintéticos de última generación que garantizan limpieza activa del motor, excelente fluidez a bajas temperaturas y protección continua en tráfico urbano o carretera.",
    highlights: [
      "Protección superior contra lodos y barnices",
      "Óptimo arranque en frío y estabilidad viscosimétrica",
      "Cumplimiento con normas API SP / SN / SL y ACEA A3/B4",
    ],
    accentColor: "border-sky-500/40 hover:border-sky-400",
  },
  {
    id: "camiones-y-maquinarias",
    title: "Productos para Camiones y Maquinarias",
    subtitle: "Motores diésel pesados, sistemas hidráulicos y refrigeración",
    description:
      "Lubricantes Heavy-Duty de alto TBN, fluidos hidráulicos antidesgaste HLP y anticongelantes orgánicos OAT diseñados para soportar jornadas extremas en transporte, obra civil e industria.",
    highlights: [
      "Neutralización de ácidos y control de hollín en diésel",
      "Fluidos hidráulicos HLP con alta filtrabilidad y demulsibilidad",
      "Refrigerantes SF 12+ libres de silicatos, aminas y fosfatos",
    ],
    accentColor: "border-amber-500/40 hover:border-amber-400",
  },
  {
    id: "aditivos-y-grasas",
    title: "Aditivos y Grasas Premium",
    subtitle: "Grasas de complejo de litio EP y protección multipropósito",
    description:
      "Grasas lubricantes de extrema presión (EP) con elevada resistencia mecánica, térmica y al lavado por agua para rodamientos, articulaciones, chasis y equipos industriales.",
    highlights: [
      "Rango térmico extendido desde -30 °C hasta +160 °C",
      "Alta capacidad de carga y resistencia a cargas de choque",
      "Sellado eficaz contra contaminación, polvo y humedad",
    ],
    accentColor: "border-cyan-500/40 hover:border-cyan-400",
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "gazpromneft-premium-l-10w40",
    name: "GAZPROMNEFT Premium L 10W-40",
    brand: "GAZPROMNEFT",
    category: "Lubricantes para Vehículos Livianos",
    presentation: "Botella 1 Litro / Galón 4 Litros",
    specs: "Semisintético • API SL/CF • ACEA A3/B3",
    description:
      "Aceite de motor universal semisintético diseñado para proteger motores a gasolina y diésel de vehículos livianos ante altas temperaturas, inhibiendo la formación de depósitos.",
    image: "/images/prod-premium-l.svg",
    badge: "Más Vendido Livianos",
  },
  {
    id: "gazpromneft-diesel-premium-15w40",
    name: "GAZPROMNEFT Diesel Premium 15W-40",
    brand: "GAZPROMNEFT",
    category: "Productos para Camiones y Maquinarias",
    presentation: "Bidón 20 Litros / Tambor 205 Litros",
    specs: "Heavy Duty • API CI-4/SL • ACEA E7 • MB 228.3",
    description:
      "Lubricante de alto rendimiento para motores diésel turboalimentados de servicio pesado en camiones, buses y maquinaria con sistemas EGR y SCR.",
    image: "/images/prod-diesel-premium.svg",
    badge: "Servicio Pesado",
  },
  {
    id: "gazpromneft-hidraulico-hlp-46",
    name: "GAZPROMNEFT Aceite Hidráulico HLP 46",
    brand: "GAZPROMNEFT",
    category: "Productos para Camiones y Maquinarias",
    presentation: "Bidón 20 Litros / Tambor 205 Litros",
    specs: "ISO VG 46 • DIN 51524 Parte 2 (HLP)",
    description:
      "Fluido hidráulico antidesgaste de alta pureza formulado para sistemas hidráulicos industriales y maquinaria móvil sometidos a altas presiones y variaciones térmicas.",
    image: "/images/prod-hlp-46.svg",
    badge: "Industrial & Maquinaria",
  },
  {
    id: "gazpromneft-antifreeze-sf-12",
    name: "GAZPROMNEFT Antifreeze SF 12+ (Rosado)",
    brand: "GAZPROMNEFT",
    category: "Productos para Camiones y Maquinarias",
    presentation: "Lista para usar (Ready to Use) • 4 Lt / 20 Lt",
    specs: "Tecnología Orgánica OAT • ASTM D3306 / D4985",
    description:
      "Refrigerante y anticongelante de tecnología de ácidos orgánicos (OAT), libre de nitritos, aminas, fosfatos y silicatos para máxima protección en motores de aluminio y hierro.",
    image: "/images/prod-antifreeze-sf12.svg",
    badge: "Tecnología OAT",
  },
  {
    id: "gazpromneft-grease-lx-ep-2",
    name: "GAZPROMNEFT Grease LX EP 2",
    brand: "GAZPROMNEFT",
    category: "Aditivos y Grasas Premium",
    presentation: "Cartucho 400 Grs / Balde 18 Kg",
    specs: "Complejo de Litio • NLGI 2 • DIN 51502 KP2P-30",
    description:
      "Grasa multipropósito de extrema presión con jabón complejo de litio para rodamientos y mecanismos que operan bajo cargas severas entre -30 °C y +160 °C.",
    image: "/images/prod-grease-lx.svg",
    badge: "Extrema Presión",
  },
  {
    id: "g-energy-synthetic-5w30",
    name: "G-ENERGY Synthetic Far East / F Synth 5W-30",
    brand: "G-ENERGY",
    category: "Lubricantes para Vehículos Livianos",
    presentation: "Botella 1 Litro / Galón 4 Litros",
    specs: "100% Sintético • Tecnología ACF • API SP / ILSAC GF-6A",
    description:
      "Lubricante 100% sintético con fórmula adaptativa ACF que ajusta su protección según el régimen de revoluciones del motor y maximiza la economía de combustible.",
    image: "/images/prod-g-energy.svg",
    badge: "100% Sintético ACF",
  },
];
