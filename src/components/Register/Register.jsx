import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/registration', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then(res => res.json()).then(token => {
            localStorage.setItem('accessToken', token);
            navigate('/');
            reset();
        })
    }

    return (
        <div className='flex items-center h-[90vh] justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-3xl uppercase font-semibold mb-4 text-center'>Registration</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        {errors.name?.type === 'required' && <p className='text-red-500 mt-2'>{errors.name.message}</p>}
                        <div className="mb-4"></div>

                        <input type="email" placeholder="Your Email" className="input input-bordered w-full"
                            {...register("email", {
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

                        <input type="password" placeholder="Your Password" className="input input-bordered w-full"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password Should be more than six character'
                                }
                            })}
                        />
                        {errors.password?.type === 'required' && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                        <div className="mb-4"></div>

                        <input type="submit" value="Register" className='w-full btn btn-secondary' />
                    </form>
                    <p className='mt-3'>Already have an account? <Link to="/login" className='underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;