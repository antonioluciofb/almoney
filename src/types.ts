import { ReactNode } from 'react'

export interface ITransaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export interface ITransactionInput
  extends Omit<ITransaction, 'id' | 'createdAt'> {
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
  transactions: ITransaction[]
  createTransaction: ICreateTransaction
  editTransaction: ICreateTransaction
  deleteTransaction: (value: string) => Promise<void>
  formatCurrent: IFormatTransaction
}
