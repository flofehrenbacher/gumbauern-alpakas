import { Contact } from 'components/contact'
import React from 'react'
import { css } from '@pigment-css/react'

export default function AboutAlpakas() {
  return (
    <Contact
      as="h1"
      className={css({
        margin: '30px',
      })}
    />
  )
}
