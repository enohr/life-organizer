import axios from 'axios';
import { NextPage } from 'next';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/user';
import { useToast } from '../context/toast';
import Loading from '../components/loading';

const LoginPage: NextPage = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const { mutateUser } = useUser();
  const Router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(1);
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    axios
      .post('http://localhost:3000/api/auth/login', {
        email,
        password,
      })
      .then((response) => {
        mutateUser(response.data).then(() => {
          setLoading(0);
          Router.push('/board');
          showToast('Login efetuado com sucesso', 'success');
        });
      })
      .catch(() => {
        setLoading(0);
        showToast('Erro ao efetuar login. Tente novamente', 'error');
      });
  };

  return (
    <div className="w-full my-20 height-nav flex flex-col items-center">
      {loading === 0 ? (
        <>
          <h1 className="text-3xl">Efetue seu login abaixo!</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={emailInput}
                type="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                ref={passwordInput}
                type="password"
                id="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading === 1}
              >
                Sign In
              </button>
            </div>
          </form>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default LoginPage;
