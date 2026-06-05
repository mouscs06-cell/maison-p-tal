"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface WordRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"
  delay?: number
  stagger?: number
  start?: string
}

export default function WordReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.05,
  start = "top 88%",
}: WordRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const words = el.querySelectorAll<HTMLElement>(".wr-word")

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: "108%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [delay, stagger, start])

  // Split on newline first, then on spaces within each line
  const lines = text.split("\n")

  return React.createElement(
    Tag,
    { ref: containerRef, className },
    lines.map((line, lineIdx) => (
      <span key={lineIdx} className="block">
        {line.split(" ").map((word, wordIdx, arr) => (
          <React.Fragment key={wordIdx}>
            <span className="inline-block overflow-hidden leading-[1.1] align-bottom">
              <span className="wr-word inline-block">{word}</span>
            </span>
            {wordIdx < arr.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </span>
    ))
  )
}
