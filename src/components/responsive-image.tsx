import React, { ImgHTMLAttributes } from 'react'
import { css } from 'emotion'

type ResponsiveImageProps = {
  lazy: boolean
  baseSrc: string
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({
  lazy,
  baseSrc,
  ...props
}: ResponsiveImageProps) {
  return (
    <picture className={styles}>
      <source
        type="image/webp"
        srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
      />
      <img
        src={`${baseSrc}_800.jpg`}
        srcSet={`${baseSrc}_800.jpg 800w, ${baseSrc}_1600.jpg 1600w`}
        loading="lazy"
        {...props}
      />
    </picture>
  )
}

const styles = css`
  width: 100%;
  height: auto;
`
