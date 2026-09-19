import { useState } from 'react';
import Section from './Section';
import { Mail, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { sendMessage } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus('error');
      console.error('Error sending message:', error);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:chilukurianjali2022@gmail.com" className="flex items-center gap-4 p-4 bg-[#0f0f11] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-colors group">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-white font-medium">chilukurianjali2022@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/anjalichilukuri61" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#0f0f11] border border-white/10 rounded-2xl hover:border-gray-500/30 transition-colors group">
              <div className="p-3 bg-gray-500/10 text-gray-400 rounded-xl group-hover:bg-gray-700 group-hover:text-white transition-colors">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="text-white font-medium">anjalichilukuri61</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/anjali-chilukuri" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#0f0f11] border border-white/10 rounded-2xl hover:border-blue-500/30 transition-colors group">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="text-white font-medium">Anjali Chilukuri</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-[#0f0f11] border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl text-center font-medium">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;
