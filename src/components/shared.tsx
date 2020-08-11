import React from 'react'
import { css } from 'emotion'

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.mainHeadline}>{children}</h1>
}

export function ImageRatioContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.imageRatioContainer}>{children}</div>
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
  mainHeadline: css`
    color: #394e59;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 30px ${marginLeftRight}px 0;
  `,
  imageRatioContainer: css`
    width: 100%;
    overflow: hidden;
    margin: 30px auto 0;
  `,
  appStyles: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f0ece2;
    max-width: 800px;
    margin: 0 auto;
  `,
  contentWrapper: css`
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
