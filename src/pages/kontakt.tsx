import { Contact } from 'components/contact'
import { css } from 'emotion'
import React from 'react'

export default () => (
  <>
    <div className={styles}>
      <Contact as="h1" />
    </div>
  </>
)

const styles = css`
  margin: 30px 30px 0;
  width: 100%;
`
