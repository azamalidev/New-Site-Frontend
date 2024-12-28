import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye icons for visibility toggle
import Logo from '../assets/image/Logo.png';
import { ToastContainer, toast } from 'react-toastify';
import { resetPassword } from '../redux/action/auth';


const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPasswordInput] = useState('');
  const [confirmPassword, setConfirmPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      toast.error('Both fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Password and confirm password should be match.');
      return;
    }
    dispatch(resetPassword(password, navigate)); 
  };

  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      <ToastContainer />
      <div className='absolute top-4 left-4 flex items-center'>
        <img
          src={Logo}
          alt='Logo'
          style={{ width: '10rem', height: '3rem' }}
        />
      </div>
      <div className='bg-white w-full max-w-4xl p-6 sm:p-10 rounded-lg flex flex-col items-center gap-8 p-3'>
        <h1 className='text-3xl font-bold mb-6'>Account Recoverey</h1>
        <form
          className='space-y-4 w-full max-w-md'
        >
          {/* Password Field */}
          {/* Add lines under the title */}
          <div className='flex justify-between items-center mb-6'>
            <div className='border-t-2 border-[#9CA3AF] w-1/3'></div>
            <div className='border-t-2 border-[#9CA3AF] w-1/3'></div>
          </div>

          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Create New Password'
              value={password}
              onChange={(e) => setPasswordInput(e.target.value)}
              className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className='relative'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPasswordInput(e.target.value)}
              className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type='button'
            onClick={handleSubmit}
            className='w-full bg-blue-600 text-white text-lg font-semibold rounded-lg py-3 hover:bg-blue-700 transition'
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
