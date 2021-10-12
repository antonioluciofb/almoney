import logoImg from '../../assets/logo.svg'

import { Button, Container, Content } from './style'
interface IHandleOpenNewTransactionModal {
  handleOpenNewTransactionModal: () => void
}

export function Header({
  handleOpenNewTransactionModal
}: IHandleOpenNewTransactionModal) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <Button onClick={handleOpenNewTransactionModal} type="button">
          Nova Transação
        </Button>
      </Content>
    </Container>
  )
}
