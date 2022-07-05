import axios from 'axios'
import React from 'react'
import useCardContext from '../hooks/useCardContext'
import { Api } from '../types/api'

export default function ModalButtonsContainer(cardData: { data: Partial<Api> }) {
  const {
    setIsModalOpen,
    isCardAdd,
    isCardEdit,
    modalCardInfos,
    setIsCardEdit,
    setIsCardAdd,
    setTasks,
    tasks } = useCardContext()
  const newCard = cardData.data as Api

  function handleButtonName() {
    if (isCardAdd) {
      return 'Adicionar'
    } else if (isCardEdit) {
      return 'Editar'
    }
    return 'fechar'
  }
  function handleButtonColor() {
    if (isCardAdd) {
      return `bg-green-500 ${newCard.title?.length! > 3 && "hover:bg-green-700"}`
    }
    else if (isCardEdit) {
      return 'bg-orange-500  hover:bg-orange-700'
    }
    return 'bg-red-500  hover:bg-red-700'
  }


  function patchEditedCard() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...'
    }

    axios.patch('http://localhost:3001/tasks/id ', modalCardInfos, {
      headers: headers
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleAddButton() {
    setTasks([...tasks, newCard])
    setIsCardAdd(false)
    setIsModalOpen(false)
  }

  function handleEditButton() {
    modalCardInfos.title = newCard.title!
    modalCardInfos.description = newCard.description!
    modalCardInfos.priority = newCard.priority!
    modalCardInfos.status = newCard.status!
    setIsCardEdit(false)
    setIsModalOpen(false)
  }
  return (
    <>
      <button
        disabled={isCardAdd && newCard.title?.length! < 3}
        onClick={() => !isCardAdd ? handleEditButton() : handleAddButton()}
        className={`${handleButtonColor()} disabled:opacity-50 self-center w-28 text-white relative bottom-2 font-bold py-1 px-2 rounded`}
      >
        {handleButtonName()}
      </button>
    </>
  )
}
