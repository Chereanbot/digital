'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80 animate-gradient">
          {/* Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[800px] h-[800px] opacity-10 animate-logo-float">
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
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[70%] bg-white/10 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise" 
                 style={{ animationDelay: '0.2s', '--skew-x': '-12deg' } as any}></div>
            {/* Second Mountain */}
            <div className="absolute bottom-0 left-[20%] w-[50%] h-[85%] bg-white/20 backdrop-blur-sm transform skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.4s', '--skew-x': '12deg' } as any}></div>
            {/* Third Mountain */}
            <div className="absolute bottom-0 right-[-10%] w-[50%] h-[60%] bg-white/15 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.6s', '--skew-x': '-12deg' } as any}></div>
            
            {/* Animated Lines */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"
                  style={{
                    transform: `translateY(${i * 50}px) rotate(${-10 + i * 5}deg)`,
                    animation: 'lineSlide 3s infinite',
                    animationDelay: `${i * 0.2}s`,
                    '--rotation': `${-10 + i * 5}deg`
                  } as any}
                ></div>
              ))}
            </div>
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
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  '--duration': `${3 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 2}s`
                } as any}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-enhanced-fade-in text-shimmer text-glow">
            About Digital Aksumite
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-enhanced-fade-in" style={{ animationDelay: '0.2s' }}>
            Founded on visionary ideas to revolutionize Ethiopia's technological landscape, empowering the nation through innovative systems and solutions.
          </p>
        </div>

        {/* Wave Separator with Mountain Peak */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24 fill-current text-blue-600 wave-animation" viewBox="0 0 1920 100" preserveAspectRatio="none">
            <path d="M0,0 L0,100 L1920,100 L1920,0 L960,80 Z" />
          </svg>
        </div>
      </section>

      {/* Our Story Section with Mountain Elements */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Mountain Side Elements */}
        <div className="absolute right-0 h-full w-1/3 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-white/5 transform skew-x-12"></div>
          <div className="absolute top-[20%] right-[10%] w-full h-full bg-white/5 transform -skew-x-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-glow text-center">Our Story</h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow">
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              Digital Aksumite was founded on the visionary ideas of Biniam Shimeles, who sought to revolutionize Ethiopia's technological landscape. This vision was later shared with co-founder Solomon Eshetu, and in 2017 EC (2024 GC), the PLC was officially established.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed">
              Soon after, Cherinet Afewerk and Misganaw Eshetu joined the team. Together, they created a dynamic and collaborative company driven by young, curious developers and managers who are passionate about making Ethiopia a hub of innovation and progress.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Mountain Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Mountain */}
          <div className="absolute -left-[10%] bottom-0 w-[60%] h-[80%] bg-white/5 transform -skew-x-12"></div>
          {/* Right Mountain */}
          <div className="absolute -right-[10%] bottom-0 w-[60%] h-[70%] bg-white/5 transform skew-x-12"></div>
          {/* Mountain Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                bottom: `${10 + i * 8}%`,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                opacity: 0.1 + i * 0.1
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-glow text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-10"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow vision-card hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">👁️</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                  To be the leading digital transformation partner in Ethiopia, combining our rich cultural heritage with cutting-edge technology to create innovative solutions that empower businesses and communities.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-10"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow mission-card hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                  To deliver exceptional digital solutions that bridge the gap between traditional values and modern technology, helping businesses thrive in the digital age while preserving our cultural identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text text-glow">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌟',
                title: 'Excellence',
                description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We maintain the highest standards of integrity, building trust through transparency and honesty.',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We embrace innovation, constantly exploring new technologies and creative solutions.',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="value-card enhanced-shadow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    {value.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 