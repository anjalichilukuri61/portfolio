import Section from './Section';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Seshadri Rao Gudlavalleru Engineering College",
      period: "2023 - 2027",
      details: "JNTUK"
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"></div>

        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-24 group"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 w-16 h-16 bg-[#0f0f11] border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <GraduationCap size={28} />
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">
                {edu.degree}
              </h3>

              <div className="text-cyan-400 font-medium mb-4">
                {edu.institution}
              </div>

              <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-sm text-gray-300 mb-6">
                {edu.period}
              </div>

              <p className="text-gray-400 leading-relaxed">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;