import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkflowAutomation() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Workflow Automation</h1>
            <p className="text-xl mb-8">Streamline your business processes with intelligent automation</p>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
                  <p className="text-gray-600">Automate repetitive tasks and workflows to save time and reduce errors</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Integrations</h3>
                  <p className="text-gray-600">Connect with your existing tools and systems seamlessly</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Workflows</h3>
                  <p className="text-gray-600">Create tailored automation workflows that match your business needs</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-gray-600">Monitor and optimize your automated processes with detailed insights</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                alt="Workflow Automation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Increased Efficiency</h3>
              <p className="text-gray-600">Reduce manual work and speed up processes by up to 80%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
              <p className="text-gray-600">Cut operational costs and improve resource allocation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Better Accuracy</h3>
              <p className="text-gray-600">Minimize human errors and ensure consistent results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workflows?</h2>
          <p className="text-xl text-gray-600 mb-8">Book a demo today and see how we can help streamline your business</p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
} 