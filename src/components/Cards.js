import React, { useState } from "react";
import Img1 from '../assets/image/Img1.png'
import Img2 from '../assets/image/Img2.png'
import Img3 from '../assets/image/Img3.png'
import Img4 from '../assets/image/Img4.png'
import Img5 from '../assets/image/Img5.png'
import Img6 from '../assets/image/Img6.png'
import Img7 from '../assets/image/Img7.png'
import Img8 from '../assets/image/Img8.png'
import Img9 from '../assets/image/Img9.png'
import Img10 from '../assets/image/Img10.png'
import Img11 from '../assets/image/Img11.png'
import Img12 from '../assets/image/Img12.png'
import Img13 from '../assets/image/Img13.png'
import Img14 from '../assets/image/Img14.png'



const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCourses, setVisibleCourses] = useState(6); // Initially showing 6 courses

  const courses = [
    { title: "Graphic Designing", subtitle: "Master the fast-moving profession in graphic design.", duration: "1.5 months", image: Img1, category: "Pro" },
    { title: "Search Engine Optimization", subtitle: "Learn SEO from basics to professional level.", duration: "3 months", image: Img2, category: "Expert" },
    { title: "Social Media Marketing", subtitle: "Comprehensive guide to Social Media Marketing.", duration: "2 months", image: Img3, category: "Pro" },
    { title: "Freelancing", subtitle: "Master the fundamentals of freelancing.", duration: "6 months", image: Img4, category: "Master" },
    { title: "Shopify", subtitle: "Practical learning experience for Shopify.", duration: "4 months", image: Img5, category: "Expert" },
    { title: "Video Editing", subtitle: "Cutting-edge video editing techniques.", duration: "1.5 months", image: Img6, category: "Pro" },
    { title: "Artificial Intelligence & Data Science", subtitle: "Course for beginners and professionals.", duration: "3 months", image: Img7, category: "Expert" },
    { title: "Full Stack Web Development", subtitle: "Learn MongoDB, Express.js, React, Node.js.", duration: "2 months", image: Img8, category: "Pro" },
    { title: "Digital Media Marketing", subtitle: "Fundamentals of digital marketing.", duration: "4 months", image: Img9, category: "Expert" },
    { title: "Full Stack Graphic Designing", subtitle: "Master digital illustration, branding, and UI/UX design.", duration: "6 months", image: Img10, category: "Master" },
    { title: "Ethical Hacking", subtitle: "Become a security expert in ethical hacking.", duration: "2 months", image: Img11, category: "Pro" },
    { title: "Video Editing & Motion Graphics", subtitle: "Learn modern video editing and motion graphics.", duration: "3 months", image: Img12, category: "Expert" },
    { title: "Cyber Security Diploma", subtitle: "Training in protecting digital assets.", duration: "5 months", image: Img13, category: "Master" },
    { title: "Digital Marketing Diploma", subtitle: "Innovative path to success in digital marketing.", duration: "4 months", image: Img14, category: "Expert" },
  ];

  const filterCourses = () => {
    if (selectedCategory === "All") {
      return courses;
    }
    return courses.filter(course => course.category === selectedCategory);
  };

  const loadMoreCourses = () => {
    setVisibleCourses(visibleCourses + 6); // Load 6 more courses
  };

  return (
    <div className="mt-10 p-6 bg-gradient-to-r from-teal-500 to-indigo-500">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-white">
          PFTP has collaborated with NIAIS for onsite Trainings
        </h1>
      </div>

      {/* Scrollable Buttons Section */}
      <div className="overflow-x-auto  mb-6">
        <div className="flex space-x-4  whitespace-nowrap">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedCategory === "All" ? "bg-yellow-400 text-white shadow-lg" : "bg-white text-black border-2 border-yellow-400 hover:bg-yellow-100"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All Courses
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedCategory === "Pro" ? "bg-yellow-400 text-white shadow-lg" : "bg-white text-black border-2 border-yellow-400 hover:bg-yellow-100"}`}
            onClick={() => setSelectedCategory("Pro")}
          >
            Pro Level
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedCategory === "Expert" ? "bg-yellow-400 text-white shadow-lg" : "bg-white text-black border-2 border-yellow-400 hover:bg-yellow-100"}`}
            onClick={() => setSelectedCategory("Expert")}
          >
            Expert Level
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedCategory === "Master" ? "bg-yellow-400 text-white shadow-lg" : "bg-white text-black border-2 border-yellow-400 hover:bg-yellow-100"}`}
            onClick={() => setSelectedCategory("Master")}
          >
            Master Level
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filterCourses().slice(0, visibleCourses).map((course, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-20 h-20 mx-auto rounded-full mb-4 shadow-lg"
            />
            <h2 className="text-center text-xl font-bold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-center text-gray-600 text-sm mb-2">{course.subtitle}</p>
            <p className="text-center text-teal-500 font-semibold">{course.duration}</p>
            <div className="flex justify-center mt-2">
              {/* Star rating */}
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 .587l3.668 7.429L24 9.748l-6 5.851 1.417 8.268L12 18.897l-7.417 4.97L6 15.599 0 9.748l8.332-1.732L12 .587z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition-all duration-300"
          onClick={loadMoreCourses}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cards;

