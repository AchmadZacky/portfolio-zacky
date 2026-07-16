import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)]/30 py-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Kiri */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-[var(--gradient-start)] font-['Plus_Jakarta_Sans']">
              AZ
            </span>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Achmad Zacky Haudaa
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-[var(--bg-container)] text-[var(--text-secondary)] hover:text-[var(--gradient-start)] hover:bg-[var(--surface-variant)] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border-color)]/30 mt-8 pt-6 text-center text-sm text-[var(--text-secondary)]">
          © 2026 Achmad Zacky. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
