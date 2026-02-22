"use client"

import type { ReactNode } from "react"

export function AnimatedSection({ children, delay = 0 }) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
