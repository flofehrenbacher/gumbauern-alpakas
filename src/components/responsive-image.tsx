import React, { ImgHTMLAttributes } from 'react'
import { css } from '@pigment-css/react'
import Image from 'next/image'

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
    <div className={imageRatioContainerStyles}>
      <Image alt={props.alt ?? ''} src={`${baseSrc}_1600.jpg`} fill />
    </div>
  )
}

const imageRatioContainerStyles = css({
  overflow: 'hidden',
  height: 0,
  paddingTop: `${(9 / 16) * 100}%`,
  background: '#f0ece2',
  position: 'relative',
})
