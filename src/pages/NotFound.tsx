import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          className="inline-block mb-6"
        >
          <AlertTriangle className="w-24 h-24 text-yellow-500" />
        </motion.div>
        
        <h1 className="text-8xl font-bold text-slate-900 dark:text-white mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-6">Page Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-10 text-lg">
          Oops! It looks like you've ventured into undefined territory. 
          The page you are looking for has been moved or deleted.
        </p>
        
        <Link to="/">
          <Button className="px-8 py-3 text-lg">
            <Home className="w-5 h-5 mr-2" /> Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;