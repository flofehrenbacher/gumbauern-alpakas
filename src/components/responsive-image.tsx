import React, { ImgHTMLAttributes } from 'react'
import { css } from '@emotion/react'
import lozad from 'lozad'

type ResponsiveImageProps = {
  baseSrc: string
  lazy?: boolean
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({
  baseSrc,
  lazy = false,
  ...props
}: ResponsiveImageProps) {
  React.useEffect(() => {
    const observer = lozad('.lozad', {
      rootMargin: '200px 0px',
    }) // lazy loads elements with default selector as '.lozad'
    observer.observe()
  }, [])

  return (
    <div css={imageRatioContainerStyles}>
      <picture css={styles} className="lozad" {...props}>
        <source
          type="image/webp"
          srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
        />
        <source type="image/jpeg" srcSet={`${baseSrc}_800.jpg`} />
        {lazy ? null : (
          <img
            alt=""
            src={`${baseSrc}_800.jpg`}
            css={css`
              max-width: 100%;
            `}
            {...props}
          />
        )}
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
