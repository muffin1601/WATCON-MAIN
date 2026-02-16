"use client"

import { useEffect, useRef } from "react"
import styles from "./styles/CustomCursor.module.css"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(
          ${pos.current.x}px,
          ${pos.current.y}px,
          0
        ) translate(-50%, -50%)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return <div ref={cursorRef} className={styles.cursor} />
}
