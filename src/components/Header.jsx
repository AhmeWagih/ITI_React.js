const Header = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-shadow duration-300 bg-white shadow-md`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          <a href="/">
            <h1 className="text-2xl font-bold text-gray-800">WEGO</h1>
          </a>

          <div className="hidden md:block">
            <div className="flex items-baseline gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
