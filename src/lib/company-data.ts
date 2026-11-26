export interface ProductItem {
  id: string;
  name: string;
  brand: "GAZPROMNEFT" | "G-ENERGY" | "G-PROFI";
  category:
    | "Vehículos Livianos"
    | "Camiones y Maquinaria Pesada"
    | "Hidráulicos, Refrigerantes y Grasas";
  presentation: string;
  specs: string;
  description: string;
  image: string;
  tag?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  photoUrl: string;
  photoAlt: string;
  applications: string[];
}

export interface BenefitPillar {
  title: string;
  description: string;
}

/**
 * Fotografías libres de derechos seleccionadas de Unsplash (https://unsplash.com/s/photos/motor-oil)
 */
export const UNSPLASH_PHOTOS = {
  heroMotorOil: {
    url: "/images/photos/hero-motor-oil.jpg",
    unsplashSource: "https://unsplash.com/photos/c456f719a1fc",
    alt: "Aplicación de aceite lubricante en el motor de un vehículo",
    credit: "Tim Mossholder / Unsplash",
  },
  aboutFleet: {
    url: "/images/photos/flotas-transporte.jpg",
    unsplashSource: "https://unsplash.com/s/photos/semi-truck",
    alt: "Transporte de carga pesada en carretera",
    credit: "Unsplash",
  },
  workshopService: {
    url: "/images/photos/taller-mantenimiento.jpg",
    unsplashSource: "https://unsplash.com/s/photos/motor-oil",
    alt: "Servicio de cambio de aceite y mantenimiento especializado",
    credit: "Unsplash",
  },
  lightVehicles: {
    url: "/images/photos/vehiculos-livianos.jpg",
    unsplashSource: "https://unsplash.com/s/photos/car-engine-oil",
    alt: "Automóvil moderno de pasajeros",
    credit: "Unsplash",
  },
  heavyTrucks: {
    url: "/images/photos/camiones-pesados.jpg",
    unsplashSource: "https://unsplash.com/s/photos/semi-truck-highway",
    alt: "Tractocamión de servicio pesado en ruta",
    credit: "Unsplash",
  },
  industrialMachinery: {
    url: "/images/photos/taller-mantenimiento.jpg",
    unsplashSource: "https://unsplash.com/s/photos/motor-oil",
    alt: "Mantenimiento mecánico e industrial de motores",
    credit: "Unsplash",
  },
} as const;

/**
 * Datos corporativos oficiales de INVERSIONES DIVEZCO S.A.S. (RUT 2026)
 */
export const COMPANY_DATA = {
  legalName: "INVERSIONES DIVEZCO S.A.S.",
  shortName: "DIVEZCO",
  nit: "900.472.419-1",
  country: "Colombia",
  city: "Bogotá, D.C.",
  address: "Calle 15 N.° 25 - 57",
  fullAddress: "Calle 15 N.° 25 - 57, Bogotá, D.C., Colombia",
  email: "divezco@hotmail.com",
  phone1Display: "+57 310 553 8025",
  phone1Raw: "573105538025",
  phone2Display: "+57 310 814 4535",
  phone2Raw: "573108144535",
  legalRepresentative: "Iván Camilo Rodríguez Montes",
  whatsappUrl:
    "https://wa.me/573105538025?text=Buen%20d%C3%ADa,%20Inversiones%20Divezco%20S.A.S.%20Deseo%20solicitar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%20de%20lubricantes%20Gazpromneft%20y%20G-Energy.",
} as const;

