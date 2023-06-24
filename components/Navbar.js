import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <div className='w-[60px] h-[60px] object-cover object-center relative'>
              <Image src="/assets/Learnduke.webp" fill className='absolute w-full h-full' alt="logo" />
            </div>
            {/* <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <p>Courses</p>
                <p>About Us</p>
                <p>Teacher</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blog</p>
            </div> */}
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar