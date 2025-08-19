'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { RegisterForm } from '@/features/auth/ui/RegisterForm';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <p className="text-gray-600 mb-6">Create a new account</p>
      <RegisterForm />
    </div>

    // <div>
    //     <button onClick={() => {
    //         console.log('hello')
    //         router.push('http://localhost:3001/auth/google')
    //     }
    //     }>Hello
    //     </button>
    // </div>
  );
};
export default Page;
