
import React from 'react';
import { Code, Language, Star, Award, Users, Calendar, Linkedin } from 'lucide-react';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-white">
      <h2 className="section-title">Skills & Achievements</h2>
      
      <div className="mt-12 max-w-5xl mx-auto">
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
              <p className="font-medium">IBM SPSS</p>
              <p className="text-sm text-gray-600">Statistical package for Sciences</p>
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
            <Language size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Language Skills</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left bg-agriculture-600 text-white rounded-tl-md">Language</th>
                  <th className="py-3 px-4 text-left bg-agriculture-600 text-white">Listening</th>
                  <th className="py-3 px-4 text-left bg-agriculture-600 text-white">Reading</th>
                  <th className="py-3 px-4 text-left bg-agriculture-600 text-white">Writing</th>
                  <th className="py-3 px-4 text-left bg-agriculture-600 text-white">Speaking</th>
                  <th className="py-3 px-4 text-left bg-agriculture-600 text-white rounded-tr-md">Interaction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-agriculture-50 border-b border-agriculture-100">
                  <td className="py-3 px-4 font-medium">Nepali</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C2</td>
                </tr>
                <tr className="bg-white border-b border-agriculture-100">
                  <td className="py-3 px-4 font-medium">Hindi</td>
                  <td className="py-3 px-4">C1</td>
                  <td className="py-3 px-4">C1</td>
                  <td className="py-3 px-4">B2</td>
                  <td className="py-3 px-4">C1</td>
                  <td className="py-3 px-4">C1</td>
                </tr>
                <tr className="bg-agriculture-50 border-b border-agriculture-100">
                  <td className="py-3 px-4 font-medium">English</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C2</td>
                  <td className="py-3 px-4">C1</td>
                  <td className="py-3 px-4">C1</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Maithali</td>
                  <td className="py-3 px-4">C1</td>
                  <td className="py-3 px-4">B2</td>
                  <td className="py-3 px-4">C1</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">C1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-gray-600">Mother tongue: Bhojpuri | Levels: A1/A2: Basic, B1/B2: Independent, C1/C2: Proficient</p>
        </div>
        
        {/* Memberships & Networks */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Users size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Memberships & Networks</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">American Society for Microbiology</h4>
              <p className="text-gray-600 mb-1">28/11/2024 – Current | United States of America</p>
              <p>Got opportunity to connect with global researcher, and academicians.</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">Kathmandu University Youth Red Cross Circle</h4>
              <p className="text-gray-600 mb-1">07/09/2023 | Dhulikhel</p>
            </div>
          </div>
        </div>
        
        {/* Management & Leadership */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Star size={24} className="text-agriculture-600 mr-2" />
            <h3 className="text-2xl font-bold text-agriculture-700">Management & Leadership</h3>
          </div>
          
          <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-2">Class Representative</h4>
            <p>I have been a class representative since December 2022 until now.</p>
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
              <p>I got an opportunity to participate in the VVIP gesture of SENATE MEMBERS of the university and be part of overall management.</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">KU Panchkhal Day</h4>
              <p className="text-gray-600 mb-3">15/04/2024 – 16/04/2024 | Panchkhal</p>
            </div>
            
            <div className="bg-white border border-agriculture-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-2">AI MEET 2023</h4>
              <p className="text-gray-600 mb-3">08/09/2023 | Panchkhal</p>
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
                <p className="mb-1">PhD scholar in Natural Sciences, Johann Wolfgang Goethe University, Germany</p>
                <p className="mb-1">Oxford University Scholar, Planet under Pressure (2012)</p>
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
