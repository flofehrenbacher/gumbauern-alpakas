import React from 'react'
import { css } from '@emotion/react'
import { FacebookIcon } from './facebook'
import { InstagramIcon } from './instagram'

export function SocialIcons() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      `}
    >
      <a href="https://www.facebook.com/Gumbauern-Alpakas-102612168229373/">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/gumbauern_alpakas/">
        <InstagramIcon />
      </a>
    </div>
  )
}
