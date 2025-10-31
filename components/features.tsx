"use client"

import { ChartSpline, BrainCircuit, LifeBuoy, Share2, ShieldCheck, Code2 } from "lucide-react"

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: ChartSpline,
    title: "Visualización Avanzada",
    description:
      "Transformamos datos complejos en gráficos interactivos y mapas intuitivos que facilitan la comprensión y el análisis en tiempo real.",
  },
  {
    icon: BrainCircuit,
    title: "Optimización Inteligente",
    description:
      "Utilizamos inteligencia artificial y machine learning para optimizar procesos, predecir tendencias y automatizar decisiones estratégicas.",
  },
  {
    icon: LifeBuoy,
    title: "Acompañamiento Continuo",
    description:
      "Brindamos soporte técnico 24/7 y capacitación constante para garantizar el máximo aprovechamiento de nuestras plataformas.",
  },
  {
    icon: Share2,
    title: "Integración Flexible",
    description:
      "Nuestras soluciones se integran perfectamente con tus sistemas existentes mediante APIs modernas y arquitecturas escalables.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Verificable",
    description:
      "Implementamos las mejores prácticas de desarrollo con testing exhaustivo, garantizando productos robustos y seguros.",
  },
  {
    icon: Code2,
    title: "Código Abierto",
    description:
      "Creemos en la transparencia y colaboración. Muchos de nuestros proyectos son de código abierto para fomentar la innovación.",
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="px-6 lg:px-12 py-20 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(112,183,197,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground mb-4">
            ¿Por qué elegir <span className="text-accent">GearsMap</span>?
          </h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Combinamos tecnología de punta con experiencia comprobada para entregar soluciones que transforman negocios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
