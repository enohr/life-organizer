import { useToast } from "../context/toast";

interface ToastProps {
  visible: boolean;
  message: string;
  type: 'success' | 'warning' | 'error';
}

const Toast: React.FC<ToastProps> = ({visible, message, type}) => {
  const { closeToast } = useToast();



  return (
    <>
    {visible && 
      <div className="" onClick={closeToast}>
        <h1>Teste</h1>
      </div>
    }
    </>
  
};

export default Toast;
