import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Users, Award } from "lucide-react";
import { countries } from "@/lib/countries";

export default function Home() {
  const featuredCountries = countries.slice(0, 6);
  const totalCountries = countries.length;
  const avgCostIndex = Math.round(
    countries.reduce((sum, c) => sum + c.costOfLivingIndex, 0) / countries.length
  );
  const avgSalary = Math.round(
    countries.reduce((sum, c) => sum + c.avgSalary, 0) / countries.length
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium & Fast */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white pt-16 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_0.8px,transparent_1px)] bg-[length:5px_5px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            DATOS ACTUALIZADOS 2026
          </div>
          
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
            El costo de vida<br />real en <span className="text-emerald-400">195 países</span>.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-300 mb-10 tracking-tight">
            Compara salarios, alquileres, comida y transporte.<br />Toma decisiones informadas con datos precisos.
          </p>

          {/* Smart Search */}
          <div className="max-w-xl mx-auto mb-8">
            <form action="/paises" method="GET" className="relative group">
              <input
                type="text"
                name="q"
                placeholder="Busca un país... (España, Japón, Canadá...)"
                className="w-full h-14 pl-6 pr-14 text-lg bg-white text-slate-900 rounded-2xl shadow-xl placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 h-10 w-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center transition-all active:scale-95"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            <p className="text-center text-emerald-300/70 text-sm mt-3">Escribe el nombre de cualquier país del mundo</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/paises" 
              className="inline-flex items-center gap-3 px-8 h-14 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-emerald-50 active:bg-white transition-all text-base shadow-xl"
            >
              Explorar todos los países <ArrowRight size={18} />
            </Link>
            <a 
              href="#estadisticas" 
              className="inline-flex items-center gap-3 px-8 h-14 border border-white/30 hover:bg-white/10 font-medium rounded-2xl transition-all text-base"
            >
              Ver estadísticas globales
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section id="estadisticas" className="border-b border-slate-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-semibold text-emerald-600 tracking-tighter">{totalCountries}</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">PAÍSES CON DATOS</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-emerald-600 tracking-tighter">{avgCostIndex}</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">ÍNDICE PROMEDIO COSTO DE VIDA</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-emerald-600 tracking-tighter">€{avgSalary}</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">SALARIO PROMEDIO MENSUAL</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-emerald-600 tracking-tighter">100%</div>
            <div className="text-sm text-slate-500 mt-1 font-medium">DATOS DE FUENTES PÚBLICAS</div>
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-emerald-600 mb-2">DESTACADOS</div>
            <h2 className="text-4xl font-semibold tracking-tight">Países más explorados este mes</h2>
          </div>
          <Link href="/paises" className="hidden md:flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium group">
            Ver todos <ArrowRight className="group-hover:translate-x-0.5 transition" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {featuredCountries.map((country) => (
            <Link 
              key={country.slug} 
              href={`/${country.slug}`}
              className="group block bg-white border border-slate-200 rounded-3xl p-5 hover:border-emerald-200 hover:shadow-lg transition-all active:scale-[0.985]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-1">{getFlagEmoji(country.slug)}</div>
                  <div className="font-semibold text-xl tracking-tight group-hover:text-emerald-600 transition-colors">{country.name}</div>
                  <div className="text-sm text-slate-500">{country.capital}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">ÍNDICE</div>
                  <div className="font-mono text-xl font-semibold text-emerald-600">{country.costOfLivingIndex}</div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm border-t pt-4 mt-4">
                <div>
                  <div className="text-xs text-slate-400">SALARIO PROM.</div>
                  <div className="font-medium">€{country.avgSalary}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">ALQUILER 1 HAB.</div>
                  <div className="font-medium">€{country.rent1BedCenter}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/paises" className="inline-flex items-center gap-2 text-emerald-600 font-medium">
            Ver los {totalCountries} países <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* How it works / Value Prop */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[3px] text-xs font-semibold text-emerald-600 mb-3">CÓMO FUNCIONA</div>
            <h2 className="text-4xl font-semibold tracking-tight">Datos reales.<br />Decisiones inteligentes.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex-shrink-0 flex items-center justify-center">
                <Globe size={22} />
              </div>
              <div>
                <div className="font-semibold text-xl mb-2 tracking-tight">Datos verificados</div>
                <p className="text-slate-600 leading-relaxed">Combinamos fuentes oficiales, Numbeo, bancos centrales y reportes gubernamentales actualizados cada trimestre.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex-shrink-0 flex items-center justify-center">
                <TrendingUp size={22} />
              </div>
              <div>
                <div className="font-semibold text-xl mb-2 tracking-tight">Comparaciones claras</div>
                <p className="text-slate-600 leading-relaxed">Índices relativos, salarios netos estimados y precios reales en euros para que puedas comparar cualquier país al instante.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex-shrink-0 flex items-center justify-center">
                <Users size={22} />
              </div>
              <div>
                <div className="font-semibold text-xl mb-2 tracking-tight">Para expats y empresas</div>
                <p className="text-slate-600 leading-relaxed">Diseñado para nómadas digitales, familias que se mudan, reclutadores internacionales y cualquiera que necesite datos fiables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">¿Por qué usar Costo de Vida Mundial?</h2>
        <div className="prose prose-slate max-w-none text-lg text-slate-600">
          <p>
            Elegir dónde vivir o aceptar una oferta internacional es una de las decisiones más importantes de tu vida. 
            Con datos precisos sobre <strong>salario mínimo</strong>, <strong>salario promedio</strong>, <strong>alquiler</strong>, 
            <strong> comida</strong> y <strong>transporte</strong> puedes calcular exactamente cuánto necesitas para mantener tu calidad de vida.
          </p>
          <p className="mt-4">
            Cada página de país está optimizada para responder preguntas reales: 
            “¿Cuánto cuesta vivir en Japón?”, “Salario mínimo en España 2026”, “Mejores países baratos para jubilarse”, 
            “Costo de vida en Canadá para una familia”.
          </p>
        </div>
        
        <div className="mt-10">
          <Link 
            href="/paises" 
            className="inline-flex items-center gap-3 px-9 h-14 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-2xl text-base transition-all shadow-lg shadow-emerald-600/30"
          >
            Comenzar a explorar países <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-950 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="mx-auto mb-6 text-emerald-400" size={42} />
          <h2 className="text-4xl font-semibold tracking-tight mb-4">¿Listo para encontrar tu próximo destino?</h2>
          <p className="text-emerald-200 text-xl mb-8">Explora los 20 países con datos completos o busca cualquier otro país del mundo.</p>
          <Link 
            href="/paises" 
            className="inline-flex items-center justify-center gap-3 px-10 h-14 bg-white text-emerald-950 font-semibold rounded-2xl hover:bg-emerald-100 active:bg-white transition-all text-base"
          >
            Ver todos los países del mundo
          </Link>
        </div>
      </section>
    </div>
  );
}

function getFlagEmoji(slug: string): string {
  const flags: Record<string, string> = {
    espana: "🇪🇸",
    japon: "🇯🇵",
    alemania: "🇩🇪",
    canada: "🇨🇦",
    australia: "🇦🇺",
    "estados-unidos": "🇺🇸",
    "reino-unido": "🇬🇧",
    francia: "🇫🇷",
    italia: "🇮🇹",
    mexico: "🇲🇽",
    brasil: "🇧🇷",
    india: "🇮🇳",
    "corea-del-sur": "🇰🇷",
    "paises-bajos": "🇳🇱",
    suecia: "🇸🇪",
    suiza: "🇨🇭",
    singapur: "🇸🇬",
    "emiratos-arabes-unidos": "🇦🇪",
    argentina: "🇦🇷",
  };
  return flags[slug] || "🌍";
}