import { FacebookIcon } from './facebook'
import { InstagramIcon } from './instagram'
import styles from './social.module.css'

export function SocialIcons() {
  return (
    <div className={styles.wrapper}>
      <a href="https://www.facebook.com/Gumbauern-Alpakas-102612168229373/">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/gumbauern_alpakas/">
        <InstagramIcon />
      </a>
    </div>
  )
}
