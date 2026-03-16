import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiCode, HiColorSwatch, HiExternalLink, HiLightningBolt, HiStar, HiTrendingUp, HiClock } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import fastDezLogo from "../assets/DesignsImages/fastdezlogo.svg";
import project1Thumb from "../assets/ProjectsImages/1.svg";
import { ProjectsData } from "./Api/ProjectsData";

const workStats = [
  { value: "50+", label: "Projects Built", icon: HiCode },
  { value: "98%", label: "Client Satisfaction", icon: HiStar },
  { value: "24h", label: "Avg Response", icon: HiClock },
  { value: "3x", label: "Faster Delivery", icon: HiTrendingUp },
];

const featuredCategories = [
  {
    id: "dev",
    title: "Development",
    subtitle: "Engineering & Systems",
    description: "Production-ready applications with clean architecture and premium UX.",
    longDescription: "From concept to deployment — full-stack solutions that scale.",
    icon: HiCode,
    color: "savanna",
    link: "/Projects",
    image: project1Thumb,
    stats: { count: "30+", type: "Applications" },
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Brand & Interface",
    description: "Visual systems where African heritage meets modern minimalism.",
    longDescription: "Brand identities that tell stories and interfaces that feel inevitable.",
    icon: HiColorSwatch,
    color: "sunset",
    link: "/Designs",
    image: fastDezLogo,
    stats: { count: "20+", type: "Brands & UIs" },
  },
];

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      className={`group relative bg-night-700/30 backdrop-blur-sm border border-earth-700/30 rounded-xl overflow-hidden transition-all duration-500 hover:border-savanna-400/40 hover:shadow-lg hover:shadow-savanna-400/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="relative h-36 sm:h-44 overflow-hidden">
        <img
          src={project.thumbnails}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-700 via-night-700/60 to-transparent" />
        
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.livedemo}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 bg-savanna-400 text-night-600 rounded-lg flex items-center justify-center hover:bg-savanna-300 transition-colors"
            title="Live Demo"
          >
            <HiExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 bg-night-600/90 backdrop-blur-sm text-savanna-100 rounded-lg flex items-center justify-center hover:bg-night-500 transition-colors"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading text-base sm:text-lg text-savanna-100 mb-2 group-hover:text-savanna-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-earth-400 mb-3 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.languages?.slice(0, 3).map((lang) => (
            <span
              key={lang}
              className="text-[10px] sm:text-xs px-2 py-0.5 bg-savanna-400/10 text-savanna-300 rounded-full border border-savanna-400/20"
            >
              {lang}
            </span>
          ))}
          {project.languages?.length > 3 && (
            <span className="text-[10px] sm:text-xs px-2 py-0.5 text-earth-500">
              +{project.languages.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, index, isVisible }) => {
  const colorClasses = {
    savanna: {
      icon: "text-savanna-400 bg-savanna-400/10 border-savanna-400/30",
      button: "bg-savanna-400 hover:bg-savanna-300",
      stat: "text-savanna-400",
      glow: "group-hover:shadow-savanna-400/20",
    },
    sunset: {
      icon: "text-sunset-400 bg-sunset-400/10 border-sunset-400/30",
      button: "bg-sunset-400 hover:bg-sunset-300",
      stat: "text-sunset-400",
      glow: "group-hover:shadow-sunset-400/20",
    },
  };

  const colors = colorClasses[category.color];

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl border border-earth-700/30 transition-all duration-700 hover:border-transparent ${colors.glow} hover:shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-700 via-night-700/90 to-night-700/60" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 md:p-10 min-h-[340px] sm:min-h-[400px] flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <div className={`w-14 h-14 rounded-xl ${colors.icon} border flex items-center justify-center`}>
            <category.icon className="w-7 h-7" />
          </div>
          <div className="text-right">
            <div className={`font-heading text-3xl ${colors.stat}`}>{category.stats.count}</div>
            <div className="text-xs text-earth-400 font-accent">{category.stats.type}</div>
          </div>
        </div>

        <div className="mt-auto">
          <span className="inline-block text-xs font-accent text-earth-400 uppercase tracking-widest mb-3 px-2 py-1 bg-night-600/50 rounded-full">
            {category.subtitle}
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-savanna-100 mb-3">{category.title}</h3>
          <p className="text-sm text-earth-300 mb-2">{category.description}</p>
          <p className="text-xs text-earth-500 mb-6 italic">{category.longDescription}</p>

          <Link
            to={category.link}
            className={`inline-flex items-center gap-3 ${colors.button} text-night-700 font-accent font-bold px-6 py-3.5 rounded-xl w-fit transition-all duration-300 group-hover:gap-5 shadow-lg`}
          >
            Explore Collection
            <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Projects"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-b from-night-600 via-earth-900/20 to-night-600"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projectsPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,10 110,40 110,100 60,130 10,100 10,40" fill="none" stroke="#D4A853" strokeWidth="0.5" />
              <circle cx="60" cy="70" r="15" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectsPattern)" />
        </svg>
      </div>

      <div className="absolute top-20 left-10 w-80 h-80 bg-savanna-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sunset-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="chapter-indicator justify-center mb-6">
            <span>Chapter 04</span>
          </div>
          <h2 className="section-title-pattern mb-4">Selected Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto mb-10">
            Every project tells a story. Here's proof that great engineering 
            and beautiful design aren't mutually exclusive.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {workStats.map((stat, index) => (
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

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {featuredCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-earth-700/50" />
            <div className="flex items-center gap-3">
              <HiLightningBolt className="w-5 h-5 text-savanna-400" />
              <h3 className="font-heading text-xl sm:text-2xl text-savanna-100">Latest Builds</h3>
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-earth-700/50" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ProjectsData.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-earth-400 text-sm mb-4">Want to see more?</p>
          <Link to="/Projects" className="btn-african-outline inline-flex items-center gap-2">
            View Full Portfolio
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sunset-400 via-savanna-400 via-earth-400 to-baobab-400" />
    </section>
  );
};

export default ProjectSection;