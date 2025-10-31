"use client"

import React from "react"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
}

export default function AuroraText({ children, className = "" }: AuroraTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-accent via-cyan-400 to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent ${className}`}
      style={{
        animation: "gradient 8s linear infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
      `}</style>
    </span>
  )
}
