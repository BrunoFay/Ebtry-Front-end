import { createContext } from 'react';

import { Api } from '../types/api';

export type CardContext = {
  modalCardInfos: Api;
  setModalCardInfos: (infos: Api) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isCardEdit: boolean;
  setIsCardEdit: (isEdit: boolean) => void;
  isCardAdd: boolean;
  setIsCardAdd: (isAdd: boolean) => void;
  tasks: Api[];
  setTasks: (data: Api[]) => void;
};
export const cardContext = createContext<CardContext | {}>({});
