import React, { useState } from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => {
    const [loading, setLoading] = useState(false);
    const { customStyles, modalIsOpenTwo, setIsOpenTwo, selectedBill, setSelectedBill, refetch, refetchAll } = props;
    function closeModal() {
        setIsOpenTwo(false);
        setSelectedBill(null);
    }

    const deleteBill = () => {
        setLoading(true);
        fetch(`https://socialist-worms-59722.herokuapp.com/delete-billing/${selectedBill._id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            setLoading(false);
            refetch();
            refetchAll();
            closeModal();
        }).catch(err => {
            setLoading(false);
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
            {
                loading ? <h2 className='text-2xl font-semibold'>Loading...</h2> :
                    <>
                        <h2 className='text-2xl font-semibold'>Are you Sure you want to delete!</h2>
                        <div className="flex justify-center mt-4">
                            <button onClick={closeModal} className='bg-black rounded-md px-4 py-2 text-lg text-white'>Cancel</button>
                            <button onClick={deleteBill} className='bg-red-500 rounded-md ml-4 px-4 py-2 text-lg text-white'>Delete</button>
                        </div>
                    </>
            }
        </Modal>
    );
};

export default DeleteModal;