
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
                <p className="text-gray-600 mb-4">Panchkhal, Nepal</p>
                
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>Lead and manage a diverse range of programs at KUAC, focusing on community engagement and agricultural innovation.</li>
                  <li>Coordinate community visit programs and school outreach initiatives to promote awareness and education in sustainable practices.</li>
                  <li>Collaborate on upgrading various climate-smart agriculture techniques to enhance productivity and sustainability.</li>
                  <li>Promote value-added product programs to increase local agricultural profitability and marketability.</li>
                  <li>Organize and facilitate plant clinics and soil testing camps across different regions to support farmers with expert advice and resources.</li>
                  <li>Execute various campaign programs aimed at raising awareness and fostering community involvement in agricultural development.</li>
                  <li>Represent KUAC in multiple programs and forums, advocating for sustainable agricultural practices and community development.</li>
                  <li>Currently developing and applying for research projects in collaboration with KUAC to further advance agri-tech research and practices.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Secretary */}
          <div className="timeline-item">
            <div className="flex items-start">
              <div className="mt-1">
                <Briefcase size={28} className="text-agriculture-600 mr-4" />
              </div>
              <div>
                <div className="bg-agriculture-100 px-3 py-1 rounded-full inline-block mb-2">
                  <p className="font-semibold text-agriculture-700">23/09/2024 – Current</p>
                </div>
                <h3 className="text-xl font-bold text-agriculture-700">Secretary</h3>
                <p className="text-lg font-medium">Nepal Student Union Kathmandu University Panchkhal Campus</p>
                <p className="text-gray-600 mb-4">Panchkhal, Nepal</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-agriculture-600">Event Coordination</h4>
                    <ul className="list-disc list-outside ml-6 space-y-1">
                      <li>B.P Koirala Memorial Football Cup: Successfully organized an inter-student football cup aimed at promoting unity, cooperation, and health benefits amongst students.</li>
                      <li>Agri-tech Community Programs: Initiated and coordinated community programs focused on agricultural technology, fostering innovation and collaboration within the local community.</li>
                      <li>Blood Donation Campaigns: Organized and facilitated blood donation programs to encourage community participation and support local health services.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-agriculture-600">Leadership Development</h4>
                    <ul className="list-disc list-outside ml-6">
                      <li>Leadership Skills Training: Developed and led a training program for executive members to enhance leadership skills, focusing on effective governance and teamwork.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-agriculture-600">Subcommittee Leadership</h4>
                    <ul className="list-disc list-outside ml-6">
                      <li>Chief of External Affairs Subcommittee: Oversaw external affairs as the chief of a subcommittee, addressing and advocating for key issues affecting students within the university.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-agriculture-600">Advocacy and Safety Coordination</h4>
                    <ul className="list-disc list-outside ml-6">
                      <li>Student Advocacy: Identified and raised critical issues faced by students at the university, working towards effective solutions in collaboration with university administration.</li>
                      <li>Coordination with Local Authorities: Collaborated with local bodies to implement safety measures, particularly emphasizing the safety of female students within the university environment.</li>
                    </ul>
                  </div>
                </div>
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
                <p className="text-gray-600 mb-4">Dhulikhel, Nepal</p>
                
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>Strategy Development & Coordination: Led the coordination and execution of various programs run by IAAS, ensuring alignment with organizational goals.</li>
                  <li>Community Engagement: Promoted the NUS crop initiative within the university and local community, including the development of diverse food varieties to enhance local agriculture.</li>
                  <li>Entrepreneurial Insights: Conducted interviews with local entrepreneurs, showcasing their business journeys and fostering a narrative of entrepreneurship within the community.</li>
                  <li>Advocacy & Event Organization: Organized rallies and awareness events, including activities for International Human Rights Day, to advocate for social justice and human rights.</li>
                  <li>Webinars & Educational Programs: Designed and facilitated multiple webinars focused on agri-tech, contributing to knowledge sharing and innovation in agricultural practices.</li>
                </ul>
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
                <p className="text-gray-600 mb-4">Mahagadhimai Bara, Nepal</p>
                
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>Collaborated closely with farmers to address their needs on the ground, fostering strong relationships to enhance agricultural practices.</li>
                  <li>Managed a range of administrative and technical functions within the cooperative, ensuring smooth operational processes.</li>
                  <li>Oversaw the distribution of subsidized agricultural equipment and materials, empowering farmers to improve their productivity.</li>
                  <li>Engaged in innovative agricultural solutions, including integrated farming techniques and initiatives aimed at reducing pesticide usage.</li>
                  <li>Completed various training programs focused on integrated farming systems, COPOMIS, accounting practices, and seed production, enhancing professional expertise.</li>
                  <li>Successfully conducted programs such as composting initiatives using organic waste and a pesticide reduction campaign in the banana farming region of Singhol.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
