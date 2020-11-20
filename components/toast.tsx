import Image from 'next/image';
import { useToast } from '../context/toast';
import { toast } from '../utils/toastHelper';

interface ToastProps {
  visible: number;
  message: string;
  type: 'success' | 'warning' | 'error';
}

const Toast: React.FC<ToastProps> = ({ visible, message, type }) => {
  const { closeToast } = useToast();
  const color = toast[type].color;
  const icon = toast[type].image;

  return (
    <>
      {visible ? (
        <div
          className={`toast-container ${type}`}
          onClick={closeToast}
          style={{ backgroundColor: `${color}` }}
        >
          <div className="toast-content">
            <Image src={icon} height={30} width={30} />
            <div className="toast-message">
              <h1>{type[0].toUpperCase() + type.slice(1)}!</h1>
              <p>{message}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Toast;
