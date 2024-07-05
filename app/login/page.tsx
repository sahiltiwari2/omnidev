'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';
import { auth } from '@/firebse.config';
import { Orbitronn } from '@/config/fonts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Collab from '@/public/login.svg';
import { EyeFilledIcon } from "@/public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/EyeSlashFilledIcon";
import React from 'react';


const SignIn = () => {


  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail('');
      setPassword('');
      router.push('/')
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
    onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button 
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign In
        </button>
      </div>
    </div>
    // <div>
    //   <div className='flex p-5 shadow-lg bg-gray-50 justify-center'>
    //     <div className='w-[450px]  bg-gray-50 h-[600px]'>
    //       <div className='font-bold text-green-500'>
    //         <div className={Orbitronn.className}>
    //           CIIE Omnidev
    //         </div>
    //       </div>
    //       <div className='font-bold text-3xl mt-5'>
    //         Sign In and Get Started
    //       </div>
    //       <div>
    //         Explore videos and quizs all together 😁
    //       </div>
    //       <div className='ml-10 mt-20'>
    //         <div>
              
    //           <div className='font-bold text-xl mt-10'>
    //             <Input type="email" label="Email" variant='underlined' className='w-[320px]' value={email}
    //               onChange={(e) => setEmail(e.target.value)} />
    //           </div>
    //           <div className='font-bold text-xl mt-10'>
    //             <Input
    //               label="Password"
    //               variant="bordered"
    //               placeholder="Enter your password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               endContent={
    //                 <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
    //                   {isVisible ? (
    //                     <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
    //                   ) : (
    //                     <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
    //                   )}
    //                 </button>
    //               }
    //               type={isVisible ? "text" : "password"}
    //               className="max-w-xs w-[400px]"
    //             />
    //           </div>
    //         </div>
    //         <div className='  flex  justify-end mr-20'>
    //           <Button color="primary" onClick={handleSignIn} className='mt-10 w-[150px]'>
    //             Sign-Up
    //           </Button>
    //         </div>
    //       </div>
    //       <div className='text-[13px] mt-10 flex gap-2'>
    //         <div>
    //           Don't have an account ?
    //         </div>
    //         <div className='text-blue-500 '>
    //           <Link href="/sign-up">
    //             Sign UP
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='w-[500px] border-2 bg-green-500 rounded-xl pl-10 pt-24 '>
    //       <Image src={Collab} alt='Collab' height={600} width={500} className='transition animate-appearance-in duration-300 delay-200' />
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignIn;