export const REPRESENTED_BRANDS = [
  {
    name: "GAZPROMNEFT",
    subtitle: "Lubricantes automotrices, diésel pesado e industriales",
    description:
      "Portafolio integral de aceites para motor, fluidos hidráulicos, refrigerantes y grasas de extrema presión elaborados bajo normas internacionales API, ACEA y DIN.",
  },
  {
    name: "G-ENERGY",
    subtitle: "Línea sintética de alto desempeño para vehículos modernos",
    description:
      "Formulaciones 100 % sintéticas con tecnología adaptativa ACF que responden a las exigencias de los principales fabricantes europeos, asiáticos y norteamericanos.",
  },
  {
    name: "G-PROFI",
    subtitle: "Especialistas en transporte de carga y maquinaria pesada",
    description:
      "Lubricantes diseñados para trabajo severo en carretera y fuera de ella, ideales para flotas de camiones, buses, maquinaria amarilla y equipos agroindustriales.",
  },
] as const;

export const BENEFIT_PILLARS: BenefitPillar[] = [
  {
    title: "Tecnología Europea",
    description:
      "Fórmulas avanzadas desarrolladas en centros de investigación europeos bajo estrictos estándares internacionales de calidad.",
  },
  {
    title: "Máximo Rendimiento",
    description:
      "Mejora la eficiencia del motor, facilita el arranque en frío, prolonga su vida útil y optimiza su desempeño en cualquier geografía.",
  },
  {
    title: "Protección Superior",
    description:
      "Reduce de manera comprobada el desgaste interno, la oxidación, la corrosión y la acumulación de depósitos en condiciones severas de operación.",
  },
  {
    title: "Eficiencia Comprobada",
    description:
      "Contribuye a disminuir el consumo de combustible y lubricante, extendiendo los intervalos de mantenimiento y reduciendo los costos operativos de su flota.",
  },
];

