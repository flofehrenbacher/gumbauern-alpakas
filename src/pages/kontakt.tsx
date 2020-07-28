import { Contact } from 'components/contact'
import React from 'react'
import { layoutStyles } from './unsere-tiere'
import { css } from 'emotion'

export default () => (
  <main className={layoutStyles.mainContainer}>
    <div className={styles}>
      <Contact as="h1" />
    </div>
  </main>
)

const styles = css`
  max-width: 100%;
`
