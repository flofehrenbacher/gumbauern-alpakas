import { Contact } from 'components/contact'
import { CustomCarousel } from 'components/custom-carousel'
import { ResponsiveImage } from 'components/responsive-image'
import { H1 } from 'components/shared'
import { SocialIcons } from 'components/social'
import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './styles.module.scss'

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
      <Contact as="h2" className={styles['contact-layout']} />
    </>
  )
}

type LinkType = { to: string; text: string }
function LinkContainer({ links }: { links: LinkType[] }) {
  return (
    <ul className={styles['link-container']}>
      {links.map((link) => (
        <Link key={link.to} href={link.to} passHref className={styles.link}>
          {link.text}
        </Link>
      ))}
    </ul>
  )
}
