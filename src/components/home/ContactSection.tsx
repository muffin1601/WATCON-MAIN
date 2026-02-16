"use client"

import { motion } from "framer-motion"
import styles from "./styles/ContactSection.module.css"
import { fadeUp, container } from "@/motion/motionVariants"

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className={styles.left} variants={fadeUp}>
          <span className={styles.eyebrow}>START YOUR PROJECT</span>

          <h2>
            Thoughtful water
            <br />
            design begins with <span>a conversation.</span>
          </h2>

          <p className={styles.description}>
            Whether you’re planning a bespoke water feature, upgrading an
            existing system, or exploring sustainable water solutions — Watcon
            works closely with you from concept to completion. Share a few
            details and let’s shape a solution that fits your space.
          </p>

          <p className={styles.altContact}>
            Prefer a direct conversation? <a href="#">Send us an email</a> and
            our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div className={styles.right} variants={fadeUp}>
          <form className={styles.form}>
            <h3>Tell us about your project.</h3>

            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="tel" placeholder="Phone Number" />

            <h3>Project details</h3>
            {/* <p className={styles.helper}>
              Share any information that helps us understand your vision, site,
              or requirements.
            </p> */}

            <textarea rows={4} placeholder="Briefly describe your project…" />

            <h3>What are you looking to build?</h3>

            <button type="submit" className={styles.cta}>
              <span className={styles.ctaBg} />
              <span className={styles.ctaContent}>
                <span className={styles.ctaDotFront} />
                Request Consultation
              </span>
              <span className={styles.ctaDotBack} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
