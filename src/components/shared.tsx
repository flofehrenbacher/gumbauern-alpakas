import React from 'react'
import { css } from '../../styled-system/css'

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.mainHeadline}>{children}</h1>
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.appStyles}>{children}</div>
}

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <main className={styles.contentWrapper}>{children}</main>
}

export function TextBlock({ children }: { children: React.ReactNode }) {
  return <div className={styles.textBlock}>{children}</div>
}

export function SecondaryHeadline({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.secondaryHeadline}>{children}</h2>
}

export const marginLeftRight = 30

const styles = {
  mainHeadline: css({
    color: '#394e59',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 600,
    margin: `30px ${marginLeftRight}px 0`,
  }),
  appStyles: css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0ece2',
    margin: '0 auto',
  }),
  contentWrapper: css({
    width: '100%',
    maxWidth: '600px',
    flexGrow: 1,
    margin: '0 auto',
    paddingBottom: '30px',
  }),
  textBlock: css({
    lineHeight: 1.4,
    margin: `30px ${marginLeftRight}px 0`,
  }),
  secondaryHeadline: css({
    fontWeight: 600,
    fontSize: '24px',
    marginTop: '20px',
  }),
}
