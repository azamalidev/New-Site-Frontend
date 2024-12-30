import React from 'react';

const Footur = () => {
  return (
    <div className='w-full'>
      <footer
        className='text-white py-12 w-full'
        style={{ backgroundColor: '#0870F9' }} // Background color
      >
        <div className='container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8'>
          {/* Left Section */}
          <div className='flex flex-col md:w-1/4 text-left mb-8 md:mb-0'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3'>
              Lead Gen Pro
            </h1>
            <p className='text-xs sm:text-sm md:text-base xl:text-sm sm:whitespace-normal xl:whitespace-nowrap overflow-hidden text-ellipsis'>
              LeadGenPro: Simplifying motor insurance while empowering you to
              earn.
            </p>

            <div className='flex space-x-4 mt-8'>
              {/* Social Media Icons */}
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-facebook text-lg sm:text-xl'></i>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-twitter text-lg sm:text-xl'></i>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-instagram text-lg sm:text-xl'></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex flex-col md:flex-row gap-x-10 text-right'>
            {/* Pages Section */}
            <div className='md:w-auto'>
              <h3 className='text-sm sm:text-base md:text-lg font-bold mb-2'>
                Pages
              </h3>
              <ul>
                <li>
                  <a
                    href='/policies'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    Policies
                  </a>
                </li>
                <li>
                  <a
                    href='/category'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    Category
                  </a>
                </li>
                <li>
                  <a
                    href='/about-us'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Section */}
            <div className='md:w-auto'>
              <h3 className='text-sm sm:text-base md:text-lg font-bold mb-2'>
                Service
              </h3>
              <ul>
                <li>
                  <a
                    href='/bike-insurance'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    Bike insurance
                  </a>
                </li>
                <li>
                  <a
                    href='/car-insurance'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    Car insurance
                  </a>
                </li>
                <li>
                  <a
                    href='/commercial-insurance'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    Commercial vehicle <br />
                    insurance
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className='md:w-auto'>
              <h3 className='text-sm sm:text-base md:text-lg font-bold mb-2'>
                Contact
              </h3>
              <ul>
                <li>
                  <a
                    href='tel:000-000-000'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    <i className='fas fa-phone-alt mr-2 text-lg sm:text-xl'></i>
                    000-000-000
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:sudesh@example.com'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    <i className='fas fa-envelope mr-2 text-lg sm:text-xl'></i>
                    sudesh@example.com
                  </a>
                </li>
                <li>
                  <a
                    href='https://maps.google.com/?q=0000+Lörem+ipsum+St,+City,+Country'
                    className='text-xs sm:text-sm md:text-base hover:underline'
                  >
                    <i className='fas fa-map-marker-alt mr-2 text-lg sm:text-xl'></i>
                    0000 Lörem ipsum od <br />
                    ohet dilog 0000.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footur;
