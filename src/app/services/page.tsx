'use client';

import React from 'react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
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

          {/* Enhanced Mountain Structures */}
          <div className="absolute bottom-0 left-0 right-0 h-[70vh] overflow-hidden">
            {/* Mountain Range Background */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            
            {/* First Mountain */}
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[70%] bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise" 
                 style={{ animationDelay: '0.2s', '--skew-x': '-12deg' } as any}>
              <div className="absolute top-0 left-[20%] w-[60%] h-[20%] bg-gradient-to-t from-white/10 to-transparent transform -skew-x-12"></div>
            </div>
            
            {/* Second Mountain */}
            <div className="absolute bottom-0 left-[20%] w-[50%] h-[85%] bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-sm transform skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.4s', '--skew-x': '12deg' } as any}>
              <div className="absolute top-0 right-[20%] w-[60%] h-[30%] bg-gradient-to-t from-white/15 to-transparent transform skew-x-12"></div>
            </div>
            
            {/* Third Mountain */}
            <div className="absolute bottom-0 right-[-10%] w-[50%] h-[60%] bg-gradient-to-tr from-white/5 to-white/15 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.6s', '--skew-x': '-12deg' } as any}>
              <div className="absolute top-0 left-[30%] w-[40%] h-[25%] bg-gradient-to-t from-white/10 to-transparent transform -skew-x-12"></div>
            </div>

            {/* Animated Mountain Lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  bottom: `${15 + i * 8}%`,
                  transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                  opacity: 0.1 + i * 0.05,
                  animation: 'lineSlide 3s infinite',
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Enhanced Particle System */}
          <div className="particle-system">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="particle animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  background: `radial-gradient(circle, rgba(255,255,255,${0.2 + Math.random() * 0.3}) 0%, transparent 70%)`,
                  '--duration': `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 3}s`
                } as any}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-enhanced-fade-in text-shimmer text-glow">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-enhanced-fade-in" style={{ animationDelay: '0.2s' }}>
            Transforming Ethiopia&apos;s digital landscape with innovative solutions
          </p>
        </div>

        {/* Enhanced Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24 fill-current text-blue-600 wave-animation" viewBox="0 0 1920 100" preserveAspectRatio="none">
            <path d="M0,0 L0,100 L1920,100 L1920,0 L960,80 Z">
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M0,0 L0,100 L1920,100 L1920,0 L960,80 Z;
                        M0,0 L0,100 L1920,100 L1920,0 L960,60 Z;
                        M0,0 L0,100 L1920,100 L1920,0 L960,80 Z"
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Enhanced Mountain Side Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Mountain */}
          <div className="absolute -left-[10%] bottom-0 w-[60%] h-[80%] bg-gradient-to-tr from-white/5 to-white/10 transform -skew-x-12">
            <div className="absolute top-0 right-[20%] w-[60%] h-[30%] bg-gradient-to-t from-white/10 to-transparent"></div>
          </div>
          {/* Right Mountain */}
          <div className="absolute -right-[10%] bottom-0 w-[60%] h-[70%] bg-gradient-to-tr from-white/5 to-white/10 transform skew-x-12">
            <div className="absolute top-0 left-[20%] w-[60%] h-[30%] bg-gradient-to-t from-white/10 to-transparent"></div>
          </div>
          
          {/* Animated Lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                bottom: `${5 + i * 8}%`,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                opacity: 0.05 + i * 0.02,
                animation: 'lineSlide 4s infinite linear',
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom web applications built with modern technologies and best practices.',
                features: [
                  'Responsive Design',
                  'Progressive Web Apps',
                  'E-commerce Solutions',
                  'Content Management Systems'
                ],
                icon: '🌐',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                features: [
                  'iOS Development',
                  'Android Development',
                  'Cross-platform Solutions',
                  'App Store Optimization'
                ],
                icon: '📱',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design solutions that enhance digital experiences.',
                features: [
                  'User Interface Design',
                  'User Experience Design',
                  'Wireframing & Prototyping',
                  'Design Systems'
                ],
                icon: '🎨',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Digital Transformation',
                description: 'End-to-end digital transformation solutions for businesses.',
                features: [
                  'Process Automation',
                  'Cloud Integration',
                  'Digital Strategy',
                  'Technology Consulting'
                ],
                icon: '🚀',
                gradient: 'from-pink-500 to-rose-500'
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 enhanced-shadow hover-lift animate-enhanced-fade-in group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4 text-shimmer">{service.title}</h3>
                </div>
                <p className="text-gray-200 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-200 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 button-glow flex items-center justify-center gap-2 group-hover:transform group-hover:translate-y-[-2px]">
                  Learn More
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-700 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Circuit Board Pattern */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-white/5 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: '1px',
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.1 + Math.random() * 0.2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text text-glow">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Discovery',
                description: 'Understanding your needs and project requirements',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: '✏️',
                title: 'Design',
                description: 'Creating intuitive and engaging user experiences',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: '⚙️',
                title: 'Development',
                description: 'Building robust and scalable solutions',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🚀',
                title: 'Deployment',
                description: 'Launching and maintaining your digital product',
                gradient: 'from-pink-500 to-rose-500'
              }
            ].map((step, index) => (
              <div 
                key={step.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl enhanced-shadow hover-lift animate-enhanced-fade-in relative group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {index < 3 && (
                  <div className="absolute top-1/2 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-1/2 hidden md:block"></div>
                )}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
                <p className="text-gray-200 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text text-glow">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Flutter', icon: '📱' },
              { name: 'MongoDB', icon: '🍃' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group animate-enhanced-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <span className="text-4xl mb-2 block group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 