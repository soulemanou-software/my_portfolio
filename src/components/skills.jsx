import { useEffect, useRef, useState } from "react";
import { HiCode, HiColorSwatch, HiPencil, HiLightningBolt, HiDatabase, HiCube, HiChip, HiGlobe, HiSparkles, HiAcademicCap } from "react-icons/hi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const skillStats = [
  { value: "15+", label: "Technologies", icon: HiChip },
  { value: "5+", label: "Years Learning", icon: HiAcademicCap },
  { value: "3", label: "Disciplines", icon: HiSparkles },
  { value: "∞", label: "Curiosity", icon: HiGlobe },
];

const skillCategories = [
  {
    id: "development",
    title: "Engineering",
    subtitle: "The Builder's Craft",
    icon: HiCode,
    color: "savanna",
    quote: "Code is poetry that machines can read.",
    description: "Full-stack systems built with precision — from database to deployment.",
    skills: [
      { name: "Frontend", level: 95, icon: FaReact },
      { name: "Backend", level: 90, icon: FaNodeJs },
      { name: "Database", level: 85, icon: SiMongodb },
      { name: "TypeScript", level: 88, icon: SiTypescript },
    ],
    highlights: ["React/Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: "design",
    title: "UI/UX",
    subtitle: "The Artist's Vision",
    icon: HiColorSwatch,
    color: "sunset",
    quote: "Design is not what it looks like, it's how it works.",
    description: "Interfaces that feel inevitable — user-centered and conversion-focused.",
    skills: [
      { name: "Interface", level: 95, icon: FaFigma },
      { name: "Experience", level: 90, icon: HiSparkles },
      { name: "Systems", level: 88, icon: SiTailwindcss },
      { name: "Prototyping", level: 92, icon: HiCube },
    ],
    highlights: ["Figma", "User Research", "Design Systems", "Prototyping"]
  },
  {
    id: "graphic",
    title: "Branding",
    subtitle: "The Visual Storyteller",
    icon: HiPencil,
    color: "baobab",
    quote: "A brand is a story always being told.",
    description: "Brand identities that resonate and visuals that captivate.",
    skills: [
      { name: "Identity", level: 93, icon: SiAdobeillustrator },
      { name: "Graphics", level: 95, icon: SiAdobephotoshop },
      { name: "Print", level: 88, icon: HiColorSwatch },
      { name: "Digital", level: 90, icon: HiGlobe },
    ],
    highlights: ["Logo Design", "Brand Guidelines", "Social Media", "Print"]
  }
];

const coreValueStyles = {
  savanna: {
    border: "hover:border-savanna-400/40",
    iconWrapper: "bg-savanna-400/10 border-savanna-400/30",
    icon: "text-savanna-400"
  },
  sunset: {
    border: "hover:border-sunset-400/40",
    iconWrapper: "bg-sunset-400/10 border-sunset-400/30",
    icon: "text-sunset-400"
  },
  baobab: {
    border: "hover:border-baobab-400/40",
    iconWrapper: "bg-baobab-400/10 border-baobab-400/30",
    icon: "text-baobab-400"
  },
};

const coreValues = [
  { 
    icon: HiLightningBolt, 
    name: "Performance First", 
    description: "Every millisecond matters. I obsess over speed.",
    color: "savanna"
  },
  { 
    icon: HiDatabase, 
    name: "Built to Scale", 
    description: "Architecture that grows with your ambitions.",
    color: "sunset"
  },
  { 
    icon: HiCube, 
    name: "Clean & Elegant", 
    description: "Code that future-you will thank you for.",
    color: "baobab"
  },
];

const colorStyles = {
  savanna: {
    border: "border-savanna-400/30 hover:border-savanna-400/50",
    icon: "text-savanna-400 bg-savanna-400/10 border-savanna-400/30",
    bar: "from-savanna-400 to-savanna-300",
    glow: "group-hover:shadow-savanna-400/10",
  },
  sunset: {
    border: "border-sunset-400/30 hover:border-sunset-400/50",
    icon: "text-sunset-400 bg-sunset-400/10 border-sunset-400/30",
    bar: "from-sunset-400 to-sunset-300",
    glow: "group-hover:shadow-sunset-400/10",
  },
  baobab: {
    border: "border-baobab-400/30 hover:border-baobab-400/50",
    icon: "text-baobab-400 bg-baobab-400/10 border-baobab-400/30",
    bar: "from-baobab-400 to-baobab-300",
    glow: "group-hover:shadow-baobab-400/10",
  },
};

const CircularProgress = ({ level, icon: Icon, name, color, delay }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(level), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  const colorClass = colorStyles[color]?.icon.split(' ')[0] || 'text-savanna-400';

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-night-700" />
          <circle
            cx="32" cy="32" r={radius}
            fill="none" stroke="currentColor" strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`${colorClass} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClass}`} />
        </div>
      </div>
      <span className="text-xs text-earth-300 mt-2 font-accent">{name}</span>
      <span className={`text-sm font-bold ${colorClass}`}>{level}%</span>
    </div>
  );
};

