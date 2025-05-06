
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-agriculture-100 to-earth-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Manish Kumar Chaurasiya
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-agriculture-700">
          Agriculture Professional & Community Leader
        </p>
        <p className="max-w-2xl mx-auto text-lg mb-12 text-gray-700">
          Aspiring to join the USYC 2025 cohort to leverage my leadership skills and experience in community development and innovative agricultural projects.
        </p>
        <button
          onClick={scrollToAbout}
          className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-agriculture-500 text-white hover:bg-agriculture-600 transition-colors"
          aria-label="Scroll Down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
