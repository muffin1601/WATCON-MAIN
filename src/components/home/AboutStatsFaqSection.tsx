"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import styles from "./styles/AboutStatsFaqSection.module.css"
import { container, fadeUp } from "@/motion/motionVariants"

const stats = [
    { value: "450+", label: "Therapy sessions\ncompleted" },
    { value: "80+", label: "Clients\nsupported" },
    { value: "9+", label: "Years of professional\nexperience" },
    { value: "25+", label: "Programs and\ntools offered" },
]

const faqs = [
    {
        id: "right-for-me",
        q: "How do I know if therapy is right for me?",
        a: "If you’re feeling stuck, overwhelmed, or curious about yourself, therapy can be a meaningful place to begin.",
    },
    {
        id: "first-session",
        q: "What can I expect from the first session?",
        a: "We’ll talk about what brought you here and what you hope to explore — no pressure, just conversation.",
    },
    {
        id: "online-inperson",
        q: "Do you offer both online and in-person sessions?",
        a: "Yes. Flexible options allow you to meet in the way that feels most comfortable.",
    },
    {
        id: "how-often",
        q: "How often should I come to therapy?",
        a: "That depends on your needs. We’ll find a rhythm that feels supportive.",
    },
    {
        id: "privacy",
        q: "Is everything I share kept private?",
        a: "Yes. Confidentiality is central to therapy.",
    },
    {
        id: "dont-know",
        q: "What if I don’t know what to talk about?",
        a: "That’s completely okay — therapy can start exactly where you are.",
    },
]

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <motion.div
      ref={ref}
      className={styles.faqImageWrap}
      style={{ y }}
    >
      <img
        src="https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg"
        alt=""
      />
    </motion.div>
  )
}


export default function AboutStatsFaqSection() {
    const [open, setOpen] = useState<string | null>(null)

    useEffect(() => {
        const hash = window.location.hash.replace("#", "")
        if (hash) setOpen(hash)
    }, [])

    return (
        <section className={styles.section}>
            <motion.div
                className={styles.top}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
            >
                <motion.div className={styles.copy} variants={fadeUp}>
                    <h2>
                        From first steps to lasting change,
                        <br />
                        these numbers reflect the impact
                        <br />
                        of <span>walking the path together.</span>
                    </h2>

                    <p className={styles.sideNote}>
                        Behind every number is a story of progress — care, dedication, and
                        thoughtful work at every step.
                    </p>
                </motion.div>

                <div className={styles.stats}>
                    {stats.map((s, i) => (
                        <motion.div key={i} className={styles.stat} variants={fadeUp}>
                            <span>{s.value}</span>
                            <p>{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <motion.div
                        className={styles.faqIntro}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3>
                            Your questions.
                            <br />
                            <span>Answered.</span>
                        </h3>
                        <p>
                            Not sure what to expect? These answers may help you begin with
                            confidence.
                        </p>
                    </motion.div>

                    <ParallaxImage />
                </div>

                <div className={styles.faq}>
                    {faqs.map((item) => {
                        const isOpen = open === item.id

                        return (
                            <motion.div
                                key={item.id}
                                className={styles.item}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.01 }}
                                onMouseEnter={() => document.body.classList.add("cursor-active")}
                                onMouseLeave={() => document.body.classList.remove("cursor-active")}
                            >
                                <button onClick={() => setOpen(isOpen ? null : item.id)}>
                                    {item.q}
                                    <span>{isOpen ? "–" : "+"}</span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            className={styles.answer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <p>{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
