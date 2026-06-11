import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, getRelatedCountries, countries } from "@/lib/countries";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return { title: "País no encontrado" };
  }

  const title = `Costo de Vida en ${country.name} 2026 | Salario Mínimo, Alquiler y Gastos`;
  const description = `${country.summary} Descubre el salario mínimo (€${country.minSalary}), salario promedio (€${country.avgSalary}), alquiler (desde €${country.rent1BedCenter}) y costo de vida completo en ${country.name}.`;

  return {
    title,
    description,
    keywords: [
      `costo de vida ${country.name.toLowerCase()}`,
      `salario mínimo ${country.name.toLowerCase()}`,
      `alquiler ${country.capital.toLowerCase()}`,
      `vivir en ${country.name.toLowerCase()}`,
      `salario promedio ${country.name.toLowerCase()}`,
      `costo de vida ${country.capital.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const related = getRelatedCountries(slug, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": country.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Costo de Vida en ${country.name}`,
    "description": country.summary,
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pb-24">
      <nav className="flex items-center gap-2 text-sm text-slate-500 py-8">
        <Link href="/" className="hover:text-emerald-600">Inicio</Link>
        <span>/</span>
        <Link href="/paises" className="hover:text-emerald-600">Países</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">{country.name}</span>
      </nav>

      <div className="relative rounded-3xl overflow-hidden mb-10 border border-slate-200 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
        <div className="px-8 md:px-12 py-14 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{getFlagEmoji(slug)}</span>
            <div>
              <div className="text-emerald-400 text-sm tracking-[3px] font-medium">DATOS 2026 • {country.continent.toUpperCase()}</div>
              <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter">{country.name}</h1>
              <p className="text-2xl text-emerald-100 mt-1">{country.capital}</p>
            </div>
          </div>
          <p className="max-w-3xl text-xl text-emerald-100/90 mt-4">{country.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
        {[
          { label: "Capital", value: country.capital },
          { label: "Moneda", value: country.currency },
          { label: "Idioma", value: country.language },
          { label: "Población", value: country.population },
          { label: "Índice Costo Vida", value: `${country.costOfLivingIndex} (NY=100)` },
          { label: "Continente", value: country.continent },
        ].map((fact, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-2xl px-5 py-4">
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
            <div className="font-semibold text-lg tracking-tight">{fact.value}</div>
          </div>
        ))}
      </div>

      <section className="mb-14">
        <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
          Costo de Vida en {country.name}
          <span className="text-sm font-mono px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full align-middle">2026</span>
        </h2>

        <div className="prose prose-slate max-w-none mb-8 text-[15px]">
          <p>El índice de costo de vida en {country.name} es de <strong>{country.costOfLivingIndex}</strong> (Nueva York = 100). 
          Esto significa que vivir en {country.name} es aproximadamente un <strong>{Math.round((100 - country.costOfLivingIndex) / 100 * 100)}% más barato</strong> que en Nueva York.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-7">
            <div className="uppercase text-xs tracking-widest text-emerald-600 font-semibold mb-4">PRECIOS MENSUALES ESTIMADOS</div>
            <div className="space-y-5 text-sm">
              {[
                ["Alquiler 1 hab. centro", `€${country.rent1BedCenter}`],
                ["Alquiler 1 hab. periferia", `€${country.rent1BedOutside}`],
                ["Comida (restaurante barato)", `€${country.mealInexpensive}`],
                ["Comestibles mensuales (1 persona)", `€${country.monthlyGroceries}`],
                ["Transporte público mensual", `€${country.monthlyTransport}`],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between border-b pb-4 last:border-none last:pb-0">
                  <span className="text-slate-600">{label}</span>
                  <span className="font-mono font-semibold tabular-nums">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-7">
            <div className="uppercase text-xs tracking-widest text-emerald-600 font-semibold mb-4">SALARIOS</div>
            <div className="space-y-5 text-sm">
              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-600">Salario mínimo mensual (neto aprox.)</span>
                <span className="font-mono font-semibold tabular-nums">€{country.minSalary}</span>
              </div>
              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-600">Salario promedio mensual (neto)</span>
                <span className="font-mono font-semibold tabular-nums">€{country.avgSalary}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-4 mb-14">
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8">
          <div className="font-semibold text-emerald-800 mb-5 flex items-center gap-2">
            ✓ VENTAJAS DE VIVIR EN {country.name.toUpperCase()}
          </div>
          <ul className="space-y-3 text-sm text-emerald-900">
            {country.advantages.map((adv, i) => (
              <li key={i} className="flex gap-3"><span className="text-emerald-500 mt-1">•</span> {adv}</li>
            ))}
          </ul>
        </div>

        <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8">
          <div className="font-semibold text-rose-800 mb-5 flex items-center gap-2">
            ✗ DESVENTAJAS DE VIVIR EN {country.name.toUpperCase()}
          </div>
          <ul className="space-y-3 text-sm text-rose-900">
            {country.disadvantages.map((dis, i) => (
              <li key={i} className="flex gap-3"><span className="text-rose-500 mt-1">•</span> {dis}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Preguntas frecuentes sobre vivir en {country.name}</h2>
        
        <div className="space-y-3">
          {country.faqs.map((faq, index) => (
            <details key={index} className="group bg-white border border-slate-200 rounded-2xl px-7 py-5 open:shadow-sm transition-all">
              <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-emerald-500 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed pr-6 text-[15px]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-xl tracking-tight">Otros países en {country.continent}</h3>
            <Link href="/paises" className="text-sm text-emerald-600 hover:underline">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/${rel.slug}`} className="block border border-slate-200 hover:border-emerald-200 rounded-2xl p-5 transition-all group">
                <div className="flex gap-4">
                  <div className="text-3xl">{getFlagEmoji(rel.slug)}</div>
                  <div>
                    <div className="font-semibold group-hover:text-emerald-600 transition-colors">{rel.name}</div>
                    <div className="text-sm text-slate-500">{rel.capital}</div>
                    <div className="text-xs mt-2 text-emerald-600 font-mono">Índice {rel.costOfLivingIndex} • €{rel.avgSalary} prom.</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 border-t pt-8">
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">PATROCINADO</div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-28 bg-slate-100 border border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-xs text-slate-400">
            GOOGLE ADSENSE - Espacio publicitario
          </div>
          <div className="h-28 bg-slate-100 border border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-xs text-slate-400 text-center px-4">
            AFILIADOS: Encuentra vuelos y alojamiento a {country.capital}<br />
            <span className="text-emerald-600 text-[10px]">(Reemplaza con enlaces de Booking / Skyscanner)</span>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </div>
  );
}

function getFlagEmoji(slug: string): string {
  const flags: Record<string, string> = {
    espana: "🇪🇸", japon: "🇯🇵", alemania: "🇩🇪", canada: "🇨🇦", australia: "🇦🇺",
    "estados-unidos": "🇺🇸", "reino-unido": "🇬🇧", francia: "🇫🇷", italia: "🇮🇹",
    mexico: "🇲🇽", brasil: "🇧🇷", india: "🇮🇳", "corea-del-sur": "🇰🇷",
    "paises-bajos": "🇳🇱", suecia: "🇸🇪", suiza: "🇨🇭", singapur: "🇸🇬",
    "emiratos-arabes-unidos": "🇦🇪", argentina: "🇦🇷",
  };
  return flags[slug] || "🌍";
}