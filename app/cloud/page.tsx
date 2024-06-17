import React from 'react'
import Web from '@/public/webdev.svg'
import Image from 'next/image'
import WebCard from "@/components/cloudDetail/cloudCard"

const page = () => {
  return (
    <div className='flex items-start flex-col md:flex-row '>
      <div className='animate-slide-in-from-left '>
        <WebCard />
      </div>
      <div className='w-full md:w-2/4 text-4xl text-purple-600 text-left md:ml-16 font-bold md:mt-20'>
        <div className='animate-appearence-in-view'>Head in the Clouds</div>

        <div className='flex items-start flex-col md:flex-row'>
          <div className=' animate-appearence-in-view w-2/4 text-4xl text-black dark:text-white text-left font-bold'>
            Bootcamp
          </div>
          <div className='animate-slide-in-from-right text-[13px] text-purple-400'>
            20 days | All Levels | For Beginners
          </div>
        </div>
        <div className=' animate-slide-in-from-right text-[20px] md mt-16 text-gray-600 dark:text-gray-400'>
          ✔️ Beginner to advance<br />
          ✔️ CLoud Tech + complete AWS<br />
          ✔️ Custom Playlist for Flexibility<br />
          ✔️ Live Project<br />
          ✔️ Q/A Sessions<br />
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-black dark:text-white mt-10 md:mt-5'>
          This course allows one to start from the biginning and advance over a period of time in concepts of React JS, Tailwind CSS and Backend
          services like hosting and data management. Allowing one to become capable to grab internships for further development.
        </div>
        <div className='animate-slide-in-from-right text-[17px] text-purple-800 dark:text-purple-600 font-bold mt-5'>
          👈🏾 Know in-depth details in our free webinar
        </div>
      </div>
    </div>
  )
}

export default page