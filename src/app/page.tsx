import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => (
  <div className="flex items-center space-x-3">
    {/* Logo Mark */}
    <div className="relative w-14 h-14">
      {/* Base Shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D35400] to-[#F1C40F] rounded-xl transform rotate-12 transition-transform duration-300 group-hover:rotate-45"></div>
      
      {/* Inner Circle */}
      <div className="absolute inset-[3px] bg-[#FFF4E6] rounded-lg">
        {/* Tech Pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[2px] bg-[#D35400] transform -rotate-45"></div>
          <div className="w-[2px] h-full bg-[#D35400] transform -rotate-45"></div>
        </div>
      </div>
      
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#D35400] font-bold text-xl tracking-tighter transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">CX</span>
      </div>
      
      {/* Decorative Dots */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-[#F1C40F] rounded-full"></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#F1C40F] rounded-full"></div>
    </div>

    {/* Logo Text */}
    <div className="flex flex-col">
      <div className="text-2xl font-bold tracking-tight leading-none">
        <span className="text-[#D35400]">CX-</span>
        <span className="text-[#D35400]">Kitchen</span>
      </div>
      <span className="text-[#666666] text-xs tracking-wider mt-0.5">AI-Powered Solutions</span>
    </div>
  </div>
)

const solutions = [
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline your business processes with AI-powered automation tools.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'client-management',
    title: 'Client Management',
    description: 'Simplify client onboarding, communication, and project tracking.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'productivity-tools',
    title: 'Productivity Tools',
    description: 'Boost your efficiency with smart tools designed for freelancers.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
  },
];

export default function Home() {
  return (
    <div className="space-y-20 bg-[#FFF4E6]">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=60"
            alt="Modern workspace with technology"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="mb-12 transform hover:scale-105 transition-transform duration-300 inline-block">
                <Logo />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block text-[#FFF4E6]">Transform Your</span>
                <span className="block text-[#D35400]">Business with AI</span>
              </h1>
              <p className="mt-6 text-xl text-[#333333] bg-[#FFF4E6]/95 p-4 rounded-lg backdrop-blur-sm">
                Empowering freelancers and small businesses with <span className="text-[#D35400]">AI-powered solutions</span> that streamline workflows, save time, and amplify creativity.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#333333] bg-[#F1C40F] hover:bg-[#D35400] hover:text-[#FFF4E6] transition-colors duration-300 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#F1C40F] text-base font-medium rounded-md text-[#FFF4E6] bg-transparent backdrop-blur-sm hover:bg-[#D35400] hover:text-[#FFF4E6] hover:border-[#D35400] transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#D35400] sm:text-4xl">
            AI-Powered Solutions
          </h2>
          <p className="mt-4 text-xl text-[#666666]">
            Discover tools designed to help you work smarter, not harder
          </p>
        </div>

        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-[#FFF4E6] overflow-hidden shadow-lg rounded-lg border border-[#F1C40F] hover:border-[#D35400] group transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 bg-[#F1C40F] text-[#333333] px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  AI-Powered
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#D35400]">{solution.title}</h3>
                <p className="mt-2 text-[#333333]">{solution.description}</p>
                <div className="mt-4">
                  <Link 
                    href={`/solutions/${solution.id}`} 
                    className="text-[#D35400] hover:text-[#F1C40F] flex items-center transition-colors duration-300 font-medium"
                  >
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 