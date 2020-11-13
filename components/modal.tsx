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
          className="modal-container"
          onClick={handleClickOutside}
        >
          <div className="block modal">
            <h1>Modal</h1>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
