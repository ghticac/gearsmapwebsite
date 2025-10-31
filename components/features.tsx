"use client"

import { ChartSpline, BrainCircuit, LifeBuoy, Share2, ShieldCheck, Code2 } from "lucide-react"
import type { Feature } from "@/types/feature"

const featuresData: Feature[] = [
  {
    icon: ChartSpline,
    title: "Visualización Avanzada",
    description:
      "Transformamos datos complejos en visualizaciones intuitivas y dashboards interactivos que facilitan la toma de decisiones estratégicas en tiempo real.",
  },
  {
    icon: BrainCircuit,
    title: "Optimización Inteligente",
    description:
      "Aplicamos inteligencia artificial y machine learning para identificar patrones, optimizar procesos y predecir tendencias en tus operaciones.",
  },
  {
    icon: LifeBuoy,
    title: "Acompañamiento Continuo",
    description:
      "Soporte técnico 24/7 y mantenimiento proactivo para garantizar el funcionamiento óptimo de todas nuestras soluciones.",
  },
  {
    icon: Share2,
    title: "Integración Flexible",
    description:
      "Nuestras plataformas se integran perfectamente con tus sistemas existentes, APIs y bases de datos sin interrumpir tus operaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Verificable",
    description:
      "Aplicamos las mejores prácticas de la industria con pruebas exhaustivas, seguridad robusta y cumplimiento de estándares internacionales.",
  },
  {
    icon: Code2,
    title: "Código de Calidad",
    description:
      "Desarrollamos con tecnologías modernas y arquitecturas escalables, documentadas y mantenibles para el crecimiento de tu negocio.",
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="px-6 lg:px-12 py-20 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent font-mono">Nuestras Capacidades</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground mb-4">
            ¿Por qué elegir <span className="text-accent">GearsMap</span>?
          </h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Combinamos experiencia en el sector de hidrocarburos con las mejores prácticas de desarrollo de software
            para entregar soluciones de clase mundial.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-mono mb-4">
            ¿Listo para transformar tus datos en decisiones estratégicas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors"
          >
            Solicitar una consulta
          </a>
        </div>
      </div>
    </section>
  )
}
