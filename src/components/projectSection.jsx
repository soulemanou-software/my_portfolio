// Make code more readable, fix potential errors and rewrite the code:
// jsx
import { Link } from "react-router-dom";
import { ProjectRefData } from "./Api/ProjectsData";

const ProjectSection = () => {
  return (
    <section id="Projects" className="relative flex flex-col items-center justify-center p-5 bg-white text-b h-max full w- md:flex-row md:h-screen md:pt-9 md:px-4 dark:bg-slate-300">
      {ProjectRefData.map((project, index) => {
        const projectStyle = `flex flex-col gap-5 w-auto h-max md:h-[70%] md:p-12 p-5 bg-${project.color}`;

        return (
          <div key={index} data-aos="fade-up" data-aos-duration="2000" className={projectStyle}>
            <h2 className="text-2xl font-bold text-white md:text-4xl">{project.Title}</h2>
            <p className="text-sm font-light text-white md:text-md">{project.Text}</p>
            <button className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg dark:text-gray-900 group bg-gradient-to-r from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white w-max md:w-md">
              <span className="relative flex flex-row items-center justify-around w-full gap-2 px-5 py-1 text-sm font-light transition-all duration-75 ease-in bg-white rounded-md md:px-16 md:py-2 md:text-md group-hover:bg-opacity-0">
                <Link to={project.Nav}>
                  <span className="text-xl font-semibold">View All</span>
                </Link>
              </span>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectSection;