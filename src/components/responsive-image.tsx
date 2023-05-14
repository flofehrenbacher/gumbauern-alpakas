import Image from 'next/image'
import { ImgHTMLAttributes } from 'react'
import styles from './responsive-image.module.css'

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
    <div className={styles['ratio-container']}>
      <Image alt="" fill src={`${baseSrc}_800.webp`} />
      {/* <picture className={styles.image} {...props}>
        <source
          type="image/webp"
          srcSet={`${baseSrc}_800.webp 800w, ${baseSrc}_1600.webp 1600w`}
        />
        <source type="image/jpeg" srcSet={`${baseSrc}_800.jpg`} />
        {lazy ? null : (
          <img
            loading={lazy ? 'lazy' : 'eager'}
            alt=""
            src={`${baseSrc}_800.jpg`}
            className={styles.image}
            {...props}
          />
        )}
      </picture> */}
    </div>
  )
}
