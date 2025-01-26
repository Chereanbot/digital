import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] hero-mountain overflow-hidden">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
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
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-indigo-900/80 mix-blend-multiply"></div>
        </div>

        {/* Animated Mountain Elements */}
        <div className="absolute inset-0 z-10">
          {/* Geometric Mountain Shapes */}
          <div className="absolute bottom-0 left-0 right-0 h-[60vh] overflow-hidden">
            {/* First Mountain */}
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[70%] bg-white/10 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise" 
                 style={{ animationDelay: '0.2s' }}></div>
            {/* Second Mountain */}
            <div className="absolute bottom-0 left-[20%] w-[50%] h-[85%] bg-white/20 backdrop-blur-sm transform skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.4s' }}></div>
            {/* Third Mountain */}
            <div className="absolute bottom-0 right-[-10%] w-[50%] h-[60%] bg-white/15 backdrop-blur-sm transform -skew-x-12 animate-mountain-rise"
                 style={{ animationDelay: '0.6s' }}></div>
            
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
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Original Mountain Overlay */}
          <div className="mountain-overlay"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/50 rounded-full animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32 animate-logo-reveal">
                  <Image
                    src="/image.png"
                    alt="Digital Aksumite"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-enhanced-fade-in text-white drop-shadow-2xl text-shimmer">
                Welcome to Digital Aksumite
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-100 animate-enhanced-fade-in leading-relaxed drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                Your trusted partner in digital transformation. We bring innovation and expertise to every project.
              </p>
              <div className="flex gap-6 justify-center items-center">
                <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 button-glow animate-enhanced-fade-in" style={{ animationDelay: '0.4s' }}>
                  Get Started
                </button>
                <button className="border-2 border-white/90 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 button-glow animate-enhanced-fade-in" style={{ animationDelay: '0.5s' }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Wave Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg className="w-full h-24 text-white transform-gpu animate-wave" viewBox="0 0 1920 100" preserveAspectRatio="none">
            <path 
              fill="currentColor"
              d="M0,0 C320,100 660,80 980,60 C1320,40 1640,80 1920,0 L1920,100 L0,100 Z"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="
                  M0,0 C320,100 660,80 980,60 C1320,40 1640,80 1920,0 L1920,100 L0,100 Z;
                  M0,0 C320,80 660,100 980,80 C1320,60 1640,100 1920,0 L1920,100 L0,100 Z;
                  M0,0 C320,100 660,80 980,60 C1320,40 1640,80 1920,0 L1920,100 L0,100 Z"
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-enhanced-fade-in text-shimmer">Our Services</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-enhanced-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-effect p-10 rounded-2xl shadow-lg card-hover animate-enhanced-fade-in float-animation" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-6 text-white">Core Services</h2>
              <p className="text-gray-200 mb-8 text-lg">
                Discover our comprehensive range of digital services designed to transform your business.
              </p>
              <ul className="space-y-6">
                {[
                  'Digital Strategy Consulting',
                  'Web Development',
                  'Mobile Solutions',
                  'Cloud Integration',
                  'UI/UX Design'
                ].map((service, index) => (
                  <li key={service} className="flex items-center text-gray-200 animate-enhanced-fade-in text-lg" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <svg className="w-6 h-6 text-blue-300 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-effect p-10 rounded-2xl shadow-lg card-hover animate-enhanced-fade-in float-animation" style={{ animationDelay: '0.4s', animationDirection: 'reverse' }}>
              <h2 className="text-3xl font-bold mb-6 text-white">Latest Updates</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'New Technology Partnership',
                    desc: 'Expanding our capabilities with cutting-edge solutions for enterprise clients',
                    date: 'March 2024'
                  },
                  {
                    title: 'Client Success Story',
                    desc: 'How we helped transform a leading industry player with innovative solutions',
                    date: 'February 2024'
                  },
                  {
                    title: 'Digital Innovation Award',
                    desc: 'Recognition for our outstanding contributions to digital transformation',
                    date: 'January 2024'
                  }
                ].map((news, index) => (
                  <div 
                    key={news.title} 
                    className="border-l-4 border-blue-300 pl-6 animate-enhanced-fade-in" 
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <span className="text-blue-300 text-sm">{news.date}</span>
                    <h3 className="font-semibold text-white text-xl mb-2 text-shimmer">{news.title}</h3>
                    <p className="text-gray-200">{news.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white animate-enhanced-fade-in text-shimmer">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Expertise',
                desc: 'Industry-leading digital solutions with proven success across multiple sectors. Our team brings years of experience to every project.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
                )
              },
              {
                title: 'Innovation',
                desc: 'Cutting-edge technology implementation for modern solutions. We stay ahead of the curve to bring you the latest advancements.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                )
              },
              {
                title: 'Support',
                desc: '24/7 dedicated customer service for peace of mind. Our support team is always ready to assist you with any questions or concerns.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                )
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="glass-effect p-8 rounded-2xl shadow-lg card-hover animate-enhanced-fade-in float-animation"
                style={{ 
                  animationDelay: `${0.6 + index * 0.1}s`,
                  animationDuration: `${6 + index}s`
                }}
              >
                <div className="text-blue-300 mb-6">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white text-shimmer">{feature.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Slider Section */}
      <section className="bg-gradient-to-b from-indigo-700 to-blue-900 py-16 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-enhanced-fade-in text-shimmer">
          Our Partners
        </h2>
        <div className="relative">
          {/* First Row - Moving Left */}
          <div className="flex space-x-12 animate-slide-left">
            {[...Array(6)].map((_, index) => (
              <div
                key={`partner1-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-36 h-12 bg-white/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
          
          {/* Second Row - Moving Right */}
          <div className="flex space-x-12 mt-8 animate-slide-right">
            {[...Array(6)].map((_, index) => (
              <div
                key={`partner2-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-36 h-12 bg-white/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Sections */}
      <section className="bg-gradient-to-b from-blue-600 via-indigo-700 to-gray-900 text-white py-24">
        {/* Digital Circuit Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full digital-pulse"
              style={{
                top: `${20 + i * 10}%`,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                animation: 'circuitFlow 4s infinite linear',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Mountain Transition to Footer */}
      <div className="relative h-24 bg-gradient-to-b from-gray-900 to-transparent overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1920 100" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-gray-900"
            d="M0,0 C320,100 660,80 980,60 C1320,40 1640,80 1920,0 L1920,100 L0,100 Z"
          />
        </svg>
      </div>
    </main>
  );
}
