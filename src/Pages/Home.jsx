import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiLayout, FiCpu, FiPlay, FiAward, FiTrendingUp, FiImage } from 'react-icons/fi';
import Bento from '../Compo/Bento';
import Hero from '../Sections/Hero';
import Mockup from '../Sections/Mockup';
import Navbar from '../Compo/Navbar';
import Tesimonial from '../Sections/Tesimonial';





function Home() {



  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <Mockup />

    <Tesimonial />

      <Bento />


      {/* Stats Section */}
      <div className="container mx-auto px-4 py-24 border-t border-gray-800">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
            <FiAward className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-2">10M+</h3>
            <p className="text-gray-400">Videos Generated</p>
          </div>
          <div className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
            <FiTrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-2">99%</h3>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
            <FiCpu className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-2">5x</h3>
            <p className="text-gray-400">Faster Creation</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24 border-t border-gray-800">
        <div className="relative overflow-hidden rounded-3xl group hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of creators using our platform to bring their ideas to life
            </p>
            <Link 
              to="/studio" 
              className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;