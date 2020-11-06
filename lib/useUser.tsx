import { createContext, useContext } from 'react';
import useSWR from 'swr';

const SessionContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { data: user, mutate: mutateUser } = useSWR(
    'http://localhost:3000/api/auth/session'
  );

  return (
    <SessionContext.Provider value={{ user, mutateUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useUser = () => useContext(SessionContext);
