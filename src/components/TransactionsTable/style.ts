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

export const TransactionContainer = styled.div`
  width: 100%;
  min-height: 20vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--text-title);
`

export const SearchContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 10px 0 30px 0;
`

export const SearchTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

export const SearchInput = styled.input`
  width: 30%;

  margin: 5px;
  padding: 5px;
  border-radius: 5px;

  font-size: 1rem;

  background-color: var(--shape);
  border: none;
  outline: none;
`

export const TransactionBox = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;
  border-radius: 6px;

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
