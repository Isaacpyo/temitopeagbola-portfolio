import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Sitemap from './pages/Sitemap';
import Legal from './pages/Legal';
import CaseStudies from './pages/CaseStudies'; // 👇 Import CaseStudies
import CaseStudyDetail from './pages/CaseStudyDetail';
import Preloader from './components/ui/Preloader';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            
            {/* 👇 New Case Studies Route */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Temitope. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 dark:text-slate-400">
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            <Link to="/legal#accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
            <Link to="/legal#cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <Link to="/legal#privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;