
import React from 'react';
import { Phone, Mail, Home, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
        <div className="bg-agriculture-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-agriculture-700">Personal Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-agriculture-200 p-2 rounded-full mr-3">
                <Phone size={18} className="text-agriculture-700" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p>(+977) 9744205109</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-agriculture-200 p-2 rounded-full mr-3">
                <Mail size={18} className="text-agriculture-700" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="break-all">chaurasiyamanish500@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-agriculture-200 p-2 rounded-full mr-3">
                <Home size={18} className="text-agriculture-700" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Home</p>
                <p>Birgunj-15, Parsa 44300 Nepal</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-agriculture-200 p-2 rounded-full mr-3">
                <Briefcase size={18} className="text-agriculture-700" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Work</p>
                <p>Kavrepalanchok, Nepal</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-agriculture-700">Professional Summary</h3>
          <p className="mb-4">
            As an agriculture professional with a strong background in community development, I am dedicated to implementing sustainable farming practices and empowering local communities. My experience spans from hands-on agricultural operations to leadership roles in student organizations.
          </p>
          
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-2">Personal Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Nationality</p>
                <p className="font-medium">Nepalese</p>
              </div>
              <div>
                <p className="text-gray-600">Date of birth</p>
                <p className="font-medium">27/06/2002</p>
              </div>
              <div>
                <p className="text-gray-600">Gender</p>
                <p className="font-medium">Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
