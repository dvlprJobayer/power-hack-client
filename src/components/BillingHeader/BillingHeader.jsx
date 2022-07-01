import React from 'react';

const BillingHeader = ({ setIsOpen, setSelectedBill }) => {
    const addModal = () => {
        setSelectedBill(null);
        setIsOpen(true);
    }

    return (
        <div className='bg-primary flex justify-between px-4 py-2 mb-4'>
            <div className='flex items-center'>
                <h2 className='text-lg font-semibold'>Billings</h2>
                <input className='bg-primary border border-black placeholder:text-black ml-3 py-1 px-2 w-96' type="text" placeholder='Search...' />
            </div>
            <button onClick={addModal} className='btn btn-secondary text-white'>Add New Bill</button>
        </div>
    );
};

export default BillingHeader;