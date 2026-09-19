import Section from './Section';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <BookOpen className="text-cyan-400" />, title: "B.Tech CSE" },
    { icon: <Award className="text-purple-400" />, title: "9.49/10 CGPA" },
    { icon: <Briefcase className="text-blue-400" />, title: "Multiple Internships" },
    { icon: <Code className="text-green-400" />, title: "Full-Stack Projects" }
  ];

  const interests = [
    "Full Stack Development",
    "MERN Stack",
    "Software Engineering",
    "Machine Learning",
    "AI-powered applications",
    "Problem Solving"
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-7 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a B.Tech Computer Science student and a passionate full-stack developer dedicated to building real-world software applications. I enjoy tackling complex challenges and transforming them into intuitive, high-performance web solutions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With a strong foundation in both frontend and backend technologies, I focus on creating seamless user experiences while ensuring robust and scalable architectures. I am constantly learning and adapting to new tools in the fast-paced tech ecosystem.
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-white mb-4">Core Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-black/50 rounded-xl">
                  {item.icon}
                </div>
                <h4 className="font-medium text-white">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default About;
