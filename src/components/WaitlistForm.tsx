'use client';

import React, { useState } from 'react';

interface WaitlistFormProps {
  className?: string;
  buttonText?: string;
  placeholderText?: string;
  successMessage?: string;
}

export default function WaitlistForm({
  className = '',
  buttonText = 'Join Waitlist',
  placeholderText = 'Enter your email',
  successMessage = 'Thanks for joining our waitlist!'
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      {!success ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            disabled={isSubmitting}
            className="px-4 py-3 rounded-md flex-1 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CBFB6] focus:border-transparent w-full"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-md font-medium transition-colors duration-300 disabled:opacity-50 w-full sm:w-auto mt-2 sm:mt-0"
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </button>
        </form>
      ) : (
        <div className="bg-green-100 text-green-800 p-4 rounded-md">
          {successMessage}
        </div>
      )}
      
      {error && (
        <p className="text-red-500 mt-2 text-sm">{error}</p>
      )}
    </div>
  );
} 