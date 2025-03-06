import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ title, description, className, gradient }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`relative overflow-hidden rounded-xl p-6 shadow-lg ${className}`}
  >
    <div className={`absolute inset-0 ${gradient}`} />
    <div className="relative">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const Bento = () => {
  const cards = [
      {
        title: "Card 4",
        description: "Description for card 4",
        className: "row-span-2 h-full border-t border-b border-t-transparent border-b-transparent bg-violet-500",
        gradient: "bg-gradient-to-r from-violet-600 to-violet-600"
      },
      {
        title: "Card 3",
        description: "Description for card 3", 
        className: "row-span-2 h-full border-t border-b border-t-transparent border-b-transparent bg-gradient-to-l from-rose-600 to-violet-500",
        gradient: "bg-gradient-to-l from-rose-700 to-violet-600"
      },
    {
      title: "Card 1",
      description: "Description for card 1",
      className: "h-48 border-t border-b border-t-transparent border-b-transparent bg-rose-500",
      gradient: "bg-gradient-to-br from-rose-700 to-rose-600"
    },
    {
      title: "Card 2", 
      description: "Description for card 2",
      className: "h-48 border-t border-b border-t-transparent border-b-transparent bg-rose-500",
      gradient: "bg-gradient-to-br from-rose-700 to-rose-600"
    },
    {
      title: "Card 5",
      description: "Description for card 5",
      className: "md:col-span-2 h-48 border-t border-b border-t-transparent border-b-transparent bg-gradient-to-r from-rose-600 to-rose-500",
      gradient: "bg-gradient-to-br from-rose-700 to-rose-600"
    },
    {
      title: "Card 7",
      description: "Description for card 7",
      className: "h-48 border-t border-b border-t-transparent border-b-transparent bg-gradient-to-r from-violet-500 to-violet-500",
      gradient: "bg-gradient-to-r from-violet-600 to-violet-600"
    },
    {
      title: "Card 8",
      description: "Description for card 8",
      className: "h-48 border-t border-b border-t-transparent border-b-transparent bg-gradient-to-r from-violet-500 to-violet-500",
      gradient: "bg-gradient-to-r from-violet-600 to-violet-600"
    },
    {
      title: "Card 6",
      description: "Description for card 6",
      className: "md:col-span-2 h-48 border-t border-b border-t-transparent border-b-transparent bg-gradient-to-l  from-rose-600 md:via-rose-600 to-violet-500",
      gradient: "bg-gradient-to-l from-rose-700 md:via-rose-600 to-violet-600"
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <BentoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Bento;
