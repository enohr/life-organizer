import Image from 'next/image';
import { useToast } from '../context/toast';
import { colors } from '../utils/colors';

interface ToastProps {
  visible: number;
  message: string;
  type: 'success' | 'warning' | 'error';
}

const Toast: React.FC<ToastProps> = ({ visible, message, type }) => {
  const { closeToast } = useToast();
  const color = colors[type];

  return (
    <>
      {visible ? (
        <div
          className={`toast-container ${type}`}
          onClick={closeToast}
          style={{ backgroundColor: `${color}` }}
        >
          <div className="toast-content">
            <Image src="/check.svg" height={20} width={20} />
            <div className="toast-message">
              <h1>Success!</h1>
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
