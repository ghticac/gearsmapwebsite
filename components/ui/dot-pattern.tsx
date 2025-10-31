"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface DotPatternProps {
  className?: string
  maxDots?: number
  animate?: boolean
  glow?: boolean
  dotSize?: number
  spacing?: number
}

export default function DotPattern({
  className,
  maxDots = 100,
  animate = false,
  glow = false,
  dotSize = 2,
  spacing = 30,
}: DotPatternProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  const cols = Math.ceil(dimensions.width / spacing)
  const rows = Math.ceil(dimensions.height / spacing)
  const totalDots = Math.min(cols * rows, maxDots)

  const dots = []
  for (let i = 0; i < totalDots; i++) {
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = col * spacing
    const y = row * spacing

    dots.push({ x, y, key: i })
  }

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    >
      <svg width={dimensions.width} height={dimensions.height} className="absolute inset-0">
        {glow && (
          <defs>
            <radialGradient id="dotGlow">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </radialGradient>
          </defs>
        )}
        {dots.map((dot) => (
          <motion.circle
            key={dot.key}
            cx={dot.x}
            cy={dot.y}
            r={dotSize}
            fill={glow ? "url(#dotGlow)" : "hsl(var(--muted-foreground))"}
            opacity={0.2}
            initial={animate ? { opacity: 0, scale: 0 } : { opacity: 0.2 }}
            animate={
              animate
                ? {
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8],
                  }
                : {}
            }
            transition={
              animate
                ? {
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }
                : {}
            }
          />
        ))}
      </svg>
    </div>
  )
}
