"use client"

import { motion } from "motion/react"
import { Feature } from "@/types/feature"

interface SingleFeatureProps {
  feature: Feature
  index: number
}

export default function SingleFeature({ feature, index }: SingleFeatureProps) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
    >
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-bold font-sans text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground font-mono text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}
