import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 👇 State for the Work dropdown
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: "0%", transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1, 
      x: 0, 
      transition: { delay: i * 0.1 + 0.2, duration: 0.4 }
    })
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO */}
            <NavLink to="/" className="z-50 relative flex items-center">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-10 w-auto object-contain invert dark:invert-0" 
              />
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              
              {/* About Link */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors py-2 group ${
                    isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    About
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>

              {/* 👇 "Work" Dropdown Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsWorkOpen(true)}
                onMouseLeave={() => setIsWorkOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1 text-sm font-medium py-2 transition-colors ${
                    location.pathname.includes('/projects') || location.pathname.includes('/case-studies')
                      ? 'text-primary' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  Work <ChevronDown className={`w-4 h-4 transition-transform ${isWorkOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isWorkOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden py-2"
                    >
                      <NavLink 
                        to="/projects"
                        className={({ isActive }) => `block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${isActive ? 'text-primary font-medium' : 'text-slate-600 dark:text-slate-300'}`}
                      >
                        Projects
                      </NavLink>
                      {/* You might need to create this route/page later */}
                      <NavLink 
                        to="/case-studies"
                        className={({ isActive }) => `block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${isActive ? 'text-primary font-medium' : 'text-slate-600 dark:text-slate-300'}`}
                      >
                        Case Studies
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog Link */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors py-2 group ${
                    isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Blog
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
              
              <Link to="/contact">
                <Button className="px-5 py-2 text-sm h-10 shadow-lg shadow-blue-500/20">
                  Let's Talk
                </Button>
              </Link>

              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center z-50 relative gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-slate-900 dark:text-white focus:outline-none"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {location.pathname !== '/' && (
        <div className="h-20" aria-hidden="true" />
      )}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            <motion.div
              variants={menuVariants as never}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-light dark:bg-dark border-l border-slate-200 dark:border-slate-800 z-50 md:hidden shadow-2xl flex flex-col pt-24 px-8 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="space-y-6 mt-4">
                  
                  {/* About */}
                  <motion.div custom={0} variants={linkVariants}>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => `block text-3xl font-bold py-2 ${isActive ? 'text-primary' : 'text-slate-900 dark:text-white'}`}
                    >
                      About
                    </NavLink>
                  </motion.div>
                  <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />

                  {/* 👇 Mobile Work Dropdown */}
                  <motion.div custom={1} variants={linkVariants}>
                    <button 
                      onClick={() => setIsWorkOpen(!isWorkOpen)}
                      className="flex items-center justify-between w-full text-3xl font-bold py-2 text-slate-900 dark:text-white"
                    >
                      Work <ChevronDown className={`w-6 h-6 transition-transform ${isWorkOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isWorkOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 space-y-4 mt-2 border-l-2 border-slate-200 dark:border-slate-800"
                        >
                          <NavLink to="/projects" className="block text-xl font-medium text-slate-600 dark:text-slate-300 py-2">Projects</NavLink>
                          <NavLink to="/case-studies" className="block text-xl font-medium text-slate-600 dark:text-slate-300 py-2">Case Studies</NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />

                  {/* Blog */}
                  <motion.div custom={2} variants={linkVariants}>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) => `block text-3xl font-bold py-2 ${isActive ? 'text-primary' : 'text-slate-900 dark:text-white'}`}
                    >
                      Blog
                    </NavLink>
                  </motion.div>
                  <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />

                </div>

                <div className="mt-auto mb-10 pt-8">
                   <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full h-14 text-lg shadow-xl">
                        Let's Talk <MessageSquare className="w-5 h-5 ml-2" />
                      </Button>
                   </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;