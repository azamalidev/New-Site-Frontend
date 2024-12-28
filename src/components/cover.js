import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import coverImage from "../assets/image/cover.png";

const Cover = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="flex items-start justify-start w-full p-0 m-0 absolute top-[1400px] left-0 h-screen">
      {/* Background Image */}
      <img src={coverImage} alt="Cover" className="w-full h-auto" />

      {/* Heading */}
      <h1
        style={{
          position: "absolute",
          top: "5rem", // Keep this value as requested
          left: "20rem", // Keep this value as requested
          fontFamily: "Inter",
          fontSize: "4rem",
          fontWeight: "bold", // Makes the text bold
          color: "#FFFFFF", // Optional: Adjust the color as needed
        }}
      >
        About LeadGenPro
      </h1>

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: "12rem", // Keep this value as requested
          left: "20rem",
          fontFamily: "Inter",
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "29.73px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#FFFFFF",
        }}
      >
        <span>
          LeadGenPro simplifies motor insurance by providing the best quotes and
          <br />
          empowering individuals to earn through lead generation. Join us to
          save,
          <br />
          earn, and grow with ease!
        </span>
      </div>

      {/* About Us Button */}
      <button
        onClick={() => navigate("/about-us")} // Navigate to /about-us route
        style={{
          position: "absolute",
          top: "350px",
          left: "540px",
          padding: "10px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Inter",
          backgroundColor: "#FFFFFF", // Your preferred color
          color: "#0000FF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
      Learn More  About Us
      </button>
    </div>
  );
};

export default Cover;
