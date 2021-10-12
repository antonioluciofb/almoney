import { createServer, Model } from 'miragejs'
import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyles } from './style/global'
import TransactionProvider from './TransactionContext'

import { ITransaction } from './types'
import { Seeds } from './seeds'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData(Seeds)
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

export function App() {
  const [editTransaction, setEditTransaction] = useState<ITransaction | ''>('')
  const [isNewTransactionsModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  const handleEditTransaction = (data: ITransaction) => {
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
      <Dashboard handleEditTransaction={handleEditTransaction} />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        isEdit={editTransaction !== ''}
        dataForEdition={editTransaction as ITransaction}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionProvider>
  )
}
