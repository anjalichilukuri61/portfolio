import { useState, useEffect } from 'react';
import Section from './Section';
import { GraduationCap, Briefcase } from 'lucide-react';
import { getExperiences } from '../services/api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExps = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExps();
  }, []);

  const techExp = experiences.filter(exp => exp.role !== 'Marketing Intern');
  const addExp = experiences.filter(exp => exp.role === 'Marketing Intern');

  return (
    <Section id="experience" title="Experience">
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Technical Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-cyan-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Technical Experience</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {techExp.map((exp, idx) => (
              <div key={idx} className="relative flex items-start gap-6 before:absolute before:left-5 md:before:left-1/2 before:w-3 before:h-3 before:bg-cyan-500 before:rounded-full before:-translate-x-1.5 before:translate-y-2 before:ring-4 before:ring-black">
                <div className="w-full ml-10 p-6 bg-[#0f0f11] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-colors">
                  <span className="text-sm text-cyan-400 font-medium block mb-2">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                  <p className="text-gray-400 font-medium mb-4">{exp.company}</p>

                  {exp.description && (
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  )}

                  {exp.responsibilities && (
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1.5">
                      {exp.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience Timeline */}
        <div>
          {addExp.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Additional Experience</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {addExp.map((exp, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 before:absolute before:left-5 md:before:left-1/2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:-translate-x-1.5 before:translate-y-2 before:ring-4 before:ring-black">
                    <div className="w-full ml-10 p-6 bg-[#0f0f11] border border-white/10 rounded-2xl hover:border-purple-500/30 transition-colors">
                      <span className="text-sm text-purple-400 font-medium block mb-2">{exp.period}</span>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                      <p className="text-gray-400 font-medium mb-4">{exp.company}</p>

                      {exp.description && (
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                      )}

                      {exp.responsibilities && (
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1.5">
                          {exp.responsibilities.map((task, i) => (
                            <li key={i}>{task}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </Section>
  );
};

export default Experience;
