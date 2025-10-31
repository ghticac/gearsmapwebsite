"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, Map, BarChart, Globe2, Cog, Shield } from "lucide-react"
import Globe from "@/components/ui/globe"
import AuroraText from "@/components/aurora-text"
import HeroBackground from "@/components/hero-background"
import Features from "@/components/features"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="inicio" className="px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent font-mono">Plataformas de datos a tu medida</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold font-sans leading-tight">
                  ¿Qué es <AuroraText>GearsMap</AuroraText>
                  <span className="text-foreground">?</span>
                </h1>

                <div className="space-y-4 text-lg font-mono leading-relaxed text-muted-foreground">
                  <p>Diseñamos plataformas personalizadas que optimizan procesos y visualizan datos complejos.</p>
                  <p>
                    Innovación, soporte constante y herramientas de alta calidad para transformar tus datos en
                    decisiones estratégicas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                  Solicitar demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-accent/5 bg-transparent">
                  Saber más
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-accent font-sans">500+</div>
                  <div className="text-sm text-muted-foreground font-mono">Proyectos completados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent font-sans">98%</div>
                  <div className="text-sm text-muted-foreground font-mono">Satisfacción del cliente</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent font-sans">24/7</div>
                  <div className="text-sm text-muted-foreground font-mono">Soporte técnico</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                {/* Background glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-3xl animate-pulse"></div>
                </div>

                {/* Magic UI Globe */}
                <div className="relative z-10 w-full h-full max-w-[500px] max-h-[500px]">
                  <Globe
                    className="opacity-80"
                    config={{
                      width: 800,
                      height: 600,
                      onRender: () => {},
                      devicePixelRatio: 2,
                      phi: 0,
                      theta: 0.3,
                      dark: 1,
                      diffuse: 0.4,
                      mapSamples: 16000,
                      mapBrightness: 1.2,
                      baseColor: [0.2, 0.7, 0.8], // Teal base color
                      markerColor: [0.4, 0.9, 1.0], // Bright teal for markers
                      glowColor: [0.2, 0.7, 0.8], // Teal glow
                      markers: [
                        { location: [40.7128, -74.006], size: 0.08 }, // New York
                        { location: [51.5074, -0.1278], size: 0.08 }, // London
                        { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
                        { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
                        { location: [19.4326, -99.1332], size: 0.07 }, // Mexico City
                        { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
                        { location: [55.7558, 37.6176], size: 0.06 }, // Moscow
                        { location: [28.6139, 77.209], size: 0.07 }, // New Delhi
                      ],
                    }}
                  />
                </div>

                {/* Floating data cards */}
                <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 animate-float z-20">
                  <div className="text-xs text-muted-foreground font-mono">Revenue Growth</div>
                  <div className="text-lg font-bold text-accent font-sans">+127%</div>
                </div>

                <div className="absolute bottom-8 right-8 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 animate-float delay-1000 z-20">
                  <div className="text-xs text-muted-foreground font-mono">Data Points</div>
                  <div className="text-lg font-bold text-accent font-sans">2.4M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="px-6 lg:px-12 py-20 lg:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground">Sobre GearsMap</h2>

              <div className="space-y-6">
                <p className="text-muted-foreground font-mono leading-relaxed">
                  Innovamos en nuevas formas de utilizar y visualizar datos para agregar valor a procesos y decisiones.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-sans text-foreground">Fundación</h3>
                  <p className="text-muted-foreground font-mono leading-relaxed">
                    Fundada en 2024, GearsMap reúne a profesionales experimentados del sector tecnológico, impulsados
                    por la pasión de contribuir a la Cuarta Revolución Industrial. Innovamos en nuevas formas de
                    utilizar y visualizar datos, añadiendo valor a los procesos empresariales. Nuestros desarrolladores
                    tienen una amplia experiencia en numerosos proyectos tecnológicos.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-sans text-foreground">Productos y servicios</h3>
                  <p className="text-muted-foreground font-mono leading-relaxed">
                    Nos especializamos en el desarrollo de soluciones de software basadas en Sistemas de Información
                    Geográfica (SIG) y en la gestión y análisis de datos geoespaciales. Nuestras ofertas incluyen
                    aplicaciones para la gestión y visualización de información, optimización y automatización de
                    proyectos. Acompañamos a las empresas en el diseño y desarrollo de herramientas tecnológicas que
                    añaden valor a sus actividades, garantizando soporte técnico durante el uso de nuestros desarrollos
                    y productos.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/agm2.jpg"
                  alt="GearsMap team working with data visualization"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img src="/images/agm1.jpg" alt="GearsMap team collaboration" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground">Misión y visión</h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-sans text-foreground">Misión</h3>
                  <p className="text-muted-foreground font-mono leading-relaxed">
                    Nuestro principal objetivo es asistir a entidades gubernamentales, empresas y organizaciones en su
                    transformación digital hacia un futuro más próspero. Buscamos optimizar cada recurso y proceso
                    mediante el uso innovador de la información, manteniendo nuestros valores de excelencia, eficiencia
                    e innovación.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-sans text-foreground">Visión</h3>
                  <p className="text-muted-foreground font-mono leading-relaxed">
                    Aspiramos a llevar nuestras innovaciones a todos los rincones del mundo, colaborando con entidades e
                    individuos para generar ideas y desarrollos revolucionarios. Buscamos contribuir a la transformación
                    del desarrollo de la humanidad, optimizando y salvaguardando todo tipo de recursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      <section id="portafolio" className="px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono mb-4">
              <span>Inicio</span>
              <ArrowRight className="w-4 h-4" />
              <span className="text-accent">Portafolio y Servicios</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground mb-4">Portafolio y Servicios</h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Conozca más sobre nuestros servicios y soluciones de visualización y análisis de datos.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">
                Inteligencia artificial y Machine Learning
              </h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Implementamos soluciones de inteligencia artificial y machine learning para ayudarle a extraer
                información valiosa de sus datos y mejorar la toma de decisiones. Nuestros modelos predictivos y de
                análisis avanzado le permitirán identificar patrones, tendencias y oportunidades ocultas en sus datos.
              </p>
            </div>

            {/* Geovisores */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">Geovisores</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Desarrollamos geovisores personalizados para visualizar y analizar información geoespacial de manera
                interactiva y dinámica. Estas herramientas le permitirán explorar mapas, datos y estadísticas de manera
                intuitiva, facilitando la toma de decisiones basadas en información geográfica precisa.
              </p>
            </div>

            {/* Visualización 2D y 3D */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">Visualización 2D y 3D</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Potencie el análisis y comprensión de sus datos mediante herramientas avanzadas de visualización 2D y
                3D, diseñadas a la medida de sus necesidades específicas. Estas soluciones ofrecen interactividad en
                tiempo real, lo que permite explorar modelos en profundidad.
              </p>
            </div>

            {/* Dashboards y estadísticas */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">Dashboards y estadísticas</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Esta herramienta le permitirá presentar y analizar sus datos de manera clara y visual, facilitando una
                toma de decisiones más informada. Podrá obtener una visión general de la información de manera rápida y
                sencilla, con la opción de profundizar en detalles específicos.
              </p>
            </div>

            {/* Automatización de Procesos */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">Automatización de Procesos</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                A través de la automatización de procesos, le ayudamos a mejorar la eficiencia operativa y reducir el
                tiempo dedicado a tareas repetitivas. Implementamos soluciones personalizadas que agilizan sus flujos de
                trabajo, optimizan recursos y minimizan errores.
              </p>
            </div>

            {/* Monitoreo y Mantenimiento */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-sans text-foreground mb-3">Monitoreo y Mantenimiento</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Proveemos servicios de monitoreo continuo y mantenimiento de productos, asegurando su funcionamiento
                óptimo a lo largo del tiempo. Con tecnologías avanzadas de seguimiento y alertas en tiempo real,
                garantizamos la detección temprana de posibles fallas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono mb-4">
              <span>Inicio</span>
              <ArrowRight className="w-4 h-4" />
              <span className="text-accent">Contactenos</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground mb-4">Contactenos</h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Complete el formulario para ponerte en contacto con nosotros.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
