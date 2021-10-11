import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from './services/api';

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type ITransactionInput = Omit<Transaction, "id" | 'createdAt'> 

interface ITrasactionProvider {
  children: ReactNode
}

type ICreateTransaction = (transaction: ITransactionInput) => Promise<void>

type IFormatTransaction = (value: number) => string

interface ITransactionContext {
  transactions: Transaction[]
  createTransaction: ICreateTransaction
  formatCurrent: IFormatTransaction
}

export const TransactionContext = createContext<ITransactionContext>({} as ITransactionContext)

export default function TransactionProvider({ children }: ITrasactionProvider) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const formatCurrent:IFormatTransaction = (value) => {
    const currentFormated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
    return currentFormated;
  };

  const createTransaction: ICreateTransaction = async (transactionInput: ITransactionInput) => {
    const response = await api.post('/transactions', transactionInput)
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  };

  return (
    <TransactionContext.Provider value={{transactions, createTransaction, formatCurrent}}>
      {children}
    </TransactionContext.Provider>
  )
}
