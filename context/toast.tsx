import { createContext, useCallback, useContext, useState } from 'react';
import Toast from '../components/toast';

interface ToastContextData {
  showToast(message: string, type: 'success' | 'warning' | 'error'): void;
  closeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(0);
  const [type, setType] = useState<'success' | 'warning' | 'error'>('success');
  const [message, setMessage] = useState('');

  const showToast = useCallback(
    (message: string, type: 'success' | 'warning' | 'error') => {
      setVisible(1);
      setType(type);
      setMessage(message);

      setTimeout(() => {
        setVisible(1);
      }, 3000);
    },
    []
  );

  const closeToast = useCallback(() => {
    setVisible(0);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      <Toast visible={visible} message={message} type={type} />
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  return context;
}
