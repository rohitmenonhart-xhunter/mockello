import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-[#b13c74]" />
            <p className="text-lg">A product by V77</p>
          </div>
          <a
            href="/v77"
            className="text-[#b13c74] hover:text-blue-600 transition-colors font-semibold"
          >
            Learn more about V77 →
          </a>
          <p className="mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} V77. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};