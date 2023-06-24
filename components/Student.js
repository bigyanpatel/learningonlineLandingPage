import Image from "next/image";
import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Top Studying
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Our students say
      </p>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-10 lg:py-20">
        <div className="w-[400px] md:-[600px] h-[400px] relative object-cover object-center">
          <Image fill className="w-full h-full absolute rounded-xl" src="/assets/student.jpeg" alt="" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Sandeep Kaur</p>
          <p className="text-gray-500">OPSC Aspirant</p>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            Being an introvert student, asking questions in classes was tough, but Learnduke made it easy and comfortable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
