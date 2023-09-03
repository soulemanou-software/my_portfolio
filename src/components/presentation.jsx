import React from "react";
import { FaArrowDown } from "react-icons/fa";
import SocialIcons from "./SocialIcons";
import Typed from 'typed.js';

const Presentation = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Full Stack Software Developer.^100',
        'Graphic Designer.^100',
        'UI/UX Designer. ^100'
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="landing" className="relative bg-[url('assets/illustration.png')] md:bg-[right_bottom_1rem] bg-[right_bottom_1rem] bg-[length:200px] bg-no-repeat md:bg-[length:30rem] flex flex-col h-screen bg-black text-white w-full justify-center items-center">
        <div className="flex flex-col-reverse justify-start w-full gap-2 pl-4 md:flex-row">
          <SocialIcons />
          <div className="flex flex-col justify-end ">
            <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="bg-[url('assets/A02.jpg')] md:bg-[left_bottom] bg-[left_bottom]  bg-no-repeat md:bg-[length:300px] bg-[length:300px] text-5xl font-bold bg-clip-text text-transparent drop-shadow-[1.5px_-1.5px_1px_white]">
              Hey There. <br />I&rsquo;m Babanou
            </h1>
            <h2 className="text-2xl font-bold text-start text">
              I am a <span ref={el} />
            </h2>
            <p className="md:w-[39vw] w-[93vw] text-md">
              I can help you build a product, feature, or website. Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full h-min">
          <a href="#About" className="transition delay-150 scroll-smooth">
            <FaArrowDown className="absolute text-3xl animate-bounce md:-bottom-52 -bottom-36" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Presentation;