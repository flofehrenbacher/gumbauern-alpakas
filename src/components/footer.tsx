import Link from 'next/link'
import { css } from '@pigment-css/react'
import React from 'react'

export function Footer() {
  return (
    <div className={styles.navigation}>
      <Link href="/impressum" className={styles.link}>
        Impressum
      </Link>
      <Link href="/datenschutz" className={styles.link}>
        Datenschutz
      </Link>
    </div>
  )
}

const styles = {
  navigation: css({
    width: '100%',
    backgroundColor: '#dfd3c3',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  link: css({
    color: '#394e59',
    textDecoration: 'none',
    '&:first-of-type': {
      marginRight: '30px',
    },
  }),
}
