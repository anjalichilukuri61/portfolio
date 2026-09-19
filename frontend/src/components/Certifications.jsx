import Section from './Section';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, FileText } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      date: "December 2025",
      image: "/cert-salesforce.jpeg"
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy & OpenEDG Python Institute",
      date: "November 3, 2024",
      image: "/cert-python.jpeg"
    },
    {
      title: "Problem Solving Through Programming in C",
      issuer: "NPTEL (SWAYAM) – IIT Kharagpur",
      date: "2024 (Jan - Apr)",
      image: "/cert-c.jpeg"
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL (SWAYAM) – IIT Madras",
      date: "2025 (Jul - Oct)",
      image: "/cert-privacy.pdf"
    }
  ];

  return (
    <Section id="certifications" title="Certifications" className="bg-black/40">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, idx) => {
          const isPdf = cert.image.endsWith('.pdf');
          
          return (
            <motion.a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-[#0f0f11] to-[#16171d] border border-white/10 rounded-2xl p-0 relative group overflow-hidden hover:border-cyan-500/40 transition-all hover:-translate-y-2 flex flex-col cursor-pointer"
            >
              {/* Certificate Image or PDF Placeholder */}
              <div className="w-full h-48 bg-[#0a0a0c] relative overflow-hidden border-b border-white/10 flex items-center justify-center">
                {isPdf ? (
                  <div className="flex flex-col items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-500">
                    <FileText size={48} className="mb-2" />
                    <span className="text-sm font-semibold text-gray-400">View PDF Document</span>
                  </div>
                ) : (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                
                {/* Overlay hover icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <ExternalLink size={32} className="text-white" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <Award className="text-cyan-400 mb-4 relative z-10 hidden" size={32} />
                
                <h3 className="text-lg font-bold text-white mb-2 relative z-10 flex-1">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 relative z-10">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 relative z-10 pt-4 border-t border-white/5 mt-auto">
                  <Calendar size={14} />
                  {cert.date}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
};

export default Certifications;
