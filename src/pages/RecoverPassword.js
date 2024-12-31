import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../assets/image/Logo.png';
import ResetPassIcon from '../assets/icons/resetPasswordIcon';
import { firebaseResetPasswordEmail } from '../redux/action/auth';

const RecoverPassword = () => {
  const [email, setEmailInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }
    dispatch(firebaseResetPasswordEmail(email));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <ToastContainer />
      <div className="absolute top-4 left-4 flex items-center">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '10rem', height: '3rem' }}
        />
      </div>

      <div className="bg-white w-full max-w-4xl p-6 sm:p-10 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-24">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Recover Password
          </h1>
          <div className="flex justify-between items-center mb-6">
            <div className="border-t-2 border-[#9CA3AF] w-1/3"></div>
            <div className="border-t-2 border-[#9CA3AF] w-1/3"></div>
          </div>
          <form
            className="space-y-4 mt-5"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold rounded-lg py-3 hover:bg-blue-700 transition"
            >
              Recover Account
            </button>
          </form>
        </div>
        {/* Email Icon Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <ResetPassIcon />
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">How to recover account?</h3>
            <p className="text-sm text-[#0870F9] leading-relaxed">
              Enter your email address, get the reset link, and follow the
              instructions to set a new password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
