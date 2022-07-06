import useAxios from '../hooks/useAxios';
import useCardContext from '../hooks/useCardContext';
import { Api } from '../types/api';

export default function ModalButtonsContainer(cardData: {
  data: Partial<Api>;
}) {
  const {
    setIsModalOpen,
    isCardAdd,
    isCardEdit,
    modalCardInfos,
    setIsCardEdit,
    setIsCardAdd,
    setTasks,
    tasks,
  } = useCardContext();
  const newCard = cardData.data as Api;
  const { axiosTasks } = useAxios();
  function handleButtonName() {
    if (isCardAdd) {
      return 'Adicionar';
    }
    if (isCardEdit) {
      return 'Editar';
    }
    return 'fechar';
  }
  function handleButtonColor() {
    if (isCardAdd) {
      return `bg-green-500 ${
        newCard.title?.length! > 3 && 'hover:bg-green-700'
      }`;
    }
    if (isCardEdit) {
      return 'bg-orange-500  hover:bg-orange-700';
    }
    return 'bg-red-500  hover:bg-red-700';
  }

  function handleAddButton() {
    axiosTasks('post', 'tasks', newCard);
    setTasks([...tasks, newCard]);
    setIsCardAdd(false);
    setIsModalOpen(false);
  }

  function handleEditButton() {
    axiosTasks('path', 'tasks', modalCardInfos);
    modalCardInfos.title = newCard.title!;
    modalCardInfos.description = newCard.description!;
    modalCardInfos.priority = newCard.priority!;
    modalCardInfos.status = newCard.status!;
    setIsCardEdit(false);
    setIsModalOpen(false);
  }
  return (
    <button
      disabled={isCardAdd && newCard.title?.length! < 3}
      onClick={() => (!isCardAdd ? handleEditButton() : handleAddButton())}
      className={`${handleButtonColor()} disabled:opacity-50 self-center w-28 text-white relative bottom-2 font-bold py-1 px-2 rounded`}
    >
      {handleButtonName()}
    </button>
  );
}
