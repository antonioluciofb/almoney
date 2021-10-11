import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from './services/api'

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface ITransactionInput extends Omit<Transaction, 'id' | 'createdAt'> {
  id?: string
}

interface ITrasactionProvider {
  children: ReactNode
}

type ICreateTransaction = (transaction: ITransactionInput) => Promise<void>

type IFormatTransaction = (value: number) => string

interface ITransactionContext {
  transactions: Transaction[]
  createTransaction: ICreateTransaction
  editTransaction: ICreateTransaction
  deleteTransaction: (value: string) => Promise<void>
  formatCurrent: IFormatTransaction
}

export const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
)

export default function TransactionProvider({ children }: ITrasactionProvider) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const formatCurrent: IFormatTransaction = value => {
    const currentFormated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
    return currentFormated
  }

  const createTransaction: ICreateTransaction = async (
    transactionInput: ITransactionInput
  ) => {
    const response = await api.post('/createtransaction', transactionInput)
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  const editTransaction: ICreateTransaction = async (
    editedTransactionInput: ITransactionInput
  ) => {
    await api.put('/edittransaction', editedTransactionInput)

    const newTransactions = transactions.map(transaction => {
      if (transaction.id === editedTransactionInput.id) {
        transaction = { ...transaction, ...editedTransactionInput }
      }
      return transaction
    })

    setTransactions(newTransactions)
  }

  const deleteTransaction: (value: string) => Promise<void> = async (
    idTransaction: string
  ) => {
    await api.delete(`/deletetransaction/${idTransaction}`)
    const filteredTransactions = transactions.filter(
      transaction => transaction.id !== idTransaction
    )

    setTransactions(filteredTransactions)
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createTransaction,
        editTransaction,
        deleteTransaction,
        formatCurrent
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
