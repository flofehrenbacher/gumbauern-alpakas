import styles from './shared.module.css'

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={styles['main-headline']}>{children}</h1>
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles['app-styles']}>{children}</div>
}

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <main className={styles['content-wrapper']}>{children}</main>
}

export function TextBlock({ children }: { children: React.ReactNode }) {
  return <div className={styles['text-block']}>{children}</div>
}

export function SecondaryHeadline({ children }: { children: React.ReactNode }) {
  return <h2 className={styles['secondary-headline']}>{children}</h2>
}
