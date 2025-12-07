import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Types for our data
type ContributionLevel = 0 | 1 | 2 | 3 | 4;

interface DayData {
  date: string;
  level: ContributionLevel;
}

const ContributionGraph = () => {
  // Generate 365 days of mock data
  const data: DayData[] = useMemo(() => {
    const days: DayData[] = [];
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (364 - i));
      
      // Deterministic pseudo-random based on date to keep render pure
      const rand = (() => {
        const s = date.toISOString().split('T')[0];
        let h = 2166136261 >>> 0;
        for (let j = 0; j < s.length; j++) {
          h = Math.imul(h ^ s.charCodeAt(j), 16777619) >>> 0;
        }
        return (h % 1000) / 1000;
      })();

      let level: ContributionLevel = 0;
      if (rand > 0.9) level = 4;
      else if (rand > 0.7) level = 3;
      else if (rand > 0.5) level = 2;
      else if (rand > 0.25) level = 1;

      days.push({
        date: date.toISOString().split('T')[0],
        level,
      });
    }
    return days;
  }, []);

  // Map levels to Tailwind classes (using your Primary Blue theme)
  const getColor = (level: ContributionLevel) => {
    switch (level) {
      case 0: return 'bg-slate-100 dark:bg-slate-800';
      case 1: return 'bg-blue-200 dark:bg-blue-900/40';
      case 2: return 'bg-blue-400 dark:bg-blue-700';
      case 3: return 'bg-blue-600 dark:bg-blue-500';
      case 4: return 'bg-blue-800 dark:bg-blue-300';
      default: return 'bg-slate-100 dark:bg-slate-800';
    }
  };

  return (
    <div className="w-full overflow-hidden p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Coding Activity</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Last 12 months</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((l) => (
              <div key={l} className={`w-3 h-3 rounded-sm ${getColor(l as ContributionLevel)}`} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* The Scrollable Graph Container */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div 
          className="grid grid-rows-7 grid-flow-col gap-1 min-w-max"
          style={{ height: '140px' }} // Approx 7 * (size + gap)
        >
          {data.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.002, duration: 0.2 }} // Fast ripple effect
              viewport={{ once: true }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${getColor(day.level)} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer relative group`}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 transition-opacity">
                {day.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;