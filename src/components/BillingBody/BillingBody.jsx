import React from 'react';

const BillingBody = ({ billingList, isLoading }) => {
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
                                        <td>{singleBill.amount}</td>
                                        <td><div className='flex items-center'>Edit <span className='w-[2px] h-4 bg-black inline-block mx-2'></span> Delete</div></td>
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