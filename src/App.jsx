import FooterWithLogo from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Navigator from "./components/navigator";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import MainPage from './pages/mainPage';
import Designs from './pages/Designs';
import Project from './pages/Projects';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Designs" element={<Designs />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/About" element={<Navigate to="#About" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FooterWithLogo />
    </Router>
  );
}

export default App;