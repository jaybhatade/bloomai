import { motion } from "framer-motion"
import { Download, Image, Sparkles, User } from "lucide-react"
import Particles from "../Compo/Particles"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)]  flex items-center">
      {/* Particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
      </div>
      <div className="container mx-auto w-fit px-6 md:px-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Plan Your Finances With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                {" "}
                Bloom Budget
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Take control of your finances. Monitor expenses, set budgets, and track your net worth effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center justify-center cursor-pointer transition-colors duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download
            </div>
            <div className="px-8 py-3 border border-sky-500 text-white hover:bg-sky-500/20 rounded-lg font-semibold flex items-center justify-center cursor-pointer transition-colors duration-300">
              <User className="mr-2 h-5 w-5" />
              Get Started
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}
