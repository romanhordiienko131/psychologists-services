import { useState } from 'react';
import Modal from './Modal.tsx';
import LoginForm from './LoginForm.tsx';
import RegistrationForm from './RegistrationForm.tsx';

type modalStatus = 'register' | 'login' | 'none';

function AuthNav() {
  const [modal, setModal] = useState<modalStatus>('none');

  return (
    <>
      <ul className="flex items-center gap-2">
        <li>
          <button
            className="-tracking-1 rounded-4xl border border-black/20 px-[2.438rem] py-3.5 leading-5 font-medium"
            onClick={() => setModal('login')}
          >
            Log In
          </button>
        </li>
        <li>
          <button
            className="-tracking-1 bg-green rounded-4xl px-10 py-3.5 leading-5 font-medium text-white"
            onClick={() => setModal('register')}
          >
            Registration
          </button>
        </li>
      </ul>

      <Modal isOpen={modal === 'login'} onRequestClose={() => setModal('none')}>
        <LoginForm />
      </Modal>
      <Modal
        isOpen={modal === 'register'}
        onRequestClose={() => setModal('none')}
      >
        <RegistrationForm />
      </Modal>
    </>
  );
}

export default AuthNav;
