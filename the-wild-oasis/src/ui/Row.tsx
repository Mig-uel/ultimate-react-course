import styled, { css } from 'styled-components'

type RowProps = {
  type?: 'horizontal' | 'vertical'
}

export const Row = styled.div<RowProps>`
  display: flex;

  ${({ type = 'vertical' }) =>
    type === 'vertical'
      ? css`
          flex-direction: column;
          gap: 1.6rem;
        `
      : css`
          justify-content: space-between;
          align-items: center;
        `}
`
