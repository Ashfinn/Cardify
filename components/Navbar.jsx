import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, Search, Bell } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Founders", href: "#founders" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg transition-colors duration-200 ${isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                  }`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <div className={`flex items-center space-x-3 ${isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Cardify Studio
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Search button */}
              <button className={`p-2 rounded-lg transition-colors duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
                }`}>
                <Search className="h-5 w-5" />
              </button>

              {/* Notifications */}
              <button className={`relative p-2 rounded-lg transition-colors duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
                }`}>
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
              </button>

              {/* CTA Button */}
              <button className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}