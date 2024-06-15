import React from 'react'
import WebImage from '@/public/webdev.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'

const webCourses = () => {
    return (
        <div className=' flex justify-center'>
            <div className='mt-32 max-h-42  flex justify-center border-2 rounded-lg shadow-md p-9 max-w-6xl bg-gray-50 dark:bg-gray-900 hover:border-blue-600 transition animate-slide-in-from-left hover:shadow-blue-600 dark:hover:shadow-blue-600'>
                <div className='mr-5'>
                    <Image src={WebImage} alt="web" height={200} width={200} />
                </div>
                <div>
                    <div className='ml-5 text-2xl font-bold '>
                        Web Development
                    </div>
                    <div className='ml-5 mt-2'>
                        Web Dev a process in which one creates and maintain websites, Now days is argubaly<br /> the must important skill to  have as a developer. So Lets start Learning today.
                    </div>
                    <div className='mt-9 ml-5'>
                    <Button color="primary" variant="ghost">
                        Explore More
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default webCourses