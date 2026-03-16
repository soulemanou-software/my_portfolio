import { useState, useEffect } from "react";
import { ProjectsData } from "../components/Api/ProjectsData";
import { HiExternalLink, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-night-500 via-night-600 to-earth-900/30">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projectPagePattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#D4A853" />
              <rect x="35" y="35" width="10" height="10" fill="none" stroke="#E07A5F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectPagePattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <div className="chapter-indicator justify-center mb-6">
            <span>Portfolio</span>
          </div>
          <h1 className="section-title-pattern mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl">Development Projects</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            A collection of web applications and software solutions I've built,
            each representing a unique challenge and creative solution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ProjectsData.map((project, index) => (
            <div
              key={project.id}
              className="african-card group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44 sm:h-52 -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-3 sm:mb-4 overflow-hidden">
                <img
                  src={project.thumbnails}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-600 via-night-600/50 to-transparent" />
                <div className="absolute inset-0 bg-savanna-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-night-600/90 text-savanna-400 rounded-lg font-accent text-sm">
                    View Details
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-lg sm:text-xl text-savanna-100 mb-2 sm:mb-3 group-hover:text-savanna-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-earth-300 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.languages?.slice(0, 3).map((lang, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-night-700/50 text-earth-300 rounded border border-earth-700/30">
                    {lang}
                  </span>
                ))}
                {project.languages?.length > 3 && (
                  <span className="text-xs px-2 py-1 text-earth-400">+{project.languages.length - 3} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-night-900/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-night-600 rounded-xl sm:rounded-2xl border border-earth-700/30 mx-2 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-night-700/80 text-earth-300 hover:text-savanna-400 flex items-center justify-center transition-colors"
            >
              <HiX className="w-5 h-5" />
            </button>

            <div className="relative h-48 sm:h-64 md:h-80">
              <img
                src={selectedProject.thumbnails}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-600 to-transparent" />
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="font-heading text-2xl md:text-3xl text-savanna-100 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-earth-200 mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="font-accent text-sm text-earth-400 uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.languages?.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-savanna-400/10 text-savanna-400 rounded-lg text-sm font-accent">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.livedemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-african flex items-center gap-2"
                >
                  <HiExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-african-outline flex items-center gap-2"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;