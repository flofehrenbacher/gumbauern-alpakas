import React, { ImgHTMLAttributes } from 'react'

type ResponsiveImageProps = {
  lazy: boolean
  // webpSrcSet: string
  // jpegSrcSet: string
  // fallbackSrc: string
} & ImgHTMLAttributes<HTMLImageElement>

export function ResponsiveImage({
  lazy,
  // webpSrcSet,
  // jpegSrcSet,
  // fallbackSrc,
  ...props
}: ResponsiveImageProps) {
  return (
    // <picture>
    //   <source type="image/webp" srcSet={webpSrcSet} {...props} />
    //   <img src={fallbackSrc} srcSet={jpegSrcSet} {...props} />
    // </picture>
    <img {...props}></img>
  )
}
