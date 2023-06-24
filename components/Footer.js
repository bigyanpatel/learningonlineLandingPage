import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] flex items-center justify-evenly flex-wrap">
        <div className="flex flex-col items-center lg:items-start gap-5 w-[200px]">
          <div className="w-[100px] h-[100px] object-contain object-center relative">
            <Image fill className="w-full h-full absolute" src="/assets/Learnduke.webp" alt="footer lgo" />
          </div>
          <p className="text-center lg:text-start">J-15, Khandagiri Marg, Dharam Vihar, Jagamara, Bhubaneswar, Odisha 751030</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5 w-[200px]">
          <p  className="text-xl font-medium">Product</p>
          <Link href={"https://learnduke.com"} className="text-base text-blue-900">Home</Link>
          <Link href={"https://learnduke.com/questions"} className="text-base text-blue-900">Questions</Link>
          <Link href={"https://learnduke.com/notes"} className="text-base text-blue-900">Notes</Link>
        </div>
        <div className="flex items-center gap-5 w-[200px]">
          <BsFacebook className="text-3xl text-gray-500"/>
          <BsTwitter className="text-3xl text-gray-500"/>
          <BsInstagram className="text-3xl text-gray-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
