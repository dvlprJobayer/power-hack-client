import React from 'react';
import Modal from 'react-modal';
import { FaTimesCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


Modal.setAppElement('#root');

const AddAndEditModal = (props) => {
    const { modalIsOpen, setIsOpen, customStyles, setBillingList, refetch, singleBill, setSingleBill } = props;
    function closeModal() {
        setIsOpen(false);
        setSingleBill(null);
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bill = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            amount: data.amount
        }
        if (singleBill) {
            setBillingList(billingList => {
                const restBill = billingList.filter(oneBill => oneBill._id !== singleBill._id)
                return [restBill, bill];
            });
            fetch(`http://localhost:5000/update-billing/${singleBill._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bill)
            }).then(res => res.json()).then(data => {
                refetch();
                closeModal();
                reset();
            }).catch(err => {
                alert(err.message);
                refetch();
                closeModal();
            })
        } else {
            setBillingList(billingList => [...billingList, bill]);
            fetch('http://localhost:5000/add-billing', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bill)
            }).then(res => res.json()).then(data => {
                refetch();
                closeModal();
                reset();
            }).catch(err => {
                alert(err.message);
                refetch();
                closeModal();
            })
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add And Edit Modal"
        >
            <div className="flex justify-end">
                <FaTimesCircle onClick={closeModal} className="cursor-pointer text-xl font-semibold" />
            </div>
            <div className="w-96">
                <h2 className='text-xl mb-2 font-semibold'>{singleBill ? 'Update Bill' : 'Add Bill'}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={singleBill?.name} type="text" placeholder="Full Name" className="input input-bordered w-full" {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })} />
                    {errors.name?.type === 'required' && <p className='text-red-500 mt-2'>{errors.name.message}</p>}
                    <div className="mb-4"></div>

                    <input defaultValue={singleBill?.email} type="email" placeholder="Email" className="input input-bordered w-full" {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid Email'
                        }
                    })} />
                    {errors.email?.type === 'required' && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                    {errors.email?.type === 'pattern' && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                    <div className="mb-4"></div>

                    <input type="number" placeholder="Phone Number" defaultValue={singleBill?.phone} className="input input-bordered w-full" {...register("phone", {
                        required: {
                            value: true,
                            message: 'Phone Number is Required'
                        },
                        minLength: {
                            value: 11,
                            message: 'Number should be 11 character'
                        },
                        maxLength: {
                            value: 11,
                            message: 'Number should be 11 character'
                        }
                    })} />
                    {errors.phone?.type === 'required' && <p className='text-red-500 mt-1'>{errors.phone.message}</p>}
                    {errors.phone?.type === 'minLength' && <p className='text-red-500 mt-1'>{errors.phone.message}</p>}
                    {errors.phone?.type === 'maxLength' && <p className='text-red-500 mt-1'>{errors.phone.message}</p>}
                    <div className="mb-4"></div>

                    <input defaultValue={singleBill?.amount} type="number" placeholder="Paid Amount" className="input input-bordered w-full" {...register("amount", {
                        required: {
                            value: true,
                            message: 'Paid Amount is Required'
                        }
                    })} />
                    {errors.amount?.type === 'required' && <p className='text-red-500 mt-1'>{errors.amount.message}</p>}
                    <div className="mb-4"></div>
                    <input type="submit" value={singleBill ? 'Update Bill' : 'Add Bill'} className="btn btn-secondary w-full" />
                </form>
            </div>
        </Modal>
    );
};

export default AddAndEditModal;