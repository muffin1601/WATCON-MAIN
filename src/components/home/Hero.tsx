'use client'

import { motion,  Variants } from 'framer-motion'
import styles from './styles/Hero.module.css'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}


export default function Hero() {
  return (
    <>
      {/* Background */}
      <motion.div
        className={styles.heroBg}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://www.pexels.com/download/video/2815442/"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Content */}
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left */}
          <div className={styles.left}>
            {['Designing Water', 'Since 5', 'Decades'].map((line) => (
              <motion.h1 key={line} variants={fadeUp}>
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Right */}
          <motion.div className={styles.right} variants={fadeUp}>
            <p>
              For over five decades, we have shaped the way water flows through
              spaces — blending engineering precision with thoughtful design.
              From infrastructure to experiences, we craft systems that endure,
              perform, and inspire.
            </p>

            <motion.button
              className={styles.cta}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <span className={styles.ctaBg} />
              <span className={styles.ctaContent}>
                <span className={styles.ctaDotFront} />
                <span>Explore our work</span>
              </span>
              <span className={styles.ctaDotBack} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
