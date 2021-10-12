import { useContext } from 'react'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'
import {
  AmountValue,
  BoxValue,
  Container,
  HeaderBoxValue,
  TextValue
} from './style'

export function Summary() {
  const { transactions, formatCurrent } = useContext(TransactionContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0
    }
  )

  const { deposit, withdraw, total } = summary

  const backgroundVariation = total < 0 ? '#E52E4D' : '#33cc95'

  return (
    <Container>
      <BoxValue>
        <HeaderBoxValue>
          <TextValue>Entradas</TextValue>
          <img src={incomeImg} alt="Entradas" />
        </HeaderBoxValue>
        <AmountValue>{formatCurrent(deposit)}</AmountValue>
      </BoxValue>
      <BoxValue>
        <HeaderBoxValue>
          <TextValue>Saidas</TextValue>
          <img src={outcomeImg} alt="Saidas" />
        </HeaderBoxValue>
        <AmountValue>{formatCurrent(withdraw)}</AmountValue>
      </BoxValue>

      <BoxValue
        style={{ backgroundColor: backgroundVariation }}
        className="highlight-background"
      >
        <HeaderBoxValue>
          <TextValue>Total</TextValue>
          <img src={totalImg} alt="Total" />
        </HeaderBoxValue>
        <AmountValue>{formatCurrent(total)}</AmountValue>
      </BoxValue>
    </Container>
  )
}
