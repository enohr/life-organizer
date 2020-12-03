import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useUser } from '../context/user';

const Nav: NextPage = () => {
  const Router = useRouter();
  const { user, mutateUser } = useUser();

  const logout = useCallback(() => {
    axios.post('http://localhost:3000/api/auth/logout').then(() => {
      mutateUser(null).then(() => {
        Router.push('/');
      });
    });
  }, []);

  return (
    <nav className="px-4 shadow-xl fixed top-0 w-full overflow-hidden bg-white z-10">
      <ul className="flex justify-between items-center p-2 mx-8">
        <li>
          <Link href="/">
            <a className="text-4xl font-normal lt-spacing-logo no-underline cursor-pointer ">
              LIFE ORGANIZER
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/board">
            <a>BOARD</a>
          </Link>
        </li>
        <li>
          <Link href="/achievements">
            <a>METAS</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {user?.isLoggedIn ? (
            <>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a className="no-underline font-bold tracking-wider">
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="btn-blue no-underline">Sign up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
