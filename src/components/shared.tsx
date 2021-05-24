import React from 'react'
import { css } from '@emotion/react'

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 css={styles.mainHeadline}>{children}</h1>
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div css={styles.appStyles}>{children}</div>
}

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <main css={styles.contentWrapper}>{children}</main>
}

export function TextBlock({ children }: { children: React.ReactNode }) {
  return <div css={styles.textBlock}>{children}</div>
}

export function SecondaryHeadline({ children }: { children: React.ReactNode }) {
  return <h2 css={styles.secondaryHeadline}>{children}</h2>
}

export const marginLeftRight = 30

const styles = {
  mainHeadline: css`
    color: #394e59;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 30px ${marginLeftRight}px 0;
  `,
  appStyles: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f0ece2;
    margin: 0 auto;
  `,
  contentWrapper: css`
    width: 100%;
    max-width: 600px;
    flex-grow: 1;
    margin: 0 auto;
    padding-bottom: 30px;
  `,
  textBlock: css`
    line-height: 1.4;
    margin: 30px ${marginLeftRight}px 0;
  `,
  secondaryHeadline: css`
    font-weight: 600;
    font-size: 24px;
    margin-top: 20px;
  `,
}
