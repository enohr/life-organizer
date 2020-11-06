import { useRouter } from 'next/router';
import LoginPage from '../pages/login';
import { useUser } from './useUser';

export const ProtectRoutes = ({ children }) => {
  const { user } = useUser();
  const Route = useRouter();

  if (user) {
    if (!user.isLoggedIn && Route.pathname !== '/login') {
      Route.push('/login');
    }
  }
  return children;
};
