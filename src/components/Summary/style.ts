import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`

export const BoxValue = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  &.highlight-background {
    background: var(--green);
    color: #fff;
  }
`

export const HeaderBoxValue = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextValue = styled.p``

export const AmountValue = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`
