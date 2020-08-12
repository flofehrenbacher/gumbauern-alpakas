import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { css } from 'emotion'

export function CustomCarousel({ children }: { children: React.ReactChild[] }) {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop
      swipeable
      className={css`
        margin-top: 30px;
      `}
    >
      {children}
    </Carousel>
  )
}
