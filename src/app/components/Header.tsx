'use client';

import { Logo } from './Logo'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#FFF4E6] shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="group">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/solutions" className="text-[#333333] hover:text-[#D35400] font-medium transition-colors">
              Solutions
            </Link>
            <Link href="/pricing" className="text-[#333333] hover:text-[#D35400] font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-[#333333] hover:text-[#D35400] font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" 
              className="bg-[#F1C40F] text-[#333333] px-6 py-2 rounded-md hover:bg-[#D35400] hover:text-[#FFF4E6] transition-colors shadow-md hover:shadow-lg">
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#333333] hover:text-[#D35400] hover:bg-[#FFF4E6]/50 focus:outline-none transition-colors"
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
              <Link href="/solutions" 
                className="block px-3 py-2 rounded-md text-[#333333] hover:text-[#D35400] hover:bg-[#FFF4E6]/50 transition-colors">
                Solutions
              </Link>
              <Link href="/pricing" 
                className="block px-3 py-2 rounded-md text-[#333333] hover:text-[#D35400] hover:bg-[#FFF4E6]/50 transition-colors">
                Pricing
              </Link>
              <Link href="/about" 
                className="block px-3 py-2 rounded-md text-[#333333] hover:text-[#D35400] hover:bg-[#FFF4E6]/50 transition-colors">
                About
              </Link>
              <Link href="/contact" 
                className="block px-3 py-2 rounded-md bg-[#F1C40F] text-[#333333] hover:bg-[#D35400] hover:text-[#FFF4E6] transition-colors shadow-md">
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 