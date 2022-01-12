import React, { useState } from "react";
import { Modal } from "../../context/modal";
import { LoginForm } from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    console.log("button clicked!");
    console.log(showModal, "setshowmodal");
    setShowModal(true);
    console.log(showModal, "setShowModal after setting");
  };

  return (
    <>
      <button onClick={onClick}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
