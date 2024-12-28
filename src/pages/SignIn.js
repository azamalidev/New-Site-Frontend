import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { routes } from '../contant';
import Logo from '../assets/image/Logo.png';
import { login } from '../redux/action/auth';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';


const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value)
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Validate email/phone and password
    if (!formData.email && !formData.phone) {
      console.error('Email or phone number is required.');
      return;
    }
    if (!formData.password) {
      console.error('Password is required.');
      return;
    }

    const obj = {
      email:formData.email,
      password:formData.password,
      phone:formData.phone
    }
        dispatch(login(obj, navigate));
  };

  return (
    <div className='min-h-screen bg-[#FFFFFF] justify-center relative overflow-hidden'>
      <ToastContainer/>
      <div className='ml-[8.25%] mt-5 flex'>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '10rem', height: '3rem', position: 'relative', right: '5rem' }}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-10">Welcome Back</h1>
          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <small style={{ display: 'block', textAlign: 'center' }}>OR</small>
            {/* Phone Input */}
            <div>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                className="absolute right-5 mt-3 transform cursor-pointer"
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {/* Remember Me Checkbox */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm">
                  Remember me
                </label>
              </div>
              <Link to={routes.recoverPassword} className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-3 hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center mt-6">
            Don't have an account?{' '}
            <Link to={routes.signup} className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
