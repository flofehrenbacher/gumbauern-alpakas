import { css } from '@pigment-css/react'
import Link from 'next/link'
import { BurgerMenu } from './burger-menu'
import { Logo } from './logo'

export function Navigation() {
  const links = [
    { text: 'Home', id: 'home', to: '/' },
    { text: 'Unsere Tiere', id: 'unsere-tiere', to: '/unsere-tiere' },
    { text: 'Alpakawanderung', id: 'alpakawanderung', to: '/alpakawanderung' },
    { text: 'Über Alpakas', id: 'ueber-alpakas', to: '/ueber-alpakas' },
    { text: 'Über uns', id: 'ueber-uns', to: '/ueber-uns' },
    { text: 'Kontakt', id: 'kontakt', to: '/kontakt' },
  ]

  return (
    <div
      className={css`
        background-color: #dfd3c3;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <nav className={styles.navigation}>
        <Link href="/">
          <Logo
            className={css`
              height: 80px;
              width: 80px;
              margin-left: 5px;
            `}
          />
        </Link>
        <BurgerMenu links={links} />
        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link href={link.to} className={styles.desktopLink} key={link.id}>
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

const styles = {
  buttonReset: css`
    background: none;
    border: none;
  `,
  navigation: css`
    width: 100%;
    height: 80px;
    background-color: #dfd3c3;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
  `,
  desktopLink: css`
    display: none;

    @media screen and (min-width: 800px) {
      color: #373a47;
      margin-right: 20px;
      font-size: 20px;
      text-decoration: none;
      display: flex;
      white-space: nowrap;

      &:hover {
        color: #373a4790;
      }
    }
  `,
  desktopLinks: css`
    display: none;

    @media screen and (min-width: 800px) {
      display: flex;
      height: 100%;
      align-items: center;
    }
  `,
}
