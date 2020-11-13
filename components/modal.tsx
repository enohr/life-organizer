import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ModalProps {
  visible: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const modalContainer = useRef();

  const handleClickOutside = (e) => {
    if (e.target === modalContainer.current) {
      onClose();
    }
  };

  return (
    <>
      {visible && (
        <div
          ref={modalContainer}
          className="modal-container flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="modal p-5">
            <button onClick={onClose} className="m-2 absolute right-0 top-0">
              <Image src="/close.svg" height={20} width={20} />
            </button>
            <form className="bg-white px-8 mb-4">
              <h1 className="text-3xl text-center mb-10">
                Adicionar um novo evento
              </h1>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Título do seu evento
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Descrição do seu evento
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Horário inicial
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Horário final
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Criar evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
