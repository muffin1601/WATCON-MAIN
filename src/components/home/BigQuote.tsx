"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import styles from "./styles/BigQuote.module.css"

const CURVED_PATH =
  "M0,300 C240,60 480,-120 720,-120 960,-120 1200,60 1440,300 L1440,0 L0,0 Z"

const FLAT_PATH =
  "M0,300 C240,300 480,300 720,300 960,300 1200,300 1440,300 L1440,0 L0,0 Z"

export default function BigQuote() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  })

  const path = useTransform(scrollYProgress, [0, 1], [CURVED_PATH, FLAT_PATH])
  const imageY = useTransform(scrollYProgress, [0, 1], ["-420px", "-300px"])

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.topMask}>
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
          <motion.path d={path} fill="#ffffff" />
        </svg>
      </div>

      <motion.div className={styles.background} style={{ y: imageY }}>
        <img
          src="https://images.pexels.com/photos/13010775/pexels-photo-13010775.jpeg"
          alt=""
        />
        <div className={styles.overlay} />
        <div className={styles.noiseOverlay} />
      </motion.div>

      <div className={styles.text}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Designing outdoor environments
          <br />
          that flow as naturally as water.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Water body design & outdoor living solutions
        </motion.p>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Water Body Design</h3>
          <p>
            We create immersive water bodies that elevate outdoor spaces through
            balance, movement, and reflection. From serene pools to expressive
            water features, each design integrates seamlessly with the landscape.
          </p>

          <h3>Outdoor Living Furniture</h3>
          <p>
            Our outdoor living furniture extends comfort beyond interiors.
            Crafted for durability and elegance, each piece supports relaxed
            living while complementing nature-driven environments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
