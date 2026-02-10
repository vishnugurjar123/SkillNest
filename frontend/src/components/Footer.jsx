import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

         
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              SkillNest
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              SkillNest is a modern learning platform helping students
              build real-world skills with practical courses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400">Courses</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-3">
              Contact
            </h3>
            <p className="text-sm text-slate-400">
              📧 gurjarvishnu740@gmail.com
            </p>
            <p className="text-sm text-slate-400 mt-1">
              📞 +91 98765 43210
            </p>
            <p className="text-sm text-slate-400 mt-1">
              📍 Gwalior, India
            </p>
          </div>
        </div>

      
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SkillNest. All rights reserved.
          </p>

          <div className="flex gap-4 text-lg">
            <span className="hover:text-blue-400 cursor-pointer">🌐</span>
            <span className="hover:text-blue-400 cursor-pointer">📘</span>
            <span className="hover:text-blue-400 cursor-pointer">📸</span>
            <span className="hover:text-blue-400 cursor-pointer">🐦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
