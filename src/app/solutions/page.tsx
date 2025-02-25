import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '../page'

const solutions = [
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline your business processes with AI-powered automation tools that reduce manual tasks and increase efficiency.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60',
    features: [
      'Smart task scheduling',
      'Document processing',
      'Email automation',
      'Custom workflow builder'
    ]
  },
  {
    id: 'client-management',
    title: 'Client Management',
    description: 'Simplify client onboarding, communication, and project tracking with our intelligent CRM system.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60',
    features: [
      'Client portal',
      'Project timeline tracking',
      'Automated reporting',
      'Communication hub'
    ]
  },
  {
    id: 'productivity-tools',
    title: 'Productivity Tools',
    description: 'Boost your efficiency with smart tools designed for freelancers and small businesses.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
    features: [
      'Time tracking',
      'Task management',
      'Resource planning',
      'Analytics dashboard'
    ]
  },
];

export default function Solutions() {
  return (
    <div className="bg-[#FFF4E6]">
      {/* Hero Section */}
      <div className="relative bg-[#333333] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D35400] to-[#333333] opacity-90"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#F1C40F 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#FFF4E6] sm:text-5xl md:text-6xl">
              AI-Powered Solutions
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-[#FFF4E6]/90">
              Transform your business with our suite of intelligent tools designed to streamline workflows and boost productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution.id} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-[#F1C40F] hover:border-[#D35400]">
              <div className="relative h-64">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-[#FFF4E6]">{solution.title}</h3>
                </div>
              </div>
              
              <div className="flex-1 p-6 space-y-4">
                <p className="text-[#333333] text-lg">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-[#666666]">
                      <svg className="h-5 w-5 text-[#D35400] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="inline-flex items-center text-[#D35400] hover:text-[#F1C40F] font-medium transition-colors"
                  >
                    Learn more about {solution.title}
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#D35400]">Ready to transform your business?</h2>
          <p className="mt-4 text-lg text-[#666666]">Book a demo to see how our solutions can work for you.</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#333333] bg-[#F1C40F] hover:bg-[#D35400] hover:text-[#FFF4E6] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 