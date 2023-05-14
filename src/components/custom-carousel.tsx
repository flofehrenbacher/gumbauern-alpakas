'use client'

import { Carousel } from 'react-responsive-carousel'
import styles from './custom-carousel.module.css'

export function CustomCarousel({ children }: { children: React.ReactChild[] }) {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop
      swipeable
      dynamicHeight
      useKeyboardArrows
      showThumbs={false}
      className={'custom-carousel'}
    >
      {children}
    </Carousel>
  )
}
