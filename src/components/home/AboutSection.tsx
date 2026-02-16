'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './styles/AboutSection.module.css'

const TEXT =
  'Bespoke pools and water features, engineered with precision and designed to elevate outdoor living.'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const chars = TEXT.split('')
  const total = chars.length
  const spread = 0.18

  return (
    <section ref={ref} className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.icon} />
          <span>DESIGN PHILOSOPHY</span>
        </motion.div>

        <h4 className={styles.text}>
          {chars.map((char, i) => {
            const start = i / total
            const end = start + spread

            const opacity = useTransform(scrollYProgress, v => {
              if (v <= start) return 0.2
              if (v >= end) return 1
              return 0.2 + ((v - start) / (end - start)) * 0.8
            })

            const y = useTransform(scrollYProgress, v => {
              if (v <= start) return 8
              if (v >= end) return 0
              return 8 - ((v - start) / (end - start)) * 8
            })

            return (
              <motion.span
                key={i}
                className={styles.char}
                style={{ opacity, y }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            )
          })}
        </h4>

        <motion.a
          href="/about"
          className={styles.cta}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={styles.ctaBg} />
          <span className={styles.ctaContent}>
            <span className={styles.ctaDotFront} />
            <span>About Watcon</span>
          </span>
          <span className={styles.ctaDotBack} />
        </motion.a>
      </motion.div>
    </section>
  )
}
