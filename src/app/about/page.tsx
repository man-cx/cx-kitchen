import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#E76F51] to-[#008080] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Story
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Empowering freelancers and small businesses with AI-powered solutions for growth and success.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Brand Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#E76F51] mb-6">CX-Kitchen Brand Story</h2>
          <p className="text-[#333333] text-lg leading-relaxed mb-6">
            At <span className="font-semibold">CX-Kitchen</span>, we believe that every freelancer and small business owner deserves the tools to thrive—not just survive—in today's fast-paced, technology-driven world. We understand the daily struggles of juggling multiple roles, managing repetitive tasks, and striving to grow a business while maintaining creativity and balance. That's why we're here: to craft personalized, AI-powered productivity solutions that simplify work, save time, and unlock your full potential.
          </p>
        </section>

        {/* Journey Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#008080] mb-6">Our Journey</h2>
          <p className="text-[#333333] text-lg leading-relaxed mb-6">
            Our story began with a simple yet powerful realization: the modern workplace is evolving rapidly, but many freelancers and SMEs are left behind, overwhelmed by complexity and limited by time. With over 20 years of experience in digital transformation across industries like retail, FinTech, logistics, and e-commerce, our founder saw an opportunity to bridge this gap.
          </p>
          <p className="text-[#333333] text-lg leading-relaxed">
            We chose the name "CX-Kitchen" because a kitchen is where ideas are brought to life, ingredients are combined with care, and something extraordinary is created. Similarly, at CX-Kitchen, we design tailored workflows and solutions that empower our clients to focus on what matters most: their growth and creativity.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#E76F51] mb-6">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-[#008080] mb-4">Empowerment</h3>
              <p className="text-[#333333]">
                We provide tools that free you from routine tasks so you can focus on growing your business.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-[#008080] mb-4">Creativity</h3>
              <p className="text-[#333333]">
                We believe automation shouldn't stifle creativity—it should amplify it. Our solutions help you reclaim time for innovation.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-[#008080] mb-4">Efficiency</h3>
              <p className="text-[#333333]">
                By simplifying workflows with AI-driven solutions, we help you achieve more in less time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-[#E76F51] p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg italic">
              "To empower freelancers and small businesses to unlock their full potential through personalized AI solutions that streamline workflows, save time, and amplify creativity and growth."
            </p>
          </div>
          <div className="bg-[#008080] p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg italic">
              "To revolutionize productivity for freelancers and small businesses worldwide, shaping a future where AI empowers unparalleled creativity, efficiency, and success."
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#E76F51] mb-6">Our Impact</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#008080] mb-2">10+</div>
                <p className="text-[#333333]">Hours saved weekly by freelance designers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#008080] mb-2">2x</div>
                <p className="text-[#333333]">Faster order processing for e-commerce</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#008080] mb-2">100%</div>
                <p className="text-[#333333]">Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Looking Ahead Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E76F51] mb-6">Looking Ahead</h2>
          <p className="text-[#333333] text-lg leading-relaxed mb-8">
            At CX-Kitchen, we envision a world where freelancers and SMEs no longer feel limited by time or resources—a world where AI-powered tools are as simple as they are powerful. Together with our clients, we're shaping a future where work is smarter, not harder; where businesses grow without boundaries; and where every entrepreneur has the freedom to pursue their passion.
          </p>
          <div className="text-2xl font-bold text-[#008080]">
            Welcome to CX-Kitchen—your recipe for success.
          </div>
        </section>
      </div>
    </div>
  );
} 