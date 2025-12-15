import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/about";
import Contact from "../components/contact";
import Presentation from "../components/presentation";
import Projectsection from "../components/projectSection";
import Skills from "../components/skills";

const MainPage = () => {
  const location = useLocation();

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
      
      window.history.replaceState({}, document.title);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Presentation />
      <About />
      <Skills />
      <Projectsection />
      <Contact />
    </>
  );
};

export default MainPage;
