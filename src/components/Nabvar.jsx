import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./../assets/rokspace.png";

const Nabvar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Scroll down → hide navbar
      } else {
        setShowNavbar(true); // Scroll up → show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <header
        className={`w-full h-[10vh] flex justify-between px-10 items-center font-family-mono sticky -top-0 ${
          showNavbar ? "md:translate-y-0" : "md:-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-4 text-3xl">
          <img src={logo} alt="Solvatio Logo" className="h-10" />
          &nbsp;RokSpace
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <a href="#" className="hover:text-gray-300">
            HOME
          </a>
          <a href="#services" className="hover:text-gray-300">
            OFFERINGS
          </a>
          <a href="#applications" className="hover:text-gray-300">
            APPLICATION
          </a>
          <a href="#benefits" className="hover:text-gray-300">
            BENEFITS
          </a>
          <a href="#genai" className="hover:text-gray-300">
            GEN AI
          </a>
          <a href="#industries" className="hover:text-gray-300">
            INDUSTRIES
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0a0a12] px-6 py-4 space-y-4 text-sm font-semibold z-40 h-[80vh] flex flex-col justify-center items-center gap-y-5">
          <a
            href="#"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            HOME
          </a>
          <a
            href="#services"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            OFFERINGS
          </a>
          <a
            href="#applications"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            APPLICATION
          </a>
          <a
            href="#benefits"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            BENEFITS
          </a>
          <a
            href="#genai"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            GEN AI
          </a>
          <a
            href="#industries"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            INDUSTRIES
          </a>
          <a
            href="#contact"
            className="block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ABOUT US
          </a>
        </div>
      )}
    </>
  );
};

export default Nabvar;
