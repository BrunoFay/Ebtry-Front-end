import { Plus, SignOut } from 'phosphor-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Board from '../components/Board';
import FrameCardModal from '../components/BoardCardModal';
import useAxios from '../hooks/useAxios';
import useCardContext from '../hooks/useCardContext';
import useUserContext from '../hooks/useUserContext';

export default function MainPage() {
  const {
    isModalOpen,
    setIsCardAdd,
    isCardAdd,
    isCardEdit,
    tasks,
    setTasks,
    setIsModalOpen,
  } = useCardContext();
  const { axiosTasks } = useAxios();
  const { userRole } = useUserContext();
  async function fetchTasks() {
    try {
      const tasksResponse = await axiosTasks('get', 'tasks')
      setTasks(tasksResponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);
  function handleClick() {
    setIsCardAdd(!isCardAdd);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="bg-wolfBG">
      <header className="flex justify-between bg-purple-900 p-3 items-center">
        <div className="logo-container flex gap-1  text-green-500">
          <span className='text-5xl text-["Poppins"] font-extrabold logoMain'>
            Ebtry
          </span>
        </div>
        <Link
          to="/"
          className="text-white flex gap-1 items-center font-bold relative right-2 text-xl"
        >
          Sair
          <SignOut size={20} />
        </Link>
      </header>
      <main className="flex flex-col items-center gap-5 my-5">
        <div className=" w-[90vw]">
          <div className='flex justify-around uppercase font-["Poppins"] text-xl text-purple-100 font-bold'>
            <h1>A fazer</h1>
            <h1>Em progresso</h1>
            <h1>Testes</h1>
            <h1>Revisão</h1>
            <h1>Finalizados</h1>
          </div>
          {(userRole === 'admin') && (<button
            onClick={handleClick}
            disabled={isCardEdit || (isModalOpen && !isCardAdd)}
            type="button"
            className="bg-green-500 disabled:bg-green-700 disabled:opacity-80 hover:bg-green-700 absolute right-2 top-[5.5rem] text-white font-bold py-1 px-6 rounded"
          >
            <Plus size={25} />
          </button>)}
        </div>
        <div className="board-container border-2 bg-transparent bg-no-repeat bg-cover border-green-300 gap-2 rounded py-2 overflow-auto  flex justify-around w-[90vw] h-[32em]">
          <Board data={tasks} />
        </div>
        {isModalOpen && <FrameCardModal />}
      </main>
      <footer className="text-sm text-zinc-400 flex items-center font-bold justify-between bg-purple-900 px-5 h-10">
        <span className="">Author: Bruno fay</span>
        <div className="flex gap-5">
          <span>Blitz de carreira</span>
          <span> Trybe 2022</span>
        </div>
      </footer>
    </div>
  );
}
