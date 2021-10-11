import { createServer, Model } from 'miragejs'
import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyles } from './style/global'
import TransactionProvider from './TransactionContext'

import { v4 as uuidV4 } from 'uuid'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: uuidV4(),
          title: 'Freela de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: uuidV4(),
          title: 'Alugue do Ap',
          type: 'withdraw',
          category: 'Casa',
          amount: 800,
          createdAt: new Date('2021-02-14 13:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/createtransaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', { ...data, createdAt: new Date() })
    })
    this.put('/edittransaction', (schema, request): any => {
      const data = JSON.parse(request.requestBody)
      return schema.find('transaction', data.id)?.update(data)
    })
    this.delete('/deletetransaction/:id', (schema, request): any => {
      const id = request.params.id
      return schema.find('transaction', id)?.destroy()
    })
  }
})

Modal.setAppElement('#root')

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export function App() {
  const [editTransaction, setEditTransaction] = useState<Transaction | ''>('')
  const [isNewTransactionsModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  const handlEditTransaction = (data: Transaction) => {
    setEditTransaction(data)
    handleOpenNewTransactionModal()
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
    setEditTransaction('')
  }

  return (
    <TransactionProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard
        handleEditTransaction={{
          handleOpenNewTransactionModal,
          handlEditTransaction
        }}
      />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        isEdit={editTransaction !== ''}
        dataForEdition={editTransaction}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionProvider>
  )
}
