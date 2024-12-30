'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment()

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== 'live' && environment !== 'unknown') {
    return null
  }

  return (
    <a
      href="/api/draft-mode/disable"
      // because of problems with pigment I use inline styling for this button for now
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        background: '#AAA',
        padding: '8px 4px',
      }}
    >
      Disable Draft Mode
    </a>
  )
}
