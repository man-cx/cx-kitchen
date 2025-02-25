import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="space-y-20">
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
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Welcome to</span>
                <span className="block text-blue-400">CX-Kitchen</span>
              </h1>
              <p className="mt-6 text-xl text-gray-100">
                Empowering freelancers and small businesses with AI-powered solutions that streamline workflows, save time, and amplify creativity.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
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
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI-Powered Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover tools designed to help you work smarter, not harder
          </p>
        </div>

        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-48">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-500">{solution.description}</p>
                <div className="mt-4">
                  <Link href={`/solutions/${solution.id}`} className="text-blue-600 hover:text-blue-700">
                    Learn More →
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