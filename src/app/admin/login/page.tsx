'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PearLogo from '@/components/PearLogo';
import { useAuth } from '@/lib/hooks/useAuth';
import SignInWithGoogle from '@/components/SignInWithGoogle';

export default function AdminLogin() {
  const router = useRouter();
  const { user, loading, signInWithGoogle } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Ensure we're on client side before checking auth
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redirect to admin dashboard if already authenticated
  useEffect(() => {
    if (isClient && !loading && user) {
      router.push('/admin');
    }
  }, [user, loading, router, isClient]);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setAuthError(null);
      await signInWithGoogle();
    } catch (error) {
      setAuthError('Failed to sign in. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state if still checking auth
  if (loading || !isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  // If user is already logged in, show redirect message
  if (user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg">Redirecting to admin dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <div className="flex justify-center mb-6">
          <PearLogo size={60} />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
        
        <div className="mb-8">
          <p className="text-center text-gray-600 mb-4">
            Please sign in to access the admin dashboard
          </p>
          
          <button
            className="w-full bg-[#4CBFB6] hover:bg-[#3da99f] text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            onClick={handleSignIn}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          {authError && (
            <p className="mt-4 text-center text-red-500 text-sm">{authError}</p>
          )}
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