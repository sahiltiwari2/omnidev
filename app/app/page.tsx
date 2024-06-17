import React from 'react'
import Web from '@/public/webdev.svg'
import Image from 'next/image'
import WebCard from "@/components/appdetail/appCard"

const page = () => {
  return (
    <div className='flex items-start flex-col md:flex-row '>
      <div className='animate-slide-in-from-left '>
      <WebCard />
      </div>
      <div className='w-full md:w-2/4 text-4xl text-green-500 text-left md:ml-16 font-bold md:mt-20'>
      <div className='animate-appearence-in-view'>Full Stack Web Development</div>
        
        <div className='flex items-start flex-col md:flex-row'>
          <div className=' animate-appearence-in-view w-2/4 text-4xl text-black dark:text-white text-left font-bold'>
            Bootcamp
          </div>
          <div className='animate-slide-in-from-right text-[13px] text-green-400'>
            20 days | All Levels | For Beginners
          </div>
        </div>
        <div className=' animate-slide-in-from-right text-[20px] mt-16 text-gray-600 dark:text-gray-400'>
          ✔️ Beginner to Advance <br/>
          ✔️ Handmade Notes <br/>
          ✔️ Custome Playlist for later Study <br/>
          ✔️ Live Project <br/>
          ✔️ Q & A sessions
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-black mt-5  dark:text-white'>
          This course allows one to start from the biginning and advance over a period of time in concepts of React JS, Tailwind CSS and Backend
          services like hosting and data management. Allowing one to become capable to grab internships for further development.
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-green-800 dark:text-green-600 font-bold mt-5'>
        👈🏾 Know in-depth details in our free webinar
        </div>
      </div>
    </div>
  )
}

export default page