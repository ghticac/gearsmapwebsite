"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

function AuroraText({
  children,
  className,
  colors = ["from-accent", "via-blue-400", "to-accent"],
  speed = 8,
}: AuroraTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-transparent animate-aurora",
        ...colors,
        className
      )}
      style={{
        animationDuration: `${speed}s`,
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </span>
  )
}

export default memo(AuroraText)
