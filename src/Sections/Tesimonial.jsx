import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

function Testimonial() {
  const reviews = [
    {
      img: "/d.jpg",
      name: "Dr. Deepa Verma",
      post: "Vice Principal of Viva College & IQAC Coordinator",
      review: "I'm pretty impressed. It does exactly what it says it does, and it does it well. It's simple to use, which is a huge plus for me."
    },
    {
      img: "/p.jpg",
      name: "Dr. Prajakta Paranjape",
      post: "Vice Principal of Viva College",
      review: "A solid, user-friendly tool for anyone looking to manage their money effectively. Students' efforts are excellent and it is user-friendly. Its simplicity and clear design make it perfect for students managing tight budgets."
    },
    {
      img: "/k.png",
      name: "Prof. Kalpana Jain",
      post: "Assistant Professor",
      review: "The interface is clean and easy to use. I can track expenses quickly, set budgets, and see where my money is going. It's a great tool for staying on top of my finances without feeling overwhelmed. Definitely worth trying if you want to manage your money better."
    },
    {
      img: "/a.jpg",
      name: "Avinash Sonawane",
      post: "Assistant Professor",
      review: "This budget app is fantastic! It's simple to use and really helps you see where your money goes. Budgeting feels less stressful and more manageable. A great tool for anyone wanting to get a handle on their finances."
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        The reviews speak for themselves
      </motion.h2>
      
      <div className="flex flex-col gap-8">
        {/* Rating Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mx-auto max-w-md flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
        >
          <div className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            4.5
          </div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill={i < 4 ? '#facc15' : '#6b7280'} className={`w-5 h-5 sm:w-6 sm:h-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-500'}`} />
            ))}
          </div>
          <p className="text-gray-400 text-center text-sm sm:text-base">
            Average rating from our users
          </p>
        </motion.div>

        {/* Reviews Section */}
        <div className="w-full relative">
          {/* Fade effect */}
          <div className="absolute inset-y-0 left-0 w-4 sm:w-10 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-4 sm:w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          <div className="snap-x snap-mandatory overflow-x-auto scroll-smooth hide-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
            <div className="flex gap-4 sm:gap-6 w-max py-2">
              {reviews.map((review, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[280px] sm:w-80 snap-center bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 flex-shrink-0 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-500/50 aspect-square"
                    />
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">{review.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{review.post}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-xs sm:text-sm">
                    {review.review}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation indicators for mobile */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2">
        {reviews.map((_, index) => (
          <div 
            key={index} 
            className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors duration-300"
          />
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Testimonial