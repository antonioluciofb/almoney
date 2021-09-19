import logoImg from '../../assets/logo.svg'

import { Container, Content } from './style'

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
        <button onClick={handleOpenNewTransactionModal} type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
