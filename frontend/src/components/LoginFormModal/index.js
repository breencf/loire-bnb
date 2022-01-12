import React, { useEffect, useState } from "react";
import { Modal } from "../../context/modal";
import { LoginForm } from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("------", showModal);
  }, [showModal]);

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

export default LoginFormModal;
