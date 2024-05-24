import React, { ImgHTMLAttributes } from 'react'
import { css } from '@emotion/react'

type ResponsiveImageProps = {
  baseSrc: string
  lazy?: boolean
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({
  baseSrc,
  lazy = false,
  ...props
}: ResponsiveImageProps) {
  return (
    <div css={imageRatioContainerStyles}>
      <picture css={styles} {...props}>
        <source
          type="image/webp"
          srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
        />
        <source type="image/jpeg" srcSet={`${baseSrc}_800.jpg`} />
        <img
          alt=""
          src={`${baseSrc}_800.jpg`}
          css={css`
            max-width: 100%;
          `}
          loading={lazy ? 'lazy' : 'eager'}
          {...props}
        />
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
  transition: opacity 3000ms ease-in 0s;
  opacity: 1;
`

const imageRatioContainerStyles = css`
  overflow: hidden;
  height: 0;
  padding-top: ${(9 / 16) * 100}%;
  background: #f0ece2;
  position: relative;
`
