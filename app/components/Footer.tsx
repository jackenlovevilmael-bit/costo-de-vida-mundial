import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">CVM</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">Costo de Vida Mundial</span>
            </div>
            <p className="text-xs leading-relaxed pr-4">
              Datos transparentes y actualizados para ayudarte a tomar decisiones informadas sobre dónde vivir y trabajar en 2026.
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">EXPLORAR</div>
            <div className="space-y-2.5 text-sm">
              <Link href="/paises" className="block hover:text-white transition-colors">Todos los Países</Link>
              <Link href="/paises?continent=Europa" className="block hover:text-white transition-colors">Europa</Link>
              <Link href="/paises?continent=Asia" className="block hover:text-white transition-colors">Asia</Link>
              <Link href="/paises?continent=America" className="block hover:text-white transition-colors">América</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">RECURSOS</div>
            <div className="space-y-2.5 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Guía para Nómadas Digitales</a>
              <a href="#" className="block hover:text-white transition-colors">Mejores Países para Jubilarse</a>
              <a href="#" className="block hover:text-white transition-colors">Comparador de Salarios</a>
              <a href="#" className="block hover:text-white transition-colors">Calculadora de Costo de Vida</a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">LEGAL &amp; MONETIZACIÓN</div>
            <div className="space-y-2.5 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Sobre Nosotros</a>
              <a href="#" className="block hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="block hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="block hover:text-white transition-colors">Anúnciate con nosotros</a>
            </div>
            <div className="mt-6 text-[10px] text-slate-500 leading-tight">
              Los datos provienen de fuentes públicas como Numbeo, bancos centrales y reportes oficiales. 
              Verifica siempre la información más reciente.
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {new Date().getFullYear()} Costo de Vida Mundial. Todos los derechos reservados.</div>
          <div className="flex gap-5">
            <span>Optimizado para SEO • Velocidad • Escalabilidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}