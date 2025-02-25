import React from 'react';
import DemoForm from '@/components/DemoForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF4E6]">
      {/* Hero Section */}
      <div className="relative bg-[#333333] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D35400] to-[#333333] opacity-90"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#F1C40F 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#FFF4E6] sm:text-5xl md:text-6xl">
            Book a Demo
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#FFF4E6]/90">
            Experience how our AI-powered solutions can transform your business
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <DemoForm />
        </div>
      </div>
    </div>
  );
} 