import React, { useContext } from 'react';

import { CardContext, cardContext } from '../context/cardContext';

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
    tasks,
    setTasks,
  } = useContext(cardContext) as CardContext;
  return {
    isModalOpen,
    setIsModalOpen,
    modalCardInfos,
    setModalCardInfos,
    isCardAdd,
    setIsCardAdd,
    isCardEdit,
    setIsCardEdit,
    tasks,
    setTasks,
  };
}
