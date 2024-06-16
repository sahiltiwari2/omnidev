import React from 'react'
import Web from '@/public/webdev.svg'
import Image from 'next/image'
import WebCard from "@/components/webDetail/webCard"

const page = () => {
  return (
    <div className='flex items-start '>
      <div className='animate-slide-in-from-left '>
      <WebCard />
      </div>
      <div className='w-2/4 text-4xl text-blue-600 text-left ml-16 font-bold mt-20'>
      <div className='animate-appearence-in-view'>Full Stack Web Development</div>
        
        <div className='flex items-start'>
          <div className=' animate-appearence-in-view w-2/4 text-4xl text-black text-left font-bold'>
            Bootcamp
          </div>
          <div className='animate-slide-in-from-right text-[13px] text-blue-400'>
            20 days | All Levels | For Biginners
          </div>
        </div>
        <div className=' animate-slide-in-from-right text-[20px] mt-16 text-gray-600'>
          ✔️ Biginner to Advance <br/>
          ✔️ Handmade Notes <br/>
          ✔️ Custome Playlist for later Study <br/>
          ✔️ Live Project <br/>
          ✔️ Q & A sessions
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-black mt-5'>
          This course allows one to start from the biginning and advance over a period of time in concepts of React JS, Tailwind CSS and Backend
          services like hosting and data management. Allowing one to become capable to grab internships for further development.
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-purple-800 font-bold mt-5'>
        👈🏾 Know in-depth details in our free webinar
        </div>
      </div>
    </div>
  )
}

export default page