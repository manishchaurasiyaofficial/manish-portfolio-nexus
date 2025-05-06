
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
      
      <div className="container mx-auto px-4 relative z-10 md:flex md:items-center md:gap-8">
        <div className="mb-8 md:mb-0 flex justify-center md:w-1/3">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-agriculture-500 shadow-xl">
            <img 
              src="/lovable-uploads/d184d979-bd41-4c10-ba99-dc69be897672.png" 
              alt="Manish Kumar Chaurasiya" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Manish Kumar Chaurasiya
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-agriculture-700">
            Agri Enthusiastic & Community Leader
          </p>
          <div className="max-w-2xl mx-auto md:mx-0 mb-8">
            <p className="text-lg text-gray-700">
              Passionate about agritech, biotechnology, soil science, climate smart/eco-agriculture, leadership, and youth advocacy. Focused on research-driven solutions to enhance sustainability and resilience in food systems. Open to collaboration and innovation for real-world impact.
            </p>
          </div>
          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-agriculture-500 text-white hover:bg-agriculture-600 transition-colors"
            aria-label="Scroll Down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
