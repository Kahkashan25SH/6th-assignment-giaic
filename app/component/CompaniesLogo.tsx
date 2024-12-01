import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center w-full h-2 py-20 px-16 gap-6 bg-[#F7F7F7]'>
        <h1 className='w-80 h-4 font-bold text-xl'>Trusted by 2000+ companies <br />worldwide.</h1>

        <div className='flex w-[800px] h-[45px] px-[8.74px]'>
            <img src="/Logo design/Logo1.png" alt="logo" className='w-32 h-20'
            />
            <img src="/Logo design/Logo2.png" alt="logo"
            className='w-32 min-h-max'
             />
            <img src="/Logo design/Logo3.png" alt="logo"
            className='w-32 h-16 mt-2'
             />
            <img src="/Logo design/Logo4.png" alt="logo" 
            className='w-32 h-20'
            />
            <img src="/Logo design/Logo5.png" alt="logo"
            className='w-32 h-20'
             />
            <img src="/Logo design/Logo6.png" alt="logo" 
            className='w-36 h-20'            
            />
        </div>
      
    </div>
  )
}

export default Logo
