
import React from 'react';
import { Code, Languages, Star, Award, Users, Linkedin } from 'lucide-react';

// Create a new AchievementsSection component
const AchievementsSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <Award size={24} className="text-agriculture-600 mr-2" />
        <h3 className="text-2xl font-bold text-agriculture-700">Achievements</h3>
      </div>
      
      <div className="grid md:grid-cols-1 gap-6">
        <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
          <h4 className="font-bold text-lg mb-2">U.S. Embassy Youth Council Nepal</h4>
          <p className="text-gray-600 mb-3">18th Feb 2025 - Current</p>
          <p>Selected as one of the Top 55 youth nationwide for the USYC Cohort 2025, joining a dynamic network of changemakers to drive transformative impact.</p>
        </div>
        
        <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
          <h4 className="font-bold text-lg mb-2">NAPA International Research Grant</h4>
          <p className="text-gray-600 mb-3">23rd Feb 2025 - Current</p>
          <p>Awarded my first international research grant from NAPA (2024–26) for developing AI-Assisted Anemia Guidance in goats—an innovative project to support smallholder farmers.</p>
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-white">
      <h2 className="section-title">Skills</h2>
      
      <div className="mt-12 max-w-5xl mx-auto">
        {/* Achievements Section */}
        <AchievementsSection />
        
        {/* Digital Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Code size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Digital Skills</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">Python Language</p>
              <p className="text-sm text-gray-600">Basic knowledge</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">DSSAT</p>
              <p className="text-sm text-gray-600">Decision Support System for Agrotechnology Transfer</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">CROPWAT, CLIMWAT</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">Microsoft Office Package</p>
              <p className="text-sm text-gray-600">Word, Excel, PowerPoint, Access</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">Canva</p>
              <p className="text-sm text-gray-600">Proficiency in Canva application</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">Internet and Social Media</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">Report-Writing</p>
            </div>
            <div className="bg-agriculture-50 p-4 rounded-md">
              <p className="font-medium">Project Proposal Writing</p>
            </div>
          </div>
        </div>
        
        {/* Language Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Languages size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Languages</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Nepali</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Hindi</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">English</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Maithali</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Bhojpuri</span>
          </div>
        </div>
        
        {/* Memberships & Networks */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Users size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Memberships & Networks</h3>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">American Society for Microbiology</h4>
              <p className="text-gray-600 mb-1">28/11/2024 – Current | United States of America</p>
              <p>Got opportunity to connect with global researcher, and academicians.</p>
            </div>
          </div>
        </div>
        
        {/* Volunteering */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Award size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Volunteering</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">Kathmandu University Convocation</h4>
              <p className="text-gray-600 mb-3">13/12/2024 – 14/12/2024 | Dhulikhel</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">Welcome Program 2024</h4>
              <p className="text-gray-600 mb-3">March 2024 | Chairman</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">KU Panchkhal Day</h4>
              <p className="text-gray-600 mb-3">15/04/2024 – 16/04/2024 | Panchkhal</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">World Soil Day</h4>
              <p className="text-gray-600 mb-3">2024 Dec | Panchkhal</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">AI MEET 2023</h4>
              <p className="text-gray-600 mb-3">08/09/2023 | Panchkhal</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">Pesticide Awareness Program</h4>
              <p className="text-gray-600 mb-3">August 2023 | Bara</p>
            </div>
          </div>
        </div>
        
        {/* Hobbies and Interests */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Star size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Hobbies and Interests</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Cricket</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Football</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Reading Books</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Research Papers</span>
            <span className="bg-agriculture-100 text-agriculture-700 px-4 py-2 rounded-full">Leadership</span>
          </div>
        </div>
        
        {/* Recommendations */}
        <div>
          <div className="flex items-center mb-6">
            <Star size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Recommendations</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">Dr. Nawal Shrestha, PhD</h4>
                  <p className="text-agriculture-600">Mentor</p>
                </div>
                <a href="https://www.linkedin.com/in/nawal-shrestha-phd-60402063/?originalSubdomain=np" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="mt-4">
                <p className="mb-1">Ex. Research Associate, Harvard University</p>
                <p className="mb-1">Email: nawal.shrestha@ku.edu.np</p>
                <p className="mb-1">Phone: (+977) 9841469128</p>
              </div>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">Dr. Ram Devi Tachamo Shah, PhD</h4>
                  <p className="text-agriculture-600">Mentor</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-1">Email: ramdevi.shah@ku.edu.np</p>
                <p className="mb-1">Phone: (+977) 9841432283</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
