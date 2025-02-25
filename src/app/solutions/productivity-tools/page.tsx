import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductivityTools() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Productivity Tools</h1>
            <p className="text-xl mb-8">Boost your team's efficiency with smart productivity solutions</p>
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300"
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
                  <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                  <p className="text-gray-600">Organize and prioritize tasks with smart scheduling and reminders</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                  <p className="text-gray-600">Work together seamlessly with real-time collaboration tools</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time Tracking</h3>
                  <p className="text-gray-600">Monitor time spent on tasks and projects for better resource allocation</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
                  <p className="text-gray-600">Track productivity metrics and team performance in real-time</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60"
                alt="Productivity Tools"
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
              <h3 className="text-xl font-semibold mb-4">Increased Productivity</h3>
              <p className="text-gray-600">Get more done in less time with smart tools and automation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Better Organization</h3>
              <p className="text-gray-600">Keep your team and tasks organized with intuitive tools</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">Make informed decisions with productivity analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Team's Productivity?</h2>
          <p className="text-xl text-gray-600 mb-8">Book a demo today and discover how our tools can transform your workflow</p>
          <Link 
            href="/contact" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
} 