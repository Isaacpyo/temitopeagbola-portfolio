import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    // 👇 UPDATED: Background adapts to theme (Light: Slate-50, Dark: Slate-900)
    <div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 z-[9999] flex items-center justify-center transition-colors duration-300">
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 mb-4"
        >
          {/* Ripple Effect Ring */}
          <motion.span
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-primary/30"
          />
          
          {/* 👇 UPDATED: Logo inverts in light mode to be visible */}
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain relative z-10 invert dark:invert-0"
            onError={(e) => {
              e.currentTarget.src = ''; 
              e.currentTarget.className = 'hidden'; 
            }}
          />
          
          {/* Fallback Text (if logo fails) */}
          {/* 👇 UPDATED: Text color adapts */}
          {/* <div className="absolute inset-0 flex items-center justify-center text-slate-900 dark:text-white font-bold text-3xl z-0">
             DEV.
          </div> */}
        </motion.div>

        {/* Loading Bar */}
        {/* 👇 UPDATED: Track background adapts */}
        <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;