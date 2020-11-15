import { createContext, useContext } from 'react';
import useSWR from 'swr';

interface SessionUserData {
  email: string;
  id: string;
  isLoggedIn: boolean;
}

interface SessionContextData {
  user: SessionUserData;
  mutateUser(data: JSON, shouldRevalidate?: boolean): Promise<any>;
}

const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const { data: user, mutate: mutateUser } = useSWR(
    'http://localhost:3000/api/auth/session'
  );

  return (
    <SessionContext.Provider value={{ user, mutateUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export function useUser(): SessionContextData {
  return useContext(SessionContext);
}
