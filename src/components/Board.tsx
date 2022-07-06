import { useEffect, useState } from 'react';

import useCardContext from '../hooks/useCardContext';
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
  const { setIsCardEdit, isCardEdit } = useCardContext();
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
  useEffect(() => {
    if (props.data.length !== statusBoard.taskArrayLength) {
      handleSetStatusBoard();
    }
  }, [props.data, statusBoard, isCardEdit]);

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
