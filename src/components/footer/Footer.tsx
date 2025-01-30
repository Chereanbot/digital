'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Enhanced Mountain Structure */}
      <div className="absolute top-0 left-0 right-0 h-[400px] overflow-hidden">
        {/* Front Mountain Range */}
        <div className="absolute bottom-0 w-full h-[70%]">
          {/* Main Mountains */}
          {[
            { left: '0%', width: '40%', height: '100%', skew: '-20deg', color: 'from-blue-900 to-gray-900', delay: '0s' },
            { left: '35%', width: '35%', height: '90%', skew: '15deg', color: 'from-blue-800 to-gray-900', delay: '0.2s' },
            { left: '60%', width: '40%', height: '95%', skew: '-18deg', color: 'from-blue-900 to-gray-900', delay: '0.4s' }
          ].map((mountain, index) => (
            <div
              key={`main-mountain-${index}`}
              className="absolute bottom-0 animate-mountain-rise mountain-glow"
              style={{
                left: mountain.left,
                width: mountain.width,
                height: mountain.height,
                transform: `skew(${mountain.skew})`,
                background: `linear-gradient(to bottom, transparent, var(--tw-gradient-from), var(--tw-gradient-to))`,
                animationDelay: mountain.delay,
                clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'
              }}
            >
              {/* Mountain Details */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`detail-${i}`}
                    className="mountain-detail-line"
                    style={{
                      top: `${20 + i * 15}%`,
                      transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 2}deg)`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Background Mountain Range */}
        <div className="absolute bottom-0 w-full h-[60%]">
          {[
            { left: '10%', width: '30%', height: '80%', skew: '-15deg', opacity: 0.4 },
            { left: '45%', width: '25%', height: '70%', skew: '12deg', opacity: 0.3 },
            { left: '75%', width: '30%', height: '75%', skew: '-10deg', opacity: 0.35 }
          ].map((mountain, index) => (
            <div
              key={`bg-mountain-${index}`}
              className="absolute bottom-0 mountain-float"
              style={{
                left: mountain.left,
                width: mountain.width,
                height: mountain.height,
                transform: `skew(${mountain.skew})`,
                opacity: mountain.opacity,
                background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgba(17, 24, 39, 0.3))',
                clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'
              }}
            />
          ))}
        </div>

        {/* Snow Caps */}
        <div className="absolute bottom-[60%] w-full">
          {[
            { left: '15%', width: '20px', blur: '10px' },
            { left: '45%', width: '30px', blur: '15px' },
            { left: '75%', width: '25px', blur: '12px' }
          ].map((cap, index) => (
            <div
              key={`snow-${index}`}
              className="absolute h-[2px] bg-blue-200/50 snow-cap-shimmer"
              style={{
                left: cap.left,
                width: cap.width,
                filter: `blur(${cap.blur})`,
                animationDelay: `${index * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Mountain Mist */}
        <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-gray-900 via-blue-900/20 to-transparent mist-flow">
          {/* Additional Mist Layers */}
          {[...Array(3)].map((_, index) => (
            <div
              key={`mist-${index}`}
              className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent mist-flow"
              style={{
                animationDelay: `${index * 2}s`,
                transform: `translateY(${index * 20}%)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Upper Mountain Layer with Aksumite Elements */}
      <div className="absolute top-0 left-0 right-0 h-[300px] overflow-hidden">
        {/* Upper Mountain Peaks */}
        <div className="absolute top-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* Layered Upper Mountains */}
            {[
              { skew: '-12deg', height: '60%', opacity: '0.15', delay: '0s' },
              { skew: '8deg', height: '70%', opacity: '0.2', delay: '0.2s' },
              { skew: '-15deg', height: '50%', opacity: '0.1', delay: '0.4s' }
            ].map((mountain, index) => (
              <div
                key={`upper-mountain-${index}`}
                className="absolute top-0 w-full animate-mountain-rise"
                style={{
                  height: mountain.height,
                  transform: `skew(${mountain.skew})`,
                  background: `linear-gradient(to bottom, rgba(59, 130, 246, ${mountain.opacity}), transparent)`,
                  animationDelay: mountain.delay
                }}
              />
            ))}
          </div>
        </div>

        {/* Upper Aksumite Symbols */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={`symbol-${i}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
                width: '40px',
                height: '40px',
                opacity: 0.2,
                background: `linear-gradient(45deg, #3b82f6, #4f46e5)`,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                animation: `float ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Connecting Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-[1px] w-full"
              style={{
                top: `${20 + i * 10}%`,
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                animation: 'lineSlide 3s infinite linear',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mountain Transition Effect */}
      <div className="absolute top-[150px] left-0 right-0 h-[200px] overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1920 200" preserveAspectRatio="none">
          <path 
            fill="rgba(59, 130, 246, 0.1)"
            d="M0,0 L1920,0 L1920,200 Q960,100 0,200 Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,0 L1920,0 L1920,200 Q960,100 0,200 Z;
                M0,0 L1920,0 L1920,200 Q960,150 0,200 Z;
                M0,0 L1920,0 L1920,200 Q960,100 0,200 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Connecting Decorative Elements */}
      <div className="absolute top-[250px] left-0 right-0 h-[100px] overflow-hidden">
        {/* Aksumite Pattern */}
        <div className="absolute inset-0 flex justify-around items-center">
          {[...Array(7)].map((_, i) => (
            <div
              key={`pattern-${i}`}
              className="relative"
              style={{
                animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              {/* Aksumite Cross */}
              <div 
                className="w-8 h-8 rotate-45 relative"
                style={{
                  background: `linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(79, 70, 229, 0.3))`,
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="absolute inset-0 border-2 border-blue-500/20"></div>
              </div>
              {/* Connecting Lines */}
              <div className="absolute top-full left-1/2 w-[1px] h-20 -translate-x-1/2"
                   style={{
                     background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), transparent)'
                   }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Mountain Background with Aksumite Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] overflow-hidden">
        {/* Additional Mountain Layers */}
        <div className="absolute top-0 left-0 right-0 h-full">
          {/* Parallax Mountain Layers */}
          {[
            { height: '40%', opacity: 0.1, skew: -6, delay: 0 },
            { height: '50%', opacity: 0.15, skew: 4, delay: 0.2 },
            { height: '45%', opacity: 0.1, skew: -8, delay: 0.4 }
          ].map((layer, index) => (
            <div
              key={`mountain-layer-${index}`}
              className="absolute bottom-0 left-0 right-0 animate-mountain-rise"
              style={{
                height: layer.height,
                background: `linear-gradient(to bottom, transparent, rgba(59, 130, 246, ${layer.opacity}))`,
                transform: `skewY(${layer.skew}deg)`,
                animationDelay: `${layer.delay}s`
              }}
            />
          ))}
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/30 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Mountain Silhouettes */}
        <div className="absolute bottom-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* Layered Mountains with Enhanced Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-gray-900 via-blue-900/50 to-transparent transform -skew-y-6"></div>
            
            {/* Enhanced Aksumite Obelisk Silhouettes with Dynamic Glow */}
            {[
              { left: '10%', width: '20px', height: '80px', delay: '0s', glow: 'blue' },
              { left: '25%', width: '24px', height: '100px', delay: '0.2s', glow: 'indigo' },
              { left: '40%', width: '32px', height: '120px', delay: '0.4s', glow: 'blue' },
              { left: '50%', width: '40px', height: '160px', delay: '0.6s', glow: 'purple' },
              { left: '60%', width: '32px', height: '120px', delay: '0.8s', glow: 'blue' },
              { left: '75%', width: '24px', height: '100px', delay: '1s', glow: 'indigo' },
              { left: '90%', width: '20px', height: '80px', delay: '1.2s', glow: 'blue' }
            ].map((obelisk, index) => (
              <div
                key={index}
                className="absolute bottom-0 obelisk-glow"
                style={{
                  left: obelisk.left,
                  width: obelisk.width,
                  height: obelisk.height,
                  transform: 'translateX(-50%)',
                  animationDelay: obelisk.delay,
                  background: `linear-gradient(to top, #1a365d, ${obelisk.glow === 'blue' ? '#3b82f6' : obelisk.glow === 'indigo' ? '#4f46e5' : '#9333ea'})`
                }}
              >
                {/* Enhanced Obelisk Top Design */}
                <div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                  style={{
                    borderLeft: `${parseInt(obelisk.width) * 0.4}px solid transparent`,
                    borderRight: `${parseInt(obelisk.width) * 0.4}px solid transparent`,
                    borderBottom: `${parseInt(obelisk.width) * 0.8}px solid ${obelisk.glow === 'blue' ? '#3b82f6' : obelisk.glow === 'indigo' ? '#4f46e5' : '#9333ea'}`
                  }}
                ></div>
              </div>
            ))}

            {/* Enhanced Digital Circuit Lines */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] digital-pulse"
                style={{
                  top: `${10 + i * 5}%`,
                  left: '0',
                  right: '0',
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(99, 102, 241, 0.4)'}, transparent)`,
                  transform: `translateY(${i * 5}px) ${i % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)'}`,
                  animation: 'circuitFlow 4s infinite linear',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Footer Content with Home-style Gradients */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-gray-900/90 to-gray-900 pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Decorative Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={`circuit-${i}`}
                className="absolute w-[1px] h-[100px]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  background: 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
                  opacity: 0.3
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            {/* Enhanced Logo and Info Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6 group">
                <div className="relative w-24 h-24 mr-4 transform transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                  <Image
                    src="/image.png"
                    alt="Digital Aksumite"
                    fill
                    className="object-contain animate-logo-float drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  />
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Digital Aksumite
                </h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Bridging ancient wisdom with modern technology. We transform businesses through innovative digital solutions, bringing the spirit of Aksum into the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { text: 'Innovation', color: 'blue' },
                  { text: 'Technology', color: 'purple' },
                  { text: 'Excellence', color: 'indigo' }
                ].map((tag) => (
                  <span 
                    key={tag.text}
                    className={`px-4 py-2 bg-${tag.color}-600/20 rounded-full text-${tag.color}-400 text-sm border border-${tag.color}-500/20 hover:bg-${tag.color}-600/30 transition-all duration-300 cursor-default group`}
                  >
                    <span className="relative inline-block">
                      {tag.text}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-${tag.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Links with Home-style Animations */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>
              <h4 className="text-xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      <span className="relative overflow-hidden">
                        {link}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Info with Home-style Effects */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0"></div>
              <h4 className="text-xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Contact Us
              </h4>
              <ul className="space-y-6 text-gray-300">
                {[
                  { icon: '📧', text: 'Digital.aksumite@gmail.com', color: 'blue' },
                  { icon: '📱', text: '+251 912 345 678', color: 'purple' },
                  { icon: '📍', text: 'Addis Ababa, Ethiopia', color: 'indigo' }
                ].map((contact, index) => (
                  <li key={index} className="flex items-center space-x-4 group hover:text-white transition-colors duration-300">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-full bg-${contact.color}-600/20 group-hover:bg-${contact.color}-600/30 transition-all duration-300 transform group-hover:scale-110`}>
                      <span className="text-2xl">{contact.icon}</span>
                    </span>
                    <span className="relative overflow-hidden group-hover:translate-x-2 transition-transform duration-300">
                      {contact.text}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-${contact.color}-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Enhanced Social Links with Home-style Gradients */}
              <div className="flex space-x-4 mt-8">
                {[
                  { name: 'facebook', gradient: 'from-blue-600 via-blue-700 to-blue-800' },
                  { name: 'twitter', gradient: 'from-blue-400 via-blue-500 to-blue-600' },
                  { name: 'linkedin', gradient: 'from-blue-700 via-blue-800 to-blue-900' },
                  { name: 'instagram', gradient: 'from-purple-500 via-pink-500 to-purple-600' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={`#${social.name}`}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 group relative overflow-hidden`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-6 h-6 text-white opacity-80 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Bar with Home-style Elements */}
          <div className="mt-16 pt-8 border-t border-gray-800/50 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="text-center">
              <p className="text-gray-400 relative inline-block group">
                <span className="animate-pulse">
                  &copy; {new Date().getFullYear()} Digital Aksumite. All rights reserved.
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes circuitFlow {
          0% {
            transform: translateX(-100%) var(--rotate);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) var(--rotate);
            opacity: 0;
          }
        }

        @keyframes mountainGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.5));
          }
        }

        @keyframes snowCapShimmer {
          0% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-2px);
          }
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
        }

        @keyframes mistFlow {
          0% {
            transform: translateX(-5%);
            opacity: 0.1;
          }
          50% {
            transform: translateX(5%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(-5%);
            opacity: 0.1;
          }
        }

        .mountain-glow {
          animation: mountainGlow 4s ease-in-out infinite;
        }

        .snow-cap-shimmer {
          animation: snowCapShimmer 3s ease-in-out infinite;
        }

        .mist-flow {
          animation: mistFlow 10s ease-in-out infinite;
        }

        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
        }

        @keyframes mountainFloat {
          0%, 100% {
            transform: translateY(0) skewY(var(--skew));
          }
          50% {
            transform: translateY(-10px) skewY(var(--skew));
          }
        }

        .mountain-float {
          animation: mountainFloat 10s ease-in-out infinite;
          --skew: -6deg;
        }

        @keyframes shimmerEffect {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(59, 130, 246, 0.1) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmerEffect 2s infinite linear;
        }

        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        /* Mountain Detail Lines */
        .mountain-detail-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.2),
            transparent
          );
          transform-origin: left;
          animation: lineFlow 3s infinite ease-in-out;
        }

        @keyframes lineFlow {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1);
            opacity: 0.5;
          }
          100% {
            transform: scaleX(0);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
} 