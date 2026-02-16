'use client'

import { motion } from 'framer-motion'
import styles from './styles/ServicesSection.module.css'

export default function ServicesSection() {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.header}>
        <span className={styles.eyebrow}>Since 1975</span>

        <h2 className={styles.title}>
          Designing water
          <br />
          <span>for timeless landscapes</span>
        </h2>

        <p className={styles.subtitle}>
          Watcon creates refined water and landscape solutions — blending engineering
          precision, design clarity, and decades of expertise to elevate outdoor
          environments.
        </p>
      </div>

      <motion.div
        className={styles.cards}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, i) => (
          <motion.a
            key={card.title}
            href="#"
            className={`${styles.card} ${styles[`card${i}`]}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <div className={styles.imageWrap}>
              <img src={card.image} alt={card.title} />
              <div className={styles.overlay} />
            </div>

            <h3 className={styles.cardTitle}>{card.title}</h3>

            <p className={styles.cardText}>{card.text}</p>

            <div className={styles.readMore}>
              <span className={styles.dot} />
              <span className={styles.readText}>READ MORE</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}

const cards = [
  {
    title: 'Swimming Pools',
    text:
      'Custom-designed swimming pools that combine engineering precision with elegant aesthetics, tailored to your space and lifestyle.',
    image: 'https://images.pexels.com/photos/35355283/pexels-photo-35355283.jpeg',
  },
  {
    title: 'Water Features',
    text:
      'Lakes, fountains, cascades, and bespoke water bodies designed to enhance architecture, landscape, and experience.',
    image: 'https://images.pexels.com/photos/35355280/pexels-photo-35355280.jpeg',
  },
  {
    title: 'Landscape Design',
    text:
      'Integrated landscape planning that blends greenery, terrain, and water into cohesive outdoor environments.',
    image: 'https://images.pexels.com/photos/14464944/pexels-photo-14464944.jpeg',
  },
  {
    title: 'Spa • Sauna • Steam',
    text:
      'Wellness spaces crafted with technical excellence, offering relaxation, recovery, and refined luxury.',
    image: 'https://images.pexels.com/photos/28855455/pexels-photo-28855455.jpeg',
  },
]
