"use client"

import { motion } from "motion/react"
import { featuresData } from "@/data/features"
import SingleFeature from "./single-feature"
import DotPattern from "./ui/dot-pattern"

export default function Features() {
  return (
    <section id="caracteristicas" className="relative px-6 lg:px-12 py-20 lg:py-32 bg-card/30 overflow-hidden">
      {/* Background with DotPattern */}
      <DotPattern className="opacity-50" maxDots={150} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-sans text-foreground mb-4">
            Características principales
          </h2>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Descubre las capacidades que hacen de GearsMap la solución ideal para tu transformación digital
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <SingleFeature key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
