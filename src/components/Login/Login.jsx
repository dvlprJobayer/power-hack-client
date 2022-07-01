import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const navigate = useNavigate();
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: data.email })
        }).then(res => res.json()).then(token => {
            if (token.message) {
                return alert(token.message);
            }
            localStorage.setItem('accessToken', token);
            setToken(token);
            navigate('/');
            reset();
        })
    }

    return (
        <div className='flex items-center h-[90vh] justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-3xl uppercase font-semibold mb-4 text-center'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <input type="submit" value="Login" className='w-full btn btn-secondary' />
                    </form>
                    <p className='mt-3'>Don't have an account? <Link to="/register" className='underline'>Create an Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;