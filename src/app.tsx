import { Router } from '@reach/router'
import { Navigation } from 'components/navigation'
import React from 'react'
import { Root, Routes } from 'react-static'
import { Global } from '@emotion/core'
import css from '@emotion/css'
import emotionReset from 'emotion-reset'
import { Footer } from 'components/footer'
import { layoutStyles } from './pages/unsere-tiere'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function App() {
  return (
    <Root>
      <Global
        styles={css`
          ${emotionReset}
          @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
          html {
            font-family: 'Handlee', cursive;
            color: #394e59;
            font-weight: 500;
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <div className={layoutStyles.appStyles}>
        <Navigation />
        <div className={layoutStyles.contentStyles}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Footer />
      </div>
    </Root>
  )
}

export default App
