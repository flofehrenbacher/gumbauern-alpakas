import React, { ImgHTMLAttributes } from 'react'
import { css } from '@pigment-css/react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ResponsiveImageProps = {
  src: string | StaticImport
  lazy?: boolean
  alt?: string
}

export function ResponsiveImage({
  lazy = false,
  alt = '',
  src,
}: ResponsiveImageProps) {
  return (
    <div className={imageRatioContainerStyles}>
      <Image alt={alt ?? ''} src={src} priority={!lazy} fill />
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
