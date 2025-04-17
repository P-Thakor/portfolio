"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events for header styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update header styling based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling when clicking on navigation links
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3" 
          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-2xl font-bold ${
            isScrolled 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
              : "text-white"
          }`}>
            Parth Thakor
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`relative font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? (activeSection === item 
                            ? "text-blue-600" 
                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          )
                        : (activeSection === item 
                            ? "text-white" 
                            : "text-blue-100 hover:text-white"
                          )
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {activeSection === item && (
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 -mb-1 ${
                        isScrolled 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                          : "bg-white"
                      }`}></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none ${
              isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 absolute left-4 right-4">
            <ul className="space-y-3">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-3 py-2 rounded-lg ${
                      activeSection === item 
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}