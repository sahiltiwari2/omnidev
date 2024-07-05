'use client'
import React, { useState } from 'react';
import { auth } from '@/firebse.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';
import { Orbitronn } from '@/config/fonts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Collab from '@/public/login.svg';
import { EyeFilledIcon } from "@/public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/EyeSlashFilledIcon";
import { log } from 'console';


const login = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      // Handle successful login, maybe redirect or update state
    } catch (err) {
      setError(error);
    }
  };
  return (
    <div>
      <div className='flex p-5 shadow-lg bg-gray-50 justify-center'>
        <div className='w-[450px]  bg-gray-50 h-[600px]'>
          <div className='font-bold text-green-500'>
            <div className={Orbitronn.className}>
              CIIE Omnidev
            </div>
          </div>
          <div className='font-bold text-3xl mt-5'>
            Sign In and Get Started
          </div>
          <div>
            Explore videos and quizs all together 😁
          </div>
          <div className='ml-10 mt-20'>
            <div>
              
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
              <Button color="primary" onClick={handleLogin} className='mt-10 w-[150px]'>
                Sign-Up
              </Button>
            </div>
          </div>
          <div className='text-[13px] mt-10 flex gap-2'>
            <div>
              Don't have an account ?
            </div>
            <div className='text-blue-500 '>
              <Link href="/sign-up">
                Sign UP
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[500px] border-2 bg-green-500 rounded-xl pl-10 pt-24 '>
          <Image src={Collab} alt='Collab' height={600} width={500} className='transition animate-appearance-in duration-300 delay-200' />
        </div>
      </div>
    </div>
  );
};

export default login;

// components/Login.js




//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Login</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleLogin} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default login;