import React, { ReactNode, useState } from 'react';

import { Api, Priority, TaskStatus } from '../types/api';
import { cardContext } from './cardContext';

export const INITIAL_STATE_CARD = {
  title: '',
  description: '',
  status: TaskStatus.TO_DO,
  priority: Priority.LOW,
  members: [],
  createdAt: new Date(Date.now()),
  createdBy: '',
};
export default function CardContextProvider(props: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardInfos, setModalCardInfos] = useState<Api>(INITIAL_STATE_CARD);
  const [isCardEdit, setIsCardEdit] = useState(false);
  const [isCardAdd, setIsCardAdd] = useState(false);
  const [tasks, setTasks] = useState<Api[]>([]);
  const valueToProvider = {
    isModalOpen,
    setIsModalOpen,
    modalCardInfos,
    setModalCardInfos,
    isCardEdit,
    setIsCardEdit,
    isCardAdd,
    setIsCardAdd,
    tasks,
    setTasks,
  };
  return (
    <cardContext.Provider value={valueToProvider}>
      {props.children}
    </cardContext.Provider>
  );
}
