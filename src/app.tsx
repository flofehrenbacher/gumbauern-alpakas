import { Global } from '@emotion/core'
import css from '@emotion/css'
import { Router } from '@reach/router'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { AppWrapper, ContentWrapper } from 'components/shared'
import emotionReset from 'emotion-reset'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Root, Routes, Head } from 'react-static'

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
      <Head>
        <meta charSet="UTF-8" />
        <title>
          Alpakawandern im schönen Kleinberghausen - Alpakawanderung in der
          Oberpfalz
        </title>
      </Head>
      <AppWrapper>
        <Navigation />
        <ContentWrapper>
          <React.Suspense fallback={<em>Lädt...</em>}>
            <Router basepath="/">
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </ContentWrapper>
        <Footer />
      </AppWrapper>
    </Root>
  )
}

export default App
