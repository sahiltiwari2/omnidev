import React from 'react'
import VisanaryTech from "@/public/visanarytech.svg"
import CloudServer from '@/public/cloudserver.svg'
import Industry from '@/public/industry.svg'
import Curve from '@/public/curve.svg'
import Image from 'next/image'
const cards = () => {
    return (
        <div className='flex gap-14 animate-slide-in-from-bottom'>
            <div className='w-[270px] h-[320px] border-2 border-blue-400 pt-5 rounded-lg shadow-md pl-5 hover:shadow-blue-300 transition duration-250 hover:scale-110'>
                <Image src={VisanaryTech} alt='tech' height={200} width={200} />
                <div className='font-bold'>
                    Visionary Tech
                </div>
                <div className='text-left pt-3'>
                    Allows one to create someting meaning full with practical and latest knowledge.
                </div>
            </div>
            <div className='w-[270px] h-[320px] border-2 border-yellow-400 pt-7 rounded-lg shadow-md pl-5 hover:shadow-yellow-300 transition duration-250 hover:scale-110'>
                <Image src={CloudServer} alt='tech' height={200} width={200}  className='object-contain h-[150px]'  />
                <div className='font-bold'>
                    Scalability with Cloud
                </div>
                <div className='text-left pt-3'>
                    Scale your dreams, not your servers.
                </div>
            </div>
            <div className='w-[270px] h-[320px] border-2 border-purple-400 pt-5 rounded-lg shadow-md pl-5 hover:shadow-purple-300 transition duration-250 hover:scale-110'>
                <Image src={Industry} alt='tech' height={200} width={200} className='object-contain h-[170px]' />
                <div className='font-bold'>
                    Industry relavent skills
                </div>
                <div className='text-left pt-3'>
                    Equip yourself to build the future - learn in-demand tech skills today!
                </div>
            </div>
            <div className='w-[270px] h-[320px] border-2 border-orange-400 pt-5 rounded-lg shadow-md pl-5 hover:shadow-orange-300 transition duration-250 hover:scale-110'>
                <Image src={Curve} alt='tech' height={200} width={200} className='object-contain h-[150px]'/>
                <div className='font-bold'>
                    Flexible & Customaizable learning curve
                </div>
                <div className='text-left pt-3'>
                    Tech learning: Your pace, your path - master skills on your terms!
                </div>
            </div>

        </div>
    )
}

export default cards