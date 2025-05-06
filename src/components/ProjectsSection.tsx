
import React from 'react';
import { Code } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-container bg-agriculture-50">
      <h2 className="section-title">Projects</h2>
      
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Project 1 - AI-Assisted Anemia Guidance */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
          <div className="bg-agriculture-600 p-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Code size={20} className="mr-2" />
              AI-Assisted Anemia Guidance
            </h3>
            <p className="text-agriculture-100 text-sm mt-1">Current</p>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              I am honored to have received my first international research grant from NAPA – Association of Nepalese Agricultural Professionals of Americas (2024–26) for my project "Developing AI-Assisted Anemia Guidance for Precision Health Monitoring in Goats."
            </p>
          </div>
        </div>
        
        {/* Project 2 - Soil Parameters Analysis */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
          <div className="bg-agriculture-600 p-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Code size={20} className="mr-2" />
              Soil Parameters Analysis
            </h3>
            <p className="text-agriculture-100 text-sm mt-1">08/2023 – 10/2023</p>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              "Comparative Analysis of Soil Parameters in Diverse Agricultural Environments: A Comprehensive Study"
            </p>
            <p className="mt-4 text-gray-600">
              Concluded that Panchkhal's soil analysis shows strong potential for rice productivity, with favorable pH and organic matter levels. However, excessive fertilizer and pesticide use threaten soil health. Adopting sustainable practices is vital to maintaining productivity and environmental integrity in this important agricultural region.
            </p>
          </div>
        </div>
        
        {/* Project 3 - Green Chilly Cultivation */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
          <div className="bg-agriculture-600 p-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Code size={20} className="mr-2" />
              Green Chilly Cultivation
            </h3>
            <p className="text-agriculture-100 text-sm mt-1">01/2023 – 07/2023</p>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              Conducted a field trial to evaluate the impact of different treatments on the yield of green chilli using ISFM practices. Focused on optimizing soil health and crop productivity, the project aimed to enhance sustainable farming techniques.
            </p>
          </div>
        </div>
        
        {/* Publications Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
          <div className="bg-agriculture-600 p-4">
            <h3 className="text-xl font-bold text-white">Publications</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold text-agriculture-700">Pesticide Exposure: Impact and Solution (2024)</h4>
              <p className="text-gray-600 italic">Still in editorial evaluation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-agriculture-700">Agribusiness, Management, Opportunities and Challenges (2023)</h4>
              <p className="text-gray-600">Published in KU Wall magazine.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conferences & Seminars */}
      <div className="mt-12 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center text-agriculture-700">Conferences & Seminars</h3>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-earth-500 p-4">
            <h4 className="text-xl font-bold text-white">Nepal Food Forum 2024</h4>
            <p className="text-white/80 text-sm mt-1">10/09/2024 | Yak and Yet, Kathmandu</p>
          </div>
          <div className="p-6">
            <p className="text-gray-700">
              Engaged in a professional seminar focused on advancing strategies for the early detection of late blight (Phytophthora infestans) in tomato crops. Kept stall on program and contributed discussions on the latest research findings, technologies, and methodologies aimed at improving disease management and crop yield.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
