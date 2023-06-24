import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              World first social instant knowledge sharing community!
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Student can learn, connect, network and earn oppertunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
