import Link from 'next/link';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = ()=> {
  return (
    <footer className='h-[684px] max-w-7xl p-20 flex mt-32 flex-col gap-20 overflow-hidden '>
      <div className="w-[1120px] h-[52px] flex flex-col gap-20 ">
        <div className="w-[1120px] h-20 flex gap-3 justify-between">
            <div className="w-[500px] h-[51px]">
                <p className="text-lg font-semibold">
                    Subscribe to our newsletter</p>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-[400px] h[82px] flex flex-col gap-4 ">
                <div className='h-[48px] flex w-[400px] gap-4 '>
                    <input className='h-[48px] w-[256px] border-solid border-black border rounded-[5px] p-3 placeholder-[#505050]' placeholder='Enter your email' type="text" />
                    <button className='w-[119px] h-[48px] text-base border-solid rounded-[5px] border-black border'>
                        Subscribe
                        </button>
                </div>
                <p className='text-xs'>By subscribing you agree to with our <Link className='underline' href="/">Privacy Policy</Link></p>
            </div>
        </div>
        <div className="w-[1212px] h-[225px] flex gap-2 justify-between">
            <div className="w-[250px] h-10"><img src= "/Logo design/Ddsgnr Library (2).png" alt="Logo" /></div>
            <div className="w-[250px] h-[225px] flex flex-col gap-4">
                <p className="text-base font-semibold">Courses</p>
                <p className="text-sm">Business</p>
                <p className="text-sm">Development</p>
                <p className="text-sm">Technology</p>
                <p className="text-sm">Design</p>
                <p className="text-sm">Programming</p>
            </div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-base font-semibold">Resources</p>
                <p className="text-sm">Career</p>
                <p className="text-sm">Resume</p>
                <p className="text-sm">Learning</p>
                <p className="text-sm">Interview Preparation</p>
                <p className="text-sm">Jobs</p>
            </div>
            <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                <p className="text-base font-semibold">About Us</p>
                <p className="text-sm">Contact</p>
                <p className="text-sm">Help/Support</p>
                <p className="text-sm">FAQ</p>
                <p className="text-sm">Terms and Conditions</p>
                <p className="text-sm">Partners</p>
            </div>
        </div>
        <div className="w-[1120px] h-[57px] items-end border-solid border-black border-t-2 pt-8">
            <div className="h-[24px] flex justify-between">
                <div className="h-[21px] flex gap-[24px]">
                    <p className='text-sm'>2023 Ddsgnr. All right reserved.</p>
                    <Link className='text-sm underline' href="">Privacy Policy</Link>
                    <Link className='text-sm underline' href="">Terms of service</Link>
                    <Link className='text-sm underline' href="">Cookies Settings</Link>
                </div>
                {/* Social Media Icons */}
        <div className="icons flex gap-4">
          <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 text-black" />
          <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-black" />
          <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-black" />
          <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-black" />
        </div>
               
            </div>
        </div>
      </div>
    </footer>
       
  )
}
export default Footer