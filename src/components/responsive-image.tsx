import React, { ImgHTMLAttributes } from 'react'

type ResponsiveImageProps = { lazy: boolean } & ImgHTMLAttributes<
  HTMLImageElement
>

export function ResponsiveImage({ lazy, ...props }: ResponsiveImageProps) {
  return <img {...props}></img>
}
