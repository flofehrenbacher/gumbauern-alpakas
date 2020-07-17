import { Link } from '@reach/router'
import { css, cx } from 'emotion'
import React from 'react'
import { push as Menu } from 'react-burger-menu'

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(() => false)
  return (
    <nav className={styles.navigation}>
      <Menu
        disableAutoFocus
        styles={menuStyles}
        right
        width="100%"
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <Link
          onClick={() => setIsOpen(false)}
          id="home"
          className={cx(['menu-item', styles.link])}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          id="unsere-tiere"
          className={cx(['menu-item', styles.link])}
          to="/unsere-tiere"
        >
          Unsere Tiere
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          id="alpakawanderung"
          className={cx(['menu-item', styles.link])}
          to="/alpakawanderung"
        >
          Alpakawanderung
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          id="ueber-alpakas"
          className={cx(['menu-item', styles.link])}
          to="/ueber-alpakas"
        >
          Über Alpakas
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          id="kontakt"
          className={cx(['menu-item', styles.link])}
          to="/kontakt"
        >
          Kontakt
        </Link>
      </Menu>
    </nav>
  )
}

var menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '15px',
    top: '15px',
  },
  bmBurgerBars: {
    background: 'black',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    transform: 'scale(3)',
    transformOrigin: 'right top',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    // width: '100vw',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const styles = {
  navigation: css`
    width: 100%;
    height: 60px;
    background-color: white;
  `,
  link: css`
    display: block;
    width: 100%;
    color: white;
    margin-right: 10px;
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    text-decoration: none;
  `,
}
