import Image from "next/image";
import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Key Person
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
        Meet our team members
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-3">
          <div className="w-[300px] h-[300px] object-contain object-center relative">
            <Image className="h-full w-full  rounded-lg" fill src="/assets/Arya.jpeg" alt="v1" />
          </div>
          <p className="text-2xl font-semibold">Aryasindhu Sahu</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
              Director & Co-Founder
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="w-[300px] h-[300px] object-contain object-center relative">
            <Image className="h-full w-full  rounded-lg" fill src="/assets/Rahul.jpeg" alt="v1" />
          </div>
          <p className="text-2xl font-semibold">Rahul Parmah</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
              CTO & Co-Founder
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="w-[300px] h-[300px] object-contain object-center relative">
            <Image className="h-full w-full rounded-xl" fill src="/assets/Satyajit.jpeg" alt="v1" />
          </div>
          <p className="text-2xl font-semibold">Satyajit Samal</p>
          <p className="text-gray-500">
            CEO & Co-Founder
          </p>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="w-[300px] h-[300px] object-contain object-center relative">
            <Image className="h-full w-full rounded-xl" fill src="/assets/Preeti.jpeg" alt="v1" />
          </div>
          <p className="text-2xl font-semibold">Pritipuspa Dash</p>
          <p className="text-gray-500">
            Brand
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-[300px] h-[300px] relative object-contain object-center">
            <Image className="absolute h-full w-full rounded-xl" fill={true} src="/assets/Bigyan.jpg" alt="v1" />
          </div>
          <p className="text-2xl font-semibold">Bigyan Darshan Patel</p>
          <p className="text-gray-500">
            Engineering
          </p>
        </div>
        {/* <div className="flex flex-col gap-3">
          <div className="w-[300px] h-[300px] relative object-cover object-center">
            <Image className="absolute h-full w-full rounded-xl" fill={true} src="/assets/Bigyan.jpg" alt="v1" />
          </div>
          <p className="text-2xl font-semibold">Chinmaya Kumar Behera</p>
          <p className="text-gray-500">
            Full Stack Developer
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Teacher;
