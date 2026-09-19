import Section from './Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C"]
    },
    {
      title: "Technologies",
      skills: ["Machine Learning", "Data Preprocessing", "Feature Engineering", "MERN Stack", "HTML", "CSS"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "MongoDB", "MySQL", "VS Code", "Postman"]
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Scikit-learn"]
    },
    {
      title: "Core Concepts",
      skills: ["Classification Algorithms", "Model Evaluation", "REST APIs"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Communication Skills"]
    }
  ];

  return (
    <Section id="skills" title="Skills & Expertise" className="bg-black/50 relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0f0f11] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors group"
          >
            <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
