import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendSignupLink } from '../redux/action/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../style/signup.css';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    dispatch(sendSignupLink(formData));
    toast.success('Registration successful! Redirecting to profile...');
    setTimeout(() => navigate('/profile'), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <nav className="flex">
        <div className="bg-[#1B5E20] text-white py-4 px-8 flex-1">ACCOUNT</div>
        <div className="bg-[#FFA000] text-white py-4 px-8 flex-[2]">PROFILE</div>
        <div className="bg-[#FFA000] text-white py-4 px-8 flex-[2]">COURSES</div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="******"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B5E20] text-white py-3 rounded"
            >
              REGISTER NOW
            </button>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/signin" className="text-[#1B5E20]">Login Here</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
