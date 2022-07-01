import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => {
    const { customStyles, modalIsOpenTwo, setIsOpenTwo, selectedBill, setSelectedBill, refetch, refetchAll } = props;
    function closeModal() {
        setIsOpenTwo(false);
        setSelectedBill(null);
    }

    const deleteBill = () => {
        fetch(`http://localhost:5000/delete-billing/${selectedBill._id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            refetch();
            refetchAll();
            closeModal();
        }).catch(err => {
            alert(err.message);
        })
    }

    return (
        <Modal
            isOpen={modalIsOpenTwo}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Delete Modal"
        >
            <h2 className='text-2xl font-semibold'>Are you Sure you want to delete!</h2>
            <div className="flex justify-center mt-4">
                <button onClick={closeModal} className='bg-black rounded-md px-4 py-2 text-lg text-white'>Cancel</button>
                <button onClick={deleteBill} className='bg-red-500 rounded-md ml-4 px-4 py-2 text-lg text-white'>Delete</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;