import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../redux/action/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../style/signup.css';

export default function RegistrationForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    verified: true,
    userType: 'student',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email == '') {
      toast.error('Please input the email!');
      return;
    }
    if (formData.password == '' || formData.confirmPassword == '') {
      toast.error('Please put in the password feilds!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Password feilds should be match!');
      return;
    }
    dispatch(addAccount(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-[#5A70E9] to-[#15B7A7]  items-center justify-center '>
      <nav className='flex'>
        <div className='bg-[#1B5E20] text-white py-2 px-4 flex-1'>ACCOUNT</div>
        <div className='bg-[#FFA000] text-white py-2 px-4 flex-[2]'>
          PROFILE
        </div>
        <div className='bg-[#FFA000] text-white py-2 px-4 flex-[2]'>
          COURSES
        </div>
      </nav>

      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-8'>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            Registration
          </h2>
          <form
            onSubmit={handleSubmit}
            className='space-y-4'
          >
            <div>
              <input
                type='text'
                name='name'
                placeholder='Enter name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <input
                type='email'
                name='email'
                placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <input
                type='tel'
                name='phone'
                placeholder='Enter Mobile Number'
                value={formData.phone}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm password'
                value={formData.confirmPassword}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-[#1B5E20] text-white py-3 rounded'
            >
              REGISTER NOW
            </button>
            <div className='text-center mt-4'>
              <span className='text-gray-600'>Already have an account? </span>
              <Link
                to='/signin'
                className='text-[#1B5E20]'
              >
                Login Here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
