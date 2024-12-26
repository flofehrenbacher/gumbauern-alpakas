import Link from 'next/link'
import { Contact } from '../components/contact'
import { CustomCarousel } from '../components/custom-carousel'
import { ResponsiveImage } from '../components/responsive-image'
import { H1 } from '../components/shared'
import { css } from '@pigment-css/react'
import React from 'react'
import { SocialIcons } from '../components/social'

export default function HomePage() {
  const links = [
    { text: 'Unsere Tiere', to: '/unsere-tiere' },
    { text: 'Alpakawanderung', to: '/alpakawanderung' },
    { text: 'Über Alpakas', to: '/ueber-alpakas' },
    { text: 'Über uns', to: '/ueber-uns' },
  ]

  return (
    <>
      <H1>Herzlich Willkommen bei den Gumbauern-Alpakas</H1>
      <CustomCarousel>
        <ResponsiveImage
          lazy={false}
          baseSrc="/img/titel/titel_1"
          alt="Alpakawanderungen"
        />
        <ResponsiveImage baseSrc="/img/titel/titel_2" alt="Alpakatouren" />
        <ResponsiveImage baseSrc="/img/titel/titel_3" alt="Alpakatrekking" />
      </CustomCarousel>
      <LinkContainer links={links} />
      <SocialIcons />
      <Contact as="h2" className={styles.contactLayout} />
    </>
  )
}

type LinkType = { to: string; text: string }
function LinkContainer({ links }: { links: LinkType[] }) {
  return (
    <ul className={styles.linkContainer}>
      {links.map((link) => (
        <Link key={link.to} href={link.to} className={styles.link}>
          {link.text}
        </Link>
      ))}
    </ul>
  )
}

const styles = {
  link: css({
    color: '#394e59',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '15px',
    '&:not(:last-child)': {
      borderBottom: '2px solid #dfd3c3',
    },
    '&:hover': {
      backgroundColor: '#dfd3c3',
    },
  }),
  image: css({
    maxWidth: '100vw',
  }),
  imageContainer: css({
    position: 'relative',
  }),
  linkContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: '30px auto 0',
    width: '250px',
  }),
  contactLayout: css({
    margin: '40px 30px 0',
    maxWidth: '100%',
  }),
}
