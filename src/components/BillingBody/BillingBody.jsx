import React from 'react';

const BillingBody = () => {
    return (
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
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BillingBody;