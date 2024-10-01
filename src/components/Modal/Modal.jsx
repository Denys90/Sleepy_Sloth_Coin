import { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import { Popup, ModalContent, CloseButton, ModalWrapper } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const targetElement = document.getElementById('modalRoot');
  const backdrop = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (event.target === backdrop.current) {
        onClose();
        document.body.style.overflow = '';
        document.body.style.position = '';
        event.stopPropagation();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        document.body.style.overflow = '';
        document.body.style.position = '';
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return ReactDOM.createPortal(
    <Popup onClick={handleClickOutside} ref={backdrop}>
      <ModalWrapper>
        <ModalContent>
          <CloseButton
            onClick={() => {
              document.body.style.overflow = '';
              document.body.style.position = '';
              onClose();
            }}
          >
            <GrClose />
          </CloseButton>
          {children}
        </ModalContent>
      </ModalWrapper>
    </Popup>,
    targetElement
  );
};

export default Modal;
