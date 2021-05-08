import { Contact } from 'components/contact'
import React from 'react'
import { css } from '@emotion/react'

export default function AboutAlpakas() {
  return (
    <Contact
      as="h1"
      css={css`
        margin: 30px;
      `}
    />
  )
}
