import { useContext } from 'react'

import { TransactionContext } from '../../TransactionContext'
import {
  Container,
  HeaderTransactionContainer,
  HeaderTransactionTitle,
  TransactionBox,
  TransactionContainer,
  TransactionValue
} from './style'

import { FaTrash, FaPen } from 'react-icons/fa'

interface ITransactionsTable {
  handleEditTransaction: {
    handleOpenNewTransactionModal: () => void
    handlEditTransaction: (data: any) => void
  }
}

export function TransactionsTable({
  handleEditTransaction
}: ITransactionsTable) {
  const { handlEditTransaction, handleOpenNewTransactionModal } =
    handleEditTransaction
  const { transactions, formatCurrent, deleteTransaction, editTransaction } =
    useContext(TransactionContext)

  return (
    <Container>
      <HeaderTransactionContainer>
        <HeaderTransactionTitle className="title">
          Titulo
        </HeaderTransactionTitle>
        <HeaderTransactionTitle>Valor</HeaderTransactionTitle>
        <HeaderTransactionTitle>Categoria</HeaderTransactionTitle>
        <HeaderTransactionTitle>Data</HeaderTransactionTitle>
        <HeaderTransactionTitle className="delete">
          Excluir
        </HeaderTransactionTitle>
        <HeaderTransactionTitle className="edit">Editar</HeaderTransactionTitle>
      </HeaderTransactionContainer>

      <TransactionContainer>
        {transactions.map(transaction => (
          <TransactionBox key={transaction.id}>
            <TransactionValue className="title">
              {transaction.title}
            </TransactionValue>
            <TransactionValue className={transaction.type}>
              {formatCurrent(transaction.amount)}
            </TransactionValue>
            <TransactionValue>{transaction.category}</TransactionValue>
            <TransactionValue>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </TransactionValue>
            <TransactionValue className="icon delete">
              <FaTrash onClick={() => deleteTransaction(transaction.id)} />
            </TransactionValue>
            <TransactionValue className="icon edit">
              <FaPen
                onClick={() => {
                  handlEditTransaction(transaction)
                }}
              />
            </TransactionValue>
          </TransactionBox>
        ))}
      </TransactionContainer>
    </Container>
  )
}
