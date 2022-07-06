import { useState } from 'react';

import { INITIAL_STATE_CARD as INITIAL_STATE_NEW_CARD } from '../context/CardContextProvider';
import useAxios from '../hooks/useAxios';
import useCardContext from '../hooks/useCardContext';
import useUserContext from '../hooks/useUserContext';
import ModalButtonsContainer from './ModalButtonsContainer';
import ModalStatusContainer from './ModalStatusContainer';
import RightModalContainer from './RightModalContainer';

export default function BoardCardModal() {
  const {
    modalCardInfos,
    isCardEdit,
    isCardAdd,
    setIsModalOpen,
    setTasks,
    tasks,
  } = useCardContext();
  const {
    createdAt,
    createdBy,
    description,
    members = [],
    priority,
    status,
    title,
  } = modalCardInfos;
  const [cardToAdd, setCardToAdd] = useState(INITIAL_STATE_NEW_CARD);
  const [cardUpdate, setCardUpdate] = useState({
    title,
    description,
    priority,
    status,
  });
  const { userRole } = useUserContext()
  const { axiosTasks } = useAxios()
  function handleChange(e: any) {
    const { name, value } = e.target;
    isCardAdd
      ? setCardToAdd({ ...cardToAdd, [name]: value })
      : setCardUpdate({ ...cardUpdate, [name]: value });
  }
  async function handleDeleteCard() {
    setTasks(tasks.filter((task) => task.id !== modalCardInfos.id));
    const id = modalCardInfos.id as string;
    try {
      await axiosTasks('delete', 'tasks', { id })
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      tabIndex={1}
      className="shadow-2xl shadow-gray-700 bg-slate-200 flex flex-col absolute justify-between bottom-7 rounded-2xl h-[35rem] w-[30rem] "
    >
      <ModalStatusContainer
        priority={isCardAdd ? cardToAdd.priority : cardUpdate.priority}
        handleChange={handleChange}
        modalCardInfos={modalCardInfos}
      />

      {(userRole === 'admin' && (isCardEdit || isCardAdd)) ? (
        <input
          onChange={handleChange}
          name="title"
          className="text-center w-[95%] self-center rounded ring-1 relative bottom-4 text-xl font-bold outline-green-500"
          value={!isCardAdd ? cardUpdate.title : cardToAdd.title}
        />
      ) : (
        <h1 className="text-center relative bottom-4 text-xl font-bold">
          {!isCardAdd ? modalCardInfos.title : cardToAdd.title}
        </h1>
      )}
      <div className=" px-2 flex gap-2 h-[20rem]">
        {(userRole === 'admin' && (isCardEdit || isCardAdd)) ? (
          <textarea
            onChange={handleChange}
            name="description"
            className="text-left px-1 text-gray-700  w-80 rounded ring-1 resize-none outline-green-500"
            value={!isCardAdd ? cardUpdate.description : cardToAdd.description}
          />
        ) : (
          <p className="text-left px-1 text-gray-700  w-80 rounded ring-2">
            {!isCardAdd ? modalCardInfos.description : cardToAdd.description}
          </p>
        )}
        <RightModalContainer
          createdAt={!isCardAdd ? createdAt : cardToAdd.createdAt}
          members={!isCardAdd ? members : cardToAdd.members}
          createdBy={!isCardAdd ? createdBy : cardToAdd.createdBy}
          handleDeleteCard={handleDeleteCard}
        />
      </div>
      <ModalButtonsContainer
        data={isCardAdd ? { ...cardToAdd } : { ...cardUpdate }}
      />
    </div>
  );
}
