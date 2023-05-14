import { HTMLAttributes } from 'react'
import { H1, SecondaryHeadline } from './shared'
import { SocialIcons } from './social'
import styles from './contact.module.css'
import Map from './map'

export function Contact(
  props: HTMLAttributes<HTMLDivElement> & { as: 'h1' | 'h2' }
) {
  const { as, ...rest } = props

  return (
    <div {...rest}>
      {as === 'h2' ? (
        <SecondaryHeadline>Kontakt</SecondaryHeadline>
      ) : (
        <H1>Kontakt</H1>
      )}
      {as === 'h1' ? <SocialIcons /> : null}
      <div className={styles['address-container']}>
        <address className={styles['address-line']}>Gumbauern-Alpakas</address>
        <address className={styles['address-line']}>Familie Olbrich</address>
        <address className={styles['address-line']}>Kleinberghausen 5</address>
        <address className={styles['address-line']}>92342 Freystadt</address>
        <address className={styles['address-line']}>
          Landkreis Neumarkt in der Oberpfalz
        </address>
        <span className={styles['address-line']}>
          Tel.:
          <a className={styles.phone} href="tel:084622638">
            08462 2638
          </a>
        </span>
        <span className={styles['address-line']}>
          Mobil (WhatsApp):
          <a className={styles.phone} href="tel:+49 1575 4205232">
            01575 4205232
          </a>
        </span>
        <span className={styles['address-line']}>
          E-Mail:
          <a className={styles.phone} href="mailto:info@gumbauern-alpakas.de">
            info@gumbauern-alpakas.de
          </a>
        </span>
      </div>
      <Map />
    </div>
  )
}
