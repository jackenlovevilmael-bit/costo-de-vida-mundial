"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter } from "lucide-react";
import type { Country } from "@/lib/countries";

interface Props {
  initialCountries: Country[];
  continents: readonly string[];
}

export default function CountriesClient({ initialCountries, continents }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "cost" | "salary">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredAndSorted = useMemo(() => {
    let result = [...initialCountries];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.capital.toLowerCase().includes(term) ||
          c.continent.toLowerCase().includes(term)
      );
    }

    if (selectedContinent) {
      result = result.filter((c) => c.continent === selectedContinent);
    }

    result.sort((a, b) => {
      let valA: string | number;
      let valB: string | number;

      if (sortBy === "name") {
        valA = a.name;
        valB = b.name;
      } else if (sortBy === "cost") {
        valA = a.costOfLivingIndex;
        valB = b.costOfLivingIndex;
      } else {
        valA = a.avgSalary;
        valB = b.avgSalary;
      }

      if (typeof valA === "string") {
        return sortOrder === "asc" 
          ? valA.localeCompare(valB as string) 
          : (valB as string).localeCompare(valA);
      } else {
        return sortOrder === "asc" 
          ? (valA as number) - (valB as number) 
          : (valB as number) - (valA as number);
      }
    });

    return result;
  }, [initialCountries, searchTerm, selectedContinent, sortBy, sortOrder]);

  const toggleSort = (newSortBy: "name" | "cost" | "salary") => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setSortOrder(newSortBy === "name" ? "asc" : "desc");
    }
  };

  return (
    <>
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl p-5 mb-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar país o capital..." className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 focus:border-emerald-300 rounded-2xl text-sm placeholder:text-slate-400 focus:outline-none transition-all" />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block text-xs uppercase tracking-widest text-slate-400 font-medium px-2">CONTINENTE</div>
            <select value={selectedContinent} onChange={(e) => setSelectedContinent(e.target.value)} className="h-11 px-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-emerald-300 min-w-[160px]">
              <option value="">Todos los continentes</option>
              {continents.map((cont) => <option key={cont} value={cont}>{cont}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => toggleSort("name")} className={`flex items-center gap-1.5 h-11 px-4 rounded-2xl text-sm border transition-all ${sortBy === "name" ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-medium" : "border-slate-200 hover:bg-slate-50"}`}>Nombre {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}</button>
            <button onClick={() => toggleSort("cost")} className={`flex items-center gap-1.5 h-11 px-4 rounded-2xl text-sm border transition-all ${sortBy === "cost" ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-medium" : "border-slate-200 hover:bg-slate-50"}`}>Costo {sortBy === "cost" && (sortOrder === "asc" ? "↑" : "↓")}</button>
            <button onClick={() => toggleSort("salary")} className={`flex items-center gap-1.5 h-11 px-4 rounded-2xl text-sm border transition-all ${sortBy === "salary" ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-medium" : "border-slate-200 hover:bg-slate-50"}`}>Salario {sortBy === "salary" && (sortOrder === "asc" ? "↑" : "↓")}</button>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
          <Filter size={14} /> Mostrando <span className="font-mono text-emerald-600 font-medium">{filteredAndSorted.length}</span> de {initialCountries.length} países
        </div>
      </div>

      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAndSorted.map((country) => (
            <Link key={country.slug} href={`/${country.slug}`} className="group bg-white border border-slate-200 hover:border-emerald-300 rounded-3xl p-6 flex flex-col transition-all hover:shadow-md active:scale-[0.985]">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div className="text-4xl mb-2.5">{getFlagEmoji(country.slug)}</div>
                  <div className="font-semibold text-2xl tracking-tighter group-hover:text-emerald-600 transition-colors">{country.name}</div>
                  <div className="text-sm text-slate-500">{country.capital} • {country.continent}</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-[10px] text-slate-400 tracking-widest">ÍNDICE</div>
                  <div className="text-3xl font-semibold text-emerald-600 tabular-nums">{country.costOfLivingIndex}</div>
                </div>
              </div>
              <div className="mt-auto pt-5 border-t grid grid-cols-3 gap-4 text-sm">
                <div><div className="text-[10px] uppercase tracking-widest text-slate-400">SAL. MÍN.</div><div className="font-medium tabular-nums">€{country.minSalary}</div></div>
                <div><div className="text-[10px] uppercase tracking-widest text-slate-400">SAL. PROM.</div><div className="font-medium tabular-nums">€{country.avgSalary}</div></div>
                <div><div className="text-[10px] uppercase tracking-widest text-slate-400">ALQUILER</div><div className="font-medium tabular-nums">€{country.rent1BedCenter}</div></div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <div className="text-xl font-medium">No encontramos países con esos filtros</div>
          <button onClick={() => { setSearchTerm(""); setSelectedContinent(""); }} className="mt-4 text-emerald-600 hover:underline text-sm">Limpiar filtros</button>
        </div>
      )}
    </>
  );
}

function getFlagEmoji(slug: string): string {
  const flags: Record<string, string> = { espana: "🇪🇸", japon: "🇯🇵", alemania: "🇩🇪", canada: "🇨🇦", australia: "🇦🇺", "estados-unidos": "🇺🇸", "reino-unido": "🇬🇧", francia: "🇫🇷", italia: "🇮🇹", mexico: "🇲🇽", brasil: "🇧🇷", india: "🇮🇳", "corea-del-sur": "🇰🇷", "paises-bajos": "🇳🇱", suecia: "🇸🇪", suiza: "🇨🇭", singapur: "🇸🇬", "emiratos-arabes-unidos": "🇦🇪", argentina: "🇦🇷" };
  return flags[slug] || "🌍";
}