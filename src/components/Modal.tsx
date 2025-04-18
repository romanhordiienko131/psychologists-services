import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
  maxWidth: string;
}

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 26, 21, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderRadius: '1.875rem',
    backgroundColor: 'var(--color-white)',
    padding: '4rem',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
  },
};

function Modal({ isOpen, onRequestClose, children, maxWidth }: Props) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: modalStyles.overlay,
        content: {
          ...modalStyles.content,
          maxWidth,
        },
      }}
    >
      <button onClick={onRequestClose} className="absolute top-5 right-5">
        <img src="/icons/x.svg" alt="Close" />
      </button>
      {children}
    </ReactModal>
  );
}

export default Modal;
