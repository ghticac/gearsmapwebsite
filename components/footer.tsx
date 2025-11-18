import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/gearsmap-logo.png"
              alt="GearsMap"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-accent">GearsMap</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Innovación, soporte constante y herramientas de alta calidad para transformar tus datos en decisiones estratégicas.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} GearsMap. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
