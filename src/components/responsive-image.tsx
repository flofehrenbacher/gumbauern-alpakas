import { css } from 'emotion'
import React, { ImgHTMLAttributes } from 'react'

type ResponsiveImageProps = {
  baseSrc: string
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({ baseSrc, ...props }: ResponsiveImageProps) {
  return (
    <picture className={styles} {...props}>
      <source
        type="image/webp"
        srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
      />
      <source type="image/jpeg" srcSet={`${baseSrc}_800.jpg`} />
      <img src={`${baseSrc}_800.jpg`} {...props} />
    </picture>
  )
}

const styles = css`
  width: 100%;
  height: auto;
`
