import { Link } from '@reach/router'
import { css } from 'emotion'
import React from 'react'

export function Footer() {
  return (
    <div className={styles.navigation}>
      <Link className={styles.link} to="/impressum">
        Impressum
      </Link>
      <Link className={styles.link} to="/datenschutz">
        Datenschutz
      </Link>
    </div>
  )
}

const styles = {
  navigation: css`
    width: 100%;
    background-color: black;
    padding: 10px;
  `,
  link: css`
    color: white;
    margin-right: 10px;
  `,
}
