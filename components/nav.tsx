import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';

const Nav: NextPage = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <button
            onClick={() => axios.post('http://localhost:3000/api/auth/logout')}
          >
            Logout
          </button>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          <Link href="/login">
            <a className="btn-blue no-underline">Login</a>
          </Link>
          <Link href="/signup">
            <a className="btn-blue no-underline">Signup</a>
          </Link>
          <li>
            <button
              onClick={() =>
                axios.post('http://localhost:3000/api/auth/logout')
              }
            >
              Logout
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
