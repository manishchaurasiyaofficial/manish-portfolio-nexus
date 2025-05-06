
import React from 'react';
import { School, GraduationCap, Book } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-container bg-agriculture-50">
      <h2 className="section-title">Education & Training</h2>
      
      <div className="mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="space-y-8">
            {/* Bachelor in Agriculture */}
            <div className="timeline-item">
              <div className="flex items-start">
                <div className="mt-1">
                  <GraduationCap size={28} className="text-agriculture-600 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-agriculture-700">Bachelor in Agriculture</h3>
                  <p className="text-lg font-medium">Kathmandu University School of Science (Need Based Scholar)</p>
                  <p className="text-gray-600">2022 – Current | Panchkhal, Nepal</p>
                  <div className="mt-2">
                    <p><span className="font-medium">Field of study:</span> Bsc. Ag</p>
                    <p><span className="font-medium">Final grade:</span> 3.78 (As per last Result)</p>
                    <p><a href="https://ku.edu.np/" target="_blank" rel="noopener noreferrer" className="text-agriculture-600 hover:underline">https://ku.edu.np/</a></p>
                  </div>
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
                  <p className="text-gray-600">2018 – 2020 | Birgunj, Nepal</p>
                  <div className="mt-2">
                    <p><span className="font-medium">Field of study:</span> Science 10+2</p>
                    <p><span className="font-medium">Final grade:</span> 3.13</p>
                    <p><span className="font-medium">Subjects:</span> Biology and Mathematics</p>
                  </div>
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
                  <p className="text-gray-600">2009 – 2018 | Mahagadhimai Babuain, Nepal</p>
                  <div className="mt-2">
                    <p><span className="font-medium">Field of study:</span> 10TH</p>
                    <p><span className="font-medium">Final grade:</span> 3.35</p>
                    <p><span className="font-medium">Subjects:</span> Account and Opt. Mathematics</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Training Programs */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-agriculture-700">Professional Training</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Food Processing Technology */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">Food Processing Technology</h4>
                  <p className="text-gray-600 mb-2">Ministry of Agriculture and Livestock Development, DFTQC</p>
                  <p className="text-gray-500 text-sm mb-3">14/03/2024 – 20/03/2024 | Kathmandu, Nepal</p>
                  <p className="text-sm">
                    This training focuses on creating value-added products from existing food resources, emphasizing agri-business
                    development. It encompasses key areas such as company registration, product formulation, and marketing
                    strategies to enhance the overall value and marketability of agricultural products.
                  </p>
                  <p className="mt-2"><a href="https://dftqc.gov.np/" target="_blank" rel="noopener noreferrer" className="text-agriculture-600 hover:underline text-sm">https://dftqc.gov.np/</a></p>
                </div>
                
                {/* Waste Management */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">Fundamentals of Waste Management, Composting, Vermicomposting and Hydroponics</h4>
                  <p className="text-gray-600 mb-2">Environmental Research Services and Training Centre (ERST)</p>
                  <p className="text-gray-500 text-sm mb-3">09/03/2024 | Kathmandu, Nepal</p>
                  <p className="mt-2"><a href="https://erst.com.np/" target="_blank" rel="noopener noreferrer" className="text-agriculture-600 hover:underline text-sm">https://erst.com.np/</a></p>
                </div>
                
                {/* Python Course */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">Crash Course on Python</h4>
                  <p className="text-gray-600 mb-2">Google in collaboration with Coursera</p>
                  <p className="text-gray-500 text-sm mb-3">15/07/2024 – 18/10/2024</p>
                  <p className="mt-2"><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-agriculture-600 hover:underline text-sm">https://www.coursera.org/</a></p>
                </div>
                
                {/* Sustainable Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">Sustainable Agricultural Land Management</h4>
                  <p className="text-gray-600 mb-2">University of Florida in collaboration with Coursera</p>
                  <p className="text-gray-500 text-sm mb-3">10/2024 – 12/2024</p>
                  <p className="mt-2"><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-agriculture-600 hover:underline text-sm">https://www.coursera.org/</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
