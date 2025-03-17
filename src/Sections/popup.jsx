import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AppPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get Started with Bloom Budget
          </h1>
          
          <div className="space-y-6 max-w-md mx-auto">
            <motion.a
              href="https://bloombudgetapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Use Web App
            </motion.a>
            
            <motion.a
              href="/BloomBudget(Beta).apk"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-purple-600 text-white px-6 py-4 rounded-xl hover:bg-purple-700 transition-colors text-lg font-medium"
            >
              Download APK
            </motion.a>

            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-gray-700 text-white px-6 py-4 rounded-xl hover:bg-gray-600 transition-colors text-lg font-medium"
            >
              Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppPage;
