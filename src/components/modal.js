/*jshint esversion: 6 */
import React, { Component } from 'react';
import ModalVerification from './modal-verification';
import '../modal.css';

class SimpleModal extends Component {
    constructor(){
        super();
        this.state = { show: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }

    render() {
        return (
          <main>
            <Modal show={this.state.show}>
                <ModalVerification handleClose={this.hideModal}/>
            </Modal>
          </main>
        )
    };
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          {/* <button
            onClick={handleClose}
          >
            Close
          </button> */}
        </section>
      </div>
    );
};

export default SimpleModal;