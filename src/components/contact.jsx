import { useEffect, useRef, useState } from "react";
import { HiMail, HiLocationMarker, HiClock, HiPaperAirplane, HiSparkles, HiChat, HiLightningBolt, HiHeart } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const ownerInfo = {
  fullName: "Soulemanou Kunchiefuh Babanou",
  email: "kunchiefuhbabanou@gmail.com",
  location: "Cameroon, Africa",
  timezone: "GMT+1"
};

const responseStats = [
  { value: "<24h", label: "Response Time", icon: HiClock },
  { value: "100%", label: "Reply Rate", icon: HiChat },
  { value: "Open", label: "To New Projects", icon: HiLightningBolt },
  { value: "∞", label: "Passion", icon: HiHeart },
];

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: ownerInfo.email,
    href: `mailto:${ownerInfo.email}`,
    highlight: true
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: ownerInfo.location,
    href: null,
    highlight: false
  },
  {
    icon: HiClock,
    label: "Availability",
    value: "Freelance & Full-time",
    href: null,
    highlight: false
  }
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/soulemanou-software", label: "GitHub", color: "hover:text-white" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/soulemanou-kunchiefuh-babanou/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: FaTwitter, href: "https://twitter.com/Mr_Babanou_237", label: "Twitter", color: "hover:text-sky-400" },
  { icon: FaMedium, href: "https://medium.com/@soulemanou-kunchiefuh-babanou", label: "Medium", color: "hover:text-green-400" },
];

const quickActions = [
  { label: "Discuss a Project", subject: "Project Discussion" },
  { label: "Freelance Work", subject: "Freelance Opportunity" },
  { label: "Just Say Hi", subject: "Hello!" },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitting: false, submitted: false });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false });

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xpzgdrbj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      setFormStatus({ submitting: false, submitted: true });
      form.reset();
    } catch {
      setFormStatus({ submitting: false, submitted: false });
    }
  };

  return (
    <section
      id="Contacts"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-b from-night-600 via-earth-900/30 to-night-500"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#D4A853" />
              <path d="M40 10 L40 70 M10 40 L70 40" stroke="#D4A853" strokeWidth="0.3" />
              <circle cx="40" cy="40" r="25" fill="none" stroke="#E07A5F" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactPattern)" />
        </svg>
      </div>

      <div className="absolute top-20 right-20 w-80 h-80 bg-savanna-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-sunset-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="chapter-indicator justify-center mb-6">
            <span>Chapter 05</span>
          </div>
          <h2 className="section-title-pattern mb-4">Let&apos;s Connect</h2>
          <p className="section-subtitle max-w-2xl mx-auto mb-10">
            Every great collaboration starts with a conversation. 
            Whether it&apos;s a project, opportunity, or just a friendly hello — I&apos;m listening.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {responseStats.map((stat, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl bg-night-700/30 border border-earth-700/30 transition-all duration-500 hover:border-savanna-400/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-5 h-5 text-savanna-400 mx-auto mb-2" />
                <div className="font-heading text-lg sm:text-xl md:text-2xl text-savanna-100">{stat.value}</div>
                <div className="text-xs text-earth-400 font-accent">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="mb-8">
              <span className="text-xs font-accent text-savanna-400 uppercase tracking-wider">Get in touch with</span>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-savanna-100 mt-1 mb-3">{ownerInfo.fullName}</h3>
              <p className="text-earth-300 leading-relaxed text-sm">
                I&apos;m always excited to connect with fellow creators, businesses looking to elevate their digital presence, 
                or anyone who appreciates great design and solid engineering.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-4 rounded-xl bg-night-700/30 border transition-all duration-300 ${
                    item.highlight ? 'border-savanna-400/30 hover:border-savanna-400/50' : 'border-earth-700/30 hover:border-earth-700/50'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.highlight ? 'bg-savanna-400/20' : 'bg-night-600/50'
                  }`}>
                    <item.icon className={`w-5 h-5 ${item.highlight ? 'text-savanna-400' : 'text-earth-400'}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-accent text-earth-400 uppercase tracking-wider">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={`block font-medium transition-colors ${
                        item.highlight ? 'text-savanna-100 hover:text-savanna-400' : 'text-earth-200'
                      }`}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="block text-earth-200">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-accent text-xs text-earth-400 uppercase tracking-wider mb-4">Connect on Social</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group w-11 h-11 rounded-xl bg-night-700/50 border border-earth-700/30 flex items-center justify-center text-earth-400 ${social.color} hover:border-savanna-400/30 transition-all duration-300`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-night-700/30 backdrop-blur-sm border border-earth-700/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-savanna-100">Send a Message</h3>
                  <p className="text-xs text-earth-400 mt-1">I&apos;ll respond within 24 hours</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-savanna-400/10 border border-savanna-400/30 flex items-center justify-center">
                  <HiSparkles className="w-5 h-5 text-savanna-400" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      const subjectInput = document.getElementById('subject');
                      if (subjectInput) subjectInput.value = action.subject;
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-night-600/50 border border-earth-700/30 text-earth-300 hover:border-savanna-400/30 hover:text-savanna-400 transition-all"
                  >
                    {action.label}
                  </button>
                ))}
              </div>

              {formStatus.submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-baobab-400/20 to-savanna-400/20 flex items-center justify-center">
                    <HiPaperAirplane className="w-10 h-10 text-baobab-400 rotate-45" />
                  </div>
                  <h4 className="font-heading text-2xl text-savanna-100 mb-2">Message Sent!</h4>
                  <p className="text-earth-300 mb-6">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus({ submitting: false, submitted: false })}
                    className="text-sm text-savanna-400 hover:text-savanna-300 transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-accent text-earth-400 uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-night-600/30 border border-earth-700/30 rounded-xl text-savanna-100 placeholder-earth-400 focus:outline-none focus:border-savanna-400/60 focus:ring-2 focus:ring-savanna-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savanna-400 hover:border-earth-700/60 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-accent text-earth-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-night-600/30 border border-earth-700/30 rounded-xl text-savanna-100 placeholder-earth-400 focus:outline-none focus:border-savanna-400/60 focus:ring-2 focus:ring-savanna-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savanna-400 hover:border-earth-700/60 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-accent text-earth-400 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-night-600/30 border border-earth-700/30 rounded-xl text-savanna-100 placeholder-earth-400 focus:outline-none focus:border-savanna-400/60 focus:ring-2 focus:ring-savanna-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savanna-400 hover:border-earth-700/60 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-accent text-earth-400 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 bg-night-600/30 border border-earth-700/30 rounded-xl text-savanna-100 placeholder-earth-400 focus:outline-none focus:border-savanna-400/60 focus:ring-2 focus:ring-savanna-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savanna-400 hover:border-earth-700/60 transition-colors resize-none"
                      placeholder="Tell me about your project, idea, or just say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full btn-african py-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {formStatus.submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane className="w-5 h-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-earth-400 text-sm mb-2">Prefer a quick chat?</p>
          <a 
            href={`mailto:${ownerInfo.email}?subject=Quick Hello`}
            className="inline-flex items-center gap-2 text-savanna-400 hover:text-savanna-300 transition-colors font-accent"
          >
            <HiMail className="w-4 h-4" />
            {ownerInfo.email}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-400 via-baobab-400 via-savanna-400 to-sunset-400" />
    </section>
  );
};

export default Contact;