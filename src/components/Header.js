import React, { useEffect, useState } from 'react';
import ProfileIcon from '../assets/icons/profile';
import BellIcon from '../assets/icons/bell';
import { routes } from '../contant'; // Ensure `routes` contains the correct paths
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/image/Logo.png';
import { getProfile } from '../redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate(routes.signin);
  };

  const goToUserDashboard = () => {
    navigate(routes.dashboard); // Ensure `routes.dashboard` points to your dashboard page
  };

  const goToProfile = () => {
    navigate('/profile'); // Navigate to the profile page
    setIsOpen(false); // Close the dropdown
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  return (
    <header
      onMouseLeave={() => setIsOpen(false)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: 'white',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px 24px',
      }}
      className='flex justify-between items-center bg-white py-4 px-6 shadow-md '
    >
      {/* Logo */}
      <img
        src={Logo}
        style={{ width: '10rem', height: '3rem', cursor: 'pointer' }}
        alt='Logo'
        onClick={() => navigate(routes.main)}
      />
      {/* Navigation */}
      <nav>
        <ul className='flex space-x-6'>
          <li>
            <button
              onClick={() => navigate(routes.main)}
              className='text-gray-700 hover:text-black focus:outline-none'
            >
              Home
            </button>
          </li>

          {isAuthenticated ? (
            <li>
              <button
                onClick={goToUserDashboard}
                className='text-gray-700 hover:text-black focus:outline-none'
              >
                Dashboard
              </button>
            </li>
          ) : (
            ''
          )}
          {isAuthenticated ? (
            <li>
            <button
              onClick={() => navigate('/lead')} // Replace '/lead' with the actual route to your Lead page
              className="text-gray-700 hover:text-black"
            >
              Leads
            </button>
          </li>
          
          ) : (
            ''
          )}
          <li>
            <a
              href='#'
              className='text-gray-700 hover:text-black'
            >
              Category
            </a>
          </li>
          <li>
            <Link
              to={routes.aboutUs} // Replace `routes.aboutUs` with the actual path
              className='text-gray-700 hover:text-black'
            >
              About Us
            </Link>
          </li>
          <li>
            <button
              onClick={() => navigate(routes.support)}
              className='text-gray-700 hover:text-black focus:outline-none'
            >
              Support
            </button>
          </li>
          {isAuthenticated ? (
            <li>
              <Link
                to={routes.quotation} // Replace routes.quotation with the actual path to your Quotation page
                className='text-[#56D9B9] font-semibold hover:text-teal-600'
              >
                Generate Quotation
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to={routes.signin} // Replace routes.quotation with the actual path to your Quotation page
                className='text-[#56D9B9] font-semibold hover:text-teal-600'
              >
                Become Pro Lead Partner
              </Link>
            </li>
          )}

         
        </ul>
      </nav>

      {/* Icons and Authentication */}
      <div className='flex items-center space-x-4'>
        {isAuthenticated ? (
          <>
            <button className='text-gray-700 hover:text-black'>
              <BellIcon />
            </button>
            <div className='relative inline-block'>
              {profile?.profilePhoto ? (
                <span
                  onMouseEnter={() => setIsOpen(true)}
                  onClick={toggleDropdown}
                >
                  <img
                    src={profile?.profilePhoto}
                    alt='Profile'
                    className='w-8 h-8 object-cover rounded-full' // Responsive image with fixed size
                  />
                </span>
              ) : (
                <button
                  onMouseEnter={() => setIsOpen(true)}
                  onClick={toggleDropdown}
                  className='bg-blue-200 text-gray-800 rounded-full p-2 hover:bg-blue-300 focus:outline-none'
                >
                  <ProfileIcon />
                </button>
              )}

              {/* Dropdown Menu */}
              {isOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50'>
                  <ul className='py-2'>
                    <li>
                      <button
                        onClick={goToProfile}
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
                      >
                        Profile
                      </button>
                    </li>
                    <li>
                      <Link
                        to={routes.lead}
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
                      >
                        My Request
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={goToUserDashboard}
                        className='w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
                      >
                        Dashboard
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className='w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link
              to={routes.signup}
              className='text-sm text-blue-600 hover:underline'
            >
              Signup
            </Link>
            <Link
              to={routes.signin}
              className='text-sm text-blue-600 hover:underline'
            >
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
