'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebse.config';
import { Orbitronn } from '@/config/fonts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Collab from '@/public/collab.svg';
import {EyeFilledIcon} from "@/public/EyeFilledIcon";
import {EyeSlashFilledIcon} from "@/public/EyeSlashFilledIcon";
import React from 'react';

const SignUp = () => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className='flex p-5 shadow-lg bg-gray-50 justify-center'>
        <div className='w-[450px]  bg-gray-50 h-[600px]'>
          <div className='font-bold text-blue-500'>
            <div className={Orbitronn.className}>
              CIIE Omnidev
            </div>
          </div>
          <div className='font-bold text-3xl mt-5'>
            Get Started Now
          </div>
          <div>
            Enter Your Credentials to create an account
          </div>
          <div className='ml-10'>
            <div>
              <div className='font-bold text-xl mt-20'>
                <Input type="email" label="Name" variant='underlined' className='w-[320px]'
                />
              </div>
              <div className='font-bold text-xl mt-10'>
                <Input type="email" label="Email" variant='underlined' className='w-[320px]' value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='font-bold text-xl mt-10'>
                <Input
                  label="Password"
                  variant="bordered"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs w-[400px]"
                />
              </div>
            </div>
            <div className='  flex  justify-end mr-20'>
            <Button color="primary" onClick={handleSignUp} className='mt-10 w-[150px]'>
             Sign-Up
            </Button>
            </div>
          </div>
            <div className='text-[13px] mt-10 flex gap-2'>
              <div>
              Have an account ? 
              </div>
              <div className='text-blue-500 '>
                <Link href="/login">
                Sign In
                </Link>
              </div>
            </div>
        </div>
        <div className='w-[500px] border-2 bg-blue-500 rounded-xl pl-10 pt-24'>
          <Image src={Collab} alt='Collab' height={600} width={400} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
