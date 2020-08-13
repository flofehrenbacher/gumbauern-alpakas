import { css } from 'emotion'
import React, { ImgHTMLAttributes } from 'react'

type ResponsiveImageProps = {
  baseSrc: string
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({ baseSrc, ...props }: ResponsiveImageProps) {
  return (
    <div className={imageRatioContainerStyles}>
      <picture className={styles} {...props}>
        <source
          type="image/webp"
          srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
        />
        <source type="image/jpeg" srcSet={`${baseSrc}_800.jpg`} />
        <img src={`${baseSrc}_800.jpg`} {...props} />
      </picture>
    </div>
  )
}

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const imageRatioContainerStyles = css`
  overflow: hidden;
  height: 0;
  padding-top: ${(9 / 16) * 100}%;
  background: white;
  position: relative;
`
