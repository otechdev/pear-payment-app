'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PearLogo from '@/components/PearLogo';
import { useAuth } from '@/lib/hooks/useAuth';

// Interface for waitlist entries
interface WaitlistEntry {
  email: string;
  timestamp: Date;
  source?: string;
}

// Function to fetch waitlist entries
async function fetchWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const response = await fetch('/api/waitlist');
    if (!response.ok) {
      throw new Error('Failed to fetch waitlist data');
    }
    const data = await response.json();
    
    // Convert timestamp strings to Date objects
    return data.entries.map((entry: any) => ({
      ...entry,
      timestamp: new Date(entry.timestamp)
    }));
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return [];
  }
}

export default function WaitlistPage() {
  const router = useRouter();
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { user, loading: authLoading, signOut } = useAuth();

  // Ensure we're on client side before checking auth
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (isClient && !authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router, isClient]);

  // Load waitlist data when authenticated
  useEffect(() => {
    if (!isClient || authLoading || !user) return;
    
    async function loadWaitlist() {
      try {
        setLoading(true);
        const data = await fetchWaitlist();
        setEntries(data);
      } catch (err) {
        setError('Failed to load waitlist data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadWaitlist();
  }, [isClient, authLoading, user]);

  // Show loading state
  if (authLoading || loading || !isClient || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading waitlist data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <PearLogo size={40} />
            <h1 className="text-2xl font-bold text-gray-900">Waitlist Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/admin"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Back to Dashboard
            </Link>
            <button 
              onClick={() => signOut()}
              className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Waitlist Subscribers
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Total entries: {entries.length}
            </p>
          </div>

          {error ? (
            <div className="p-4 text-center text-red-500">
              {error}
            </div>
          ) : entries.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No waitlist entries found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Added
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {entries.map((entry, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{entry.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {entry.timestamp.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {entry.source || 'website'}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 