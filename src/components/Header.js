import React, { useEffect, useState } from 'react';
import ProfileIcon from '../assets/icons/profile';
import BellIcon from '../assets/icons/bell';
import { routes } from '../contant';
import { LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/image/Logo.png';
// import { getProfile } from '../redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

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
    navigate(routes.dashboard);
  };
  const goToCourses = () => {
    // navigate(routes.);
  };
 const gotoHomePage = () =>{
  navigate(routes.main);
 }

 const gotoAboutUs = ()=>{
  navigate(routes.aboutUs)
 }

  const gotoOppertunity =(title)=>{
    if(title == "Scholarship"){
      navigate(routes.scholarship);
    }
    else if(title == "Intership") {
      navigate(routes.internship);
    }
  }

  const goToCourse = (page) => {
    if(page == 'Online'){
      navigate(routes.course);

    }if(page=='Physical'){
      navigate(routes.course);

    }
   
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(getProfile());
  //   }
  // }, [dispatch]);

  return (
    <header
      onMouseLeave={() => setIsOpen(false)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: 'white',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
       
      }}
      className='flex justify-between items-center bg-white py-4 px-6 shadow-md'
    >
     <h5> Logo</h5>
      <button
        className='lg:hidden text-gray-700 focus:outline-none'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Navigation */}
      <nav
        className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'
          } absolute lg:static bg-white lg:bg-transparent w-full top-16 left-0 shadow-md lg:shadow-none xl:ml-[10%] xl:ml-[10%]`}
      >
        <ul className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6'>

          <ul className="flex space-x-4">

            <li className="relative group">
              <button onClick={gotoHomePage} className="text-gray-700 hover:text-black focus:outline-none">
                Home
              </button>
            </li>








            <div className="relative group">
            
              <button onClick={gotoAboutUs} className="text-gray-700 hover:text-black focus:outline-none">
                About Us
              </button>

              {/* <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer"> Submenu 1 </li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</li>
              </ul> */}
            </div>

            {isAuthenticated && (
              <div className="relative group">
                <button

                  className="text-gray-700 hover:text-black focus:outline-none"
                >
                  Courses
                </button>
                <div className="absolute left-0 text-center rounded-md  hidden mt-0 w-28 bg-white border border-gray-300 shadow-md group-hover:block ">
                  <h5 onClick={()=> goToCourse("Online")} className=" py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Online</h5>
                  <h5  onClick={()=> goToCourse("Physical")} className=" py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Physical</h5>
                </div>
              </div>

            )}

            <div className="relative group">
              <button

                className="text-gray-700 hover:text-black focus:outline-none"
              >
                Opportunities
              </button>
              <div className="absolute left-0 text-center  hidden  w-28  bg-white border border-gray-300  rounded-md shadow-md group-hover:block ">
                <h5 onClick={()=> {gotoOppertunity("Intership")}} className="py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Internship</h5> 
                <h5 onClick={()=> {gotoOppertunity("Scholarship")}} className=" py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Scholarship</h5>
              </div>
            </div>

            <div className="relative group">
      <button className="text-gray-700 hover:text-black focus:outline-none">
        Info Desk
      </button>
      <div className="absolute left-0 rounded-md hidden mt-0 w-[210px] bg-white border border-gray-300 shadow-md group-hover:block">
        <Link to="/created" className='no-underline'>
          <h5 className="py-2 px-3 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">
            Create Account?
          </h5>
        </Link>
        <Link to="/register-course"className='no-underline'>
          <h5 className="py-2 px-3 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">
            How to register course?
          </h5>
        </Link>
        <Link to="/setup-lms"className='no-underline'>
          <h5 className="py-2 px-3 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer no-underline">
            How to setup student LMS?
          </h5>
        </Link>
        <Link to="/news" className='no-underline'>
          <h5 className="py-2 px-3 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">
            News for you
          </h5>
        </Link>
      </div>
    </div>


            <div className="relative group">
                <button

                  className="text-gray-700 hover:text-black focus:outline-none"
                >
                  Join Hands
                </button>
                <div className="absolute left-0 text-center rounded-md  hidden mt-0 w-28 bg-white border border-gray-300 shadow-md group-hover:block ">
                  <h5 className=" py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 1</h5>
                  <h5 className=" py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</h5>
                </div>
              </div>
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-black text-sm focus:outline-none"
              >
                OUR EVENTS
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border rounded-md w-32">
                  <h5>
                    <button
                      onClick={() => navigate('/event-1')}
                      className=" py-2 w-full text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer"
                    >
                      Event 1
                    </button>
                  </h5>
                  <h5>
                    <button
                      onClick={() => navigate('/event-2')}
                      className=" py-2 w-full text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer"
                    >
                      Event 2
                    </button>
                  </h5>
                  <h5>
                    <button
                      onClick={() => navigate('/event-3')}
                     className=" py-2 w-full text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer"
                    >
                      Event 3
                    </button>
                  </h5>
                  <h5>
                    <button
                      onClick={() => navigate('/event-4')}
                      className=" py-2 w-full text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer"
                    >
                      Event 4
                    </button>
                  </h5>
                </div>
              )}
            </li>

          </ul>

           {isAuthenticated ? (
            <li>
              <Link
                to={routes.lms}
                className='text-[#56D9B9] font-semibold hover:text-teal-600'
              >
                LMS
              </Link>
            </li>
          ) : (
           ""
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
            {profile?.profilePhoto ? (
              <span
                onMouseEnter={() => setIsOpen(true)}
                onClick={toggleDropdown}
                className='relative'
              >
                <img
                  src={profile?.profilePhoto}
                  alt='Profile'
                  className='w-14 h-8 object-cover rounded-full border-none' // Make the width and height the same for a round shape
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

      {isOpen && (
        <div className="absolute right-5 top-[70px] mt-2 w-36 bg-white border-2 border-gray-300  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="absolute top-[-9px] right-4 w-4 h-4 bg-white border-t-2 border-l-2 border-gray-300 transform rotate-45"></div>

    
        <div className="py-1">
         <Link  to={routes.profile}>
          <a
             
            className="flex items-center px-4 mt-2 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            <User size={18} className='hover:text-white'/>
            <span className="ml-3">Profile</span>
          </a> </Link>

          <a
            onClick={logout}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            <LogOut size={16} className='hover:text-white'/>
            <span className="ml-3">Logout</span>
          </a>
        </div>
      </div>
      )}
    </header>
  );
};

export default Header;
