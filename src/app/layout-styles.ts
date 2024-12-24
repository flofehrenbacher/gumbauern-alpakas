import { css } from '@pigment-css/react'

export const layoutStyles = {
  contentStyles: css`
    flex-grow: 1;
  `,
  mainContainer: css`
    max-width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  secondaryHeadline: css`
    font-weight: 600;
    font-size: 20px;
  `,
  mainHeadline: css`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  `,
}
