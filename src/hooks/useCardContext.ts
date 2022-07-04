import React, { useContext } from 'react'
import { CardContex, cardContext } from '../context/cardContext'

export default function useCardContext() {
  const {
    isModalOpen,
    setIsModalOpen,
    modalCardInfos,
    setModalCardInfos,
    isCardAdd,
    setIsCardAdd,
    isCardEdit,
    setIsCardEdit,
    apiData,
    setApiData } = useContext(cardContext) as CardContex
  return {
    isModalOpen,
    setIsModalOpen,
    modalCardInfos,
    setModalCardInfos,
    isCardAdd,
    setIsCardAdd,
    isCardEdit,
    setIsCardEdit,
    apiData,
    setApiData
  }
}
