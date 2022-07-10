import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../components/AlertModal';

import useAxios from '../hooks/useAxios';
import useUserContext from '../hooks/useUserContext';

const LOGIN_ALERT_MODAL = {
  title: 'Erro ao tentar Logar!',
  paragraph: 'Verifique seu Email e Senha e tente novamente.',
}

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const navegate = useNavigate();
  const { axiosLogin } = useAxios();
  const { setUserRole } = useUserContext();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axiosLogin('login', login);
      if (response.data) {
        setUserRole(response.data.role);
        sessionStorage.setItem('userRole', response.data.role);
        navegate('/project');
      }
    } catch (error) {
      setIsAlertModalOpen(true);
    }
  }
  return (
    <div className="box-border flex overflow-hidden">
      <div className="w-[50%] min-h-screen bg-loginBG " />
      <div className="w-[50%] flex flex-col box-border bg-zinc-200">
        <div className="min-h-screen gap-20 flex flex-col">
          <div className="logo-container flex gap-1 relative top-5 left-4 text-zinc-300">
            <h1 className="text-6xl font-extrabold logoMain first-letter:text-green-500">Ebtry</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center rounded px-10 self-center flex-col  h-96 w-[450px] gap-10"
          >
            <input
              type="email"
              name="email"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              value={login.email}
              placeholder="Email"
              className="w-full h-10 rounded-lg outline-none ring-slate-400 ring-2 focus:ring-green-500 px-2"
            />

            <input
              type="password"
              name="password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              value={login.password}
              placeholder="Password"
              className="w-full h-10 rounded-lg outline-none ring-slate-400 ring-2 focus:ring-green-500 px-2"
            />
            <button
              disabled={!login.email || !login.password}
              type="submit"
              className="h-10 disabled:ring-transparent disabled:border-0 disabled:bg-green-700 disabled:opacity-50 rounded-lg focus:border-2 transition-all hover:border-2 hover:ring-green-500 ring-transparent outline-none ring-2 focus:ring-green-500 bg-green-500 hover:bg-green-700 text-white font-bold px-4"
            >
              Entrar
            </button>
          </form>
          <AlertModal
            isAlertModalOpen={isAlertModalOpen}
            setIsAlertModalOpen={setIsAlertModalOpen}
            modalInfos={LOGIN_ALERT_MODAL} />

          <span className=" text-sm font-bold justify-center self-center text-zinc-400">
            Bruno Fay - Blitz de carreira - 2022
          </span>
        </div>
      </div>
    </div>
  );
}
