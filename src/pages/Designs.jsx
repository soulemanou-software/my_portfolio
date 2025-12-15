import { useEffect, useState } from 'react';
import Gallery from '../components/gallery';
import { HiPhotograph, HiSparkles, HiEye, HiColorSwatch, HiCube } from 'react-icons/hi';
import { FaPalette, FaPaintBrush, FaLayerGroup } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const designStats = [
  { value: "38+", label: "Design Works", icon: HiColorSwatch },
  { value: "5+", label: "Brand Identities", icon: HiCube },
  { value: "3+", label: "Years Designing", icon: HiSparkles },
];

const designTools = [
  { name: "Figma", icon: FaLayerGroup },
  { name: "Adobe Suite", icon: FaPaintBrush },
  { name: "Photoshop", icon: FaPalette },
];

const designCategories = [
  { name: "All", count: 38 },
  { name: "Logos", count: 12 },
  { name: "Posters", count: 8 },
  { name: "Social Media", count: 10 },
  { name: "Branding", count: 8 },
];

const Designs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-night-500 via-earth-900/20 to-night-600">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="designPagePattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#E07A5F" />
              <path d="M20 40 L40 20 L60 40 L40 60 Z" fill="none" stroke="#D4A853" strokeWidth="0.3" />
              <circle cx="40" cy="40" r="25" fill="none" stroke="#5C4033" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#designPagePattern)" />
        </svg>
      </div>

      <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-sunset-400/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 -right-20 w-[300px] h-[300px] bg-savanna-400/5 rounded-full blur-[100px]" />

      <div className="relative z-10 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-2 text-earth-400 text-sm mb-8">
            <Link to="/" className="hover:text-savanna-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-savanna-400">Design Gallery</span>
          </div>

          <div className={`mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="chapter-indicator mb-4">
                  <span>Creative Gallery</span>
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-savanna-100 mb-4">
                  Design <span className="african-mask-text">Portfolio</span>
                </h1>
                <p className="text-earth-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                  A visual journey through my creative work — from brand identities to digital illustrations, 
                  each piece tells a unique story rooted in African aesthetics and modern design principles.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-400/10 border border-sunset-400/30 rounded-full">
                    <HiEye className="w-4 h-4 text-sunset-400" />
                    <span className="text-sunset-400 font-accent text-sm">Click any image to view full size</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-earth-500 font-accent uppercase tracking-wider">Tools:</span>
                  <div className="flex items-center gap-2">
                    {designTools.map((tool, index) => (
                      <div 
                        key={index}
                        className="w-9 h-9 rounded-lg bg-night-700/50 border border-earth-700/30 flex items-center justify-center text-earth-400 hover:text-savanna-400 hover:border-savanna-400/30 transition-all"
                        title={tool.name}
                      >
                        <tool.icon className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {designStats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center p-5 rounded-2xl bg-night-700/30 border border-earth-700/20 hover:border-savanna-400/30 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <stat.icon className="w-6 h-6 text-savanna-400 mx-auto mb-3" />
                    <div className="font-heading text-2xl sm:text-3xl text-savanna-100 mb-1">{stat.value}</div>
                    <div className="text-xs text-earth-400 font-accent">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap items-center gap-2">
              {designCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full font-accent text-sm transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-semibold' 
                      : 'bg-night-700/30 border border-earth-700/30 text-earth-300 hover:border-savanna-400/30 hover:text-savanna-400'
                  }`}
                >
                  {category.name}
                  <span className={`ml-1.5 text-xs ${index === 0 ? 'text-night-600/60' : 'text-earth-500'}`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={`bg-night-700/20 backdrop-blur-sm border border-earth-700/20 rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sunset-400/10 border border-sunset-400/30 flex items-center justify-center">
                  <HiPhotograph className="w-5 h-5 text-sunset-400" />
                </div>
                <div>
                  <h2 className="font-heading text-lg text-savanna-100">All Designs</h2>
                  <p className="text-xs text-earth-400">38 creative works</p>
                </div>
              </div>
            </div>

            <Gallery />
          </div>

          <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-earth-400 text-sm mb-4">Want to see more or discuss a project?</p>
            <Link 
              to="/#Contacts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-accent font-semibold hover:shadow-lg hover:shadow-savanna-400/20 transition-all"
            >
              <HiSparkles className="w-4 h-4" />
              Let's Create Together
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-savanna-400/30 to-transparent" />
    </div>
  );
};

export default Designs;