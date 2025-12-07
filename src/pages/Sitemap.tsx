import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Mail, Map, Shield, ExternalLink } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

const Sitemap = () => {
  const sections = [
    {
      title: "General",
      links: [
        { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
        { name: "About Me", path: "/about", icon: <User className="w-4 h-4" /> },
        { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
      ]
    },
    {
      title: "Work & Insights",
      links: [
        { name: "Featured Projects", path: "/projects", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Technical Blog", path: "/blog", icon: <FileText className="w-4 h-4" /> },
      ]
    },
    {
      title: "Project Categories",
      links: [
        { name: "Web Development", path: "/projects", icon: <ExternalLink className="w-4 h-4" /> },
        { name: "Backend Systems", path: "/projects", icon: <ExternalLink className="w-4 h-4" /> },
        { name: "AI & Machine Learning", path: "/projects", icon: <ExternalLink className="w-4 h-4" /> },
        { name: "DevOps & Cloud", path: "/projects", icon: <ExternalLink className="w-4 h-4" /> },
      ]
    },
    {
      title: "Legal & Utility",
      links: [
        { name: "Accessibility Statement", path: "#", icon: <User className="w-4 h-4" /> },
        { name: "Cookie Policy", path: "#", icon: <Shield className="w-4 h-4" /> },
        { name: "Privacy Policy", path: "#", icon: <Shield className="w-4 h-4" /> },
        { name: "Sitemap", path: "/sitemap", icon: <Map className="w-4 h-4" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Sitemap</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
          An overview of the available content on this portfolio.
        </p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        >
          {sections.map((section) => (
            <motion.div key={section.title} variants={itemVariants} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Sitemap;