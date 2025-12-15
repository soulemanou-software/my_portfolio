import { useEffect, useState, useCallback } from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX, HiSparkles } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile1.png';
import resumePdf from '../assets/Soulemanou_Bababou_Resume (1).pdf';

const navItems = [
  { name: 'Prologue', sectionId: 'landing', chapter: '01', icon: '◈' },
  { name: 'My Story', sectionId: 'about', chapter: '02', icon: '◇' },
  { name: 'Craftsmanship', sectionId: 'Skills', chapter: '03', icon: '◆' },
  { name: 'Creations', sectionId: 'Projects', chapter: '04', icon: '▣' },
  { name: 'Connect', sectionId: 'Contacts', chapter: '05', icon: '◎' },
];

const quickSocials = [
  { icon: FaGithub, href: "https://github.com/soulemanou-software", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/soulemanou-kunchiefuh-babanou/", label: "LinkedIn" },
];

const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('landing');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Smart navigation handler - works from any page
  const handleNavClick = useCallback((e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
    };

    if (isHomePage) {
      scrollToSection();
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  }, [isHomePage, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = ['landing', 'about', 'Skills', 'Projects', 'Contacts'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) setActiveSection('');
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const el = document.getElementById('scrollProgress');
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />

      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled 
            ? 'bg-night-600/90 backdrop-blur-xl shadow-lg shadow-night-900/20 py-2' 
            : 'bg-gradient-to-b from-night-600/80 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-savanna-400 to-sunset-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative p-0.5 rounded-full bg-gradient-to-br from-savanna-400/50 to-sunset-400/50">
                  <img
                    src={profileImage}
                    alt="Soulemanou Logo"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-base sm:text-lg text-savanna-100 group-hover:text-savanna-400 transition-colors flex items-center gap-1.5">
                  Soulemanou
                  <HiSparkles className="w-3 h-3 text-savanna-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="block text-[10px] sm:text-xs text-earth-400 font-accent tracking-wider uppercase">Engineer • Designer</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-night-700/30 rounded-full px-1 py-1 border border-earth-700/20">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className={`group relative px-3 xl:px-4 py-2 font-accent text-xs xl:text-sm transition-all duration-300 cursor-pointer rounded-full ${
                      activeSection === item.sectionId
                        ? 'text-night-600 bg-gradient-to-r from-savanna-400 to-sunset-400'
                        : 'text-earth-300 hover:text-savanna-400'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span className={`text-[9px] transition-colors ${activeSection === item.sectionId ? 'text-night-600/60' : 'text-sunset-400/60'}`}>
                        {item.chapter}
                      </span>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1">
                {quickSocials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-night-700/30 border border-earth-700/20 flex items-center justify-center text-earth-400 hover:text-savanna-400 hover:border-savanna-400/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
              <div className="w-px h-6 bg-earth-700/30" />
              <button 
                onClick={() => window.open(resumePdf, '_blank')} 
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-accent text-sm font-semibold hover:shadow-lg hover:shadow-savanna-400/20 transition-all duration-300"
              >
                <FaDownload className="text-xs group-hover:animate-bounce" />
                <span>Resume</span>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg bg-night-700/30 border border-earth-700/20 text-savanna-400 hover:text-savanna-300 hover:border-savanna-400/30 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-night-600/98 backdrop-blur-xl border-t border-earth-700/20 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen
              ? 'opacity-100 max-h-[80vh] pointer-events-auto'
              : 'opacity-0 max-h-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 gap-1.5">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 w-full text-left ${
                    activeSection === item.sectionId
                      ? 'bg-gradient-to-r from-savanna-400/20 to-transparent border-l-2 border-savanna-400'
                      : 'hover:bg-night-700/50'
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-accent ${
                    activeSection === item.sectionId 
                      ? 'bg-savanna-400 text-night-600' 
                      : 'bg-night-700/50 text-sunset-400'
                  }`}>
                    {item.chapter}
                  </div>
                  <div>
                    <span className={`font-heading text-base block ${
                      activeSection === item.sectionId ? 'text-savanna-400' : 'text-savanna-100'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-earth-700/20">
              {quickSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-night-700/50 border border-earth-700/20 flex items-center justify-center text-earth-400 hover:text-savanna-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
              <div className="flex-1" />
              <button
                onClick={() => {
                  window.open(resumePdf, '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-savanna-400 to-sunset-400 text-night-600 font-accent text-sm font-semibold"
              >
                <FaDownload className="text-xs" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-night-900/60 backdrop-blur-sm z-[999] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigator;