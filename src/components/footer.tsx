import Link from 'next/link'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <div className={styles.navigation}>
      <Link href="/impressum" className={styles.link} passHref>
        Impressum
      </Link>
      <Link href="/datenschutz" className={styles.link} passHref>
        Datenschutz
      </Link>
    </div>
  )
}
