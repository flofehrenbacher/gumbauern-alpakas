import { Contact } from 'components/contact'
import React from 'react'
import { css } from 'emotion'

export default () => (
  <Contact
    as="h1"
    className={css`
      margin-top: 30px;
    `}
  />
)
