import styles from "./JournalSection.module.css"
import Link from "next/link"

const articles = [
  {
    title: "Learning to Pause Without Guilt.",
    excerpt:
      "Taking a break isn’t failure — it’s part of the process. Here’s how to slow down with kindness.",
    href: "/journal/learning-to-pause-without-guilt",
    img: "https://framerusercontent.com/images/D6H1lHKBDuxkhpUVf8PPyt7Jivg.jpg",
    mask: "https://framerusercontent.com/images/YRuh4U5ThvXtO2fvm6HWgEZuE4.svg",
    strokeViewBox: "0 0 293 254",
  },
  {
    title: "What Makes Therapy Work?",
    excerpt:
      "Beyond techniques or tools, therapy works best when it feels safe, real, and human.",
    href: "/journal/what-makes-therapy-work",
    img: "https://framerusercontent.com/images/LksF7zMOHE97HJPqXDmb7LSvWE.jpg",
    mask: "https://framerusercontent.com/images/XzHb5S2N4RU9GakyQhgQX2XqY6w.svg",
    strokeViewBox: "0 0 265 259",
    center: true,
  },
  {
    title: "The Gentle Art of Slowing Down",
    excerpt:
      "Slowing down is more than just taking a break — it’s a conscious choice to live at a pace that allows space for reflection, connection, and clarity.",
    href: "/journal/the-art-of-slowing-down",
    img: "https://framerusercontent.com/images/ZMX4xonC6WvSRyRzHHgOkTDzw4.jpg",
    mask: "https://framerusercontent.com/images/4hAvhj6oDkzuyTUlP4waQ9M3jSw.svg",
    strokeViewBox: "0 0 302 265",
  },
]

export default function JournalSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>OUR JOURNAL</span>
        <h2>
          Insights for Growth, Healing
          <br />
          and Clarity.
        </h2>
        <p>
          We share reflections, tools, and gentle prompts to support personal
          growth — one step at a time.
        </p>

        <Link href="/journal" className={styles.primaryButton}>
          Browse Insights
          <span />
          <span />
        </Link>
      </header>

      <div className={styles.grid}>
        {articles.map((a, i) => (
          <article
            key={i}
            className={`${styles.card} ${a.center ? styles.center : ""}`}
          >
            <Link href={a.href} className={styles.imageWrap}>
              <svg
                viewBox={a.strokeViewBox}
                className={styles.stroke}
                aria-hidden
              >
                <use href="#blob-stroke" />
              </svg>

              <div
                className={styles.image}
                style={{
                  WebkitMask: `url(${a.mask}) center / cover no-repeat`,
                  mask: `url(${a.mask}) center / cover no-repeat`,
                }}
              >
                <img src={a.img} alt="" />
                <span className={styles.noise} />
              </div>
            </Link>

            <h3>
              <Link href={a.href}>{a.title}</Link>
            </h3>

            <p className={styles.excerpt}>{a.excerpt}</p>

            <Link href={a.href} className={styles.secondaryButton}>
              Read More
              <span />
              <span />
            </Link>
          </article>
        ))}
      </div>

      <svg width="0" height="0">
        <defs>
          <path
            id="blob-stroke"
            d="M48,-55C62,-46,73,-31,75,-15C77,1,70,18,58,33C46,48,30,61,12,66C-6,70,-26,66,-40,55C-54,44,-62,26,-62,8C-62,-10,-53,-29,-39,-41C-25,-53,-6,-58,12,-62C30,-66,60,-64,48,-55Z"
          />
        </defs>
      </svg>
    </section>
  )
}
