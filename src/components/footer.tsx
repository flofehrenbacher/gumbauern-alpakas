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
    background-color: #dfd3c3;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  link: css`
    color: #394e59;
    text-decoration: none;
    &:first-child {
      margin-right: 30px;
    }
  `,
}
