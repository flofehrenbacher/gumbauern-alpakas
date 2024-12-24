import { css } from '@pigment-css/react'

export const layoutStyles = {
  contentStyles: css({
    flexGrow: 1,
  }),
  mainContainer: css({
    maxWidth: '100%',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  secondaryHeadline: css({
    fontWeight: 600,
    fontSize: '20px',
  }),
  mainHeadline: css({
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '20px',
  }),
}
