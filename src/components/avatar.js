import React from "react";
import broImage from "../assets/image/bro.png";
import Avatar4 from "../assets/image/Avatar4.png";
import Tick from "../assets/image/Tick.png";
import Graph from "../assets/image/Graph.png";
import Character1 from "../assets/image/Character1.png";
import Character2 from "../assets/image/Character2.png";
import ssImage from "../assets/image/ss.png";

const Avatar = () => {
  return (
    <div>
      <div className="relative">
        {/* Layered images with absolute positioning */}
        <img
          src={ssImage}
          alt="bro"
          className="absolute left-[5%] top-79 w-[10%] mx-auto"
        />
        <img
          src={broImage}
          alt="bro"
          className="absolute left-[30%] top-79 w-[10%] mx-auto"
        />
        <img
          src={Avatar4}
          alt="Avatar4"
          className="absolute right-[15%] top-79 w-[7%] mx-auto"
        />
        <img
          src={Tick}
          alt="Tick"
          className="absolute right-[16%] top-69.5 w-[3%] mx-auto"
        />
        <img
          src={Graph}
          alt="Graph"
          className="absolute right-[12%] top-8 w-[2%] mx-auto"
        />
        <img
          src={Character1}
          alt="Character1"
          className="absolute right-[40%] top-70 w-[3%] mx-auto"
        />
        <img
          src={Character2}
          alt="Character2"
          className="absolute right-[43%] top-70 w-[3%] mx-auto"
        />
 <div className="absolute left-[5%] top-[calc(29%+100px)] text-center">
        <p className="text-2xl font-semibold text-[#56D9B9]">Best Advisors</p>
        <p className="text-2xl font-semibold text-[#187BF6]">35 Lakh+</p>
      </div>
      <div className="absolute left-[75%] top-[calc(29%+100px)] text-center">
        <p className="text-2xl font-semibold text-[#56D9B9]">Policies Sold</p>
        <p className="text-2xl font-semibold text-[#187BF6]">1 crore +</p>
      </div>
      <div className="absolute left-[50%] top-[calc(29%+100px)] text-center">
        <p className="text-2xl font-semibold text-[#56D9B9]">
          Insurance Partner
        </p>
        <p className="text-2xl font-semibold text-[#187BF6]">45 Lakh +</p>
      </div>
        {/* Text below the images */}
        <div className="absolute left-[27%] top-[calc(90%+100px)] text-center">
          <p className="text-2xl font-semibold text-[#56D9B9]">
            Satisfied Customer
          </p>
          <p className="text-2xl font-semibold text-[#187BF6]">45 Lakh+</p>
        </div>
      </div>

      {/* Additional statistics */}
     
    </div>
  );
};

export default Avatar;
