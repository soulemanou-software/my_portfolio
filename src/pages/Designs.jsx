import { useEffect, useState } from 'react';
import Gallery from '../components/gallery';
import { HiPhotograph, HiSparkles, HiEye, HiColorSwatch, HiCube } from 'react-icons/hi';
import { FaPalette, FaPaintBrush, FaLayerGroup } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import allDesigns from '../components/Api/DesignsData';

// Category mapping - which design IDs belong to each category
const categoryMapping = {
  "All": null,
  "Logos": [1, 2, 3, 4, 5, 7, 13, 28, 29, 34, 35, 36],
  "Posters": [8, 9, 10, 11, 16, 17, 30, 31],
  "Social Media": [12, 14, 15, 18, 19, 20, 23, 37, 38, 27],
  "Branding": [21, 22, 24, 25, 26, 32, 33, 6],
};

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
  { name: "All", count: allDesigns.length },
  { name: "Logos", count: categoryMapping["Logos"].length },
  { name: "Posters", count: categoryMapping["Posters"].length },
  { name: "Social Media", count: categoryMapping["Social Media"].length },
  { name: "Branding", count: categoryMapping["Branding"].length },
];

const Designs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter designs based on active category
  const filteredDesigns = activeCategory === "All" 
    ? allDesigns 
    : allDesigns.filter(design => categoryMapping[activeCategory]?.includes(design.id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-night-500 via-earth-900/20 to-night-600">
      {/* African Spiritual Mask Pattern Background */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="africanMaskPattern" x="0" y="0" width="200" height="240" patternUnits="userSpaceOnUse">
              {/* Spiritual Mask Face */}
              <path d="M100 20 Q130 40 135 80 Q140 120 130 160 Q120 200 100 220 Q80 200 70 160 Q60 120 65 80 Q70 40 100 20" fill="none" stroke="#D4A853" strokeWidth="0.6" />
              {/* Mask Eyes - Spiritual almond eyes */}
              <ellipse cx="80" cy="90" rx="15" ry="8" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
              <ellipse cx="120" cy="90" rx="15" ry="8" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
              <circle cx="80" cy="90" r="4" fill="none" stroke="#D4A853" strokeWidth="0.3" />
              <circle cx="120" cy="90" r="4" fill="none" stroke="#D4A853" strokeWidth="0.3" />
              {/* Nose - Triangular tribal style */}
              <path d="M100 95 L95 130 L100 135 L105 130 Z" fill="none" stroke="#5C4033" strokeWidth="0.4" />
              {/* Mouth - Stylized lips */}
              <path d="M85 155 Q100 165 115 155" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
              <path d="M90 160 Q100 170 110 160" fill="none" stroke="#D4A853" strokeWidth="0.3" />
              {/* Forehead markings - Tribal scarification */}
              <path d="M85 50 L100 35 L115 50" fill="none" stroke="#D4A853" strokeWidth="0.4" />
              <path d="M90 60 L100 50 L110 60" fill="none" stroke="#E07A5F" strokeWidth="0.3" />
              <circle cx="100" cy="65" r="3" fill="none" stroke="#D4A853" strokeWidth="0.3" />
              {/* Cheek markings - Traditional scarification lines */}
              <path d="M55 100 L70 95 L55 90" fill="none" stroke="#5C4033" strokeWidth="0.3" />
              <path d="M55 110 L70 105 L55 100" fill="none" stroke="#5C4033" strokeWidth="0.3" />
              <path d="M145 100 L130 95 L145 90" fill="none" stroke="#5C4033" strokeWidth="0.3" />
              <path d="M145 110 L130 105 L145 100" fill="none" stroke="#5C4033" strokeWidth="0.3" />
              {/* Decorative dots around mask */}
              <circle cx="60" cy="70" r="2" fill="#D4A853" opacity="0.5" />
              <circle cx="140" cy="70" r="2" fill="#D4A853" opacity="0.5" />
              <circle cx="50" cy="130" r="2" fill="#E07A5F" opacity="0.5" />
              <circle cx="150" cy="130" r="2" fill="#E07A5F" opacity="0.5" />
              <circle cx="70" cy="190" r="2" fill="#D4A853" opacity="0.5" />
              <circle cx="130" cy="190" r="2" fill="#D4A853" opacity="0.5" />
            </pattern>
            {/* Kente-inspired geometric border pattern */}
            <pattern id="kenteStripe" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="10" height="8" fill="#D4A853" opacity="0.3" />
              <rect x="10" y="0" width="10" height="8" fill="#E07A5F" opacity="0.3" />
              <rect x="20" y="0" width="10" height="8" fill="#5C4033" opacity="0.3" />
              <rect x="30" y="0" width="10" height="8" fill="#D4A853" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#africanMaskPattern)" />
        </svg>
      </div>

      {/* Floating Spiritual Mask Decorations */}
      <div className="absolute top-20 left-10 w-32 h-40 opacity-[0.08] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 120" className="w-full h-full">
          <ellipse cx="50" cy="60" rx="35" ry="50" fill="none" stroke="#D4A853" strokeWidth="1.5" />
          <ellipse cx="35" cy="50" rx="10" ry="6" fill="none" stroke="#E07A5F" strokeWidth="1" />
          <ellipse cx="65" cy="50" rx="10" ry="6" fill="none" stroke="#E07A5F" strokeWidth="1" />
          <path d="M50 55 L45 80 L50 85 L55 80 Z" fill="none" stroke="#5C4033" strokeWidth="1" />
          <path d="M35 95 Q50 105 65 95" fill="none" stroke="#E07A5F" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-10 w-28 h-36 opacity-[0.06] pointer-events-none hidden lg:block rotate-12">
        <svg viewBox="0 0 100 120" className="w-full h-full">
          <ellipse cx="50" cy="60" rx="35" ry="50" fill="none" stroke="#E07A5F" strokeWidth="1.5" />
          <ellipse cx="35" cy="50" rx="10" ry="6" fill="none" stroke="#D4A853" strokeWidth="1" />
          <ellipse cx="65" cy="50" rx="10" ry="6" fill="none" stroke="#D4A853" strokeWidth="1" />
          <path d="M50 55 L45 80 L50 85 L55 80 Z" fill="none" stroke="#D4A853" strokeWidth="1" />
          <path d="M35 95 Q50 105 65 95" fill="none" stroke="#5C4033" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-sunset-400/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 -right-20 w-[300px] h-[300px] bg-savanna-400/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-1/3 w-[250px] h-[250px] bg-baobab-400/5 rounded-full blur-[80px]" />

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
              {designCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full font-accent text-sm transition-all duration-300 ${
                    activeCategory === category.name 
                      ? 'bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-semibold' 
                      : 'bg-night-700/30 border border-earth-700/30 text-earth-300 hover:border-savanna-400/30 hover:text-savanna-400'
                  }`}
                >
                  {category.name}
                  <span className={`ml-1.5 text-xs ${activeCategory === category.name ? 'text-night-600/60' : 'text-earth-500'}`}>
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
                  <h2 className="font-heading text-lg text-savanna-100">{activeCategory} Designs</h2>
                  <p className="text-xs text-earth-400">{filteredDesigns.length} creative works</p>
                </div>
              </div>
            </div>

            <Gallery data={filteredDesigns} />
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