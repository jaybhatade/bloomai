import React from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Gaurav Shrivastav',
      credentials: 'CFA Level 1 Candidate, BFM Student from Mumbai University.',
      expertise: 'Financial expertise and strategic direction.'
    },
    {
      name: 'Jay Bhatade',
      credentials: 'BSc in Data Science & Data Analytics from Mumbai University.',
      expertise: 'Tech innovator, product development and data strategy.'
    }
  ];

  return (
    <div className="bg-black text-white py-24 w-full border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Meet the Team
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <FaUser className="text-white w-8 h-8" />
                </div>
                
                <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                
                <p className="text-gray-400">{member.credentials}</p>
                
                <p className="text-gray-400">{member.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;