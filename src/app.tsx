import { Router } from '@reach/router'
import { Navigation } from 'components/navigation'
import React from 'react'
import { Root, Routes } from 'react-static'
import { Global } from '@emotion/core'
import css from '@emotion/css'
import emotionReset from 'emotion-reset'

function App() {
  return (
    <Root>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Navigation />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
