'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { LoginForm } from '@/features/auth/ui/LoginForm';

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </div>
  );
};
export default Page;
