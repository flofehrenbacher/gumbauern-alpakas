import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export function CustomCarousel({ children }: { children: React.ReactChild[] }) {
  return (
    <Carousel showStatus={false} infiniteLoop swipeable>
      {children}
    </Carousel>
  )
}
