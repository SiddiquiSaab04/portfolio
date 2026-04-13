import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold text-gradient">
          LS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon-purple after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-neon-purple/30 text-sm font-medium text-foreground hover:bg-neon-purple/10 transition-all duration-300 neon-shadow"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-heading font-bold text-foreground hover:text-gradient transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
