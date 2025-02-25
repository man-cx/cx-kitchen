'use client';

import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-[#E76F51] mb-4">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-[#333333] mb-6">
        Get the latest updates on AI solutions and productivity tips.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76F51] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-200
            ${status === 'loading' 
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#E76F51] hover:bg-[#D35400]'
            }`}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>

        {status !== 'idle' && (
          <div
            className={`mt-4 p-3 rounded-md ${
              status === 'success' 
                ? 'bg-green-100 text-green-700'
                : status === 'error'
                ? 'bg-red-100 text-red-700'
                : ''
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
} 