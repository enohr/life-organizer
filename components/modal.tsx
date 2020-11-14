import axios from 'axios';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ModalProps {
  visible: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const modalContainer = useRef();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [loading, setLoading] = useState(0);

  const [initialHour, setInitialHour] = useState(null);
  const [finalHour, setFinalHour] = useState(null);

  const handleClickOutside = (e) => {
    if (e.target === modalContainer.current) {
      onClose();
    }
  };

  const createEvent = () => {
    setLoading(1);
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    axios
      .post('/api/event', {
        day: 'Wednesday',
        title,
        description,
        initial_hour: initialHour,
        final_hour: finalHour,
      })
      .then((response) => {
        console.log(response);
        if (response) {
          setLoading(0);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
            <form className="bg-white px-8 mb-4" onSubmit={createEvent}>
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
                  ref={titleRef}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Descrição do seu evento
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  ref={descriptionRef}
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Horário inicial
                  </label>
                  <DatePicker
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    selected={initialHour}
                    onChange={(hour) => setInitialHour(hour)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Horário final
                  </label>
                  <DatePicker
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    onChange={(hour) => setFinalHour(hour)}
                    selected={finalHour}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading === 1}
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
