import { FaFacebookF, FaGithub, FaLinkedinIn, FaMediumM, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div data-aos="fade-in"
      data-aos-duration='3010'
      data-aos-offset="200" data-aos-easing="ease-in-sine" className="flex flex-row flex-wrap justify-start gap-3">
      <a
        target="_blank"
        href="https://github.com/soulemanou-software"
        rel="noreferrer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-earth-700/40 bg-night-600/40 text-savanna-200 hover:text-savanna-400 hover:border-savanna-400/50 hover:bg-savanna-400/10 transition-all">
          <FaGithub className="w-5 h-5" aria-label="Github" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://twitter.com/Mr_Babanou_237"
        rel="noreferrer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-earth-700/40 bg-night-600/40 text-savanna-200 hover:text-sunset-400 hover:border-sunset-400/50 hover:bg-sunset-400/10 transition-all">
          <FaTwitter className="w-5 h-5" aria-label="Twitter" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/kingofnewyork"
        rel="noreferrer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-earth-700/40 bg-night-600/40 text-savanna-200 hover:text-baobab-400 hover:border-baobab-400/50 hover:bg-baobab-400/10 transition-all">
          <FaFacebookF className="w-5 h-5" aria-label="Facebook" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://medium.com/@soulemanou-kunchiefuh-babanou"
        rel="noreferrer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-earth-700/40 bg-night-600/40 text-savanna-200 hover:text-earth-100 hover:border-earth-400/50 hover:bg-earth-400/10 transition-all">
          <FaMediumM className="w-5 h-5" aria-label="Medium" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/soulemanou-kunchiefuh-babanou/"
        rel="noreferrer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-earth-700/40 bg-night-600/40 text-savanna-200 hover:text-savanna-400 hover:border-savanna-400/50 hover:bg-savanna-400/10 transition-all">
          <FaLinkedinIn className="w-5 h-5" aria-label="LinkedIn" />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;