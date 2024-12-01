import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  return (
    <div className='max-w-7xl h-[895px] bg-[#F7F7F7] py-28 px-16 flex flex-col gap-20 items-center '>
      <div className='max-w-3xl h-[109px] mx-[256px] flex flex-col gap-6'>
        <h2 className='max-w-3xl h-14 font-bold text-5xl text-center text-black'>Our team</h2>
        <p className='max-w-3xl h-[27px] font-medium text-center text-lg text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='max-w-screen-xl h-[610px] gap-16'>
        {/* profile 1 */}
        <div className='row max-w-screen-xl h-[273px] xl:w-[1060px] md:w-[760px] sm:w-[640px] w-[428px] flex  gap-12 justify-between '>
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx[157.33px] gap-4">
                    <img src="/Team/Frnd1.png"alt="Pic" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                    <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w[100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                      {/* Social Media Icons */}
                 <div className="icons flex gap-4">
                     <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mt-5 text-black" />
                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 mt-5 text-black" />
                   <FontAwesomeIcon icon={faDribbble} className="w-5 h-5 mt-5 text-black" />
                </div>
            </div>
        </div>

            {/* profile 2 */}
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <img src="/Team/Frnd2.png"alt="Pic" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">joseph Munyambu</p>
                    <p className="text-center text-[18px] leading-[27px]">Nursing Assistant</p>
                </div>
                <div className="w100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                                  {/* Social Media Icons */}
                  <div className="icons flex gap-4">
                      <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mt-5 text-black" />
                      <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 mt-5 text-black" />
                      <FontAwesomeIcon icon={faDribbble} className="w-5 h-5 mt-5 text-black" />
                 </div>
             </div>
        </div>

            {/* profile 3 */}
            <div className="w[394.67px] h-[209px] hidden flex-col gap-[24px] items-center sm:flex">
                <div className="w[80px] h-[80px] mx[157.33px]">
                    <img src="/Team/Frnd3.png" alt="Pic" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">Joseph Ngumbau</p>
                    <p className="text-center text-[18px] leading-[27px]">Medical Assistant</p>
                </div>
                <div className="w100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                                  {/* Social Media Icons */}
                    <div className="icons flex gap-4">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mt-5 text-black" />
                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 mt-5 text-black" />
                        <FontAwesomeIcon icon={faDribbble} className="w-5 h-5 mt-5 text-black" />
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className='h-[482px] flex flex-col gap-[64px] '>
        {/* profile 4 */}
        <div className='h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[640px] w-[428px] flex flex-row  xl:gap-[48px] justify-between '>
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <img src="/Team/Frnd4.png"alt="Pic" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">Erick Kipkemboi</p>
                    <p className="text-center text-[18px] leading-[27px]">Web Designer</p>
                </div>
                <div className="w-100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                </div>
            </div>
            {/* profile 5 */}
            <div className="w[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
                <div className="w-[80px] h-[80px] mx    [157.33px]">
                    <img src="/Team/Frnd5.png"alt="Pic" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">Stephan Kerubo</p>
                    <p className="text-center text-[18px] leading-[27px]">President Of Sales</p>
                </div>
                <div className="w-100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                </div>
            </div>
            {/* profile 6 */}
            <div className="w[394.67px] h-[209px] hidden flex-col gap-[24px] items-center sm:flex">
                <div className="w-[80px] h-[80px] mx[157.33px]">
                    <img src="/Team/Frnd6.png"alt="Pic" />
                </div>
                <div className="w[394.67px] h-[57px]">
                    <p className="text-center font-semibold text-[20px] leading-[30px]">John Leboo</p>
                    <p className="text-center text-[18px] leading-[27px]">Dog Trainer</p>
                </div>
                <div className="w-100px] h-[24px] flex  gap-[14px] mx[147.33px]">
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
  


export default Team
