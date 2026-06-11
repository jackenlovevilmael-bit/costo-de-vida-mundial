"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-xl tracking-tight">Costo de Vida</div>
            <div className="text-[10px] text-emerald-600 -mt-1 font-mono">MUNDIAL 2026</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Inicio</Link>
          <Link href="/paises" className="hover:text-emerald-600 transition-colors">Explorar Países</Link>
          <Link href="/paises" className="hover:text-emerald-600 transition-colors">Comparar</Link>
          <a href="#como-funciona" className="hover:text-emerald-600 transition-colors">Cómo funciona</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/paises" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all active:scale-[0.985]">
            Explorar todos los países
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 hover:text-slate-900" aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" className="py-1" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/paises" className="py-1" onClick={() => setIsOpen(false)}>Explorar Países</Link>
          <Link href="/paises" className="py-1" onClick={() => setIsOpen(false)}>Comparar Costos</Link>
          <Link href="/paises" className="mt-2 w-full text-center px-5 py-3 bg-emerald-600 text-white rounded-xl font-semibold" onClick={() => setIsOpen(false)}>
            Explorar todos los países
          </Link>
        </div>
      )}
    </nav>
  );
}