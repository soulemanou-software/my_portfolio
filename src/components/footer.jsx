import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaFacebook, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import profileImage from '../assets/profile1.png';

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/soulemanou-software", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/soulemanou-kunchiefuh-babanou/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/Mr_Babanou_237", label: "Twitter" },
  { icon: FaMedium, href: "https://medium.com/@soulemanou-kunchiefuh-babanou", label: "Medium" },
  { icon: FaFacebook, href: "https://www.facebook.com/kingofnewyork", label: "Facebook" },
];

const footerLinks = [
  { name: "Home", path: "/", sectionId: null },
  { name: "About", path: "/", sectionId: "about" },
  { name: "Skills", path: "/", sectionId: "Skills" },
  { name: "Projects", path: "/Projects", sectionId: null },
  { name: "Designs", path: "/Designs", sectionId: null },
  { name: "Contact", path: "/", sectionId: "Contacts" },
];

const FooterWithLogo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, link) => {
    if (link.sectionId) {
      e.preventDefault();
      if (isHomePage) {
        const element = document.getElementById(link.sectionId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: link.sectionId } });
      }
    }
  };

  return (
    <footer className="relative bg-night-600 border-t border-earth-700/30">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-savanna-400 via-sunset-400 to-baobab-400" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group" onClick={scrollToTop}>
              <img
                src={profileImage}
                alt="Soulemanou"
                className="w-12 h-12 rounded-full border-2 border-savanna-400/50 object-cover"
              />
              <div>
                <span className="font-heading font-bold text-lg sm:text-xl text-savanna-100 group-hover:text-savanna-400 transition-colors">
                  Soulemanou Babanou
                </span>
                <span className="block text-xs text-earth-400 font-accent">
                  Digital Storyteller
                </span>
              </div>
            </Link>
            <p className="text-earth-300 text-sm leading-relaxed max-w-xs mt-2">
              Crafting digital experiences that bridge African heritage with modern innovation.
              Let's create something amazing together.
            </p>
          </div>

          <div>
            <h4 className="font-accent font-semibold text-savanna-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  {link.sectionId ? (
                    <button
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-earth-300 hover:text-savanna-400 transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link to={link.path} className="text-earth-300 hover:text-savanna-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-semibold text-savanna-100 mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-night-700/50 border border-earth-700/30 flex items-center justify-center text-earth-300 hover:text-savanna-400 hover:border-savanna-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-earth-400 hover:text-savanna-400 transition-colors text-sm group"
            >
              <span>Back to top</span>
              <HiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-earth-700/30 my-6 sm:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-earth-400 text-sm">
            © {new Date().getFullYear()} Soulemanou Kunchiefuh Babanou. All rights reserved.
          </p>
          <p className="text-earth-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="w-3 h-3 text-sunset-400" /> in Cameroon, Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithLogo;
