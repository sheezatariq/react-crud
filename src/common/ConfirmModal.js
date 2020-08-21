import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = ({ submitLabel, messageString, handleModalSubmit, actionType, show, handleClose }) => {
  const warningMessage = messageString ? messageString : `Do you really want to ${actionType}?`;
  return (
    <Modal backdrop="static" show={show} onHide={handleClose} dialogClassName="confirm-modal">
      <Modal.Header closeButton />
      <Modal.Body>{warningMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
          </Button>
        <Button id="modal-submit" variant="primary" onClick={handleModalSubmit}>
          {submitLabel ? submitLabel : 'Okay'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;