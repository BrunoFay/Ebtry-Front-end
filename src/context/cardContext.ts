import { createContext } from "react";
import { Api } from "../types/api";

export type CardContex = {
  modalCardInfos: Api
  setModalCardInfos: (infos: Api) => void
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  isCardEdit: boolean
  setIsCardEdit: (isEdit: boolean) => void
  isCardAdd: boolean
  setIsCardAdd: (isAdd: boolean) => void
  apiData: Api[]
  setApiData: (data: Api[]) => void
}
export const cardContext = createContext<CardContex | {}>({})