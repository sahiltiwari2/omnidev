import React from 'react'
import CloudImage from '@/public/cloud.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'

const webCourses = () => {
    return (
        <div className=' flex justify-center'>
            <div className='mt-10  flex justify-center border-2 rounded-lg shadow-lg p-9 max-w-6xl bg-gray-50 hover:border-purple-600 transition animate-slide-in-from-left hover:shadow-gray-400'>
                <div className='mr-5 max-h-36'>
                    <Image src={CloudImage} alt="web" height={150} width={200} className='object-contain h-40' />
                </div>
                <div>
                    <div className='ml-5 text-2xl font-bold '>
                       Cloud Computing
                    </div>
                    <div className='ml-5 mt-2'>
                        Web Dev a process in which one creates and maintain websites, Now days is argubaly<br /> the must important skill to  have as a developer. So Lets start Learning today.
                    </div>
                    <div className='mt-9 ml-5'>
                    <Button color="secondary" variant="ghost">
                        Explore More
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default webCourses