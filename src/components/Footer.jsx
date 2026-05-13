const Footer = () => {
  return (
    <footer className="w-full mt-28 border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-5 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#5651e5] font-semibold mb-3">
            Quick Links
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <a
              href="#hero"
              className="transition-colors duration-200 hover:text-[#5651e5]"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-colors duration-200 hover:text-[#5651e5]"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-[#5651e5]"
            >
              Skills
            </a>
            <a
              href="#education"
              className="transition-colors duration-200 hover:text-[#5651e5]"
            >
              Education
            </a>
            <a
              href="#projects"
              className="transition-colors duration-200 hover:text-[#5651e5]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-[#5651e5]"
            >
              Contact
            </a>
          </div>
        </div>

        <p className="text-[#777777] text-base">
          © All rights reserved by Ahmed Wagih - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
