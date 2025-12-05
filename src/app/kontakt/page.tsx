import { Contact } from 'components/contact'
import React from 'react'
import { css } from '../../../styled-system/css'

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
