const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xl font-bold text-white mb-4">Anjali Chilukuri</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Software Engineer | Full Stack Developer building scalable web applications.
        </p>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anjali Chilukuri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
