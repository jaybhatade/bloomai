import { motion } from "framer-motion"
import { Download, User } from "lucide-react"
import Particles from "../Compo/Particles"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="relative md:min-h-[calc(100vh-76px)] min-h-[calc(70vh)] flex items-center">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      <div className="container mx-auto w-fit px-6 md:px-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center">
            <img src="/Logo.png" alt="" className="h-24 w-24"/>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl mb-8 max-w-2xl mx-auto"
          >
            Budgeting & Money Tracking App
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Manage your finances with confidence by tracking your spending, budget, investments, and net worth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/app">
              <div className="px-8 py-3 border border-blue-500 text-white hover:bg-sky-500/20 rounded-lg font-semibold flex items-center justify-center cursor-pointer transition-colors duration-300">
                <User className="mr-2 h-5 w-5" />
                Get Started
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
