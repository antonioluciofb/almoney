import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
`

export const HeaderTransactionContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTransactionTitle = styled.p`
  width: 13%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-left: 1rem;

  &.title {
    width: 25%;
  }

  &.delete {
    justify-content: center;
  }
  &.edit {
    justify-content: center;
  }
`

export const TransactionContainer = styled.div``

export const TransactionBox = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;

  font-weight: 400;
  text-align: left;
  line-height: 1.5rem;

  background-color: var(--shape);
  color: var(--text-body);
`

export const TransactionValue = styled.div`
  width: 13%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-left: 1rem;

  border: 0;
  color: var(--text-body);
  border-radius: 0.25rem;

  &.title {
    width: 25%;
  }

  &.delete {
    justify-content: center;
  }
  &.edit {
    justify-content: center;
  }

  &:first-child {
    color: var(--text-title);
  }

  &.deposit {
    color: var(--green);
  }

  &.withdraw {
    color: var(--red);
  }

  svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`
