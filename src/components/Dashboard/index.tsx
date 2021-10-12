import { ITransaction } from '../../types'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { Container } from './style'

interface IDashboard {
  handleEditTransaction: (data: ITransaction) => void
}

export const Dashboard = ({ handleEditTransaction }: IDashboard) => {
  return (
    <Container>
      <Summary />
      <TransactionsTable handleEditTransaction={handleEditTransaction} />
    </Container>
  )
}
