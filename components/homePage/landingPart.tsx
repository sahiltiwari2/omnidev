import React from 'react'
import LearningHome from '@/public/learn.svg'
import Image from 'next/image'


const page = () => {


  return (
    <div>
      <div className='h-[500px]  w-[1250px] bg-[#934fca] p-16 rounded-[50px] '>
        <div className='flex items-center relative'>
          <div className=' animate-appearence-in-view transition-all duration-300'>
            <Image src={LearningHome} alt='learn' height={1000} width={500} />
          </div>
          <div className='text-7xl text-[#d7f9f8] font-extrabold absolute top-5 right-80 animate-appearence-in-view transition-all duration-300'>
            OmniDev
          </div>
          <div className='text-16 text-white absolute top-24 right-80'>
            Curative course kit
          </div>
          <div className='text-xl absolute text-[#ffffea] right-16 mt-16 max-w-[500px] animate-slide-in-from-right'>
            Become a full-fledged developer with in-demand skills in web development, app development, and cloud computing. This curated course kit equips you for a versatile tech career.
          </div>
        </div>
      </div>

    </div>

  )
}

export default page