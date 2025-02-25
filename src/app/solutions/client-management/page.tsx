import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientManagement() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Management</h1>
            <p className="text-xl mb-8">Build stronger relationships with your clients through smart management</p>
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300"
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
                alt="Client Management"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Management</h3>
                  <p className="text-gray-600">Keep all your client information organized and easily accessible</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication Tracking</h3>
                  <p className="text-gray-600">Track all client interactions and communications in one place</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                  <p className="text-gray-600">Manage client-related tasks and never miss important deadlines</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client Portal</h3>
                  <p className="text-gray-600">Provide clients with secure access to their project information</p>
                </div>
              </div>
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
              <h3 className="text-xl font-semibold mb-4">Better Organization</h3>
              <p className="text-gray-600">Keep all client information centralized and well-organized</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Improved Communication</h3>
              <p className="text-gray-600">Maintain clear and consistent communication with clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Enhanced Productivity</h3>
              <p className="text-gray-600">Save time with automated client management processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Client Relationships?</h2>
          <p className="text-xl text-gray-600 mb-8">Book a demo today and see how we can help manage your clients better</p>
          <Link 
            href="/contact" 
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
} 