import React from 'react'
import AppImage from '@/public/appdeva.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'

const webCourses = () => {
    return (
        <div className=' flex justify-center'>
            <div className='mt-10  flex justify-center border-2 rounded-lg shadow-md p-9 max-w-6xl bg-gray-50 dark:bg-gray-900 hover:border-green-600 transition animate-slide-in-from-right hover:shadow-green-600 dark:hover:shadow-green-600'>
                <div className='mr-5 max-h-36'>
                    <Image src={AppImage} alt="web" height={200} width={200} />
                </div>
                <div>
                    <div className='ml-5 text-2xl font-bold '>
                        App Development
                    </div>
                    <div className='ml-5 mt-2'>
                        Web Dev a process in which one creates and maintain websites, Now days is argubaly<br /> the must important skill to  have as a developer. So Lets start Learning today.
                    </div>
                    <div className='mt-9 ml-5'>
                    <Button color="success" variant="ghost">
                        Explore More
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default webCourses