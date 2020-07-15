import React, { HTMLAttributes } from 'react'
import { css } from 'emotion'
import { layoutStyles } from '../pages/unsere-tiere'

export function Contact(
  props: HTMLAttributes<HTMLDivElement> & { as: 'h1' | 'h2' }
) {
  return (
    <div {...props}>
      {props.as === 'h2' ? (
        <h2 className={layoutStyles.secondaryHeadline}>Kontakt</h2>
      ) : (
        <h1 className={layoutStyles.mainHeadline}>Kontakt</h1>
      )}
      <address className={styles.addressLine}>Gumbauern-Alpakas</address>
      <address className={styles.addressLine}>
        Kleinberghausen 5 92342 Freystadt
      </address>
      <span className={styles.addressLine}>
        Tel.
        <a className={styles.phone} href="tel:+49015754205232">
          01575-4205232
        </a>
      </span>
      <a className={styles.addressLine} href="mailto:gumbauern@example.com">
        gumbauern@example.com
      </a>
    </div>
  )
}

const styles = {
  addressLine: css`
    margin-top: 20px;
    display: flex;
  `,
  phone: css`
    margin-left: 10px;
  `,
}
