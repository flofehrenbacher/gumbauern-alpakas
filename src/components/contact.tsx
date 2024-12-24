import { css } from '@pigment-css/react'
import React, { HTMLAttributes } from 'react'
import { H1 } from './shared'
import { SocialIcons } from './social'
import { layoutStyles } from 'app/layout-styles'
import { Map } from 'components/map'

export function Contact(
  props: HTMLAttributes<HTMLDivElement> & { as: 'h1' | 'h2' }
) {
  const { as, ...rest } = props

  return (
    <div {...rest}>
      {as === 'h2' ? (
        <h2 className={layoutStyles.secondaryHeadline}>Kontakt</h2>
      ) : (
        <H1>Kontakt</H1>
      )}
      {as === 'h1' ? <SocialIcons /> : null}
      <div className={styles.addressContainer}>
        <address className={styles.addressLine}>Gumbauern-Alpakas</address>
        <address className={styles.addressLine}>Familie Olbrich</address>
        <address className={styles.addressLine}>Kleinberghausen 5</address>
        <address className={styles.addressLine}>92342 Freystadt</address>
        <address className={styles.addressLine}>
          Landkreis Neumarkt in der Oberpfalz
        </address>
        <span className={styles.addressLine}>
          Tel.:
          <a className={styles.phone} href="tel:084622638">
            08462 2638
          </a>
        </span>
        <span className={styles.addressLine}>
          Mobil (WhatsApp):
          <a className={styles.phone} href="tel:+49 1575 4205232">
            01575 4205232
          </a>
        </span>
        <span className={styles.addressLine}>
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

const styles = {
  addressLine: css`
    margin-top: 7px;
    display: flex;
  `,
  phone: css`
    margin-left: 10px;
  `,
  addressContainer: css`
    margin-top: 30px;
  `,
}
