import { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaBars, FaXmark } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mt-4 sm:mt-6">
      <nav className="relative flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/80 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-md sm:px-6">
        {/* Brand / Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-orange-400 text-sm font-bold text-zinc-950 shadow-md shadow-cyan-400/20 transition-transform duration-200 group-hover:scale-105">
            HD
          </span>
          <span className="text-lg font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-cyan-300">
            Harsh Dagar
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Socials & Resume CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            className="rounded-lg p-2 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:text-zinc-100"
            href="https://www.linkedin.com/in/harsh-dagar-716125256/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            className="rounded-lg p-2 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:text-zinc-100"
            href="https://github.com/harshdagar0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            className="rounded-lg p-2 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:text-zinc-100"
            href="https://www.instagram.com/harshdagar_0/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            className="ml-2 flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition duration-200 hover:bg-cyan-400/20 hover:text-cyan-100"
            href="/Harsh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <FiDownload className="text-sm" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            className="flex items-center gap-1 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-200"
            href="/Harsh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <FiDownload />
            <span>Resume</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-zinc-800 bg-zinc-900/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-around text-xl text-zinc-300">
                <a
                  href="https://www.linkedin.com/in/harsh-dagar-716125256/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/harshdagar0"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 hover:text-cyan-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/harshdagar_0/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2 hover:text-cyan-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
