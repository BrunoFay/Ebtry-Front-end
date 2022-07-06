import { Pen, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';

import useCardContext from '../hooks/useCardContext';
import useUserContext from '../hooks/useUserContext';
import AlertModal from './AlertModal';
import RightModalContainerInfos from './RightModalContainerInfos';

type RightModalProps = {
  members: string[];
  createdAt: Date;
  createdBy: string;
};
const ERROR_DELETE_CARD = {
  title: 'Erro ao tentar deletar cartão!',
  paragraph: 'Erro ao tentar deletar o cartão do banco de dados.',
}
export default function RightModalContainer(infos: RightModalProps) {
  const {
    createdAt,
    members,
    createdBy,
  } = infos;
  const {
    setIsCardEdit,
    isCardEdit,
    isCardAdd,
    setTasks,
    tasks,
    modalCardInfos,
    setIsModalOpen
  } = useCardContext();
  const { axiosTasks } = useAxios();
  const { userRole } = useUserContext();
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  async function handleDeleteCard() {
    setTasks(tasks.filter((task) => task.id !== modalCardInfos.id));
    const id = modalCardInfos.id as string;
    try {
      await axiosTasks('delete', 'tasks', { id })
      setIsModalOpen(false);
    } catch (error) {
      setIsAlertModalOpen(true);
    }
  }

  return (
    <div className="flex items-center justify-evenly flex-col rounded ring-2 w-[9rem]  gap-5">
      <RightModalContainerInfos title="Membros">
        {members.map((member: string) => (
          <span key={member} className="text-gray-700 text-sm">
            {member}
          </span>
        ))}
      </RightModalContainerInfos>
      <RightModalContainerInfos title="Data">
        {new Date(createdAt).toDateString()}
      </RightModalContainerInfos>
      <RightModalContainerInfos title="Responsavel">
        {createdBy}
      </RightModalContainerInfos>

      {(!isCardEdit && !isCardAdd) && (
        <div className="flex gap-4">
          {(userRole === 'admin') && (<button
            onClick={handleDeleteCard}
            className="ring-transparent outline-none ring-2 focus:ring-green-500 hover:ring-green-500 rounded p-1">
            <Trash size={25} />
          </button>)}
          <button
            onClick={() => setIsCardEdit(!isCardEdit)}
            className="ring-transparent outline-none ring-2 focus:ring-green-500 hover:ring-green-500 rounded p-1"
          >
            <Pen size={25} />
          </button>
        </div>
      )}
      <AlertModal
        isAlertModalOpen={isAlertModalOpen}
        setIsAlertModalOpen={setIsAlertModalOpen}
        modalInfos={ERROR_DELETE_CARD} />
    </div>
  );
}
