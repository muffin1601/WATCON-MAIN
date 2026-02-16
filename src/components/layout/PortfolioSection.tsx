
"use client"

import Link from "next/link"
import styles from "./styles/PortfolioSection.module.css"

const projects = [
  {
    title: "Contemporary Pool Landscapes",
    excerpt:
      "Precision-engineered pools designed to integrate seamlessly with architecture and terrain, balancing performance, longevity, and visual calm.",
    href: "/portfolio/contemporary-pools",
    img: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg",
  },
  {
    title: "Natural Water Features",
    excerpt:
      "From reflective ponds to flowing water bodies, each feature is crafted to feel organic, immersive, and connected to its surroundings.",
    href: "/portfolio/water-features",
    img: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
    center: true,
  },
  {
    title: "Outdoor Living Environments",
    excerpt:
      "Thoughtfully planned outdoor spaces combining water, materials, and custom furnishings to create refined environments for modern living.",
    href: "/portfolio/outdoor-living",
    img: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg",
  },
]

export default function PortfolioSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <span className={`${styles.eyebrow} ${styles.fadeUp}`}>WATCON PORTFOLIO</span>

        <h2 className={styles.fadeUpDelay1}>
          Water-Led Design
          <br />
          Crafted with Precision.
        </h2>

        <p className={styles.fadeUpDelay2}>
          Watcon specialises in bespoke water environments — combining technical
          expertise, durable construction, and refined design to shape spaces
          that endure.
        </p>

        <Link href="/portfolio" className={`${styles.cta} ${styles.fadeUpDelay3}`}>
          <span className={styles.ctaBg} />
          <span className={styles.ctaContent}>
            <span className={styles.ctaDotFront} />
            View Portfolio
          </span>
          <span className={styles.ctaDotBack} />
        </Link>
      </header>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <article
            key={i}
            className={`${styles.card} ${p.center ? styles.center : ""}`}
          >
            <div className={styles.blob}>
              <svg viewBox="-80 -80 160 160" className={styles.blobSvg}>
                <defs>
                  <clipPath id={`blob-${i}`} clipPathUnits="userSpaceOnUse">
                    <path d="M48,-55C62,-46,73,-31,75,-15C77,1,70,18,58,33C46,48,30,61,12,66C-6,70,-26,66,-40,55C-54,44,-62,26,-62,8C-62,-10,-53,-29,-39,-41C-25,-53,-6,-58,12,-62C30,-66,60,-64,48,-55Z" />
                  </clipPath>
                </defs>

                <path
                  d="M48,-55C62,-46,73,-31,75,-15C77,1,70,18,58,33C46,48,30,61,12,66C-6,70,-26,66,-40,55C-54,44,-62,26,-62,8C-62,-10,-53,-29,-39,-41C-25,-53,-6,-58,12,-62C30,-66,60,-64,48,-55Z"
                  className={styles.stroke}
                />

                <image
                  href={p.img}
                  x="-80"
                  y="-80"
                  width="160"
                  height="160"
                  clipPath={`url(#blob-${i})`}
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>

            <h3 className={styles.fadeUpDelay1}>
              <Link href={p.href}>{p.title}</Link>
            </h3>

            <p className={`${styles.excerpt} ${styles.fadeUpDelay2}`}>
              {p.excerpt}
            </p>

            <Link href={p.href} className={styles.cta}>
              <span className={styles.ctaBg} />
              <span className={styles.ctaContent}>
                <span className={styles.ctaDotFront} />
                View Project
              </span>
              <span className={styles.ctaDotBack} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

