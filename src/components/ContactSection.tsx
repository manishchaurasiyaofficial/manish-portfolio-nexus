
import React from 'react';
import { Phone, Mail, Home, Briefcase } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-container bg-agriculture-50">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-agriculture-700">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-agriculture-200 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-agriculture-700" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <p className="font-medium">(+977) 9744205109</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-agriculture-200 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-agriculture-700" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="font-medium">chaurasiyamanish500@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-agriculture-200 p-3 rounded-full mr-4 mt-1">
                  <Home size={20} className="text-agriculture-700" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Home Address</p>
                  <p className="font-medium">Birgunj-15, Parsa 44300 Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-agriculture-200 p-3 rounded-full mr-4 mt-1">
                  <Briefcase size={20} className="text-agriculture-700" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Work Address</p>
                  <p className="font-medium">Kavrepalanchok, Nepal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-agriculture-700">Send a Message</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agriculture-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agriculture-500"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agriculture-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-agriculture-600 text-white py-2 px-6 rounded-md hover:bg-agriculture-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agriculture-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
