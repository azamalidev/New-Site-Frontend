import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footur from '../components/footur';

const SupportPage = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
        <motion.div
          className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Contact Support
          </h1>
          <p className="text-gray-600 mb-6">
            If you need assistance, please contact us using the information
            below. Our team is here to help you.
          </p>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg font-semibold">📞 Phone:</span>
              <span className="text-gray-800 font-medium">+1 234 567 890</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg font-semibold">📧 Email:</span>
              <span className="text-gray-800 font-medium">
                support@example.com
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-lg font-semibold">🕒 Hours:</span>
              <span className="text-gray-800 font-medium">
                Mon - Fri: 9:00 AM - 6:00 PM
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          >
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition flex items-center justify-center gap-4">
              <span>Get in Touch</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Footur />
    </>
  );
};

export default SupportPage;
