import React from 'react'
import Image from 'next/image'
import Register from '@/public/register.svg'
import { Orbitronn } from '@/config/fonts'
import Girl from '@/public/registergirl.svg'
import { Input } from "@nextui-org/input";
import Book from '@/public/book.svg'
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";

const page = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-3/5 '>
                <div className='animate-appearence-in-view'>
                    <Image src={Register} alt='register Here' height={400} width={400} />
                </div>
                <div className={Orbitronn.className}>
                    <div className='text-purple-600 text-3xl font-bold animate-slide-in-from-left'>
                        OmniDev Courses
                    </div>
                </div>
                <div className='animate-slide-in-from-left'>
                    Will teach you how to unlock your potential and take your first step in this tech world.The best example for made by students for the students 😁
                </div>
                <div className='flex items-start '>
                    <div className='border-2 animate-slide-in-from-left dark:bg-gray-900 border-blue-500 shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-600 transition duration-300 rounded-lg w-[370px] mt-7 pb-3'>
                        <div className='text-blue-500 text-center  mt-3 text-2xl font-bold '>
                            <div className={Orbitronn.className}>
                            Register Now
                            </div>
                        </div>
                        <div className=' ml-24 text-left text-[15px]'>
                            and get 👇🏾
                        </div>
                        <div className=' ml-2 mt-5'>
                            • Access to the exclusive first webinar<br />
                            • Introduction to Latest Industry Tech<br />
                            • Domain Selection Guidence <br />
                            • One On One Mentor Ship <br />
                            • Learn Intership Strategies <br />
                            • Time Management Skills
                        </div>
                    </div>
                    <div className='mt-10 ml-3 animate-slide-in-from-right '>
                        <Image src={Girl} alt='Girl' height={800} width={300} />
                    </div>
                </div>


            </div>
            <div className=' w-2/3 border-2 border-purple-500 shadow-md hover:shadow-lg hover:shadow-purple-400 hover:scale-105 transition duration-300 ml-5 rounded-xl p-5'>
                <div className='flex items-start'>
                    <Image src={Book} alt='book' height={100} width={100} />
                    <div className='flex items-start gap-2'>
                        <div className='text-2xl font-bold mb-2'>Book a</div>
                        <div className={Orbitronn.className}>
                        <div className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500'>free live webinar</div>
                        </div>
                        <div className='text-2xl font-bold mb-2'>to know more</div>
                    </div>
                </div>
                <div className='mt-4 font-bold'>
                    Personal Information:
                </div>
                <div className='flex items-start gap-2'>
                    <div className='w-[300px] mt-5 bg-white dark:bg-gray-900 rounded-xl'>
                        <Input type="name" label="Name" variant='bordered' />
                    </div>
                    <div className=' w-[300px] mt-5 bg-white dark:bg-gray-900'>
                        <Input type="Pnumber" label="Phone Number" variant='bordered' />
                    </div>
                </div>
                <div className=' w-full mt-5 bg-white dark:bg-gray-900'>
                    <Input type="email" label="Email" variant='bordered' />
                </div>
                <div className='mt-4 font-bold'>
                    College Information:
                </div>
                <div className='flex items-start gap-2'>
                    <div className='w-[300px] mt-5 bg-white dark:bg-gray-900 rounded-xl'>
                        <Input type="Cname" label="Collage Name" variant='bordered' />
                    </div>
                    <div className=' w-[300px] mt-5 bg-white dark:bg-gray-900'>
                        <Input type="Course" label="Your Course" variant='bordered' />
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    <div className='w-[300px] mt-5 bg-white dark:bg-gray-900 rounded-xl'>
                        <Input type="Rnumber" label="Registration No." variant='bordered' />
                    </div>
                    <div className=' w-[300px] mt-5 bg-white dark:bg-gray-900'>
                        <Input type="year" label="Year" variant='bordered' />
                    </div>
                </div>
                <div className='mt-4 font-bold'>
                    Select Courses:
                </div>
                <div className='ml-3 mt-2'>
                    <CheckboxGroup
                        orientation="horizontal"
                        color="danger"
                    >
                        <Checkbox value="buenos-aires">Web Development</Checkbox>
                        <Checkbox value="sydney">App Development</Checkbox>
                        <Checkbox value="san-francisco">Cloud computing</Checkbox>
                    </CheckboxGroup>
                </div>
                <div className='mt-4 flex justify-end'>
                <Button color="secondary" variant="ghost" className=' w-32'>
                    Submit
                </Button>
                </div>
            </div>
        </div>
    )
}

export default page