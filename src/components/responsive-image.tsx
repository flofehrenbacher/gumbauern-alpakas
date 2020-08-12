import React, { ImgHTMLAttributes } from 'react'
import { css, cx } from 'emotion'
import lozad from 'lozad'

type ResponsiveImageProps = {
  baseSrc: string
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({ baseSrc, ...props }: ResponsiveImageProps) {
  React.useEffect(() => {
    const observer = lozad() // lazy loads elements with default selector as '.lozad'
    observer.observe()
  }, [])

  return (
    <picture className={cx([styles, 'lozad'])} {...props}>
      <source
        type="image/webp"
        srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
      />
      <source type="image/jpeg" srcSet={`${baseSrc}_800.jpg`} />
    </picture>
  )
}

const styles = css`
  width: 100%;
  height: auto;
`
