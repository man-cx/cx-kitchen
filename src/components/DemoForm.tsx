'use client';

import React, { useState } from 'react';

export default function DemoForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <svg
            className="mx-auto h-12 w-12 text-[#D35400]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
          >
            <circle
              className="opacity-25"
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M14 24l8 8 16-16"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#333333] mb-2">
          Thank you for your interest!
        </h3>
        <p className="text-[#666666] mb-6">
          We've received your demo request and will be in touch shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-[#D35400] hover:text-[#F1C40F] transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#333333]"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-[#333333]"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#333333]">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[#333333]">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#333333]">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
        />
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-[#333333]">
          I'm interested in
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
        >
          <option value="">Select an option</option>
          <option value="workflow-automation">Workflow Automation</option>
          <option value="client-management">Client Management</option>
          <option value="productivity-tools">Productivity Tools</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#333333]">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-[#F1C40F] shadow-sm focus:border-[#D35400] focus:ring-[#D35400]"
          placeholder="Tell us about your needs and what you'd like to learn about our solutions..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#F1C40F] text-[#333333] px-6 py-3 rounded-md hover:bg-[#D35400] hover:text-[#FFF4E6] transition-colors shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Request Demo'
          )}
        </button>
      </div>
    </form>
  );
} 