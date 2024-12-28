import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendSignupLink } from '../redux/action/auth';
import laptopMan from '../assets/image/laptop_man.png';
import proleadPartner from '../assets/image/pro_lead_partner.png';
import { routes } from '../contant';
import Logo from '../assets/image/Logo.png';
import profileIcon from '../assets/image/manProfile.png'
import { ToastContainer, toast } from 'react-toastify';
import '../style/signup.css';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email.")
      return;
    }
    dispatch(sendSignupLink(email));
  };

  return (
    <div className='min-h-screen bg-[#FFFFFF] flex justify-center relative overflow-hidden overflow-y-hidden'>
      <ToastContainer />
      <div className=' mt-4 flex'>
        <img
          src={Logo}
          style={{ width: '10rem', height: '3rem' , position:"relative", right:"5rem"}}
        />
      </div>

      <div className='w-full max-w-4xl flex flex-col lg:flex-row mt-5'>
        <div className='flex-1 px-6 py-10 sm:p-12 mt-5'>
          <h1 className='text-3xl font-bold text-center mb-5 text-gray-800'>
            Verify Your Email
          </h1>
          {/* Lines under the title */}
          <div className='flex justify-between items-center mb-5 mt-[40px]'>
            <div className='border-t-2 border-gray-400 w-1/3'></div>
            <div className='border-t-2 border-gray-400 w-1/3'></div>
          </div>
          <form
            onSubmit={handleSubmit}
            className='space-y-6'
          >
            <div className='relative'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              ></label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white rounded-md py-3 hover:bg-blue-700 transition'
            >
              Sign Up
            </button>
          </form>
          <p className='text-sm text-black-500 mt-6 text-center'>
            <span className='font-bold'>By continuing you agree with our</span>{' '}
            <a
              href='/terms'
              className='text-[#56D9B9] hover:underline font-bold'
            >
              Terms and Conditions
            </a>
            .
          </p>
          <p className='text-sm text-center mt-4'>
            <span className='font-bold'>Need help? Contact support at</span>{' '}
            <a
              href='mailto:support@gmail.com'
              className='text-[#56D9B9] font-bold'
            >
              support@gmail.com
            </a>{' '}
            <span className='font-bold'> or call</span>
            <span className='font-bold text-[#56D9B9]'> 18002660101</span>
          </p>
          {/* Link to Sign In */}
          <p className='text-sm text-center mt-6'>
            Already have an account?{' '}
            <Link
              to={routes.signin}
              className='text-blue-600 hover:underline'
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className='flex-1 mt-5  sm:p-8  relative text-center'>
          <h2 className='text-lg font-bold text-[#56D9B9] mb-1 mt-4'>
            Become a Pro Lead Partner
          </h2>
          <p className='text-[#010101] mb-6 font-poppins'>
            <span className='font-bold'> Earn up to ₹50,000/month*</span> <br />
            <br />
            Zero investment required.
          </p>

          {/* Decorative Dots */}
          <div className='dot dot-large hidden sm:block dot-blue dot1'></div>
          <div className='dot dot-large hidden sm:block dot-blue dot3'>
            <span className='ml-[0.1rem]'>₹</span>
          </div>
          <div className='dot dot-medium hidden sm:block dot-green dot4'></div>
          <div className='dot dot-small hidden sm:block dot-green dot5'></div>

          <div className='  h-[20rem]'>
          <img
              src={profileIcon}
              alt='Pro lead Partner'
              style={{ position: 'relative',top:'5rem', left: '1rem' }}
              className='w-[4rem] z-[999] h-[2rem] rounded-md hidden lg:block'
            />
            <img
              src={proleadPartner}
              alt='Pro lead Partner'
              style={{ position: 'relative', left: '1rem' }}
              className='w-[10rem] mt-5 h-[5rem] rounded-md hidden lg:block'
            />
            <img
              src={laptopMan}
              alt='Man with laptop'
              style={{ position: 'relative', top: '-8rem', left: '6rem' }}
              className='w-[50rem] h-[21.5rem] rounded-md hidden lg:block '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
