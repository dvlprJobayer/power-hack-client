import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex items-center h-[90vh] justify-center'>
            <div className="card max-w-md bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className='text-3xl uppercase font-semibold mb-4'>Registration</h2>
                    <form>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-6" />
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-6" />
                        <input type="password" placeholder="Your Password" className="input input-bordered w-full mb-6" />
                        <input type="submit" value="Register" className='w-full btn btn-secondary' />
                    </form>
                    <p className='mt-3'>Already have an account? <Link to="/login" className='underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;