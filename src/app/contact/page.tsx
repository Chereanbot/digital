'use client';

import Image from 'next/image';

export default function ContactPage() {
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
            
            {/* Mountain Details */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  bottom: `${20 + i * 10}%`,
                  transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                  opacity: 0.1 + i * 0.1,
                  animation: 'lineSlide 3s infinite',
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Enhanced Particle System */}
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

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-enhanced-fade-in text-shimmer text-glow">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-enhanced-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in touch with us to discuss how we can help transform your digital presence
          </p>
        </div>

        {/* Wave Separator */}
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

      {/* Contact Information Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        {/* Mountain Side Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Mountain */}
          <div className="absolute -left-[10%] bottom-0 w-[60%] h-[80%] bg-gradient-to-tr from-white/5 to-white/10 transform -skew-x-12"></div>
          {/* Right Mountain */}
          <div className="absolute -right-[10%] bottom-0 w-[60%] h-[70%] bg-gradient-to-tr from-white/5 to-white/10 transform skew-x-12"></div>
          {/* Mountain Lines */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                bottom: `${5 + i * 8}%`,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                opacity: 0.05 + i * 0.05,
                animation: 'lineSlide 4s infinite linear',
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow animate-enhanced-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-8 gradient-text text-shimmer">Send us a Message</h2>
              <form className="space-y-6">
                <div className="animate-enhanced-fade-in" style={{ animationDelay: '0.3s' }}>
                  <label className="block text-gray-100 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors hover:bg-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div className="animate-enhanced-fade-in" style={{ animationDelay: '0.4s' }}>
                  <label className="block text-gray-100 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors hover:bg-white/10"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="animate-enhanced-fade-in" style={{ animationDelay: '0.5s' }}>
                  <label className="block text-gray-100 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors hover:bg-white/10 h-32 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="w-full bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 button-glow animate-enhanced-fade-in" style={{ animationDelay: '0.6s' }}>
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Location */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow hover-lift animate-enhanced-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-white text-shimmer">Office Location</h3>
                </div>
                <p className="text-gray-100">
                  Bole, Addis Ababa, Ethiopia
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow hover-lift animate-enhanced-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-white text-shimmer">Contact Details</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-100 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    +251 911 123 456
                  </p>
                  <p className="text-gray-100 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    info@digitalaksumite.com
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl enhanced-shadow hover-lift animate-enhanced-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-white text-shimmer">Follow Us</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-100 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.819.896.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 