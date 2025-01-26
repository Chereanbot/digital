'use client';

import React from 'react';
import Image from 'next/image';

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80 animate-gradient">
          {/* Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[800px] h-[800px] opacity-5 animate-slow-spin">
              <Image
                src="/image.png"
                alt="Digital Aksumite Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Mountain Structures */}
          <div className="absolute bottom-0 left-0 right-0 h-[60vh] overflow-hidden">
            {/* First Mountain */}
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[70%] bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise" 
                 style={{ animationDelay: '0.2s', '--skew-x': '-12deg' } as any}></div>
            {/* Second Mountain */}
            <div className="absolute bottom-0 left-[20%] w-[50%] h-[85%] bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-sm transform skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.4s', '--skew-x': '12deg' } as any}></div>
            {/* Third Mountain */}
            <div className="absolute bottom-0 right-[-10%] w-[50%] h-[60%] bg-gradient-to-tr from-white/5 to-white/15 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.6s', '--skew-x': '-12deg' } as any}></div>
          </div>

          {/* Particle System */}
          <div className="particle-system">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)`,
                  '--duration': `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 3}s`
                } as any}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-enhanced-fade-in text-shimmer text-glow">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-enhanced-fade-in" style={{ animationDelay: '0.2s' }}>
            Be part of our mission to revolutionize Ethiopia&apos;s technological landscape
          </p>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24 fill-current text-blue-600 wave-animation" viewBox="0 0 1920 100" preserveAspectRatio="none">
            <path d="M0,0 L0,100 L1920,100 L1920,0 L960,80 Z" />
          </svg>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Mountain Side Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Mountain */}
          <div className="absolute -left-[10%] bottom-0 w-[60%] h-[80%] bg-gradient-to-tr from-white/5 to-white/10 transform -skew-x-12"></div>
          {/* Right Mountain */}
          <div className="absolute -right-[10%] bottom-0 w-[60%] h-[70%] bg-gradient-to-tr from-white/5 to-white/10 transform skew-x-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text text-glow">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Junior Software Developer',
                department: 'Development Team',
                type: 'Full-time',
                location: 'Addis Ababa',
                description: 'Join our development team and work on cutting-edge web and mobile applications.',
                requirements: ['Computer Science degree or equivalent', 'JavaScript/TypeScript experience', 'React/Next.js knowledge', 'Problem-solving skills'],
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                title: 'UI/UX Designer',
                department: 'Design Team',
                type: 'Full-time',
                location: 'Addis Ababa',
                description: 'Create beautiful and intuitive user interfaces for our digital products.',
                requirements: ['Design degree or equivalent', 'Figma proficiency', 'UI/UX principles', 'Portfolio of work'],
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Project Manager',
                department: 'Management Team',
                type: 'Full-time',
                location: 'Addis Ababa',
                description: 'Lead and coordinate digital transformation projects for our clients.',
                requirements: ['Project Management certification', '3+ years experience', 'Strong communication skills', 'Agile methodology'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Data Scientist',
                department: 'Research Team',
                type: 'Full-time',
                location: 'Addis Ababa',
                description: 'Analyze data and build machine learning models for our innovative solutions.',
                requirements: ['Statistics/Math degree', 'Python expertise', 'ML/AI experience', 'Data visualization skills'],
                gradient: 'from-pink-500 to-rose-500'
              }
            ].map((position, index) => (
              <div 
                key={position.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 enhanced-shadow hover-lift animate-enhanced-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${position.gradient} flex items-center justify-center`}>
                    <span className="text-2xl">
                      {index === 0 ? '💻' : index === 1 ? '🎨' : index === 2 ? '📊' : '🔬'}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white text-shimmer">{position.title}</h3>
                    <p className="text-gray-200">{position.department}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-gray-200 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      {position.type}
                    </span>
                    <span className="text-gray-200 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {position.location}
                    </span>
                  </div>
                  <p className="text-gray-100 mb-4">{position.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 button-glow flex items-center justify-center gap-2">
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-700 to-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text text-glow">Why Join Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Professional Growth',
                description: 'Continuous learning opportunities and career development paths'
              },
              {
                icon: '🤝',
                title: 'Collaborative Culture',
                description: 'Work with passionate teams in an innovative environment'
              },
              {
                icon: '💪',
                title: 'Impactful Work',
                description: "Be part of projects that transform Ethiopia's digital landscape"
              },
              {
                icon: '🎯',
                title: 'Work-Life Balance',
                description: 'Flexible working options and supportive environment'
              },
              {
                icon: '💡',
                title: 'Innovation Focus',
                description: 'Work with cutting-edge technologies and methodologies'
              },
              {
                icon: '🌟',
                title: 'Recognition',
                description: 'Rewards and recognition for outstanding contributions'
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl enhanced-shadow hover-lift animate-enhanced-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 