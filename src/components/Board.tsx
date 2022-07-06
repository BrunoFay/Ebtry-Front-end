import { useEffect, useState } from 'react';

import useCardContext from '../hooks/useCardContext';
import usePrevious from '../hooks/usePrevious';
import { Api, StatusBoard } from '../types/api';
import BoardColum from './BoardColum';

const INITIAL_STATE_STATUS_BOARD_OBJ = {
  toDo: [],
  inProgress: [],
  tests: [],
  review: [],
  done: [],
  taskArrayLength: 0,
};
export default function Board(props: { data: Api[] }) {
  const [statusBoard, setStatusBoard] = useState<StatusBoard>(
    INITIAL_STATE_STATUS_BOARD_OBJ,
  );
  const { isCardEdit, isCardAdd } = useCardContext();
  function handleSetStatusBoard() {
    const { data } = props;
    setStatusBoard({
      toDo: data.filter((item) => item.status === 'toDo'),
      inProgress: data.filter((item) => item.status === 'inProgress'),
      tests: data.filter((item) => item.status === 'tests'),
      review: data.filter((item) => item.status === 'review'),
      done: data.filter((item) => item.status === 'done'),
      taskArrayLength: data.length,
    });
  }
  const prevCardEditState = usePrevious(isCardEdit)
  const prevCardAddState = usePrevious(isCardAdd)
  useEffect(() => {
    if (props.data.length !== statusBoard.taskArrayLength ||
      prevCardEditState !== isCardEdit ||
      prevCardAddState !== isCardAdd) {
      handleSetStatusBoard();
    }

  }, [props.data, statusBoard, isCardEdit, isCardAdd]);

  return (
    <>
      <BoardColum CardsArrayFiltred={statusBoard.toDo} />
      <BoardColum CardsArrayFiltred={statusBoard.inProgress} />
      <BoardColum CardsArrayFiltred={statusBoard.tests} />
      <BoardColum CardsArrayFiltred={statusBoard.review} />
      <BoardColum CardsArrayFiltred={statusBoard.done} />
    </>
  );
}
