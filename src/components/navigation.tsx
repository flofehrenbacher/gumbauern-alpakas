import { css } from '../../styled-system/css'
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
      className={css({
        backgroundColor: '#dfd3c3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <nav className={styles.navigation}>
        <Link href="/">
          <Logo
            className={css({
              height: '80px',
              width: '80px',
              marginLeft: '5px',
            })}
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
  buttonReset: css({
    background: 'none',
    border: 'none',
  }),
  navigation: css({
    width: '100%',
    height: '80px',
    backgroundColor: '#dfd3c3',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '800px',
  }),
  desktopLink: css({
    display: 'none',
    '@media screen and (min-width: 800px)': {
      color: '#373a47',
      marginRight: '20px',
      fontSize: '20px',
      textDecoration: 'none',
      display: 'flex',
      whiteSpace: 'nowrap',
      '&:hover': {
        color: '#373a4790',
      },
    },
  }),
  desktopLinks: css({
    display: 'none',
    '@media screen and (min-width: 800px)': {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
    },
  }),
}
