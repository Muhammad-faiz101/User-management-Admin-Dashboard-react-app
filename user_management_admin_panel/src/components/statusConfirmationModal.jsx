import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmationModal({show,onHide,user,ToggleStatus}) {
    function handleConfirm(user){
        ToggleStatus(user.id)
        onHide(false)
    }
  

  return (
    <>
     

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title><h2>Warning!</h2></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are your sure to disable {user.name}?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            NO
          </Button>
          <Button onClick={()=>handleConfirm(user)}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