export const PRODUCT_CATEGORIES: CategoryCard[] = [
  {
    id: "vehiculos-livianos",
    title: "Lubricantes para Vehículos Livianos",
    subtitle: "Automóviles, camionetas, camperos y flotas comerciales",
    description:
      "Aceites sintéticos y semisintéticos que aseguran la limpieza continua del motor, excelente estabilidad térmica y protección óptima tanto en el tráfico urbano como en carretera.",
    photoUrl: UNSPLASH_PHOTOS.lightVehicles.url,
    photoAlt: UNSPLASH_PHOTOS.lightVehicles.alt,
    applications: [
      "Motores a gasolina, diésel liviano y gas natural vehicular (GNV)",
      "Protección contra el desgaste en arranque y altas temperaturas",
      "Cumplimiento de normas API SP / SN / SL y ACEA A3/B4",
    ],
  },
  {
    id: "camiones-y-maquinarias",
    title: "Productos para Camiones y Maquinaria",
    subtitle: "Tractomulas, buses, maquinaria amarilla y sector agrícola",
    description:
      "Lubricantes de servicio pesado (Heavy Duty) para motores diésel turboalimentados y sistemas hidráulicos sometidos a jornadas continuas y cargas exigentes en la topografía colombiana.",
    photoUrl: UNSPLASH_PHOTOS.heavyTrucks.url,
    photoAlt: UNSPLASH_PHOTOS.heavyTrucks.alt,
    applications: [
      "Control superior de hollín y neutralización de ácidos",
      "Estabilidad de la película lubricante en rutas de montaña",
      "Aprobaciones para motores europeos y norteamericanos (API CI-4 / CJ-4)",
    ],
  },
  {
    id: "aditivos-y-grasas",
    title: "Hidráulicos, Refrigerantes y Grasas",
    subtitle: "Mantenimiento industrial, sistemas hidráulicos y rodamientos",
    description:
      "Fluidos hidráulicos antidesgaste HLP, anticongelantes orgánicos listos para usar y grasas de complejo de litio de extrema presión para equipos móviles y plantas industriales.",
    photoUrl: UNSPLASH_PHOTOS.industrialMachinery.url,
    photoAlt: UNSPLASH_PHOTOS.industrialMachinery.alt,
    applications: [
      "Aceites hidráulicos ISO VG 32, 46 y 68 con alta filtrabilidad",
      "Refrigerantes con tecnología orgánica (OAT) libres de silicatos",
      "Grasas EP resistentes al agua y a temperaturas de hasta 160 °C",
    ],
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "gazpromneft-premium-l-10w40",
    name: "GAZPROMNEFT Premium L 10W-40",
    brand: "GAZPROMNEFT",
    category: "Vehículos Livianos",
    presentation: "Envase de 1 litro y galón de 4 litros",
    specs: "Semisintético • API SL/CF • ACEA A3/B3",
    description:
      "Aceite semisintético versátil para motores a gasolina y diésel de vehículos livianos. Mantiene la presión ideal del aceite y evita la formación de lodos.",
    image: "/images/prod-premium-l.svg",
    tag: "Vehículos Livianos",
  },
  {
    id: "gazpromneft-diesel-premium-15w40",
    name: "GAZPROMNEFT Diesel Premium 15W-40",
    brand: "GAZPROMNEFT",
    category: "Camiones y Maquinaria Pesada",
    presentation: "Cuñete de 20 litros y tambor de 205 litros",
    specs: "Servicio Pesado • API CI-4/SL • ACEA E7 • MB 228.3",
    description:
      "Lubricante de alto desempeño para motores diésel de servicio pesado con turbocompresor y sistemas de recirculación de gases (EGR). Ideal para transporte de carga y maquinaria.",
    image: "/images/prod-diesel-premium.svg",
    tag: "Transporte Pesado",
  },
  {
    id: "gazpromneft-hidraulico-hlp-46",
    name: "GAZPROMNEFT Aceite Hidráulico HLP 46",
    brand: "GAZPROMNEFT",
    category: "Hidráulicos, Refrigerantes y Grasas",
    presentation: "Cuñete de 20 litros y tambor de 205 litros",
    specs: "ISO VG 46 • DIN 51524 Parte 2 (HLP)",
    description:
      "Aceite hidráulico mineral de alta pureza con aditivos antidesgaste, antioxidantes y anticorrosivos para prensas, excavadoras, grúas y equipos industriales.",
    image: "/images/prod-hlp-46.svg",
    tag: "Sistemas Hidráulicos",
  },
  {
    id: "gazpromneft-antifreeze-sf-12",
    name: "GAZPROMNEFT Antifreeze SF 12+",
    brand: "GAZPROMNEFT",
    category: "Hidráulicos, Refrigerantes y Grasas",
    presentation: "Listo para usar • Galón de 4 litros y cuñete de 20 litros",
    specs: "Tecnología Orgánica (OAT) • ASTM D3306 / D4985",
    description:
      "Refrigerante y anticongelante de larga duración formulado con inhibidores orgánicos de corrosión. Protege radiadores, bombas de agua y bloques de aluminio o hierro.",
    image: "/images/prod-antifreeze-sf12.svg",
    tag: "Refrigerante OAT",
  },
  {
    id: "gazpromneft-grease-lx-ep-2",
    name: "GAZPROMNEFT Grease LX EP 2",
    brand: "GAZPROMNEFT",
    category: "Hidráulicos, Refrigerantes y Grasas",
    presentation: "Cartucho de 400 gramos y balde de 18 kilogramos",
    specs: "Complejo de Litio • NLGI 2 • DIN 51502 KP2P-30",
    description:
      "Grasa multipropósito de extrema presión con jabón complejo de litio para rodamientos, cubos de rueda y articulaciones sometidas a cargas de impacto y altas temperaturas.",
    image: "/images/prod-grease-lx.svg",
    tag: "Grasa Extrema Presión",
  },
  {
    id: "g-energy-synthetic-5w30",
    name: "G-ENERGY Synthetic Far East 5W-30",
    brand: "G-ENERGY",
    category: "Vehículos Livianos",
    presentation: "Envase de 1 litro y galón de 4 litros",
    specs: "100 % Sintético • Tecnología ACF • API SP / ILSAC GF-6A",
    description:
      "Lubricante totalmente sintético de última generación que optimiza el ahorro de combustible y brinda máxima protección a motores modernos de inyección directa y turbocargados.",
    image: "/images/prod-g-energy.svg",
    tag: "100 % Sintético",
  },
];
