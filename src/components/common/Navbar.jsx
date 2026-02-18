import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Scroll effect – change background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with offset for fixed navbar
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = navRef.current?.offsetHeight || 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false); // close mobile menu after click
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "why-choose", label: "Why Choose Us" },
    { id: "services", label: "Services" },
    { id: "case-studies", label: "Success Stories" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about", label: "About" },
  ];

  return (
    <>
      {/* ================= MAIN NAVBAR ================= */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111827]/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
            <img
              src="/images/icons/logo.png"
              alt="AlGrowthexa"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  scrolled
                    ? "text-neutral-300 hover:text-white hover:bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918979779337"
              className={`p-2.5 rounded-full transition-colors ${
                scrolled
                  ? "bg-neutral-800 text-primary-400 hover:bg-neutral-700"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Call us"
            >
              <FaPhone size={16} />
            </a>
            <a
              href="#consultation"
              onClick={(e) => scrollToSection(e, "consultation")}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-md flex items-center gap-2 ${
                scrolled
                  ? "bg-primary-600 hover:bg-primary-700 text-white"
                  : "bg-white text-primary-600 hover:bg-white/90"
              }`}
            >
              <span>Book Call</span>
              <FaArrowRight size={12} />
            </a>
          </div>

          {/* Mobile Actions (visible only on mobile) */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+918979779337"
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "bg-neutral-800 text-primary-400 hover:bg-neutral-700"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <FaPhone size={16} />
            </a>

            {/* Hamburger / Close button – toggles menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors z-[70] ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= BACKDROP (only on mobile) ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ================= MOBILE SLIDE-OUT MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#111827] z-50 p-6 lg:hidden shadow-xl"
          >
            {/* Close button inside menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="mb-6 text-white/80 hover:text-white"
            >
              <FaTimes size={24} />
            </button>

            {/* Navigation links */}
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="block text-white/90 hover:text-white text-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <a
              href="#consultation"
              onClick={(e) => scrollToSection(e, "consultation")}
              className="mt-8 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Strategy Call <FaArrowRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;