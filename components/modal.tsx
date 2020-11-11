import { useEffect, useState } from 'react';

interface ModalProps {
  open: number;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    setOpen(props.open);
  }, [props]);
  return (
    <>
      {open === 1 && (
        <div className="block modal">
          <h1>Modal</h1>
          <form>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            <button type="button" onClick={() => setOpen(0)}>
              X
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Modal;
