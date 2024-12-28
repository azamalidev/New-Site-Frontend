import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAccount, getEmployee } from '../redux/action/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/image/Logo.png';
import { ToastContainer, toast } from 'react-toastify';

const Account = () => {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.auth);
  const [accountForm, setAccountForm] = useState({
    name: '',
    phone: '',
    email: localStorage.getItem('userEmail'),
    password: '',
    TermAndCond: false,
    varified: true,
    profession: '',
    referBy: '', // New field for "Refer By"
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAccountForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!accountForm.name || !accountForm.phone || !accountForm.password) {
      toast.error('All fields are required. Please fill all fields');
      return;
    }
    if (!accountForm.TermAndCond) {
      toast.error('You must agree our terms & conditions.');
      return;
    }
    setLoading(true);
    dispatch(submitAccount(accountForm, navigate));
  };

  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <div className="absolute top-3 left-24">
        <img src={Logo} alt="Logo" style={{ width: '10rem', height: '3rem' }} />
      </div>
      <div className="mx-auto p-6 bg-transparent rounded-lg mt-10 relative">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="hidden lg:block lg:w-1/3"></div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Tell us a bit about Yourself
            </h2>
            <h2 className="text-1xl font-semibold mb-6 text-center">
              Just a few more details
            </h2>

            <div className="flex justify-between items-center mb-3 w-full">
              <div className="border-t-2 border-black w-1/3"></div>
              <div className="border-t-2 border-black w-1/3"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {/* Full Name */}
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={accountForm.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  value={accountForm.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Profession */}
              <div>
                <select
                  name="profession"
                  value={accountForm.profession}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    What is your Profession
                  </option>
                  <option value="Student">College Student</option>
                  <option value="Business Owner/Shop">Business Owner/Shop</option>
                  <option value="House Wife">House Wife</option>
                  <option value="Retired Person">Retired Person</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter new account password"
                  value={accountForm.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Refer By */}
              <div>
                <select
                  name="referBy"
                  value={accountForm.referBy}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Who referred you?
                  </option>
                  {employee?.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <input
                  name="TermAndCond"
                  type="checkbox"
                  checked={accountForm.TermAndCond}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-500"
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <span className="text-blue-500">Terms & Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Create Pro Lead Account
                </button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