const SkillCard = ({ category, index, isVisible }) => {
  const styles = colorStyles[category.color];

  return (
    <div
      className={`group relative bg-night-700/30 backdrop-blur-sm border ${styles.border} rounded-2xl p-5 sm:p-6 transition-all duration-700 hover:shadow-xl ${styles.glow} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl ${styles.icon} border flex items-center justify-center`}>
            <category.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl text-savanna-100">{category.title}</h3>
            <span className="text-xs text-earth-400 font-accent uppercase tracking-wider">{category.subtitle}</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-earth-300 mb-4 leading-relaxed">{category.description}</p>
      
      <div className="p-3 rounded-xl bg-night-600/30 border-l-2 border-earth-700/50 mb-6">
        <p className="text-xs text-earth-400 italic">&ldquo;{category.quote}&rdquo;</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {category.skills.map((skill, idx) => (
          <CircularProgress 
            key={idx} 
            {...skill} 
            color={category.color}
            delay={idx * 150 + index * 200} 
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {category.highlights.map((item, idx) => (
          <span
            key={idx}
            className="text-[10px] sm:text-xs px-2 py-1 bg-night-600/50 text-earth-300 rounded-full border border-earth-700/30"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-b from-night-600 via-earth-900/20 to-night-600"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skillsPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#D4A853" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#D4A853" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="35" fill="none" stroke="#E07A5F" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skillsPattern)" />
        </svg>
      </div>

      <div className="absolute top-40 -left-20 w-80 h-80 bg-savanna-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-sunset-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="chapter-indicator justify-center mb-6">
            <span>Chapter 03</span>
          </div>
          <h2 className="section-title-pattern mb-4">My Craftsmanship</h2>
          <p className="section-subtitle max-w-2xl mx-auto mb-10">
            Three disciplines, one mission — building digital experiences 
            that are as beautiful as they are functional.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {skillStats.map((stat, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl bg-night-700/30 border border-earth-700/30 transition-all duration-500 hover:border-savanna-400/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-5 h-5 text-savanna-400 mx-auto mb-2" />
                <div className="font-heading text-2xl text-savanna-100">{stat.value}</div>
                <div className="text-xs text-earth-400 font-accent">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-earth-700/50" />
            <h3 className="font-heading text-xl sm:text-2xl text-savanna-100">Core Principles</h3>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-earth-700/50" />
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {coreValues.map((value, index) => {
              const styles = coreValueStyles[value.color];
              return (
                <div
                  key={index}
                  className={`group p-5 sm:p-6 bg-night-700/30 rounded-xl border border-earth-700/30 ${styles.border} transition-all duration-300 text-center`}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${styles.iconWrapper} border flex items-center justify-center`}>
                    <value.icon className={`w-7 h-7 ${styles.icon}`} />
                  </div>
                  <h4 className="font-heading text-lg text-savanna-100 mb-2">{value.name}</h4>
                  <p className="text-sm text-earth-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-earth-400 text-sm mb-4">Ready to see these skills in action?</p>
          <a href="#Projects" className="btn-african inline-flex items-center gap-2">
            <span>Explore My Work</span>
            <HiSparkles className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-baobab-400 via-savanna-400 to-sunset-400" />
    </section>
  );
};

export default Skills;