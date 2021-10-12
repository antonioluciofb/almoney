import { ReactNode } from 'react'

export interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export interface ITransactionInput
  extends Omit<Transaction, 'id' | 'createdAt'> {
  id?: string
}

export interface ITrasactionProvider {
  children: ReactNode
}

export type ICreateTransaction = (
  transaction: ITransactionInput
) => Promise<void>

export type IFormatTransaction = (value: number) => string

export interface ITransactionContext {
  transactions: Transaction[]
  createTransaction: ICreateTransaction
  editTransaction: ICreateTransaction
  deleteTransaction: (value: string) => Promise<void>
  formatCurrent: IFormatTransaction
}
