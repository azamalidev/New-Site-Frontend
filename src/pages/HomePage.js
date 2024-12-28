import React from "react";
import { useSelector } from "react-redux";
import myImage from "../assets/image/myImage.png"; // Background image for slides
import Footur from "../components/footur";
import Header from "../components/Header";
import Features from "../components/features";
import ChooseUs from "../components/chooseUs.js";
import Avatar from "../components/avatar";
import Cover from "../components/cover";
import Reviewbox from "../components/reviewbox.js"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import carImage from "../assets/image/car.png";
import BikeImage from '../assets/image/Bike.png'
import Truck from '../assets/image/truk.png'
const HomePage = () => {
  const data = useSelector((state) => state.data); // Access Redux state

  return (
    <div className="font-sans leading-normal text-gray-800">
      <Header />
      <section className="relative mt-4 text-center mx-auto">
        <button className="swiper-button-prev absolute left-5  transform -translate-y-1/2  "></button>
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
          className="w-[80%] h-[400px] opacity-90 mx-auto rounded-lg"
        >
          {/* Slide 1 */}
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
              <div
                className="relative text-left text-white"
                style={{
                  padding: "8px 0",
                  transform: "translate(-50px, -70px)",
                }}
              >
                <h1 className="text-4xl font-extrabold mb-4 text-[#02133A]">
                Protect Your Car, Protect Your <br></br>
                Journey
                </h1>
                <p className="text-[#02133A] font-normal leading-relaxed">
                Comprehensive car insurance plans to safeguard your 
                  <br />
                  vehicle against accidents, theft, and unforeseen 
                  <br />
                  damages. Drive with confidence, knowing you're covered.
                  
                </p>
              </div>
              {/* Car Image - Right aligned */}
              <img
                src={carImage}
                alt="Car"
                className="absolute right-0 top-20 w-[30%] mx-auto"
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
              <div
                className="relative text-left text-white"
                style={{
                  padding: "8px 0",
                  transform: "translate(-50px, -70px)",
                }}
              >
                <h1 className="text-4xl font-extrabold mb-4 text-[#02133A]">
                Ride Worry-Free with Bike <br />Insurance
                </h1>
                <p className="text-[#02133A] font-normal leading-relaxed">
                Tailored insurance for your two-wheeler,
                  <br />
                  ensuring protection against accidents, theft,
                  <br />
                  and liabilities. Focus on the road ahead while 
                  <br />
                  we cover the rest
                </p>
              </div>
              {/* Car Image - Right aligned */}
              <img
                src={BikeImage}
                alt="Bike"
                className="absolute right-0 top-20 w-[30%] mx-auto"
              />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
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
              <div
                className="relative text-left text-white"
                style={{
                  padding: "8px 0",
                  transform: "translate(-50px, -70px)",
                }}
              >
                <h1 className="text-4xl font-extrabold mb-4 text-[#02133A]">
                Secure Your Business on the <br />Move
                </h1>
                <p className="text-[#02133A] font-normal leading-relaxed">
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
              {/* Car Image - Right aligned */}
              <img
                src={Truck}
                alt="Truck"
                className="absolute right-0 top-20 w-[30%] mx-auto"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <button className="swiper-button-next "></button>
      </section>

      <section className="relative mt-4 text-center mx-auto">

        <Features />
        <ChooseUs />
        <Avatar />
        <Cover />

      
      <Reviewbox/>
        <Footur />
     
      
      </section>
     

     
    </div>
  );
};

export default HomePage;
