import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => {
    const { customStyles, modalIsOpenTwo, setIsOpenTwo, singleBill, setSingleBill, refetch } = props;
    function closeModal() {
        setIsOpenTwo(false);
    }

    return (
        <Modal
            isOpen={modalIsOpenTwo}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Delete Contact Modal"
        >
            <h2>Are you Sure you want to delete!</h2>
            <div className="delete-btn-container">
                <button onClick={closeModal} className='cancel-btn'>Cancel</button>
                <button className='delete-btn'>Delete</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;