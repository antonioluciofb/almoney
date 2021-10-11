import { useContext } from 'react'

import { TransactionContext } from '../../TransactionContext'
import { Container } from './style'

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
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Excluir</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatCurrent(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td className="icon">
                <FaTrash onClick={() => deleteTransaction(transaction.id)} />
              </td>
              <td className="icon">
                <FaPen
                  onClick={() => {
                    handlEditTransaction(transaction)
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
