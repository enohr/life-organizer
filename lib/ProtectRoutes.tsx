import { useRouter } from 'next/router';
import LoginPage from '../pages/login';
import { useUser } from './useUser';

export const ProtectRoutes = ({ children }) => {
  const { user } = useUser();
  const Route = useRouter();

  if (user) {
    console.log(user);
    console.log(Route.pathname);
    if (
      !user.isLoggedIn &&
      Route.pathname !== '/login' &&
      Route.pathname !== '/signup'
    ) {
      Route.push('/login');
    } else if (
      user.isLoggedIn &&
      (Route.pathname == '/login' || Route.pathname === '/signup')
    ) {
      Route.push('/');
    }
  }
  return children;
};
