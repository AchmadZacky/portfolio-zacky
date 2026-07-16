import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // Smooth scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsOpen(false); // Tutup mobile menu
    }
  };

  // Deteksi section yang sedang aktif berdasarkan scroll
  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Muncul 30% dari viewport
        rootMargin: "-80px 0px -30% 0px", // offset untuk navbar
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-sm border-b border-[var(--border-color)]/30 transition-colors duration-300">
      <div className="flex items-center justify-between px-3 sm:px-6 py-3 max-w-[1200px] mx-auto w-full">
        {/* Logo */}
        <div
          className="font-['Plus_Jakarta_Sans'] text-lg sm:text-2xl font-bold text-[var(--gradient-start)] whitespace-nowrap cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Zackdev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`font-['Inter'] text-sm font-medium transition-colors hover:text-[var(--gradient-start)] py-1 ${
                  activeSection === item.id
                    ? "text-[var(--gradient-start)] border-b-2 border-[var(--gradient-start)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          <button className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-sm font-semibold transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap">
            Resume
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl text-[var(--text-primary)]">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl text-[var(--text-primary)]">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-t border-[var(--border-color)]/30 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-['Inter'] text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-[var(--gradient-start)] border-b-2 border-[var(--gradient-start)] pb-1"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
