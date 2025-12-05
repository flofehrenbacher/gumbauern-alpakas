'use client'
import { css } from '../../styled-system/css'
import React, { ReactNode } from 'react'
import { Carousel, CarouselProps } from 'react-responsive-carousel'

export function CustomCarousel({
  children,
}: {
  children: CarouselProps['children']
}) {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop
      swipeable
      dynamicHeight
      useKeyboardArrows
      showThumbs={false}
      // TODO: check why only object style works
      className={css({
        marginTop: '30px',
        width: '100%',
      })}
    >
      {children}
    </Carousel>
  )
}
