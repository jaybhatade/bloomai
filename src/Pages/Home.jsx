import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiLayout, FiCpu, FiPlay, FiAward, FiTrendingUp, FiImage } from 'react-icons/fi';
import Bento from '../Compo/Bento';
import Hero from '../Sections/Hero';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-gray-800/50 border border-gray-700 hover:border-blue-500 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-lg bg-blue-500/10">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ProductImageCard = ({ src, productName }) => (
  <div className="relative group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
    <img
      src={src}
      alt={productName}  // Important for accessibility and SEO
      className="w-full h-64 object-cover rounded-xl bg-gray-800 border border-gray-700"
    />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center">
        {/* You could add a small icon or text here if needed */}
        </div>
  </div>
);


function Home() {
  const features = [
    {
      icon: FiZap,
      title: "Fast Product Visuals",
      description: "Generate product images and videos in seconds. AI-powered speed for your marketing needs."
    },
    {
      icon: FiLayout,
      title: "Versatile Formats",
      description: "Create visuals in various formats, optimized for e-commerce, social media, and more."
    },
    {
      icon: FiCpu,
      title: "AI-Driven Creativity",
      description: "Use cutting-edge AI to generate unique and engaging product visuals that boost sales."
    },
    {
      icon: FiImage,
      title: "Realistic Product Rendering",
      description: "Generate photorealistic images of your products from different angles and in different settings."
    },
        {
      icon: FiPlay,
      title: "Dynamic Product Videos",
      description: "Create captivating product videos that showcase your products in action and highlight their key features."
    },
        {
      icon: FiTrendingUp,
      title: "Boost Sales & Engagement",
      description: "Increase conversions and customer engagement with high-quality, AI-generated product visuals."
    },
  ];

  const productImages = [
    { src: "/p3.jpg", productName: "Product 1" }, // Replace with your image paths and product names
    { src: "/p4.jpg", productName: "Product 2" },
    { src: "/p5.jpg", productName: "Product 3" },
  ];


  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Hero />

      <div className="container mx-auto px-4 py-24 border-t border-gray-800">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Product Image Examples Section */}
      <div className="container mx-auto px-4 py-24 border-t border-gray-800">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
            Product Examples
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See AI Product Generation in Action</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore AI-generated images of various products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productImages.map((product, index) => (
            <ProductImageCard key={index} {...product} />
          ))}
        </div>
      </div>

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