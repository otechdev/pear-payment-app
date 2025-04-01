'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PearLogo from '@/components/PearLogo';
import { useAuth } from '@/lib/hooks/useAuth';

// Simplified function to fetch waitlist data
async function fetchWaitlistData() {
  try {
    const response = await fetch('/api/waitlist');
    if (!response.ok) {
      throw new Error('Failed to fetch waitlist data');
    }
    const data = await response.json();
    return { 
      count: data.count,
      success: true
    };
  } catch (error) {
    console.error('Error fetching waitlist data:', error);
    return { 
      count: 0,
      success: false
    };
  }
}

export default function AdminDashboard() {
  const router = useRouter();
  const [waitlistCount, setWaitlistCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const auth = useAuth();

  // Avoid hydration mismatch by only using auth after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client-side
    if (!isClient) return;

    async function loadStats() {
      try {
        setLoading(true);
        const data = await fetchWaitlistData();
        if (data.success) {
          setWaitlistCount(data.count);
        } else {
          setError('Failed to load waitlist data');
        }
      } catch (err) {
        setError('An error occurred while loading data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [isClient]);

  // Demo mode - skip authentication for now
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading dashboard...</p>
      </div>
    );
  }

  // Show admin dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <PearLogo size={40} />
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-600">Demo Mode</p>
            <Link href="/">
              <button 
                className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
              >
                Back to Site
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Waitlist Subscribers
              </dt>
              {loading ? (
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  Loading...
                </dd>
              ) : (
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {waitlistCount}
                </dd>
              )}
              <div className="mt-3">
                <Link 
                  href="/admin/waitlist" 
                  className="text-sm text-[#4CBFB6] hover:underline"
                >
                  View all →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                App Downloads
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                0
              </dd>
              <div className="mt-3">
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Merchant Sign-ups
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                0
              </dd>
              <div className="mt-3">
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Quick Links
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <Link 
                  href="/admin/waitlist"
                  className="text-[#4CBFB6] hover:text-[#3a9d96] text-sm font-medium"
                >
                  Manage Waitlist
                </Link>
                <Link 
                  href="/"
                  className="text-[#4CBFB6] hover:text-[#3a9d96] text-sm font-medium"
                >
                  View Landing Page
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Activity
              </h3>
              <div className="mt-5">
                <p className="text-sm text-gray-500">No recent activity</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 