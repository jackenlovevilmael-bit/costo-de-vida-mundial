import { Suspense } from "react";
import CountriesClient from "./CountriesClient";
import { countries, continents } from "@/lib/countries";

export const metadata = {
  title: "Explorar Países | Costo de Vida Mundial 2026",
  description: "Compara el costo de vida, salarios, alquileres y gastos en más de 190 países. Filtra por continente, índice de costo y salario. Datos actualizados para 2026.",
  alternates: { canonical: "/paises" },
};

export default function PaisesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; continent?: string; sort?: string }>;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="uppercase tracking-[2.5px] text-xs font-semibold text-emerald-600 mb-2">BASE DE DATOS COMPLETA</div>
        <h1 className="text-5xl font-semibold tracking-tighter">Explora {countries.length} países</h1>
        <p className="mt-3 max-w-2xl text-xl text-slate-600">
          Filtra por continente, costo de vida o salario. Haz clic en cualquier país para ver el desglose completo.
        </p>
      </div>

      <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-400">Cargando países...</div>}>
        <CountriesClient 
          initialCountries={countries} 
          continents={continents}
          searchParams={searchParams}
        />
      </Suspense>

      {/* SEO internal linking */}
      <div className="mt-16 pt-10 border-t text-sm text-slate-500">
        <p className="mb-3 font-medium text-slate-600">Países más buscados:</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {["España", "Japón", "Alemania", "Canadá", "Australia", "Estados Unidos", "Reino Unido", "Francia", "Italia", "México"].map((name, i) => {
            const slug = name.toLowerCase().replace(/\s+/g, "-").replace("é", "e").replace("ñ", "n");
            return <a key={i} href={`/${slug}`} className="hover:text-emerald-600 transition-colors">{name}</a>;
          })}
        </div>
      </div>
    </div>
  );
}