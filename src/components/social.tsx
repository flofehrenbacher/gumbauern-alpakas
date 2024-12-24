import React from 'react'
import { css } from '@pigment-css/react'
import { FacebookIcon } from './facebook'
import { InstagramIcon } from './instagram'

export function SocialIcons() {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      })}
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
