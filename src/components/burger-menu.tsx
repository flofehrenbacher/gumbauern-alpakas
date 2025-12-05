'use client'
import Link from 'next/link'
import { SocialIcons } from './social'
import { css } from '../../styled-system/css'
import { useEffect, useState } from 'react'

type Props = {
  links: {
    text: string
    id: string
    to: string
  }[]
}
export function BurgerMenu({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <>
      <button
        className={`${styles.buttonReset} ${styles.mobileOnly}`}
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
        className={css({
          isolation: 'isolate',
          position: 'fixed',
          overflow: 'scroll',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#596e79',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease-in-out',
          transform: 'translateX(100%)',
          zIndex: 10000,
          paddingBottom: '80px',
        })}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <button
          className={css({
            background: 'none',
            border: 'none',
            display: 'block',
            marginLeft: 'auto',
            padding: '20px',
          })}
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
              fill="white"
            />
          </svg>
        </button>
        {links.map((link) => (
          <Link
            href={link.to}
            className={styles.link}
            key={link.id}
            onClick={() => setIsOpen(false)}
          >
            {link.text}
          </Link>
        ))}
        <SocialIcons />
      </div>
    </>
  )
}

const styles = {
  buttonReset: css({
    background: 'none',
    border: 'none',
  }),
  mobileOnly: css({
    '@media screen and (min-width: 800px)': {
      display: 'none',
    },
  }),
  link: css({
    display: 'block',
    width: '100%',
    color: 'white',
    marginRight: '10px',
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '30px',
    textDecoration: 'none',
  }),
}
