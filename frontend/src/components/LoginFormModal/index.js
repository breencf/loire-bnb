import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import {LoginForm} from './LoginForm';

export const  LoginFormModal= () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
