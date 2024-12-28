import React from "react";
import featureImage from "../assets/image/feature.png";
import feature1Image from "../assets/image/feature1.png";
import feature2Image from "../assets/image/feature2.png";
import arrowImage from "../assets/image/arrow.png";

const Features = () => {
  return (
    <div className="relative  py-4 px-2">
      {/* Feature Images Row: Positioned at the Top */}
      <div
        className="absolute top-20 left-23 right-0 z-10 flex flex-wrap gap-4 justify-center"
        style={{
          paddingTop: "30px", 
          marginRight:"5rem"
        }}
      >
        {/* Feature Image 1 */}
        <img
          src={feature2Image}
          alt="Feature 2"
          className="w-[210.39px] h-[120.6px]  opacity-100"
        />
        {/* Feature Image 2 */}
        <img
          src={feature1Image}
          alt="Feature 2"
          className="w-[200.39px] h-[300.24px] opacity-100" // Set opacity to 100
        />
        {/* Feature Image 3 */}
        <img
          src={featureImage}
          alt="Feature 1"
          className="w-[200.39px] h-[300.24px] opacity-100"
        />
      </div>

      {/* Arrow Image: Positioned at the Top */}
      <div
        className="absolute top-[180px] left-[25%] transform -translate-x-1/2 z-10"
        style={{
          opacity: 1, // Ensure the arrow is visible
          transform: "rotate(0.27deg)", // Rotate arrow image
        }}
      >
        <img
          src={arrowImage}
          alt="Arrow"
          className="w-[125.31px] h-[90.11px]"
          style={{
            opacity: 1, // Ensure the arrow image is visible
          }}
        />
      </div>

      {/* Features Text: Positioned Below Arrow */}
      <div
        className="absolute top-[200px] left-[20%] transform -translate-x-1/2 z-10 text-4xl font-bold text-gray-800"
        style={{
          marginTop: "70px", // Adds spacing between the arrow and the text
        }}
      >
        Features
      </div>
    </div>
  );
};

export default Features;
