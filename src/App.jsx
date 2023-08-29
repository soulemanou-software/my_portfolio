// import Projects from './pages/projects';
import FooterWithLogo from './components/footer';
import Skills from '../src/components/skills';
import About from './components/about';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Projectsection from '../src/components/projectSection';
import Presentation from './components/presentation';
// import HorizontalCard from './pages/projects';
// import Projects from './pages/projects';

import Contact from "./components/contact";
import Navigator from "./components/navigator";
import Projectsection from './components/projectSection';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navigator />
      <Presentation />
      <About />
      <Skills />
      <Projectsection />
      <Contact />
      <FooterWithLogo />

      {/* <Project /> */}
    </>
  )
}

export default App;
