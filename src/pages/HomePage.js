import React from "react";
import { useSelector } from "react-redux";
import myImage from "../assets/image/myImage.png"; // Background image for slides
import Footur from "../components/footur";
import Header from "../components/Header";
import Features from "../components/features";
import ChooseUs from "../components/chooseUs.js";
import Avatar from "../components/avatar";
import Cover from "../components/cover";
import Reviewbox from "../components/reviewbox.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import carImage from "../assets/image/car.png";
import BikeImage from "../assets/image/Bike.png";
import Truck from "../assets/image/truk.png";
import Cards from "../components/Cards.js";
import videodm from '../assets/image/videodm.mp4'
import Testimonials from "../components/Testimonials.js";
import Card2 from "../components/Cards2.js";import TabComponent from "./EventsTabs.js";
import Carousel from "./VideoCrasuals.js";

const HomePage = () => {
  const data = useSelector((state) => state.data); // Access Redux state
  const authenticate = localStorage.getItem("token");
  console.log(authenticate);

  return (
    <div className="font-sans leading-normal text-gray-800">
      <Header />

      {/* {authenticate ? (
        "Some section here !"
      ) : (
        <section className="relative mt-4 text-center mx-auto">
          <button className="swiper-button-prev absolute left-5 transform -translate-y-1/2"></button>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full h-[400px] opacity-90 mx-auto rounded-lg"
          >
           
            <SwiperSlide>
              <div
                className="relative h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${myImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(270.47deg, rgba(8, 112, 249, 0) 0.85%, rgba(8, 112, 249, 0.547069) 75.26%, rgba(8, 112, 249, 0) 94.57%)",
                  }}
                ></div>
                <div className="relative text-left text-white p-4 md:p-6 lg:p-8 transform translate-x-0 translate-y-[-70px]">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#02133A]">
                    Protect Your Car, Protect Your <br /> Journey
                  </h1>
                  <p className="text-[#02133A] font-normal leading-relaxed text-sm sm:text-base md:text-lg">
                    Comprehensive car insurance plans to safeguard your
                    <br />
                    vehicle against accidents, theft, and unforeseen
                    <br />
                    damages. Drive with confidence, knowing you're covered.
                  </p>
                </div>
              
                <img
                  src={carImage}
                  alt="Car"
                  className="absolute right-0 top-20 w-[40%] sm:w-[30%] md:w-[25%] mx-auto"
                />
              </div>
            </SwiperSlide>

       
            <SwiperSlide>
              <div
                className="relative h-full flex items-center justify-center"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(270.47deg, rgba(8, 112, 249, 0) 0.85%, rgba(8, 112, 249, 0.547069) 75.26%, rgba(8, 112, 249, 0) 94.57%)",
                  }}
                ></div>
                <div className="relative text-left text-white p-4 md:p-6 lg:p-8 transform translate-x-0 translate-y-[-70px]">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#02133A]">
                    Ride Worry-Free with Bike <br /> Insurance
                  </h1>
                  <p className="text-[#02133A] font-normal leading-relaxed text-sm sm:text-base md:text-lg">
                    Tailored insurance for your two-wheeler,
                    <br />
                    ensuring protection against accidents, theft,
                    <br />
                    and liabilities. Focus on the road ahead while
                    <br />
                    we cover the rest
                  </p>
                </div>
                
                <img
                  src={BikeImage}
                  alt="Bike"
                  className="absolute right-0 top-20 w-[40%] sm:w-[30%] md:w-[25%] mx-auto"
                />
              </div>
            </SwiperSlide>

     
            <SwiperSlide>
              <div
                className="relative h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${myImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(270.47deg, rgba(8, 112, 249, 0) 0.85%, rgba(8, 112, 249, 0.547069) 75.26%, rgba(8, 112, 249, 0) 94.57%)",
                  }}
                ></div>
                <div className="relative text-left text-white p-4 md:p-6 lg:p-8 transform translate-x-0 translate-y-[-70px]">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#02133A]">
                    Secure Your Business on the <br /> Move
                  </h1>
                  <p className="text-[#02133A] font-normal leading-relaxed text-sm sm:text-base md:text-lg">
                    Customized insurance solutions for trucks, vans,
                    <br />
                    and commercial vehicles. Keep your business
                    <br />
                    running smoothly with our reliable coverage. And
                    <br />
                    Save big with exclusive discounts and loyalty rewards.
                    <br />
                    Insure your car today and drive worry-free tomorrow!
                  </p>
                </div>
              
                <img
                  src={Truck}
                  alt="Truck"
                  className="absolute right-0 top-20 w-[40%] sm:w-[30%] md:w-[25%] mx-auto"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="swiper-button-next"></button>
        </section>
      )}    */}

      <div className="relative w-full h-screen">

        <video
          src={videodm}
          autoPlay
          muted
          loop
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="p-4">
       
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow-2xl">
              Empower Your Learning Journey
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-cyan-100 drop-shadow-lg">
              Access top-tier courses designed to enhance your skills.<br />
              Learn anywhere, anytime, and transform your future.
            </p>

      
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-110 transition duration-300">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>


      <section className="relative mt-4 text-center mx-auto">
        <Cards />
        <Testimonials />
        <Card2/>
        <ChooseUs />
        <Avatar />
        <Cover />
        <Reviewbox />
        <Carousel/>
        <TabComponent/>
        <Footur />

      </section>
    </div>
  );
};

export default HomePage;
