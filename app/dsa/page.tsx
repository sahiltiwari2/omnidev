import React from 'react'
import Web from '@/public/webdev.svg'
import Image from 'next/image'
import WebCard from "@/components/dsadetail/dsaCard"
import { Poppinss } from '@/config/fonts'

const page = () => {
    return (
        <div className='flex items-start flex-col md:flex-row '>
            <div className='animate-slide-in-from-left '>
                <WebCard />
            </div>
            <div className='w-full md:w-2/4 text-4xl text-[#F50057] text-left md:ml-16 font-bold md:mt-20'>
                <div className='animate-appearence-in-view'>Code Skeleton</div>

                <div className='flex items-start flex-col md:flex-row'>
                    <div className=' animate-appearence-in-view w-2/4 text-4xl text-black dark:text-white text-left font-bold'>
                        Bootcamp
                    </div>
                    <div className='animate-slide-in-from-right text-[13px] text-[#F50057]'>
                        20 days | All Levels | For Beginners
                    </div>
                </div>
                <div className=' animate-slide-in-from-right text-[17px] md:mt-16 text-gray-600 dark:text-gray-400'>
                    ✔️ Beginner-Friendly Foundations:<br />
                    ✔️ Intermediate-Level Exploration<br />
                    ✔️  Advanced Mastery<br />
                    ✔️ Hands-on Learning & Support<br />
                    ✔️ Q/A Sessions<br />

                </div>
                <div className='animate-slide-in-from-right text-[17px] text-black mt-5  dark:text-white'>
                This course will be your deep-sea exploration into the fascinating world of Data Structures (DS)! We'll equip you with the knowledge and practical skills to master these fundamental building blocks of efficient programming
                </div>

                <div className='animate-slide-in-from-right text-[17px] text-[#F50057] dark:text-[#f50056] font-bold mt-5'>
                    👈🏾 Know in-depth details in our free webinar
                </div>
            </div>
        </div>
    )
}

export default page