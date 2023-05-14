'use client'

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link'
import { push as Menu } from 'react-burger-menu'
import { Logo } from './logo'
import { SocialIcons } from './social'
import styles from './navigation.module.scss'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { text: 'Home', id: 'home', to: '/' },
    { text: 'Unsere Tiere', id: 'unsere-tiere', to: '/unsere-tiere' },
    { text: 'Alpakawanderung', id: 'alpakawanderung', to: '/alpakawanderung' },
    { text: 'Über Alpakas', id: 'ueber-alpakas', to: '/ueber-alpakas' },
    { text: 'Über uns', id: 'ueber-uns', to: '/ueber-uns' },
    { text: 'Kontakt', id: 'kontakt', to: '/kontakt' },
  ]

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <Link href="/" passHref>
          <Logo className={styles.logo} />
        </Link>
        <Menu
          disableAutoFocus
          right
          width="100%"
          isOpen={isOpen}
          onStateChange={(state) => setIsOpen(state.isOpen)}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.to}
              className="menu-item"
              // className={styles.link}
              onClick={() => setIsOpen(false)}
              passHref
            >
              {link.text}
            </Link>
          ))}
          <SocialIcons />
        </Menu>
        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link
              key={link.id}
              className={styles.desktopLink}
              href={link.to}
              passHref
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
