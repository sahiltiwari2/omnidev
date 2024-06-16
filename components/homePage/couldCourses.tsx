import React from 'react'
import CloudImage from '@/public/cloud.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

const webCourses = () => {
    return (
        <div className=' flex justify-center'>
            <div className='hover:scale-110 transition duration-300'>
            <div className='mt-10  flex justify-center border-2 rounded-lg shadow-md p-9 max-w-6xl bg-gray-50 dark:bg-gray-900 hover:border-purple-600 transition animate-slide-in-from-left hover:shadow-purple-600 dark:hover:shadow-purple-600'>
                <div className='mr-5 max-h-36'>
                    <Image src={CloudImage} alt="web" height={150} width={200} className='object-contain h-40' />
                </div>
                <div>
                    <div className='ml-5 dark:text-purple-500 text-xl md:text-2xl font-bold '>
                       Cloud Computing
                    </div>
                    <div className='ml-5 mt-2 text-[13px] md:text-[16px]'>
                        Web Dev a process in which one creates and maintain websites, Now days is argubaly<br /> the must important skill to  have as a developer. So Lets start Learning today.
                    </div>
                    <div className='mt-9 ml-5'>
                    <Button color="secondary" variant="ghost" as={Link} href='/cloud'>
                        Explore More
                    </Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default webCourses