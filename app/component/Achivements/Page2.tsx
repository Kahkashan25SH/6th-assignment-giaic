import React from 'react'

const Page2 = () => {
  return (
    <div className='Layout240 max-w-screen-xl h-[488px] py-28 px-16 gap-20 bg-[#FFFFFF] overflow-hidden'>
    <div className='content max-w-6xl h-[264px] gap-6'>
        <div className='content2 max-w-6xl h-[264px] gap-6'>
            <div className='section max-w-6xl h-[136px] gap-4'>
                <p className='w-14 h-6 font-semibold text-base text-center text-black'>    
                </p>
                <div className='max-w-6xl h-[136px] gap-6'>
                    <h2 className='max-w-6xl h-14 font-bold font-roboto text-5xl text-center text-black'>
                        Our Achivements
                    </h2>
                    <p className='max-w-6xl h-14 font-roboto text-lg text-center text-black mx-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>
            </div>

{/* List */}
            <div className='List flex w-[1256px] h-24 gap-6'>
                <div className='Row flex w-[616px] h-[96px] gap-6 py-6'> {/* Row 1 */}
                    <div className='list1 w-[296px] h-20 ml-12 gap-2'>
                        <h3 className='w-[91px] h-12 font-medium font-roboto text-4xl text-black'>
                        +200
                        </h3>
                        <p className='w-14 h-6 font-normal font-roboto text-base text-black'>
                        Courses
                        </p>
                    </div>

                    <div className='list2 w-[296px] h-20 ml-12 gap-2'>
                        <h3 className='w-[91px] h-12 font-medium font-roboto text-4xl text-black'>
                        50K
                        </h3>
                        <p className='w-14 h-6 font-normal font-roboto text-base text-black'>
                        Mentors
                        </p>
                    </div>
                 </div>

                 <div className='Row flex w-[616px] h-[96px] gap-6 py-6 '>
                    <div className='list3 w-[296px] h-20 ml-12 gap-2'>
                        <h3 className='w-[91px] h-12 font-medium font-roboto text-4xl text-black'>
                        370K
                        </h3>
                        <p className='w-14 h-6 font-normal font-roboto text-base text-black'>
                        Students
                        </p>
                    </div>

                    <div className='list4 w-[296px] h-20 ml-13 gap-2'>
                        <h3 className='w-[91px] h-12 font-medium font-roboto text-4xl text-black'>
                        100+
                        </h3>
                        <p className='w-14 h-6 font-normal font-roboto text-base text-black'>
                        Recognition
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>

  )
}

export default Page2
