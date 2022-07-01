import React from 'react';

const BillingBody = ({ billingList, isLoading, setIsOpen, setIsOpenTwo, setSelectedBill }) => {
    const editModal = singleBill => {
        setSelectedBill(singleBill);
        setIsOpen(true);
    }

    const deleteModal = singleBill => {
        setSelectedBill(singleBill);
        setIsOpenTwo(true);
    }

    return (
        <>
            {
                isLoading ? <h2 className="text-xl">Loading...</h2> :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Billing ID</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Paid Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    billingList?.map(singleBill => <tr key={singleBill._id}>
                                        <td>{singleBill._id || 'Generating ID...'}</td>
                                        <td>{singleBill.name}</td>
                                        <td>{singleBill.email}</td>
                                        <td>+88 {singleBill.phone}</td>
                                        <td>{singleBill.amount}$</td>
                                        <td><div className='flex items-center'>
                                            <button onClick={() => editModal(singleBill)}>Edit</button>
                                            <span className='w-[2px] h-4 bg-black inline-block mx-2'></span>
                                            <button onClick={() => deleteModal(singleBill)}>Delete</button>
                                        </div></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default BillingBody;