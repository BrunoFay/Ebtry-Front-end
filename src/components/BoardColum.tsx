import React from 'react';

import { Api } from '../types/api';
import BoardCard from './BoardCard';

export default function BoardColum(props: { CardsArrayFiltred: Api[] }) {
  return (
    <div className="board-container border-r-2 gap-2 w-full items-center flex flex-col justify-around">
      <div className="boardStage-container overflow-auto flex gap-3 flex-col items-center min-h-full min-w-full ">
        {props.CardsArrayFiltred.map((item) => (
          <BoardCard key={item.id} cardInfos={item} />
        ))}
      </div>
    </div>
  );
}
