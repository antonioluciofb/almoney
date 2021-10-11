import React, { FormEvent, useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'

import closeSvg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionContext } from '../../TransactionContext'
import { Container, RadioBox, TransactionTypeContainer } from './style'
import { v4 as uuidV4 } from 'uuid'

interface NewTransactionModalProps {
  isOpen: boolean
  isEdit?: boolean
  onRequestClose: () => void
  dataForEdition: any
}

export function NewTransactionModal({
  isOpen,
  isEdit,
  onRequestClose,
  dataForEdition
}: NewTransactionModalProps) {
  const [title, setTitle] = useState(dataForEdition?.title || '')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')
  const [formIsValid, setFormIsValid] = useState(true)

  useEffect(() => {
    if (dataForEdition) {
      setTitle(dataForEdition.title)
      setAmount(dataForEdition.amount)
      setType(dataForEdition.type)
      setCategory(dataForEdition.category)
    } else {
      setTitle('')
      setAmount(0)
      setType('deposit')
      setCategory('')
    }
  }, [dataForEdition])

  const { createTransaction, editTransaction } = useContext(TransactionContext)

  const validateForm = (value: any) => {
    const values = Object.values(value)
    const hasInvalidInput = values.some((value: any) => {
      return value === '' || value <= 0
    })
    const formIsValid = !hasInvalidInput
    return formIsValid
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const numberValue = Number(event.target.value)
    if (!isNaN(numberValue) && numberValue > 0) {
      setState(numberValue)
      return
    }

    setState(event.target.value)
    return
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const dataForm = {
      title,
      amount,
      category,
      type
    }

    const formIsValid = validateForm(dataForm)

    if (formIsValid) {
      setFormIsValid(true)

      isEdit
        ? await editTransaction({ ...dataForm, id: dataForEdition.id })
        : await createTransaction(dataForm)

      setTitle('')
      setAmount(0)
      setType('deposit')
      setCategory('')

      onRequestClose()
      return
    }

    setFormIsValid(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          value={title}
          placeholder="Titulo"
          onChange={event => handleChange(event, setTitle)}
        />
        <input
          type="number"
          value={amount}
          placeholder="Valor"
          onChange={event => handleChange(event, setAmount)}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit')
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => handleChange(event, setCategory)}
        />
        <button type="submit">Cadastrar</button>
        {!formIsValid && <p>Preencha os campos em branco</p>}
      </Container>
    </Modal>
  )
}
