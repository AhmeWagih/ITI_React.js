import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const Hero = () => {
  const heroLinks = [
    { href: "#", label: "GitHub", icon: <FaGithub className="text-xl" /> },
    {
      href: "#",
      label: "LinkedIn",
      icon: <FaLinkedinIn className="text-xl" />,
    },
    { href: "#", label: "Twitter", icon: <FaXTwitter className="text-xl" /> },
    { href: "#", label: "Email", icon: <FaEnvelope className="text-xl" /> },
  ];

  return (
    <div id="hero" className="w-full h-[80vh] text-center justify-center">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-gray-600">
              Let&apos;s build something amazing
            </div>
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl">
              Hi, I&apos;m <span className="text-[#5651e5]">Ahmed Wagih</span>
            </div>
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-700">
              A Full Stack Developer
            </div>
            <div className="text-gray-600 text-sm sm:text-base md:text-lg max-w-5xl leading-relaxed">
              I&apos;m a front-end web developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I&apos;m focused on building front-end web applications
              while learning back-end technologies.
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 md:gap-4 gap-2">
              {heroLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-center rounded-full shadow-md p-3 hover:text-[#5651e5]"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
