import React from 'react';
import { motion } from 'framer-motion';

const Bento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Features
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl p-6 shadow-lg row-span-2 h-[550px] border-t border-b border-t-transparent border-b-transparent bg-violet-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-600" />
          <div className="relative">
            <h3 className="text-xl font-bold uppercase text-white mb-2 text-center">Money Tracking</h3>
            <motion.img 
              src='/bbhome.png' 
              className='md:relative md:scale-135 top-[90px]'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl p-6 shadow-lg row-span-2 h-[550px]  border-t border-b border-t-transparent border-b-transparent bg-gradient-to-r from-violet-500 to-rose-600"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-rose-700" />
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-2 text-center">Budget Management</h3>
            <motion.img 
              src='/budget.png' 
              className='md:relative md:scale-130 top-[90px]'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl pt-6 pl-6 shadow-lg h-full border-t border-b border-t-transparent border-b-transparent bg-rose-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-rose-600" />
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-2">Visual Statistics</h3>
            <motion.img 
              src='/incexp.png' 
              className='relative rounded-xl scale-100 top-10 left-3 md:left-2'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl pt-6 pl-6 shadow-lg h-full border-t border-b border-t-transparent border-b-transparent bg-rose-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-rose-600 h-full" />
          <div className="relative h-full">
            <h3 className="text-xl font-bold text-white">Link Cards</h3>
            <div className='flex justify-end items-end w-full h-full'>
              <motion.img 
                src='/cards.png' 
                className='relative h-56 scale-120 bottom-10'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl pt-6 pl-6 shadow-lg md:col-span-2 h-full border-t border-b border-t-transparent border-b-transparent bg-gradient-to-r from-rose-600 to-rose-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-rose-600" />
          <div className="relative flex h-full">
            <div className="w-[40%] md:w-[35%] flex flex-col justify-start">
              <h3 className="text-xl font-bold text-white mb-2">Bloom AI</h3>
              <p className="text-gray-100">Your Financial Assistant</p>
            </div>
            <div className="w-[60%] md:w-[65%] flex items-center justify-center">
              <motion.img 
                src='/ai.png' 
                className='rounded-tl-xl h-[200px] scale-115 relative top-2'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bento;
