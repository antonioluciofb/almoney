import { v4 as uuidV4 } from 'uuid'

export const Seeds = {
  transactions: [
    {
      id: uuidV4(),
      title: 'Freela de Website',
      type: 'deposit',
      category: 'Dev',
      amount: 6000,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Aluguel do Ap',
      type: 'withdraw',
      category: 'Casa',
      amount: 800,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Conta de Lux',
      type: 'deposit',
      category: 'Dev',
      amount: 170,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Gás de Cozinha',
      type: 'withdraw',
      category: 'Casa',
      amount: 120,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Aluguel do Escritorio',
      type: 'deposit',
      category: 'Dev',
      amount: 600,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Aluguel do Apto 2',
      type: 'withdraw',
      category: 'Casa',
      amount: 800,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Parcela Freela',
      type: 'deposit',
      category: 'Dev',
      amount: 2300,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Aluguel do Apto Centro',
      type: 'withdraw',
      category: 'Casa',
      amount: 800,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Freela de Website Empresa 2',
      type: 'deposit',
      category: 'Dev',
      amount: 3000,
      createdAt: new Date()
    },
    {
      id: uuidV4(),
      title: 'Aluguel Casa',
      type: 'withdraw',
      category: 'Casa',
      amount: 800,
      createdAt: new Date()
    }
  ]
}
