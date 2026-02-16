'use client'

import { motion } from 'framer-motion'
import styles from './styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = ['Home', 'Services', 'Clients', 'Portfolio', 'Contact Us', 'About Us']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        {/* LOGO */}
        <Link href="/" className={styles.logoWrap}>
          <div className={styles.logoPill} />
          <Image src="/logo.webp" alt="logo" width={150} height={62} />
        </Link>

        <div className={styles.menuCTA}>
          <div className={styles.menu}>
            {links.map(link => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className={styles.menuItem}
              >
                <span className={styles.menuText}>{link}</span>
                <span className={styles.menuLine} />
              </Link>
            ))}
          </div>

          <Link href="/book-a-session" className={styles.cta}>
            <span className={styles.bg} />
            <span className={styles.content}>
              <span className={styles.circleFront} />
              <span className={styles.label}>ENQUIRE NOW</span>
            </span>
            <span className={styles.circleBack} />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
