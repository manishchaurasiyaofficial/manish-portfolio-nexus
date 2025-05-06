
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-agriculture-600">
          Manish <span className="text-earth-500">Chaurasiya</span>
        </a>
        
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors w-full text-left py-2"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors w-full text-left py-2"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors w-full text-left py-2"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors w-full text-left py-2"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors w-full text-left py-2"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-agriculture-500 transition-colors w-full text-left py-2"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
