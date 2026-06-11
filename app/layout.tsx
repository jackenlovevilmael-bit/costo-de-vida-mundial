import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://costodev idamundial.com"),
  title: {
    default: "Costo de Vida Mundial 2026 | Compara Salarios, Alquiler y Gastos por País",
    template: "%s | Costo de Vida Mundial",
  },
  description: "Descubre el costo de vida real en 195 países. Compara salarios mínimos y promedio, precios de alquiler, comida, transporte y más. Datos actualizados para 2026. Encuentra el mejor país para vivir o trabajar.",
  keywords: [
    "costo de vida", "salario mínimo", "alquiler", "costo de vida por país", 
    "mejores países para vivir", "comparar costo de vida", "salario promedio",
    "costo de vida Japón", "costo de vida España", "costo de vida Alemania"
  ],
  authors: [{ name: "Costo de Vida Mundial" }],
  openGraph: {
    title: "Costo de Vida Mundial 2026 - Compara el costo de vivir en cualquier país",
    description: "Datos reales y actualizados del costo de vida, salarios, alquileres y gastos en más de 190 países. La herramienta definitiva para expats, nómadas digitales y empresas.",
    images: [{ url: "/og-image.jpg" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costo de Vida Mundial | Compara salarios y gastos por país",
    description: "Datos precisos 2026 para planificar tu vida en el extranjero.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        
        {/* Google AdSense placeholder - Replace with your publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </body>
    </html>
  );
}