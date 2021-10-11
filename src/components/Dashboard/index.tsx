import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { Container } from './style'

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}
interface IDashboard {
  handleEditTransaction: {
    handleOpenNewTransactionModal: () => void
    handlEditTransaction: (data: Transaction) => void
  }
}

export const Dashboard = ({ handleEditTransaction }: IDashboard) => {
  return (
    <Container>
      <Summary />
      <TransactionsTable handleEditTransaction={handleEditTransaction} />
    </Container>
  )
}
