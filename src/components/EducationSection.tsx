
import React from 'react';
import { School, GraduationCap, Book } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-container bg-agriculture-50">
      <h2 className="section-title">Education & Training</h2>
      
      <div className="mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Education Qualifications */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-agriculture-700 mb-6">Education Qualifications</h3>
            
            {/* Bachelor in Agriculture */}
            <div className="timeline-item">
              <div className="flex items-start">
                <div className="mt-1">
                  <GraduationCap size={28} className="text-agriculture-600 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-agriculture-700">Bachelor in Agriculture</h3>
                  <p className="text-lg font-medium">Kathmandu University School of Science (Need Based Scholar)</p>
                </div>
              </div>
            </div>
            
            {/* School Leaving Certificate Examination */}
            <div className="timeline-item">
              <div className="flex items-start">
                <div className="mt-1">
                  <Book size={28} className="text-agriculture-600 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-agriculture-700">School Leaving Certificate Examination</h3>
                  <p className="text-lg font-medium">National Infotech Secondary School</p>
                </div>
              </div>
            </div>
            
            {/* Secondary Education Examination */}
            <div className="timeline-item">
              <div className="flex items-start">
                <div className="mt-1">
                  <School size={28} className="text-agriculture-600 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-agriculture-700">Secondary Education Examination (S.E.E)</h3>
                  <p className="text-lg font-medium">Shree Nepal Rastriya MA VI (Government School)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Training Programs */}
          <div>
            <h3 className="text-2xl font-bold text-agriculture-700 mb-6">Professional Training</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Food Processing Technology */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Food Processing Technology</h4>
                <p className="text-gray-600 mb-2">Ministry of Agriculture and Livestock Development, DFTQC</p>
                <p className="text-gray-500 text-sm">14/03/2024 – 20/03/2024 | Kathmandu, Nepal</p>
              </div>
              
              {/* Waste Management */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Fundamentals of Waste Management, Composting, Vermicomposting and Hydroponics</h4>
                <p className="text-gray-600 mb-2">Environmental Research Services and Training Centre (ERST)</p>
                <p className="text-gray-500 text-sm">09/03/2024 | Kathmandu, Nepal</p>
              </div>
              
              {/* Python Course */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Crash Course on Python</h4>
                <p className="text-gray-600 mb-2">Google in collaboration with Coursera</p>
                <p className="text-gray-500 text-sm">15/07/2024 – 18/10/2024</p>
              </div>
              
              {/* Sustainable Agriculture */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2">Sustainable Agricultural Land Management</h4>
                <p className="text-gray-600 mb-2">University of Florida in collaboration with Coursera</p>
                <p className="text-gray-500 text-sm">10/2024 – 12/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
