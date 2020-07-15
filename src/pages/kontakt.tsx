import React from 'react'
import { layoutStyles } from './unsere-tiere'
import { Contact } from 'components/contact'

export default () => (
  <main className={layoutStyles.mainContainer}>
    <Contact as="h1" />
  </main>
)
