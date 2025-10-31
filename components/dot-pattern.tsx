"use client"

import React from "react"

interface DotPatternProps {
  className?: string
  dotSize?: number
  dotColor?: string
  spacing?: number
}

export default function DotPattern({
  className = "",
  dotSize = 1,
  dotColor = "rgba(112, 183, 197, 0.3)",
  spacing = 20,
}: DotPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
            <circle cx={spacing / 2} cy={spacing / 2} r={dotSize} fill={dotColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  )
}
