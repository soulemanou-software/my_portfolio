import { HiCode, HiColorSwatch, HiLightningBolt, HiSparkles, HiGlobe, HiUsers } from "react-icons/hi";
import { FaReact, FaNodeJs, FaFigma, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import portraitImage from "../assets/s10.jpg";

const stats = [
  { value: "5+", label: "Years Experience", icon: HiLightningBolt },
  { value: "50+", label: "Projects Delivered", icon: HiCode },
  { value: "30+", label: "Happy Clients", icon: HiUsers },
  { value: "3", label: "Countries Served", icon: HiGlobe },
];

const journeyStyles = {
  savanna: {
    dot: "bg-savanna-400",
    badge: "bg-savanna-400/10 text-savanna-400 border-savanna-400/30"
  },
  sunset: {
    dot: "bg-sunset-400",
    badge: "bg-sunset-400/10 text-sunset-400 border-sunset-400/30"
  },
  baobab: {
    dot: "bg-baobab-400",
    badge: "bg-baobab-400/10 text-baobab-400 border-baobab-400/30"
  }
};

const journey = [
  {
    year: "2019",
    title: "The Spark",
    description: "Discovered the art of turning ideas into code. Started with JavaScript, fell in love with building things that live on the internet.",
    color: "savanna"
  },
  {
    year: "2021",
    title: "Design Awakening",
    description: "Realized that great products need great design. Mastered Figma, Photoshop, and the principles of visual storytelling.",
    color: "sunset"
  },
  {
    year: "2023",
    title: "Full-Stack Mastery",
    description: "Combined engineering precision with design intuition. Now I build end-to-end experiences that users remember.",
    color: "baobab"
  },
];

const expertise = [
  { 
    category: "Frontend", 
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ]
  },
  { 
    category: "Backend", 
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Cloud", icon: FaAws },
    ]
  },
  { 
    category: "Design", 
    skills: [
      { name: "Figma", icon: FaFigma },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
    ]
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-b from-night-600 via-earth-900/20 to-night-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#D4A853" />
              <path d="M25 50 L50 25 L75 50 L50 75 Z" fill="none" stroke="#D4A853" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <div className="chapter-indicator justify-center mb-6">
            <span>Chapter 02</span>
          </div>
          <h2 className="section-title-pattern mb-4">My Story</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From Cameroon to the global stage — building digital experiences 
            that bridge African heritage with world-class craftsmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="african-card !p-0 overflow-hidden">
              <div className="relative">
                <img
                  src={portraitImage}
                  alt="Soulemanou - Digital Craftsman"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-700 via-night-700/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1.5 rounded-full bg-savanna-400/20 backdrop-blur-sm border border-savanna-400/30 text-savanna-200 font-accent text-xs">
                      Full-Stack Engineer
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-sunset-400/20 backdrop-blur-sm border border-sunset-400/30 text-sunset-200 font-accent text-xs">
                      UI/UX Designer
                    </span>
                  </div>
                  <p className="text-earth-200 text-sm leading-relaxed">
                    Based in Cameroon, crafting for the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="african-card !p-4 text-center group hover:border-savanna-400/50 transition-all"
                >
                  <stat.icon className="w-5 h-5 text-savanna-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-heading text-xl sm:text-2xl text-savanna-100 mb-1">{stat.value}</div>
                  <div className="text-earth-400 text-xs font-accent">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="african-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-savanna-400/10 border border-savanna-400/30 flex items-center justify-center flex-shrink-0">
                  <HiSparkles className="w-6 h-6 text-savanna-400" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-savanna-100 mb-2">
                    The Philosophy
                  </h3>
                  <p className="text-earth-300 text-sm">What drives every pixel and line of code</p>
                </div>
              </div>
              
              <p className="text-earth-200 leading-relaxed text-base sm:text-lg mb-6">
                I believe great software is invisible — it just <em className="text-savanna-400 not-italic font-medium">works</em>. 
                My approach combines the precision of engineering with the intuition of design. 
                Every project I touch is built with one goal: 
                <span className="text-savanna-300"> to create experiences that feel effortless to users 
                but are meticulously crafted behind the scenes.</span>
              </p>

              <div className="p-4 rounded-xl bg-night-700/50 border-l-4 border-savanna-400">
                <p className="text-earth-200 italic text-sm">
                  &ldquo;I don&apos;t just write code or push pixels — I solve problems,
                  tell stories, and build products that people genuinely love to use.&rdquo;
                </p>
              </div>
            </div>

            <div className="african-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sunset-400/10 border border-sunset-400/30 flex items-center justify-center flex-shrink-0">
                  <HiColorSwatch className="w-6 h-6 text-sunset-400" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-savanna-100 mb-2">
                    The Journey
                  </h3>
                  <p className="text-earth-300 text-sm">How I got here — the milestones that shaped me</p>
                </div>
              </div>

              <div className="space-y-6">
                {journey.map((milestone, index) => (
                  <div key={index} className="relative pl-8 pb-6 last:pb-0 border-l-2 border-earth-700/50 last:border-transparent">
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-night-600 ${journeyStyles[milestone.color].dot}`} />
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-accent border ${journeyStyles[milestone.color].badge}`}>
                        {milestone.year}
                      </span>
                      <h4 className="font-heading text-lg text-savanna-100">{milestone.title}</h4>
                    </div>
                    <p className="text-earth-300 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="african-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-baobab-400/10 border border-baobab-400/30 flex items-center justify-center flex-shrink-0">
                  <HiCode className="w-6 h-6 text-baobab-400" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-savanna-100 mb-2">
                    The Toolkit
                  </h3>
                  <p className="text-earth-300 text-sm">Technologies I wield with confidence</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {expertise.map((group, index) => (
                  <div key={index} className="p-4 rounded-xl bg-night-700/30 border border-earth-700/30">
                    <h4 className="font-accent text-xs uppercase tracking-wider text-earth-400 mb-3">{group.category}</h4>
                    <div className="space-y-2">
                      {group.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-earth-200">
                          <skill.icon className="w-4 h-4 text-savanna-400" />
                          <span className="text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;