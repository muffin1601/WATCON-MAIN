"use client"

import styles from "./styles/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg} />

      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="/logo.webp"
            alt="Watcon"
            className={styles.logo}
          />

          <h2>
            Join Our
            <br />
            Newsletter.
          </h2>

          <p className={styles.description}>
            We share occasional insights on water design, outdoor living, and
            thoughtful environments — crafted with clarity and purpose.
          </p>

          <form className={styles.newsletter}>
            <input type="email" placeholder="Your Email" />

            <button type="submit" className={styles.cta}>
              <span className={styles.ctaBg} />
              <span className={styles.ctaContent}>
                <span className={styles.ctaDotFront} />
                Subscribe
              </span>
              <span className={styles.ctaDotBack} />
            </button>
          </form>

          <p className={styles.privacy}>
            By subscribing, you agree to our Privacy Policy.
          </p>

          <p className={styles.contact}>
            Contact us:{" "}
            <a href="mailto:hello@watcon.com">hello@watcon.com</a>
          </p>

          {/* <div className={styles.socials}>
            <span />
            <span />
            <span />
            <span />
          </div> */}
        </div>

        <div className={styles.right}>
          {/* <div className={styles.column}>
            <span>SITEMAP</span>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Portfolio</a>
            <a>ContactUs</a>
          </div> */}

          {/* <div className={styles.column}>
            <span>LEGAL</span>
            <a>Book a Session</a>
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
            <a>404</a>
          </div> */}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Watcon. All rights reserved.</p>
      </div>
    </footer>
  )
}
