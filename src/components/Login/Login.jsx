import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex items-center h-[90vh] justify-center'>
            <div className="card max-w-md bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className='text-3xl uppercase font-semibold mb-4'>Login</h2>
                    <form>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-6" />
                        <input type="password" placeholder="Your Password" className="input input-bordered w-full mb-6" />
                        <input type="submit" value="Login" className='w-full btn btn-secondary' />
                    </form>
                    <p className='mt-3'>Don't have an account? <Link to="/register" className='underline'>Create an Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;