import React from 'react'
import AppImage from '@/public/appdeva.svg'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

const webCourses = () => {
    return (
        <div className=' flex justify-center'>
            <div className='hover:scale-110 transition duration-300'>
            <div className='mt-10  flex justify-center  flex-col md:flex-row hover:scale-110 border-2 rounded-lg shadow-md p-9 max-w-[970px] bg-gray-50 dark:bg-gray-900 hover:border-green-600 transition animate-slide-in-from-right hover:shadow-green-600 dark:hover:shadow-green-600'>
                <div className='mr-5 max-h-36  flex justify-center md:justify-start'>
                    <Image src={AppImage} alt="web" height={300} width={350} className='object-contain' />
                </div>
                <div>
                    <div className='ml-5 dark:text-green-500 mt-5 md:mt-0 text-xl md:text-2xl font-bold '>
                        App Development and Cloud Computing
                    </div>
                    <div className='ml-5 mt-2 text-[13px] md:text-[16px]'>
                    Supercharge your dev skills: Build powerful apps that scale effortlessly. Master app development and cloud computing – the dream team of modern software.</div>
                    <div className='mt-9 ml-5'>
                    <Button color="success" variant="ghost" as={Link} href='/appncloud'>
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