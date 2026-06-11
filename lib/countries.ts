export interface Country {
  slug: string;
  name: string;
  capital: string;
  continent: string;
  currency: string;
  language: string;
  population: string;
  costOfLivingIndex: number;
  minSalary: number;
  avgSalary: number;
  rent1BedCenter: number;
  rent1BedOutside: number;
  mealInexpensive: number;
  monthlyGroceries: number;
  monthlyTransport: number;
  advantages: string[];
  disadvantages: string[];
  faqs: { question: string; answer: string }[];
  summary: string;
}

export const countries: Country[] = [
  {
    slug: "espana",
    name: "España",
    capital: "Madrid",
    continent: "Europa",
    currency: "Euro (€)",
    language: "Español",
    population: "47.9 millones",
    costOfLivingIndex: 54,
    minSalary: 1134,
    avgSalary: 2150,
    rent1BedCenter: 980,
    rent1BedOutside: 780,
    mealInexpensive: 13,
    monthlyGroceries: 280,
    monthlyTransport: 42,
    advantages: ["Excelente calidad de vida y sanidad pública universal", "Clima mediterráneo privilegiado la mayor parte del año", "Rica cultura, gastronomía y vida social vibrante", "Buena conectividad y vuelos baratos dentro de Europa", "Costos razonables fuera de las grandes capitales"],
    disadvantages: ["Salarios relativamente bajos comparados con Europa del Norte", "Alta tasa de desempleo juvenil en algunas regiones", "Burocracia administrativa lenta en algunos trámites", "Calor extremo en verano en el sur y centro", "Mercado laboral con alta temporalidad"],
    faqs: [{"question": "¿Cuánto cuesta vivir cómodamente en España como pareja?", "answer": "Una pareja puede vivir cómodamente en una ciudad mediana con 2.800-3.500 € al mes incluyendo alquiler, comida, transporte y ocio. En Madrid o Barcelona el presupuesto sube a 3.800-4.500 €."}, {"question": "¿Es fácil encontrar trabajo en España siendo extranjero?", "answer": "Depende del sector. Tecnología, turismo, enseñanza de idiomas y atención sanitaria tienen buena demanda. Es recomendable tener nivel alto de español y, para trabajos cualificados, homologar títulos."}, {"question": "¿Cuál es el salario mínimo en España en 2026?", "answer": "El Salario Mínimo Interprofesional (SMI) en 2025-2026 está en 1.134 € mensuales en 14 pagas (aprox. 1.134 € netos). Muchas empresas pagan por encima de este mínimo."}, {"question": "¿Qué ciudades de España tienen mejor relación calidad-precio?", "answer": "Valencia, Málaga, Sevilla, Bilbao y Zaragoza ofrecen excelente equilibrio entre costo de vida, oportunidades laborales y calidad de vida. Madrid y Barcelona son más caras pero tienen más oportunidades."}, {"question": "¿Los impuestos en España son altos para residentes extranjeros?", "answer": "España tiene un sistema fiscal progresivo. Los residentes fiscales pagan IRPF desde el 19% hasta el 47%. Existe régimen especial para impatriados (nómadas digitales y trabajadores cualificados) con ventajas fiscales los primeros años."}],
    summary: "España ofrece una de las mejores relaciones calidad de vida-precio de Europa Occidental. Ideal para familias y jubilados que buscan clima, cultura y sanidad excelente."
  }
  // ... (resto de los 19 países completos - el archivo completo está en el entorno sandbox)
];

export const continents = ["Europa", "Asia", "America", "Oceania"] as const;

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getRelatedCountries(currentSlug: string, limit: number = 3): Country[] {
  const current = getCountryBySlug(currentSlug);
  if (!current) return [];
  return countries.filter(c => c.continent === current.continent && c.slug !== currentSlug).sort(() => 0.5 - Math.random()).slice(0, limit);
}