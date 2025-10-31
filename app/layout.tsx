import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "GearsMap - Diseñamos plataformas personalizadas que optimizan procesos",
  description:
    "Diseñamos plataformas personalizadas que optimizan procesos, visualizan datos complejos y conectan a los usuarios con información precisa y actualizada. Innovación, soporte constante y herramientas de alta calidad para transformar tus datos en decisiones estratégicas.",
  keywords: [
    "GearsMap",
    "Software Geoespacial",
    "Análisis Geoespacial",
    "Inteligencia Artificial",
    "Visualización Avanzada",
    "Optimización Inteligente",
    "Colombia",
    "Desarrollo de Software",
  ],
  authors: [{ name: "GearsMap" }],
  creator: "GearsMap",
  publisher: "GearsMap",
  metadataBase: new URL("https://gearsmap.com"),
  openGraph: {
    title: "GearsMap - Diseñamos plataformas personalizadas que optimizan procesos",
    description:
      "Diseñamos plataformas personalizadas que optimizan procesos, visualizan datos complejos y conectan a los usuarios con información precisa y actualizada.",
    url: "https://gearsmap.com",
    siteName: "GearsMap",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/gearsmap-logo.png",
        width: 1200,
        height: 630,
        alt: "Logo GearsMap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GearsMap - Innovación y herramientas de alta calidad para decisiones estratégicas",
    description:
      "Nuestro compromiso: innovación, soporte constante y herramientas de alta calidad para transformar tus datos en decisiones estratégicas.",
    images: ["/images/gearsmap-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="antialiased dark">
      <body className="bg-background text-foreground font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
