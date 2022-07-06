import { Pen, Trash } from 'phosphor-react';
import React from 'react';

import useCardContext from '../hooks/useCardContext';
import RightModalContainerInfos from './RightModalContainerInfos';

type RightModalProps = {
  members: string[];
  createdAt: Date;
  createdBy: string;
};

export default function RightModalContainer(infos: RightModalProps) {
  const { createdAt, members, createdBy } = infos;
  const { setIsCardEdit, isCardEdit, isCardAdd } = useCardContext();
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

      {!isCardEdit && !isCardAdd && (
        <div className="flex gap-4">
          <button className="ring-transparent outline-none ring-2 focus:ring-green-500 hover:ring-green-500 rounded p-1">
            <Trash size={25} />
          </button>
          <button
            onClick={() => setIsCardEdit(!isCardEdit)}
            className="ring-transparent outline-none ring-2 focus:ring-green-500 hover:ring-green-500 rounded p-1"
          >
            <Pen size={25} />
          </button>
        </div>
      )}
    </div>
  );
}
