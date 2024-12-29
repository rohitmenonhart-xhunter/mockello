import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AptitudeSection } from './features/AptitudeSection';
import { PerformanceSection } from './features/PerformanceSection';
import { InterviewSection } from './features/InterviewSection';
import { ScheduleSection } from './features/ScheduleSection';

export const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#b13c74] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interview preparation tools designed for your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AptitudeSection />
          <PerformanceSection />
        </div>

        <InterviewSection />
        <ScheduleSection />
      </div>
    </section>
  );
};