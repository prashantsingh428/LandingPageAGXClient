import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaArrowRight } from "react-icons/fa";
export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "trust-stats", label: "Trust Stats" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "services", label: "Services" },
  { id: "screenshots", label: "Screenshots" },
  { id: "companies", label: "Companies" },
  { id: "awards", label: "Awards" },
  { id: "about", label: "About" },
  { id: "founder", label: "Founder" },
  { id: "testimonials", label: "Testimonials" },
  { id: "consultation", label: "Consultation" },
  { id: "faq", label: "FAQ" },
  { id: "case-studies", label: "Success Stories" },
  { id: "comparison", label: "Comparison" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const sections = SECTIONS.map((s) => s.id);

  // Background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy → URL updates while scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          window.history.replaceState(null, "", `/${id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Click scroll
  const scrollToSection = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = navRef.current?.offsetHeight || 80;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - navbarHeight;

    window.history.pushState(null, "", `/${id}`);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  // Direct open scroll
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";

    setTimeout(() => {
      const element = document.getElementById(path);
      if (!element) return;

      const navbarHeight = navRef.current?.offsetHeight || 80;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }, 200);
  }, []);

  // Navbar visible links (only main ones)
  const navLinks = [
    "home",
    "why-choose",
    "services",
    "case-studies",
    "testimonials",
    "about",
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
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
          <a href="/home" onClick={(e) => scrollToSection(e, "home")}>
            <img
              src="/images/icons/logo.png"
              alt="AlGrowthexa"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((id) => {
              const section = SECTIONS.find((s) => s.id === id);
              return (
                <a
                  key={id}
                  href={`/${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    scrolled
                      ? "text-neutral-300 hover:text-white hover:bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918979779337"
              className={`p-2.5 rounded-full transition-colors ${
                scrolled
                  ? "bg-neutral-800 text-primary-400 hover:bg-neutral-700"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <FaPhone size={16} />
            </a>

            <a
              href="/consultation"
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

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#111827] z-50 p-6 lg:hidden shadow-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="mb-6 text-white/80"
            >
              <FaTimes size={24} />
            </button>

            <div className="space-y-4">
              {navLinks.map((id) => {
                const section = SECTIONS.find((s) => s.id === id);
                return (
                  <a
                    key={id}
                    href={`/${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className="block text-white/90 hover:text-white text-lg"
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
