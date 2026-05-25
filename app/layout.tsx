import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "T1 x Kueski · Crea tu tienda en línea y vende con Kueski Pay desde el primer día",
  description:
    "La primera alianza en México que te permite tener tu tienda en línea profesional y ofrecer Kueski Pay como método de pago, incluso sin tienda en línea, vía link de producto. Sin mensualidad, sin costo de activación, una comisión única del 5%.",
  openGraph: {
    title: "T1 x Kueski · Crea tu tienda en línea y vende con Kueski Pay",
    description:
      "Crea tu tienda en línea en minutos y ofrece Kueski Pay desde el primer día. Sin mensualidad. 5% por transacción.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-white text-oxford font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
