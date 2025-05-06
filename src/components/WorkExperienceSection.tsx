
import React from 'react';
import { Briefcase, Users } from 'lucide-react';

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="mt-12 max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="space-y-12">
          {/* Vice President */}
          <div className="timeline-item">
            <div className="flex items-start">
              <div className="mt-1">
                <Users size={28} className="text-agriculture-600 mr-4" />
              </div>
              <div>
                <div className="bg-agriculture-100 px-3 py-1 rounded-full inline-block mb-2">
                  <p className="font-semibold text-agriculture-700">14/04/2024 – Current</p>
                </div>
                <h3 className="text-xl font-bold text-agriculture-700">Vice President</h3>
                <p className="text-lg font-medium">Kathmandu University Agriculture Club</p>
                <p className="text-gray-600">Panchkhal, Nepal</p>
              </div>
            </div>
          </div>
          
          {/* Quality Board */}
          <div className="timeline-item">
            <div className="flex items-start">
              <div className="mt-1">
                <Users size={28} className="text-agriculture-600 mr-4" />
              </div>
              <div>
                <div className="bg-agriculture-100 px-3 py-1 rounded-full inline-block mb-2">
                  <p className="font-semibold text-agriculture-700">2023 – 2024</p>
                </div>
                <h3 className="text-xl font-bold text-agriculture-700">Quality Board</h3>
                <p className="text-lg font-medium">International Association Of Student in Agricultural and Related Sciences</p>
                <p className="text-gray-600">Dhulikhel, Nepal</p>
              </div>
            </div>
          </div>
          
          {/* Employee */}
          <div className="timeline-item">
            <div className="flex items-start">
              <div className="mt-1">
                <Briefcase size={28} className="text-agriculture-600 mr-4" />
              </div>
              <div>
                <div className="bg-agriculture-100 px-3 py-1 rounded-full inline-block mb-2">
                  <p className="font-semibold text-agriculture-700">2021 – 2022</p>
                </div>
                <h3 className="text-xl font-bold text-agriculture-700">Employee</h3>
                <p className="text-lg font-medium">Shree Hans Krishi Sahakari Sanstha Limited</p>
                <p className="text-gray-600">Mahagadhimai Bara, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
