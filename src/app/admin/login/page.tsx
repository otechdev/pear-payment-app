'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PearLogo from '@/components/PearLogo';

export default function AdminLogin() {
  const router = useRouter();

  useEffect(() => {
    // For demo purposes, redirect immediately to admin panel
    router.push('/admin');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <div className="flex justify-center mb-6">
          <PearLogo size={60} />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
        
        <div className="mb-8">
          <p className="text-center text-gray-600 mb-4">
            Redirecting to admin panel for demo purposes...
          </p>
          
          <button
            className="w-full bg-[#4CBFB6] hover:bg-[#3da99f] text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            onClick={() => router.push('/admin')}
          >
            Go to Admin Dashboard
          </button>
        </div>
        
        <div className="text-center">
          <Link href="/" className="text-[#4CBFB6] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 