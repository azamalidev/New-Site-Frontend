import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Import icons from lucide-react
import { useNavigate } from 'react-router-dom';
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
    rememberMe: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    };

    dispatch(login(obj, navigate));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '10rem', height: '3rem' }}
          />
        </div>
        <h1 className="text-center text-2xl font-semibold mb-6 text-gray-800">
          Welcome Back
        </h1>
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone Input */}
          <small className="block text-center">OR</small>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full px-3 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded border-gray-300 text-green-800 focus:ring-green-800"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a
              href={routes.recoverPassword}
              className="text-green-800 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-800 hover:bg-green-900 text-white font-medium rounded transition-colors"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href={routes.signup} className="text-green-800 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
