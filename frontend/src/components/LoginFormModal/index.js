import React, { useState } from "react";
import { Modal } from "../../context/modal";
import { LoginForm } from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);


  const onClose = () => {
    setShowModal(false)}
  return (
    <>
      <button onClick={() => setShowModal(true)} className="loginlogout">Log In</button>
      {showModal && (
        <Modal onClose={onClose}>
        <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
