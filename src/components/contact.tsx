import { css } from '@emotion/react'
import React, { HTMLAttributes } from 'react'
import { layoutStyles } from '../pages/unsere-tiere'
import { H1 } from './shared'
import { SocialIcons } from './social'
import dynamic from 'next/dynamic'

export function Contact(
  props: HTMLAttributes<HTMLDivElement> & { as: 'h1' | 'h2' }
) {
  const { as, ...rest } = props
  const Map = dynamic(() => import('components/map'), { ssr: false })

  return (
    <div {...rest}>
      {as === 'h2' ? (
        <h2 css={layoutStyles.secondaryHeadline}>Kontakt</h2>
      ) : (
        <H1>Kontakt</H1>
      )}
      {as === 'h1' ? <SocialIcons /> : null}
      <div css={styles.addressContainer}>
        <address css={styles.addressLine}>Gumbauern-Alpakas</address>
        <address css={styles.addressLine}>Familie Olbrich</address>
        <address css={styles.addressLine}>Kleinberghausen 5</address>
        <address css={styles.addressLine}>92342 Freystadt</address>
        <address css={styles.addressLine}>
          Landkreis Neumarkt in der Oberpfalz
        </address>
        <span css={styles.addressLine}>
          Tel.:
          <a css={styles.phone} href="tel:084622638">
            08462 2638
          </a>
        </span>
        <span css={styles.addressLine}>
          Mobil (WhatsApp):
          <a css={styles.phone} href="tel:+49 1575 4205232">
            01575 4205232
          </a>
        </span>
        <span css={styles.addressLine}>
          E-Mail:
          <a css={styles.phone} href="mailto:info@gumbauern-alpakas.de">
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
