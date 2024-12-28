import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Footur from '../components/footur';
import Header from '../components/Header';
import coverImage from '../assets/image/cover.png';

const AboutUs = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <Header />

      {/* Cover Section */}
      <motion.div
        className='relative w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <img
          src={coverImage}
          alt='Cover'
          className='w-[200%] h-[450px] object-cover sm:h-[300px] md:h-[400px] lg:h-[450px]'
        />

        {/* Overlay Description */}
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8'
          style={{
            fontFamily: 'Inter',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '1.5',
          }}
        >
          <span>
            LeadGenPro simplifies motor insurance by providing the best quotes
            and empowering individuals to earn through lead generation. Join us
            to save, earn, and grow with ease!
          </span>
        </div>
      </motion.div>

      {/* "Why choose LeadGenPro!" Section */}
      <motion.div
        className='text-center font-sans mt-12 mb-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-4xl font-bold'>Why choose LeadGenPro!</h1>
        <br />
        <br />

        <div
          className='flex justify-center gap-8 text-3xl my-4'
          style={{ color: '#56D9B9' }}
        >
          <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>Competitive Quotes.</motion.span>
          <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>Hassle-Free Earnings.</motion.span>
          <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>Simplified Process.</motion.span>
        </div>

        <motion.div
          className='text-center font-sans mt-12 mb-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className='text-3xl font-semibold my-4'>Vision and Mission</h2>
          <p className='text-gray-600 text-base max-w-2xl mx-auto leading-relaxed'>
            Our mission is to revolutionize the motor insurance experience by:
            <br />
            Providing customers with competitive and transparent insurance
            <br />
            quotations. Empowering Pro Lead Partners to earn and grow by
            generating
            <br />
            high-quality leads without complex processes. Building a trusted
            <br />
            network between customers and insurance providers. To become the most
            <br />
            trusted platform for motor insurance, simplifying the process for customers
            <br />
            while creating earning opportunities for individuals through lead
            <br />
            generation.
          </p>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className='mt-auto'>
        <Footur />
      </div>
    </div>
  );
};

export default AboutUs;
