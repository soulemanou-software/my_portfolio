import githubIcon from "https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/github-2-4695719.png?raw=true";
import twitterIcon from "https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/twitter-2-4695717-4695717@0.png?raw=true";
import facebookIcon from "https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/facebook-2-4695694.png?raw=true";
import mediumIcon from "https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/medium-4695754-4695754@0.png?raw=true";
import linkedinIcon from "https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/linkedin-2-4695696.png?raw=true";

const SocialIcons = () => {
  return (
    <div data-aos="fade-in"
      data-aos-duration='3010'
      data-aos-offset="200" data-aos-easing="ease-in-sine" className="flex flex-row justify-start gap-2 md:flex-col md:gap-2 md:justify-end">
      <a
        target="_blank"
        href="https://github.com/soulemanou-software"
        rel="noreferrer"

      >
        <img src={githubIcon} alt="Github" className="w-9 md:w-10" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/Mr_Babanou_237"
        rel="noreferrer"

      >
        <img src={twitterIcon} alt="Twitter" className="w-9 md:w-10" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/kingofnewyork"
        rel="noreferrer"

      >
        <img src={facebookIcon} alt="Facebook" className="w-9 md:w-10" />
      </a>
      <a
        target="_blank"
        href="https://medium.com/@soulemanou-kunchiefuh-babanou"
        rel="noreferrer"

      >
        <img src={mediumIcon} alt="Medium" className="w-9 md:w-10" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/soulemanou-kunchiefuh-babanou/"
        rel="noreferrer"

      >
        <img src={linkedinIcon} alt="LinkedIn" className="w-9 md:w-10" />
      </a>
    </div>
  );
};

export default SocialIcons;