import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[72px] mt-4 border-b bg-[#F7F7F7] shadow border-[#000000]">
      <div className="container mx-28 flex justify-between items-center ">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/Logo design/Ddsgnr Library (2).png" 
            alt="Logo" 
            className="w-[130px] h-[40px]"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 bg-[#FFFFFF] mt-4 pt-1 pl-2 items-center">

          <Link
            href="/" 
            className="text-black text-sm font-roboto hover:text-blue-900 border-b-2 border-black pb-1"
          > 
            Home
          </Link>
          <Link 
          href="#Courses"
          className="text-black text-sm font-roboto "
          >
            Courses
          </Link>
          <Link
            href="#Services" 
            className="text-black text-sm font-roboto hover:text-blue-900"
          >
            Services
          </Link>
          <Link
            href="#Achievement" 
            className="text-black text-sm font-roboto hover:text-black"
          >
            Achievement
          </Link>
          <Link 
            href="#About" 
            className="text-black text-sm font-roboto hover:text-black"
          >
            About Us
          </Link>
          <Link 
            href="#Testimonial" 
            className="text-black text-sm font-roboto "
          >
            Testimonial
          </Link>

            <button className='w-20 h-10 rounded-[5px] border py-2 px-2 border-black text-sm'>Login</button>
            <button className='w-24 h-10 rounded-[5px] border py-2 px-2 border-black text-sm text-white bg-black'>Sign Up</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar
