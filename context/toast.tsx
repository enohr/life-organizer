import { createContext, useCallback, useContext, useState } from 'react';
import Toast from '../components/toast';

const ToastContext = createContext({});

const ToastProvider: React.Fc = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState();
  const [message, setMessage] = useState('');

  const showToast = useCallback((message, type) => {
    setVisible(true);
    setType(type);
    setMessage(message);

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  const closeToast = useCallback(() => {
    setVisible(false);
  }, []);

  <ToastContext.Provider value={{ showToast, closeToast }}>
    <Toast message={message} type={type} visible={visible} />
    {children}
  </ToastContext.Provider>;
};

export function useToast() {
  return useContext(ToastContext);
}
