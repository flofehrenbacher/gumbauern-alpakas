import Link from 'next/link'
import { css } from '@emotion/react'
import React from 'react'

export function Footer() {
  return (
    <div css={styles.navigation}>
      <Link href="/impressum" passHref>
        <a css={styles.link}>Impressum</a>
      </Link>
      <Link href="/datenschutz" passHref>
        <a css={styles.link}>Datenschutz</a>
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
    &:first-of-type {
      margin-right: 30px;
    }
  `,
}
