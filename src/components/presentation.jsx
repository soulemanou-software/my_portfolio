import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaPlay, FaCode, FaPalette, FaRocket } from "react-icons/fa";
import { HiOutlineSparkles, HiLightningBolt, HiGlobe } from "react-icons/hi";
import Typed from 'typed.js';
import SocialIcons from "./SocialIcons";
import profileImage from "../assets/profile1.png";

const quickStats = [
  { value: "5+", label: "Years Coding", icon: FaCode },
  { value: "50+", label: "Projects Built", icon: FaRocket },
  { value: "3+", label: "Design Tools", icon: FaPalette },
];

const AfricanPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="heroPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="50" cy="50" r="2" fill="#D4A853" />
        <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="none" stroke="#D4A853" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#E07A5F" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#5C4033" strokeWidth="0.15" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#heroPattern)" />
  </svg>
);

const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-savanna-400"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `floating ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Presentation = () => {
  const typedRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const typed = new Typed(typedRef.current, {
      strings: [
        'Full-Stack Software Engineer',
        'UI/UX Designer',
        'Graphic Designer',
        'Product Builder',
        'Digital Storyteller'
      ],
      typeSpeed: 70,
      backSpeed: 45,
      backDelay: 1800,
      loop: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="landing"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-night-500 via-night-600 to-earth-900"
    >
      <AfricanPattern />
      <FloatingParticles />

      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-savanna-400/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-sunset-400/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-baobab-400/3 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-700/50 border border-earth-700/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-baobab-400 animate-pulse" />
              <span className="text-xs font-accent text-earth-300 uppercase tracking-wider">Available for opportunities</span>
            </div>

            <div className="chapter-indicator mb-4">
              <span>Prologue</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.08] mb-5">
              <span className="text-savanna-100 block">I build</span>
              <span className="african-mask-text block py-1">products</span>
              <span className="text-savanna-100 block">with designer taste.</span>
            </h1>

            <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl mb-6 flex-wrap">
              <div className="w-8 h-8 rounded-lg bg-savanna-400/10 flex items-center justify-center flex-shrink-0">
                <HiOutlineSparkles className="w-4 h-4 text-savanna-400" />
              </div>
              <span className="text-earth-400">I'm a</span>
              <span ref={typedRef} className="text-sunset-400 font-semibold" />
            </div>

            <p className="text-base sm:text-lg text-earth-300 max-w-lg leading-relaxed mb-8">
              Full-stack engineering with premium brand-level craft — blending African heritage,
              modern UI systems, and clean product thinking into experiences that feel alive.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#about" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-accent font-semibold hover:shadow-lg hover:shadow-savanna-400/25 transition-all duration-300">
                Explore My Story
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#Projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-earth-700/50 text-earth-200 font-accent hover:border-savanna-400/50 hover:text-savanna-400 transition-all duration-300">
                <FaPlay className="text-xs" />
                View Work
              </a>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <SocialIcons />
              <div className="hidden sm:block w-px h-8 bg-earth-700/30" />
              <div className="hidden sm:flex items-center gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading text-lg text-savanna-100">{stat.value}</div>
                    <div className="text-[10px] text-earth-500 font-accent uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] border border-savanna-400/10 rounded-full animate-spin" style={{ animationDuration: '40s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-savanna-400 rounded-full shadow-lg shadow-savanna-400/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-sunset-400 rounded-full shadow-lg shadow-sunset-400/50" />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] border border-sunset-400/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-baobab-400 rounded-full shadow-lg shadow-baobab-400/50" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-savanna-400 to-sunset-400 rounded-full blur-3xl opacity-25 scale-90" />
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-savanna-400 to-sunset-400 p-1">
                  <div className="w-full h-full rounded-full bg-night-600" />
                </div>
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-savanna-400/30">
                  <img src={profileImage} alt="Soulemanou Kunchiefuh Babanou" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-600/60 via-transparent to-transparent" />
                </div>
              </div>
              
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-5 py-2 bg-night-700/90 backdrop-blur-md border border-earth-700/30 rounded-full whitespace-nowrap shadow-xl">
                <span className="text-savanna-400 font-accent text-xs font-semibold flex items-center gap-2">
                  <HiLightningBolt className="w-3 h-3" />
                  Full-Stack • UI/UX • Brand
                </span>
              </div>

              <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 px-3 py-1.5 bg-baobab-400/20 border border-baobab-400/30 rounded-full">
                <span className="text-baobab-400 text-[10px] font-accent font-semibold flex items-center gap-1">
                  <HiGlobe className="w-3 h-3" />
                  Cameroon
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden grid grid-cols-3 gap-4 mt-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center p-3 rounded-xl bg-night-700/30 border border-earth-700/20">
              <stat.icon className="w-4 h-4 text-savanna-400 mx-auto mb-1" />
              <div className="font-heading text-lg text-savanna-100">{stat.value}</div>
              <div className="text-[9px] text-earth-500 font-accent uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-earth-400 text-xs font-accent tracking-wider uppercase">Scroll</span>
        <div className="w-5 h-8 border border-savanna-400/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-savanna-400 rounded-full animate-bounce" style={{ animationDuration: '1.5s' }} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-savanna-400/50 to-transparent" />
    </section>
  );
};

export default Presentation;