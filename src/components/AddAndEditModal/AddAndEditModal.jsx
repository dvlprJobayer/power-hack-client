import React from 'react';
import Modal from 'react-modal';
import { FaTimesCircle } from 'react-icons/fa';


Modal.setAppElement('#root');

const AddAndEditModal = ({ modalIsOpen, setIsOpen, customStyles }) => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add Contact Modal"
        >
            <div className="close-btn-container">
                <FaTimesCircle onClick={closeModal} className="close-btn" />
            </div>
            <div className="form-container">
                <h2>Add Contact</h2>
                <form>
                    <input name='firstName' type="text" placeholder='First Name' />
                    <input name='lastName' type="text" placeholder='Last Name' />
                    <input name='phone' type="text" placeholder='Phone Number' />
                    <input className='submit-btn' type="submit" value="Add Contact" />
                </form>
            </div>
        </Modal>
    );
};

export default AddAndEditModal;