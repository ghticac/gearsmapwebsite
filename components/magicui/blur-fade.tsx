"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, Variant } from "motion/react"

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: Variant
    visible: Variant
  }
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  const defaultVariants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  }

  const combinedVariants = variant || defaultVariants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
