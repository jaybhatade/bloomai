import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiLayout, FiCpu, FiPlay, FiAward, FiTrendingUp, FiImage } from 'react-icons/fi';
import Bento from '../Compo/Bento';
import Hero from '../Sections/Hero';
import Mockup from '../Sections/Mockup';
import Navbar from '../Compo/Navbar';
import Tesimonial from '../Sections/Tesimonial';
import Footer from '../Sections/Footer';
import AboutSection from '../Sections/About';





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
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
            <FiAward className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-2">XX</h3>
            <p className="text-gray-400">Waitlist</p>
          </div>
          <div className="group p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
            <FiTrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold mb-2">90%</h3>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default Home;