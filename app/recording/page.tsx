import React from 'react'
import VisanaryTech from "@/public/webdev.svg"
import CloudServer from '@/public/appdev.svg'
import Industry from '@/public/cloud.svg'
import Curve from '@/public/datastuctures.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
const cards = () => {
    return (
        <div>
            <div className='text-3xl font-bold text-green-600'> Class Recordings </div>
            <div className='flex flex-col justify-center mt-10 md:md-0 items-center md:flex-row gap-14 animate-slide-in-from-bottom'>
                <div className='w-[270px] h-[380px] border-2 dark:bg-gray-900 border-blue-400 pt-5 rounded-lg shadow-md pl-5 hover:shadow-blue-300 transition duration-250 hover:scale-110'>
                    <Image src={VisanaryTech} alt='tech' height={200} width={200} />
                    <div className='font-bold dark:text-blue-400 mt-10 ml-10 text-xl'>
                        Web Classes
                    </div>
                    <div className='text-left pt-3'>
                        Recording for web classes
                    </div>
                    <div className='flex justify-end mr-4 mt-5'>
                    <Button color="primary" className='w-[100px]' as={Link} href='/webvideo'>
                        Watch
                    </Button>
                    </div>
                </div>
                <div className='w-[270px] h-[380px] border-2 dark:bg-gray-900 border-yellow-400 pt-7 rounded-lg shadow-md pl-5 hover:shadow-yellow-300 transition duration-250 hover:scale-110'>
                    <Image src={CloudServer} alt='tech' height={200} width={200} className='object-contain h-[150px]' />
                    <div className='font-bold dark:text-yellow-400 mt-10 ml-10 text-xl'>
                        App Classes
                    </div>
                    <div className='text-left pt-3'>
                        Recording for app classes
                    </div>
                    <div className='flex justify-end mr-4 mt-5'>
                    <Button color="primary" className='w-[100px]' as={Link} href='/appvideo'>
                        Watch
                    </Button>
                    </div>
                </div>
                <div className='w-[270px] h-[380px] border-2  dark:bg-gray-900 border-purple-400 pt-5 rounded-lg shadow-md pl-5 hover:shadow-purple-300 transition duration-250 hover:scale-110'>
                    <Image src={Industry} alt='tech' height={200} width={200} className='object-contain h-[170px]' />
                    <div className='font-bold dark:text-purple-400 mt-10 ml-10 text-xl'>
                        Cloud Classes
                    </div>
                    <div className='text-left pt-3'>
                        Recording for cloud classes
                    </div>
                    <div className='flex justify-end mr-4 mt-5'>
                    <Button color="primary" className='w-[100px]' as={Link} href='/cloudvideo'>
                        Watch
                    </Button>
                    </div>
                </div>
                <div className='w-[270px] h-[380px] border-2 dark:bg-gray-900 border-orange-400 pt-5 rounded-lg shadow-md pl-5 hover:shadow-orange-300 transition duration-250 hover:scale-110'>
                    <Image src={Curve} alt='tech' height={200} width={200} className='object-contain h-[150px]' />
                    <div className='font-bold dark:text-orange-400 mt-10 ml-10 text-xl'>
                        DSA Classes
                    </div>
                    <div className='text-left pt-3'>
                        Recording for dsa classes
                    </div>
                    <div className='flex justify-end mr-4 mt-5'>
                    <Button color="primary" className='w-[100px]' as={Link} href='/dsavideo'>
                        Watch
                    </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default cards