import useCardContext from '../hooks/useCardContext';

type Props = {
  handleChange: (e: any) => void;
  priority: string;
  modalCardInfos: { status: string };
};

export default function ModalStatusContainer({
  priority,
  handleChange,
  modalCardInfos,
}: Props) {
  const { isCardEdit, isCardAdd } = useCardContext();
  function setPortugueseStatusName(status: string) {
    switch (status) {
      case 'paused':
        return 'Pausado';
      case 'inProgress':
        return 'Em progresso';
      case 'done':
        return 'Finalizado';
      case 'tests':
        return 'Teste';
      case 'review':
        return 'Revisão';
      default:
        return 'A fazer';
    }
  }
  const isStatusPaused = modalCardInfos.status === 'paused' ? 'text-[#2f3640] text-xl' : '';
  const setPriorityColor = modalCardInfos.status === 'paused' ? 'bg-black' : `${priority}-bgPriority`;
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${setPriorityColor} w-full h-10 rounded`} />
      <div className="justify-between px-1 flex-row-reverse flex w-full">
        {isCardEdit || isCardAdd ? (
          <>
            <div className="flex relative order-2 top-1 gap-2">
              <button
                onClick={() =>
                  handleChange({ target: { name: 'priority', value: 'low' } })
                }
                type="button"
                className="low-bgPriority rounded-full h-6 w-6"
              />
              <button
                onClick={() =>
                  handleChange({
                    target: { name: 'priority', value: 'medium' },
                  })
                }
                type="button"
                className="medium-bgPriority  rounded-full h-6 w-6"
              />
              <button
                onClick={() =>
                  handleChange({ target: { name: 'priority', value: 'high' } })
                }
                type="button"
                className="high-bgPriority rounded-full h-6 w-6"
              />
            </div>
            <select
              name="status"
              onChange={handleChange}
              className="text-zinc-800 font-bold italic text-center relative top-1 right-1 ring-1 rounded font-['Poppins'] w-auto text-sm outline-green-500"
            >
              <option value="toDo">A fazer</option>
              <option value="inProgress">Em progresso</option>
              <option value="tests">Testes</option>
              <option value="review">Revisão</option>
              <option value="done">Finalizado</option>
              <option value="paused">Pausado</option>
            </select>
          </>
        ) : (
          <span
            className={`${isStatusPaused} text-zinc-800 font-bold italic font-['Poppins'] text-sm px-2`}
          >
            {setPortugueseStatusName(modalCardInfos.status)}
          </span>
        )}
      </div>
    </div>
  );
}
