import rubyonrails from "../assets/react.svg";
import reactNative from "../assets/react-native-4642743.png";
import javascriptLogo from "../assets/javascript-logo-5453022.png";
import git from "../assets/git.png";
import angular from "../assets/angular-4642763.png";
import illustrator from "../assets/illustrator-4642746.png";
import photoshop from "../assets/photoshop-4642752.png";
import xd from "../assets/xd-4642736.png";
import figma from "../assets/figma-4642727.png";
import canva from "../assets/canva-4642728.png";
import { aboutmedata } from "./Api/ProjectsData";

const About = () => {
  const softwareDevLogos = [reactNative, rubyonrails, javascriptLogo, git, angular];
  const graphicDesignLogos = [illustrator, photoshop, xd, figma, canva];

  const renderLogos = (logos) => {
    return logos.map((logo, index) => (
      <li key={index} data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration={7000 * index }>
        <img src={logo} alt="" className="w-16" />
      </li>
    ));
  };

  return (
    <section id="About" className="flex items-center justify-center pt-5 text-black bg-white md:h-screen md:pt-9 md:px-4 dark:bg-slate-300">
      <div className="md:bg-[url('src/assets/profile1.png')] bg-[url('src/assets/profile2.png')] h-full bg-no-repeat md:bg-[length:600px] bg-[length:28rem]  md:bg-[center_bottom] bg-[center_bottom_20rem] md:text-center flex flex-col md:justify-center justify-start md:items-center md:gap-10 px-4">
        <div>
          <h2 data-aos="fade-in"
     data-aos-easing="linear"
     data-aos-duration="4000" className="bg-[url('src/assets/A02.jpg')]  md:bg-[left_bottom] bg-[left_bottom] bg-no-repeat md:bg-[length:300px] bg-[length:300px] text-5xl font-bold bg-clip-text text-transparent drop-shadow-[1.5px_-1.5px_1px_white] h-20  ">
            # About Me
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row ">
          <aside className="z-10 md:pr-56  md:pl-2 mb-[25rem] md:mb-0">
            <h2 className="pb-2 text-2xl font-bold md:text-4xl md:pb-5">
             {aboutmedata[0].Title}
            </h2>
            <p className="text-xs font-bold whitespace-pre-wrap ">{aboutmedata[0].Text}
            </p>
            <ul className="flex flex-row items-center justify-center pt-2">
              {renderLogos(softwareDevLogos)}
            </ul>
          </aside>
          <aside className="z-10 md:pl-36 md:pr-2 md:mt-0">
            <h2 className="pb-2 text-2xl font-bold md:text-4xl md:pb-12 md:mt-2">{aboutmedata[1].Title}</h2>
            <p className="text-xs font-bold whitespace-pre-wrap ">{aboutmedata[1].Text}
            </p>
            <ul className="flex flex-row items-center justify-center pt-2">
              {renderLogos(graphicDesignLogos)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;