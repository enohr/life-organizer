import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const Router = useRouter();

  useEffect(() => {
    if (user) setUser(user);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          email,
          password,
        }
      );
      setUser(email);
      Router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/logout');
      setUser(null);
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: any = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  console.log(user);
  if (!isAuthenticated) {
  }
  return children;
};
