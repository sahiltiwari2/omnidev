'use client'
import React from 'react';
import data from '@/dsaQuestions.json';
import { Checkbox } from '@nextui-org/react';
import { getAuth } from "firebase/auth";
import { auth } from '@/firebse.config';
import { useEffect } from 'react';


const Page = () => {
    const user = auth.currentUser;
    const email = user?.email || 'no login';
    useEffect(() => {
        console.log('Current user:', user);
      }, [user]);

    return (
        <div>
            <div>
                {email}
            </div>
            <div className='flex justify-center'>
                <div className='mt-16 ml-5'>
                    {data.map((item, index) => (
                        <div key={index} style={{ marginBottom: '20px' }} className='border-3 rounded-lg p-5'>
                            <div className='font-bold text-2xl ml-16'>
                                {item.question}
                            </div>
                            <div className='mt-5'>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {item.incorrect.map((option, optionIndex) => (
                                        <li key={optionIndex} style={{ marginBottom: '5px' }}>
                                            <div className='ml-28 '><Checkbox>{option}</Checkbox></div>
                                        </li>
                                    ))}
                                    <div className='ml-28'>
                                        <Checkbox>{item.correct}</Checkbox>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;