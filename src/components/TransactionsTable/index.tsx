import { useContext, useEffect, useState } from 'react'

import { TransactionContext } from '../../TransactionContext'
import {
  Container,
  HeaderTransactionContainer,
  HeaderTransactionTitle,
  SearchContainer,
  SearchInput,
  SearchTitle,
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
  const {
    transactions: contextTransactions,
    formatCurrent,
    deleteTransaction
  } = useContext(TransactionContext)

  const [transactions, setTransactions] = useState(contextTransactions)
  const [titleFilter, setTitleFilter] = useState('')

  useEffect(() => {
    if (titleFilter !== '') {
      handleFilter(titleFilter)
      return
    }
    setTransactions(contextTransactions)
  }, [contextTransactions])

  const handleFilter = (value: string) => {
    setTitleFilter(value)
    const titleForFilter = value.toLowerCase()
    const filterTransactions = contextTransactions.filter(transaction =>
      transaction.title.toLowerCase().includes(titleForFilter)
    )
    setTransactions(filterTransactions)

    if (titleForFilter === '') {
      setTransactions(contextTransactions)
    }
  }

  return (
    <Container>
      <SearchContainer>
        <SearchTitle>Filtrar por Título</SearchTitle>
        <SearchInput onChange={event => handleFilter(event.target.value)} />
      </SearchContainer>

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
        {transactions.length > 0 ? (
          transactions.map(transaction => (
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
          ))
        ) : (
          <p>Não encontramos nada</p>
        )}
      </TransactionContainer>
    </Container>
  )
}
