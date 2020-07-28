import { Contact } from 'components/contact'
import React from 'react'
import { layoutStyles } from './unsere-tiere'

export default () => (
  <main className={layoutStyles.mainContainer}>
    <Contact as="h1" />
  </main>
)
