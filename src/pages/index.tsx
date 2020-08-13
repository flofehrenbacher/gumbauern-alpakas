import { Link } from '@reach/router'
import { Contact } from 'components/contact'
import { CustomCarousel } from 'components/custom-carousel'
import { ResponsiveImage } from 'components/responsive-image'
import { H1 } from 'components/shared'
import { css } from 'emotion'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function () {
  const links = [
    { text: 'Unsere Tiere', to: '/unsere-tiere' },
    { text: 'Alpakawanderung', to: '/alpakawanderung' },
    { text: 'Über Alpakas', to: '/ueber-alpakas' },
  ]

  return (
    <>
      <H1>Herzlich Willkommen bei den Gumbauern-Alpakas</H1>
      <CustomCarousel>
        <ResponsiveImage
          lazy={false}
          baseSrc="/img/titel/titel_1"
          alt="Alpaka Alfons"
        />
        <ResponsiveImage
          baseSrc="/img/titel/titel_2"
          alt="mehrere Alpakas auf der Wiese"
        />
        <ResponsiveImage
          baseSrc="/img/titel/titel_3"
          alt="Alpakas beim Essen"
        />
      </CustomCarousel>
      <LinkContainer links={links} />
      <Contact as="h2" className={styles.contactLayout} />
    </>
  )
}

type LinkType = { to: string; text: string }
function LinkContainer({ links }: { links: LinkType[] }) {
  return (
    <ul className={styles.linkContainer}>
      {links.map((link) => (
        <Link className={styles.link} to={link.to} key={link.text}>
          {link.text}
        </Link>
      ))}
    </ul>
  )
}

const styles = {
  link: css`
    color: #394e59;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    padding: 15px;
    &:not(:last-child) {
      border-bottom: 2px solid #dfd3c3;
    }
    &:hover {
      background-color: #dfd3c3;
    }
  `,
  image: css`
    max-width: 100vw;
  `,
  imageContainer: css`
    position: relative;
  `,
  linkContainer: css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 30px auto 0;
    width: 250px;
  `,
  contactLayout: css`
    margin: 40px 30px 0;
    max-width: 100%;
  `,
}
