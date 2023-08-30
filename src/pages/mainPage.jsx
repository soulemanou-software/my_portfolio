
import About from "../components/about";
import Contact from "../components/contact";
import Presentation from "../components/presentation";
import Projectsection from "../components/projectSection";
import Skills from "../components/skills";



const MainPage = () => {
  return(
    <>
      <Presentation />
      <About />
      <Skills />
      <Projectsection />
      <Contact />
    </>
  );
}
export default MainPage;
