import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Vehicle1 from './Vehicle1';
import Vehicle2 from './Vehicle2';
import Vehicle3 from './Vehicle3';
import Vehicle4 from './Vehicle4';
import { FaArrowLeft } from 'react-icons/fa';
import Rectangle1 from '../assets/icons/Rectangle1';
import Rectangle2 from '../assets/icons/Rectangle2';
import QuickUpload from '../components/QuickUpload'; // Ensure the path is correct

const Quotation = () => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('manual');
  const [formData, setFormData] = useState({
    userId: '', // Empty string or null based on the requirement
    vehicleType: '',
    userType: '',
    policyType: '',
    previousPolicytype: '',
    previousYearclame: '',
    policyExpirydate: '',
    vehicleChassis: '',
    policyMorethan90: false,
    registrationNumber: '',
    make: '',
    vehicleModel: '',
    GVC: '',
    manufactureDate: '',
    fuelType: '',
    vehicleEngineNumber: '',
    attachPreviouspolicy: '',
    ownerDetail: {
      ownerName: '',
      ownerNumber: '',
      ownerAddress: '',
      ownerEmail: '',
    },
    requestSent: true,
    quotationMade: false,
    paymentDone: false,
    policyUpdated: false,
    previousPolicyURL: '',
  });
  const handleQuickUpload = () => {
    setSelectedOption('quick');
  };

  const handleManualForm = () => {
    setSelectedOption('manual');
  };

  const submitFormOne = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      vehicleType: data,
    }));
    setStep(step + 1);
  };

  const submitFormTwo = (
    policyType,
    previousPolicytype,
    claimMade,
    policyExpirydate,
    policyMorethan90
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      policyType,
      previousPolicytype,
      previousYearclame: claimMade,
      policyExpirydate,
      policyMorethan90,
    }));

    setStep(step + 1); // Move to next step
  };

  const submitFormThree = (formDataFromChild) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      manufactureDate: formDataFromChild?.manufactureYear,
      GVC: formDataFromChild?.ccGvc,
      vehicleChassis: formDataFromChild?.chassisNumber,
      vehicleEngineNumber: formDataFromChild?.engineNumber,
      fuelType: formDataFromChild?.fuelType,
      make: formDataFromChild?.make,
      vehicleModel: formDataFromChild?.model,
      registrationNumber: formDataFromChild?.registerNumber,
      previousPolicyURL: formDataFromChild?.policyFile,
    }));

    setStep(step + 1); // Move to next step
  };

  const forms = [
    <Vehicle1
      key='vehicle1'
      onImageClick={submitFormOne}
    />,
    <Vehicle2
      key='vehicle2'
      onSave={submitFormTwo}
    />,
    <Vehicle3
      key='vehicle3'
      onSave={submitFormThree}
    />,
    <Vehicle4 formData={formData} setFormData={setFormData} />
  ];

  return (
    <div className='relative'>
      <Header />
      <div className='relative'>
        <div className='absolute top-80 left-20'>
          <Rectangle1 />
        </div>
        <div className='absolute right-0 bottom-6'>
          <Rectangle2 />
        </div>

        <div className='flex justify-center space-x-4 mt-4'>
          <span
            className={`text-lg font-medium cursor-pointer py-2 ${
              selectedOption === 'manual'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-400'
            }`}
            onClick={handleManualForm}
          >
            Fill Form Manually
          </span>
          <span
            className={`text-lg font-medium cursor-pointer py-2 ${
              selectedOption === 'quick'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-400'
            }`}
            onClick={handleQuickUpload}
          >
            Quick Upload
          </span>
        </div>

        <h1 className='text-2xl font-bold text-center my-4'>Vehicle Detail</h1>
      </div>

      <div className='bg-white flex flex-col justify-center items-center'>
        <div className='w-full max-w-2xl '>
          {selectedOption === 'manual' && (
            <motion.div
              key='manual-form'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full'
            >
              {step < 4 ? forms[step] : null}
            </motion.div>
          )}

          {selectedOption === 'quick' && (
            <motion.div
              key='quick-upload'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full'
            >
              <QuickUpload />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotation;
