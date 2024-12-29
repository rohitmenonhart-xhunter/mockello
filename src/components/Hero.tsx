import { motion } from 'framer-motion';
import { Brain, Users, Trophy, Rocket } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-4 right-4 flex items-center gap-2 text-sm text-gray-600"
      >
        <Rocket className="w-4 h-4 text-[#b13c74]" />
        <span>Powered by V77</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-[#b13c74] text-transparent bg-clip-text">
              Mockello
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Master your interview skills with AI-powered mock interviews. Practice makes perfect, and we're here to help you succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#features"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-[#b13c74] text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#b13c74] rounded-full text-lg font-semibold border-2 border-transparent bg-gradient-to-r from-blue-600 to-[#b13c74] border-gradient hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Advanced AI technology for realistic interview simulations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <Users className="w-12 h-12 text-[#b13c74] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized</h3>
            <p className="text-gray-600">Tailored feedback for continuous improvement</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your improvement with detailed analytics</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};