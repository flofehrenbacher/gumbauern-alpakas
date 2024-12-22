/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from '@emotion/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Logo } from './logo'
import { SocialIcons } from './social'

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(() => false)
  const links = [
    { text: 'Home', id: 'home', to: '/' },
    { text: 'Unsere Tiere', id: 'unsere-tiere', to: '/unsere-tiere' },
    { text: 'Alpakawanderung', id: 'alpakawanderung', to: '/alpakawanderung' },
    { text: 'Über Alpakas', id: 'ueber-alpakas', to: '/ueber-alpakas' },
    { text: 'Über uns', id: 'ueber-uns', to: '/ueber-uns' },
    { text: 'Kontakt', id: 'kontakt', to: '/kontakt' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <div
      css={css`
        background-color: #dfd3c3;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <nav css={styles.navigation}>
        <Link href="/">
          <Logo
            css={css`
              height: 80px;
              width: 80px;
              margin-left: 5px;
            `}
          />
        </Link>
        <button
          css={[styles.buttonReset, styles.mobileOnly]}
          onClick={() => setIsOpen(true)}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28 6H4V8H28V6Z" fill="#373a47" />
            <path d="M28 15H4V17H28V15Z" fill="#373a47" />
            <path d="M28 24H4V26H28V24Z" fill="#373a47" />
          </svg>
        </button>
        <div
          css={css`
            isolation: isolate;
            position: fixed;
            overflow: scroll;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: #596e79;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s ease-in-out;
            transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
            z-index: 10000;
            padding-bottom: 80px;
          `}
        >
          <button
            css={[
              styles.buttonReset,
              css({
                path: { fill: 'white' },
                display: 'block',
                marginLeft: 'auto',
                padding: '20px',
              }),
            ]}
            onClick={() => setIsOpen(false)}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.71 6.71004L25.29 5.29004L16 14.58L6.71004 5.29004L5.29004 6.71004L14.58 16L5.29004 25.29L6.71004 26.71L16 17.42L25.29 26.71L26.71 25.29L17.42 16L26.71 6.71004Z"
                fill="#29293A"
              />
            </svg>
          </button>
          {links.map((link) => (
            <Link
              href={link.to}
              className="menu-item"
              css={styles.link}
              key={link.id}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <SocialIcons />
        </div>
        <div css={styles.desktopLinks}>
          {links.map((link) => (
            <Link href={link.to} css={styles.desktopLink} key={link.id}>
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
  mobileOnly: css`
    @media screen and (min-width: 800px) {
      display: none;
    }
  `,
  navigation: css`
    width: 100%;
    height: 80px;
    background-color: #dfd3c3;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
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
