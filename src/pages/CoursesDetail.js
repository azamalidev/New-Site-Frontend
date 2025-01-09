import React, { useState, useEffect } from 'react';
import Footer from '../components/footur';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../redux/action/request';
import { useParams } from 'react-router-dom';
import { Star, Clock, Globe, MoveUpIcon, GraduationCap, BadgeIcon } from 'lucide-react';
export default function CourseDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { courseDetail } = useSelector((state) => state.auth);
   console.log(courseDetail, "courseDetail")
  useEffect(() => {
    dispatch(getCourseById(id));
  }, [1000]);
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-3/4 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-4">Learn MERN Stack</h4>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center">
                    <img src="/assets/images/logo1.png" alt="Instructor" className="w-12 h-12 rounded-full mr-3" />
                    <div>
                      <h6 className="font-semibold">Instructor</h6>
                      <p className="text-gray-600">PFTP | Instructor</p>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold">Category</h6>
                    <p className="text-gray-600">Website Development</p>
                  </div>
                  <div>
                    <h6 className="font-semibold">Rating</h6>
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((_, index) => (
                        <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400 fill-current" strokeWidth={0.5} />
                      <span className="ml-1">(4.5)</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold">Registration Fee</h6>
                    <p className="text-gray-600">2900</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <img src="https://aws.pftpedu.org/storage/courses/detail/webimg6.jpg" alt="Course Banner" className="w-full rounded-lg" />
              </div>
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-center mb-6">MERN Stack</h2>
                <h3 className="text-2xl font-semibold mb-4">Welcome to PFTP, where the world connects.</h3>
                <p className="mb-4">
                  If you are looking forward to web development and want to do it within no time, then you are at the right place where you should be.
                </p>
                <p className="mb-4">
                  MERN Stack enables efficient web development by combining 4 JS-based technologies into a comprehensive technology stack.
                </p>
                <h4 className="text-xl font-semibold text-teal-600 mb-4">What is MERN Stack?</h4>
                <p className="mb-4">
                  The MERN Stack consists of MongoDB, Express.js, React.js, and Node.js, a JavaScript-based technology Stack. Developers find MERN Stack faster and better than other Stacks. PFTP is the best choice to guide you through this Stack and will be effortless.
                </p>
                <h4 className="text-xl font-semibold text-teal-600 mb-4">Learning Outcome:</h4>
                <p className="font-semibold mb-2">You will be able to….</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Understanding the fundamentals of each component</li>
                  <li>Building full-stack web applications</li>
                  <li>Working with databases</li>
                  <li>Implementing user interfaces</li>
                  <li>Deploying applications</li>
                  <li>Problem-solving and debugging</li>
                </ul>
                <h4 className="text-xl font-semibold text-teal-600 mb-4">Scope of MERN Stack:</h4>
                <p className="font-semibold mb-2">MERN Stack developers can look forward to a promising future as….</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>An increasing number of companies is enthusiastically adopting the concept of Full-Stack development.</li>
                  <li>It represents a highly rewarding career opportunity with excellent earning potential.</li>
                  <li>There is a huge scope of jobs even for freshers.</li>
                </ul>
                <h4 className="text-xl font-semibold text-teal-600 mb-4">Course Content list:</h4>
                <ol className="list-decimal pl-6 mb-4">
                  <li>Introduction to MERN STACK</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>ReactJS</li>
                  <li>Node.js</li>
                  <li>Explore Modern JavaScript</li>
                </ol>
                <h2 className="text-xl text-center mb-4">For the whole course content outlines</h2>
                <p className="text-center mb-4">
                  Just WhatsApp the given below number to get the entire course content details in a PDF file.
                </p>
                <p className="text-center font-bold">03034321118</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h5 className="text-xl font-bold mb-4">Course Details</h5>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Duration:</span>
                  <span className="ml-2">3-Months</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Language:</span>
                  <span className="ml-2">English/Urdu</span>
                </li>
                <li className="flex items-center">
                  <MoveUpIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Skill Level:</span>
                  <span className="ml-2">Beginner</span>
                </li>
                <li className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Subject:</span>
                  <span className="ml-2">Website Development</span>
                </li>
                <li className="flex items-center">
                  <BadgeIcon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Certification:</span>
                  <span className="ml-2">Yes</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-6 hover:bg-blue-700 transition duration-300">
                Enroll Course
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h5 className="text-xl font-bold mb-4">Related Course</h5>
              <div className="space-y-4">
                <RelatedCourse
                  title="Front-end development"
                  image="https://aws.pftpedu.org/storage/courses/detail/webimg2.jpg"
                />
                <RelatedCourse
                  title="WordPress"
                  image="https://aws.pftpedu.org/storage/courses/detail/webimg3.jpg"
                />
                <RelatedCourse
                  title="Shopify"
                  image="https://aws.pftpedu.org/storage/courses/detail/Xh7LHNer4P1bP7Rszel63Zenm1jzM7Hehg47AxH9.jpg"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h5 className="text-xl font-bold mb-4">Course Tag</h5>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'Photoshop', 'jQuery', 'PHP', 'WordPress', 'Bootstrap', 'JavaScript'].map((tag) => (
                  <a
                    key={tag}
                    href="/"
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition duration-300"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
const RelatedCourse = ({ title, image }) => {
  return (
    <div className="flex items-center">
      <img src={image} alt={title} className="w-20 h-20 object-cover rounded-lg mr-4" />
      <div>
        <h6 className="font-semibold mb-1">{title}</h6>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
};