// import { Span } from 'next/dist/trace'
import React from 'react'

const Courses = () => {
  return (
    <div className='blog max-w-7xl h-[1742px] py-28 px-16 gap-16 overflow-hidden'>
        <div className='section max-w-3xl h-[118px] gap-4'>
            <div className='content ml-96 max-w-3xl h-[118px] gap-6'>
                <h1 className='max-w-3xl h-16 font-bold font-roboto text-[56px] leading-[67.2px] text-center'>
                Courses
                </h1>
                <p className='max-w-3xl h-7 font-medium text-lg text-center'>
                    Your Ultimate Guide to learning
                </p>
            </div>
        </div>
{/* Course button */}
        
        <div className='content max-w-6xl h-[1340px] gap-16'>
            <div className='categories flex mx-auto w-[336px] h-10'>
                <div className='button w-[87px] h-10 border-b-2 py-2 px-2 gap-2 border-[#676767] '>
                    <button className='w-14 h-6 font-roboto text-base font-medium text-black ml-2'>
                        Popular
                        </button>
                </div>
                <div className='w-[140px] h-10 py-2 px-4 gap-2'>
                    <button className='w-108px h-6 font-roboto font-medium text-base text-black'>
                        Recommended
                        </button>
                </div>
                <div className='w-[109px] h-10 py-2 px-4 gap-2'>
                    <button className='w-[77px] h-6 font-medium font-roboto text-base text-black'>
                        Best  Price
                        </button>
                </div>
           </div>
      

      {/* Content Card */}

        
        <div className='w-ful h-[1312px] mt-24 gap-16 -m-20'>
            <div className='row flex w-[1312px] h-[534px] gap-6'>
                <div className='card w-[416px] h-[534px] rounded gap-6 bg-[#F7F7F7]'>
                    <img className='w-[416px] h-[300px] object-cover' src='/images/card1.png' alt='Course Title' />
                      <div className='frame w-[416px] h-[210px] px-4 pb-6 gap-6 '>
                        <div className='layout w-[382px] h-[122px] gap-2 '>
                            <div className='flex w-[326px] h-5 font-semibold font-roboto text-sm text-black mt-4 '>
                               Design
                                 <img src="/Vector/Star.png" alt="rating" className='w-12 h-6 gap-1 ml-72'/>
                                   </div>
                                <h5 className='w-96 h-8 font-roboto font-bold text-2xl text-black mt-4'>
                                  UX/UI Design 201
                                    </h5>
                                <p className='w-[382px] h-12 font-normal text-base text-black mt-4'>
                               Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.
                                 </p>
                            </div>

                              {/*Button */}

                            <div className='w-96 h-10 gap-4'>
                            <button className='w-[117px] h-10 rounded-[5px] border py-2 px-2 gap-2 border-black text-normal my-10 mx-10'>Enroll Now</button>
                            <button className='w-[77px] h-10 gap-2 text-normal py-2 px-2 rounded-[5px] my-10'>
                                $400
                                </button>
                            </div>
                         </div>
                    </div>

{/* Card 2 */} 
             
               <div className=' w-[416px] h-[534px] rounded gap-6 bg-[#F7F7F7]'>
                    <img className='w-[416px] h-[300px] object-cover' src='/images/card2.jpg' alt='Course Title' />
                       <div className='frame w-[416px] h-[210px] px-4 pb-6 gap-6  '>
                          <div className='layout w-[382px] h-[122px] gap-2 '>
                            <div className='flex w-[326px] h-5 font-semibold font-roboto text-sm text-black mt-4 '>
                                Programming
                                <img src="/Vector/Star.png" alt="rating" className='w-12 h-6 gap-1 ml-[250px]'/>
                            </div>
                                <h5 className='w-96 h-8 font-roboto font-bold text-2xl text-black mt-4'>
                                Introduction to Python
                                </h5>
                                <p className='w-[382px] h-12 font-normal text-base text-black mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>

                              {/*Button */}

                            <div className='w-96 h-10 gap-4'>
                            <button className='w-[117px] h-10 rounded-[5px] border py-2 px-2 gap-2 border-black text-normal my-10 mx-10'>Enroll Now</button>
                            <button className='w-[77px] h-10 gap-2 text-normal py-2 px-2 rounded-[5px] my-10'>$400</button>
                            </div>
                         </div>
                      </div>

{/* card 3 */}

               <div className=' w-[416px] h-[534px] rounded gap-6 bg-[#F7F7F7]'>
                    <img className='w-[416px] h-[300px] object-cover' src='/images/card3.jpg' alt='Course Title' />
                       <div className='frame w-[416px] h-[210px] px-4 pb-6 gap-6  '>
                          <div className='layout w-[382px] h-[122px] gap-2 '>
                            <div className='flex w-[326px] h-5 font-semibold font-roboto text-sm text-black mt-4 '>
                                Business
                                <img src="/Vector/Star.png" alt="rating" className='w-12 h-6 gap-1 ml-[260px]'/>
                            </div>
                                <h5 className='w-96 h-8 font-roboto font-bold text-2xl text-black mt-4'>
                                Data Analysis for Beginners
                                </h5>
                                <p className='w-[382px] h-12 font-normal text-base text-black mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>

                              {/*Button */}

                            <div className='w-96 h-10 gap-4'>
                            <button className='w-[117px] h-10 rounded-[5px] border py-2 px-2 gap-2 border-black text-normal my-10 mx-10'>Enroll Now</button>
                            <button className='w-[77px] h-10 gap-2 text-normal py-2 px-2 rounded-[5px] my-10'>$400</button>
                            </div>
                         </div>
                      </div>


             









            </div>

{/* card 4 */}

<div className='row flex w-[1312px] h-[534px] gap-6  mt-14'>
                <div className='card w-[416px] h-[534px] rounded gap-6 bg-[#F7F7F7]'>
                    <img className='w-[416px] h-[300px] object-cover' src='/images/card4.jpg' alt='Course Title' />
                      <div className='frame w-[416px] h-[210px] px-4 pb-6 gap-6 '>
                        <div className='layout w-[382px] h-[122px] gap-2 '>
                            <div className='flex w-[326px] h-5 font-semibold font-roboto text-sm text-black mt-4 '>
                                Art
                                 <img src="/Vector/Star.png" alt="rating" className='w-12 h-6 gap-1 ml-[260px]'/>
                                   </div>
                                <h5 className='w-96 h-8 font-roboto font-bold text-2xl text-black mt-4'>
                                Art Specialization
                                    </h5>
                                <p className='w-[382px] h-12 font-normal text-base text-black mt-4'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                 </p>
                            </div>

                              {/*Button */}

                            <div className='w-96 h-10 gap-4'>
                            <button className='w-[117px] h-10 rounded-[5px] border py-2 px-2 gap-2 border-black text-normal my-10 mx-10'>Enroll Now</button>
                            <button className='w-[77px] h-10 gap-2 text-normal py-2 px-2 rounded-[5px] my-10'>
                                $400
                                </button>
                            </div>
                         </div>
                    </div>

{/* Card 5 */} 
             
               <div className=' w-[416px] h-[534px] rounded gap-6 bg-[#F7F7F7]'>
                    <img className='w-[416px] h-[300px] object-cover' src='/images/card5.jpg' alt='Course Title' />
                       <div className='frame w-[416px] h-[210px] px-4 pb-6 gap-6  '>
                          <div className='layout w-[382px] h-[122px] gap-2 '>
                            <div className='flex w-[326px] h-5 font-semibold font-roboto text-sm text-black mt-4 '>
                                Law
                                <img src="/Vector/Star.png" alt="rating" className='w-12 h-6 gap-1 ml-[260px]'/>
                            </div>
                                <h5 className='w-96 h-8 font-roboto font-bold text-2xl text-black mt-4'>
                                Rule of Law
                                </h5>
                                <p className='w-[382px] h-12 font-normal text-base text-black mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>

                              {/*Button */}

                            <div className='w-96 h-10 gap-4'>
                            <button className='w-[117px] h-10 rounded-[5px] border py-2 px-2 gap-2 border-black text-normal my-10 mx-10'>Enroll Now</button>
                            <button className='w-[77px] h-10 gap-2 text-normal py-2 px-2 rounded-[5px] my-10'>$400</button>
                            </div>
                         </div>
                      </div>

{/* card 6 */}

               <div className=' w-[416px] h-[534px] rounded gap-6 bg-[#F7F7F7]'>
                    <img className='w-[416px] h-[300px] object-cover' src='/images/card6.jpg' alt='Course Title' />
                       <div className='frame w-[416px] h-[210px] px-4 pb-6 gap-6  '>
                          <div className='layout w-[382px] h-[122px] gap-2 '>
                            <div className='flex w-[326px] h-5 font-semibold font-roboto text-sm text-black mt-4 '>
                                Tech
                                <img src="/Vector/Star.png" alt="rating" className='w-12 h-6 gap-1 ml-[260px]'/>
                            </div>
                                <h5 className='w-96 h-8 font-roboto font-bold text-2xl text-black mt-4'>
                                Introduction to webflow
                                </h5>
                                <p className='w-[382px] h-12 font-normal text-base text-black mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </p>
                            </div>

                              {/*Button */}

                            <div className='w-96 h-10 gap-4'>
                            <button className='w-[117px] h-10 rounded-[5px] border py-2 px-2 gap-2 border-black text-normal my-10 mx-10'>Enroll Now</button>
                            <button className='w-[77px] h-10 gap-2 text-normal py-2 px-2 rounded-[5px] my-10'>$400</button>
                            </div>
                         </div>
                      </div>


             









            </div>

        </div>

          
 
        </div>  
{/* Button   */}
<div className='w-[152px] h-10 rounded-[5px] border py-2 px-3 gap-2 border-black text-normal my-10 mx-auto'>
  <button className='w-[120px] h-6 font-normal text-base text-black'>
    View All Courses
    </button>
</div>
      </div>
  )
}
export default Courses
