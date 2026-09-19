import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpeg'; // We'll place this later

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Anime-style Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      
      {/* Professional Tech Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-[1px] border-cyan-500/20 rounded-full -z-10 blur-[1px]"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border-[1px] border-purple-500/20 rounded-full -z-10 border-dashed"
      ></motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block">
            <span className="px-4 py-1.5 rounded-full bg-cyan-950/40 text-cyan-400 text-sm font-semibold border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Available for work
            </span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              Anjali Chilukuri
            </span>
          </motion.h1>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl md:text-2xl font-medium text-gray-300">
            Software Engineer | Full Stack Developer
          </motion.h2>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I build scalable, user-focused web applications using modern full-stack technologies and enjoy solving real-world problems through software.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 bg-black text-white border border-white/20 font-bold rounded-xl hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-6 mt-4">
            <a href="https://github.com/anjalichilukuri61" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Github size={26} />
            </a>
            <a href="https://www.linkedin.com/in/anjali-chilukuri" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition-all">
              <Linkedin size={26} />
            </a>
            <a href="mailto:chilukurianjali2022@gmail.com" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all">
              <Mail size={26} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            {/* We use a fallback background in case the image is missing */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
              Profile Image Required
            </div>
            <img
              src={profileImg}
              alt="Anjali Chilukuri"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
