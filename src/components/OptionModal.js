import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (

  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearOptionModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearOptionModal}>Okay</button>
  </Modal>
);

export default OptionModal;