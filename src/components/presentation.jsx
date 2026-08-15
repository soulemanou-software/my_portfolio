import { useEffect, useRef, useState } from "react";
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
      cursorChar: '}',
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="landing"
      className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-night-500 via-night-600 to-earth-900"
    >
      <AfricanPattern />
      <FloatingParticles />

      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-savanna-400/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-sunset-400/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-baobab-400/3 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 pt-24 pb-16 mx-auto sm:px-6 lg:px-12 sm:pt-28 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-night-700/50 border-earth-700/30">
              <div className="w-2 h-2 rounded-full bg-baobab-400 animate-pulse" />
              <span className="text-xs tracking-wider uppercase font-accent text-earth-300">Available for opportunities</span>
            </div>

            <div className="mb-4 chapter-indicator">
              <span>Prologue</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-5">
              <span className="block text-savanna-100">I build</span>
              <span className="block py-1 african-mask-text">products</span>
              <span className="block text-savanna-100">with designer taste.</span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-6 text-base sm:text-lg sm:gap-3 md:text-xl lg:text-2xl">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-savanna-400/10">
                <HiOutlineSparkles className="w-4 h-4 text-savanna-400" />
              </div>
              <span className="text-earth-300">I&apos;m a</span>
              <span ref={typedRef} className="font-semibold text-sunset-400" />
            </div>

            <p className="max-w-lg mb-8 text-base leading-relaxed sm:text-lg text-earth-300">
              Full-stack engineering with premium brand-level craft — blending African heritage,
              modern UI systems, and clean product thinking into experiences that feel alive.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 rounded-full group bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-accent hover:shadow-lg hover:shadow-savanna-400/25">
                Explore My Story
                <FaArrowDown className="transition-transform group-hover:translate-y-1" />
              </a>
              <a href="#Projects" className="inline-flex items-center gap-2 px-6 py-3 transition-all duration-300 border rounded-full border-earth-700/50 text-earth-200 font-accent hover:border-savanna-400/50 hover:text-savanna-400">
                <FaPlay className="text-xs" />
                View Work
              </a>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <SocialIcons />
              <div className="hidden w-px h-8 sm:block bg-earth-700/30" />
              <div className="items-center hidden gap-4 sm:flex">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-heading text-savanna-100">{stat.value}</div>
                    <div className="text-[10px] text-earth-300 font-accent uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px] border border-savanna-400/10 rounded-full animate-spin" style={{ animationDuration: '40s' }}>
                <div className="absolute top-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg left-1/2 bg-savanna-400 shadow-savanna-400/50" />
                <div className="absolute bottom-0 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full shadow-lg left-1/2 bg-sunset-400 shadow-sunset-400/50" />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] md:w-[330px] md:h-[330px] lg:w-[350px] lg:h-[350px] border border-sunset-400/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute right-0 w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-baobab-400 shadow-baobab-400/50" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute inset-0 scale-90 rounded-full opacity-25 bg-gradient-to-br from-savanna-400 to-sunset-400 blur-3xl" />
              <div className="relative">
                <div className="absolute inset-0 p-1 rounded-full bg-gradient-to-br from-savanna-400 to-sunset-400">
                  <div className="w-full h-full rounded-full bg-night-600" />
                </div>
                <div className="relative w-48 h-48 overflow-hidden border-2 rounded-full sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 border-savanna-400/30">
                  <img src={profileImage} alt="Soulemanou Kunchiefuh Babanou" className="object-cover object-center w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-600/60 via-transparent to-transparent" />
                </div>
              </div>
              
              <div className="absolute px-3 sm:px-5 py-1.5 sm:py-2 -translate-x-1/2 border rounded-full shadow-xl -bottom-2 left-1/2 bg-night-700/90 backdrop-blur-md border-earth-700/30 whitespace-nowrap max-w-[90vw]">
                <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-savanna-400 font-accent">
                  <HiLightningBolt className="w-3 h-3" />
                  Full-Stack • UI/UX • Brand
                </span>
              </div>

              <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 z-20 px-3 py-1.5 bg-baobab-400/20 border border-baobab-400/30 rounded-full">
                <span className="text-baobab-400 text-[10px] font-accent font-semibold flex items-center gap-1">
                  <HiGlobe className="w-3 h-3" />
                  Cameroon
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 sm:hidden">
          {quickStats.map((stat, index) => (
            <div key={index} className="p-3 text-center border rounded-xl bg-night-700/30 border-earth-700/20">
              <stat.icon className="w-4 h-4 mx-auto mb-1 text-savanna-400" />
              <div className="text-lg font-heading text-savanna-100">{stat.value}</div>
              <div className="text-[9px] text-earth-300 font-accent uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute flex-col items-center hidden gap-2 -translate-x-1/2 bottom-8 left-1/2 sm:flex">
        <span className="text-xs tracking-wider uppercase text-earth-300 font-accent">Scroll</span>
        <div className="w-5 h-8 border border-savanna-400/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-savanna-400 animate-bounce" style={{ animationDuration: '1.5s' }} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-savanna-400/50 to-transparent" />
    </section>
  );
};

export default Presentation;