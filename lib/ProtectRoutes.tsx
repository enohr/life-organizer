import { useRouter } from 'next/router';
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
      Route.pathname !== '/signup' &&
      Route.pathname !== '/'
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
