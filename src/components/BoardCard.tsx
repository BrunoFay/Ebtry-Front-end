import { List } from 'phosphor-react';

import useCardContext from '../hooks/useCardContext';
import { Api } from '../types/api';

export default function BoardCard(props: { cardInfos: Api }) {
  const {
    setModalCardInfos,
    setIsModalOpen,
    isModalOpen,
    isCardAdd,
    isCardEdit,
  } = useCardContext();

  function handleSetModalCardInfos() {
    setModalCardInfos(props.cardInfos);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className=" hover:ring-green-500 bg-slate-200 hover:ring border border-indigo-50 rounded w-[14rem] min-h-[10rem] overflow-auto frameCard-container">
      <div
        className={`${props.cardInfos.priority}-bgPriority p-1 w-full flex flex-row-reverse`}
      >
        <button
          disabled={isCardAdd || isCardEdit}
          onClick={handleSetModalCardInfos}
        >
          <List size={20} />
        </button>
      </div>
     <p className="text-sm p-2">{props.cardInfos.title}</p>
    </div>
  );
}
