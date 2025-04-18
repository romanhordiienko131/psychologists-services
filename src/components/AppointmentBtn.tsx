import { useState } from 'react';
import Modal from './Modal.tsx';
import AppointmentForm from './AppointmentForm.tsx';
import { Psychologist } from '../firebase/types.ts';

interface Props {
  psychologist: Psychologist;
}

function AppointmentBtn({ psychologist }: Props) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="bg-green -tracking-1 rounded-4xl px-8 py-3.5 leading-5 font-medium text-white"
      >
        Make an appointment
      </button>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        maxWidth="37.5rem"
      >
        <AppointmentForm psychologist={psychologist} />
      </Modal>
    </>
  );
}

export default AppointmentBtn;
