import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';
const InternshipSection = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!rollNumber) {
      setMessage('Please enter your roll number');
      return;
    }
    setMessage('Application submitted successfully!');
  };

  return (
    <>
    <Header/>
    <section className="message-area py-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="row text-center mb-10">
          <div className="col-md-12">
            <img src="/assets/images/pftp-dark-logo.png" className="logo mb-4" alt="PFTP Logo" />
            <h2 className="text-3xl font-semibold mb-4">VIRTUAL AND PHYSICAL INTERNSHIP</h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-0.5 bg-gray-400 mx-2"></div>
              <div className="hr-icon text-lg font-medium">Work From Home Opportunity</div>
              <div className="hr-line w-1/4 h-0.5 bg-gray-400 mx-2"></div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-10">
          <div className="message-content text-left text-lg leading-relaxed">
            <p>
              PFTP program has a vision to create job opportunities at the Government level and at the private sector level to enhance the employment ratio. Our Certified Students will be offered Paid/Unpaid Internship in their respective fields. After the completion of courses, qualified students will be offered internship on priority basis. Selection of candidate will remain the discretion of companies.
            </p>
            <p>
              A stipend will be offered to the selected candidates and we are sure that our qualified students will get internships in Top Organizations, which may result in Permanent Job Offerings. Application is finally open for the PFTP Internship Program 2025. Candidates Male/Female from All over the country are eligible to apply for the PFTP Internship 2025.
            </p>
            <p>
              The best thing about PFTP Internship is it’s virtual as well as physical so if you’re not willing to go to the office to attend the internship, you can attend it virtually as per your convenience. PFTP has decided to offer internships to help them earn an honorable living. This is the best chance for the students to get experience from the experts.
            </p>
            <p>
              Candidates belonging to any part of the country can apply for this internship program. Students pursuing their Bachelors, Masters, or Ph.D. degree program can also apply for this Paid/Unpaid Internship. For further more details about the PFTP, Virtual & Physical Internship read the details mentioned below and apply.
            </p>
          </div>
          <div className="note-section mt-6 bg-yellow-100 p-4 rounded-md">
            <h3 className="font-bold">NOTE: Only PFTP enrolled students would be eligible for this Scholarship Program.</h3>
          </div>

          <div className="row mt-12">
            <div className="col-md-12 text-center">
              <h1 className="text-4xl font-bold">STEPS TO RESERVE YOUR INTERNSHIP</h1>
            </div>
            <div className="col-md-7 mt-8">
              <ul className="list-disc pl-6 space-y-4 text-lg">
                <li>First of All Register Yourself With Professional Freelancing Training Program (PFTP) To Become Eligible For Our Scholarship Program.</li>
                <li>Now Fill Our Scholarship Form And Enter By Giving Your Registration Number Provided By Professional Freelancing Training Program.</li>
                <li>After Providing Your Preferences Press The Submit Button And Wait For The Response "Congratulations You Are Now Considered As The Part of Our Scholarship Program."</li>
                <li>Final Step Will Be Your competition / assessment Step Where You'll be short-listed for our Internationally fully / semi funded scholarship, Cash Prizes, Laptops, Tablets And Much More.</li>
              </ul>
            </div>
            <div className="col-md-5 mt-8">
              <img src="/assets/images/map-1.png" className="img-fluid" alt="Map" />
            </div>
          </div>

          <div className="registration-box mt-12">
            <div className="registration-title text-center mb-6">
              <h3 className="text-3xl font-semibold">APPLY FOR INTERNSHIP</h3>
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="form-control mb-4">
                <label htmlFor="roll_no" className="block text-lg font-medium">Roll Number</label>
                <input
                  type="text"
                  id="roll_no"
                  placeholder="Enter Roll Number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
                {message && <span className="text-red-500 text-sm">{message}</span>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                APPLY FOR INTERNSHIP PROGRAM 2025
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    </>
  );
};

export default InternshipSection;
