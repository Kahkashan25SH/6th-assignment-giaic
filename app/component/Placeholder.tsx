import React from 'react'

const Placeholder = () => {
  return (
    <div className='w-full h-[800px] bg-[#FFFFFF] flex flex-col md:flex-row items-center mt-1'>
      <div className='w-[720px] h-[327px] pr-16 pl-20 gap-6 flex flex-col justify-center items-start space-y-6'>
      
          <h1 className='max-w-xl h-[134px] font-bold text-[56px] leading-[67.2px] text-[#000000]'>Learn new skills <br /> online with ease</h1>
            <p className='w-[580px] h-[81px] text-sm font-normal leading-7 text-black'>Discover a wide range of courses covering a variety of <br />subjects, taught by expert instructors.</p>
          <div className='flex space-x-4'>
        
            <button className='rounded-md border py-3 px-6 gap-2 border-black text-white bg-black h-12 leading-6'>Start Learning now</button>
            <button className='h-12 rounded-md border py-3 px-6 gap-2 border-black leading-6 ml-4'>Explore Courses</button>
            </div>
          </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src="/images/bookhold.jpg" alt="pic" width={720} height={900}/>
          </div>
    </div>
  )
}

export default Placeholder
