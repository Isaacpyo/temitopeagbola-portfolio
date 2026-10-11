import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Briefcase, FileText, Mail, Map } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import BackgroundGrid from '../components/ui/BackgroundGrid';

const suggestions = [
  { name: 'Projects', description: 'Things I have built', path: '/projects', icon: Briefcase },
  { name: 'Blog', description: 'Technical writing', path: '/blog', icon: FileText },
  { name: 'Contact', description: 'Get in touch', path: '/contact', icon: Mail },
  { name: 'Sitemap', description: 'Every page on the site', path: '/sitemap', icon: Map },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Keep the page title honest and stop search engines indexing dead URLs.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page Not Found | Temitope';

    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, []);

  const canGoBack = window.history.state?.idx > 0;

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-light dark:bg-dark min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-24">
        <BackgroundGrid />

        <div className="relative z-10 w-full max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[7rem] sm:text-[10rem] leading-none font-extrabold tracking-tighter bg-gradient-to-b from-primary to-blue-800 dark:to-blue-300 bg-clip-text text-transparent select-none"
            aria-hidden="true"
          >
            404
          </motion.p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Sorry, there's nothing at{' '}
            <code className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base break-all">
              {location.pathname}
            </code>
            . It may have been moved, renamed or never existed.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30 transition-colors"
            >
              <Home className="w-5 h-5" /> Back home
            </Link>
            {canGoBack && (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" /> Go back
              </button>
            )}
          </div>

          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Or try one of these
            </h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {suggestions.map(({ name, description, path, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur hover:border-primary transition-colors"
                  >
                    <span className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {name}
                      </span>
                      <span className="block text-sm text-slate-500 dark:text-slate-400">{description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
