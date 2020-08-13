import { Link } from '@reach/router'
import { css as emotionCSS, cx } from 'emotion'
import React from 'react'
import { push as Menu } from 'react-burger-menu'
import { Logo } from './logo'
import { Global, css } from '@emotion/core'

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(() => false)
  const links = [
    { text: 'Home', id: 'home', to: '/' },
    { text: 'Unsere Tiere', id: 'unsere-tiere', to: '/unsere-tiere' },
    { text: 'Alpakawanderung', id: 'alpakawanderung', to: '/alpakawanderung' },
    { text: 'Über Alpakas', id: 'ueber-alpakas', to: '/ueber-alpakas' },
    { text: 'Kontakt', id: 'kontakt', to: '/kontakt' },
  ]

  return (
    <nav className={styles.navigation}>
      <Global styles={menuStylesGlobal} />
      <Link to="/">
        <Logo height="100%" width="auto" />
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
            onClick={() => setIsOpen(false)}
            id={link.id}
            className={cx(['menu-item', styles.link])}
            to={link.to}
          >
            {link.text}
          </Link>
        ))}
      </Menu>
      <div className={styles.desktopLinks}>
        {links.map((link) => (
          <Link className={styles.desktopLink} to={link.to} key={link.id}>
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}

const menuStylesGlobal = css`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 25px;
    top: 25px;

    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
    transform: scale(3);
    transform-origin: right top;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: absolute;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #596e79;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #394e59;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #394e59;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    display: none;
  }
`

const styles = {
  navigation: emotionCSS`
    width: 100%;
    height: 80px;
    background-color: #dfd3c3;
    display: flex;
    justify-content: space-between;
  `,
  link: emotionCSS`
    display: block;
    width: 100%;
    color: white;
    margin-right: 10px;
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    text-decoration: none;
  `,
  desktopLink: emotionCSS`
    display: none;

    @media screen and (min-width: 800px) {
      color: white;
      margin-right: 20px;
      font-size: 20px;
      text-decoration: none;
      display: flex;
      white-space: nowrap;

      &:hover {
        color: #373a47;
      }
    }
  `,
  desktopLinks: emotionCSS`
    display: none;

    @media screen and (min-width: 800px) {
      display: flex;
      height: 100%;
      align-items: center;
    }
  `,
}
