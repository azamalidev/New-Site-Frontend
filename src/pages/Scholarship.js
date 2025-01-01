import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footur";

const ScholarshipProgram = () => {
  const [rollNo, setRollNo] = useState("");

  const handleInputChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Roll Number Submitted:", rollNo);
  };

  return (
    <>
    <Header/>
    <section className="message-area py-12">
      <div className="container mx-auto">
        <div className="row text-center mb-10">
          <div className="w-full">
            <img
              src="/assets/images/pftp-dark-logo.png"
              className="logo mx-auto"
              alt="PFTP Logo"
            />
            <h2 className="text-3xl font-semibold mt-4">SCHOLARSHIP PROGRAMS</h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mt-6">
              <div className="hr-line flex-grow h-px bg-gray-300"></div>
              <div className="hr-icon mx-4">
                <i className="fas fa-user-graduate fa-2x"></i>
              </div>
              <div className="hr-line flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="message-content text-lg">
          <p className="mb-4">
            The Ministry of Information Technology & Telecommunication (MoITT)
            has a vision to provide Freelancing Training to empower youth of the
            nation. In order to bring this revolution (PFTP) Scholarship Program
            2025 has been designed which provides opportunities to aspiring youth
            across all provinces of Pakistan.
          </p>
          <p className="mb-4">
            The priority of Government of Pakistan is to work on such programs
            which give drive to provide access to financially deserving and also
            encourages gender equity. Following this aim of Government, PFTP
            Scholarship Program 2025 strategy is to create opportunities for a
            sizeable segment of youth to bring them under the net of higher
            education and create equal education opportunities for all and for
            this our Scholarships comprises.
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>
              <b>Cash Prizes, Laptops, Tablets, etc.</b>
            </li>
            <li>
              <b>Every PFTP enrolled student will get this opportunity Once
                he/she completes his/her 3 months based freelancing and IT
                courses</b>
            </li>
          </ul>
          <p className="mb-4">
            So if you want to avail this opportunity, follow the instructions
            and steps given below to reserve your seat for this Scholarship
            Program 2025 as Professional Freelancing Training Program (PFTP) has
            limited seats.
          </p>

          <div className="note-section mb-8">
            <h3 className="text-xl font-semibold">
              NOTE: Only PFTP enrolled students would be eligible for this
              Scholarship Program.
            </h3>
          </div>

          <div className="steps-to-avail my-8">
            <h1 className="text-3xl font-semibold mb-4">STEPS TO AVAIL YOUR SCHOLARSHIPS</h1>
            <div className="flex">
              <div className="w-7/12">
                <ul className="list-decimal ml-8 space-y-3">
                  <li>First of All Register Yourself With Professional Freelancing Training Program (PFTP) To Become Eligible For Our Scholarship Program.</li>
                  <li>Now Fill Our Scholarship Form And Enter By Giving Your Registration Number Provided By Professional Freelancing Training Program.</li>
                  <li>After Providing Your Preferences Press The Submit Button And Wait For The Response "Congratulations You Are Now Considered As The Part of Our Scholarship Program."</li>
                  <li>Final Step Will Be Your competition / assessment Step Where You'll be short-listed for our Internationally fully / semi funded scholarship, Cash Prizes, Laptops, Tablets And Much More.</li>
                </ul>
              </div>
              <div className="w-5/12">
                <img
                  src="/assets/images/map.png"
                  className="img-fluid w-full"
                  alt="Map"
                />
              </div>
            </div>
          </div>

          <div className="registration-box my-8">
            <div className="registration-title text-center mb-4">
              <h3 className="text-2xl font-semibold">APPLY FOR SCHOLARSHIP</h3>
            </div>
            <form onSubmit={handleSubmit} className="form space-y-4">
              <div className="form-control">
                <label htmlFor="roll_no" className="block text-sm font-medium">
                  Roll Number
                </label>
                <input
                  type="text"
                  id="roll_no"
                  placeholder="Enter Roll Number"
                  value={rollNo}
                  onChange={handleInputChange}
                  className="input w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white text-xl rounded-md hover:bg-blue-700 transition-all"
              >
                APPLY FOR SCHOLARSHIP PROGRAM 2025
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ScholarshipProgram;
