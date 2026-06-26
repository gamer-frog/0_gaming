import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "LOL Pro Guide — Guias, Tier List, Meta & Builds",
  description: "App profesional de League of Legends con guias por rango, base de campeones, tier list, meta report y tips filtrables. Datos curados al meta actual.",
  keywords: ["League of Legends", "LoL", "Tier List", "Builds", "Meta", "Guias", "Elo", "Campeones"],
  openGraph: {
    title: "LOL Pro Guide",
    description: "Tu herramienta profesional para dominar League of Legends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} antialiased`}
        style={{ backgroundColor: '#0a0e1a', color: '#f0e6d2', fontFamily: "'Geist Sans', 'Segoe UI', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}