'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">CX Kitchen</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
              Blog
            </Link>
            <Link href="/recipes" className="text-gray-700 hover:text-gray-900 font-medium">
              Recipes
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Home
              </Link>
              <Link href="/blog" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Blog
              </Link>
              <Link href="/recipes" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Recipes
              </Link>
              <Link href="/about" 
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About
              </Link>
              <Link href="/contact" 
                className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 