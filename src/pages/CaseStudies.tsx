import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  BrainCircuit, 
  Activity, 
  GitMerge, 
  ShieldCheck, 
  Code2, 
  
} from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/ui/Button';
import { caseStudies } from '../data/mockData';

// Helper to map ID to Icon
const getIcon = (id: string) => {
  switch(id) {
    case 'treny': return <BrainCircuit className="w-8 h-8 text-blue-500" />;
    case 'vitalos': return <Activity className="w-8 h-8 text-emerald-500" />;
    case 'devops-pipeline': return <GitMerge className="w-8 h-8 text-purple-500" />;
    default: return <BrainCircuit className="w-8 h-8" />;
  }
};

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Case Studies</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Deep dives into complex engineering problems I've solved. From distributed systems to AI integration.
          </p>
        </div>

        {/* Case Studies List (Accordion Style) */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300 ${
                expandedId === study.id 
                  ? 'border-primary shadow-2xl ring-1 ring-primary/20' 
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              {/* Card Header (Clickable) */}
              <div 
                onClick={() => toggleExpand(study.id)}
                className="p-8 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Title & Icon */}
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {getIcon(study.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                        {study.subtitle}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        {study.summary}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Tags + Arrow */}
                  <div className="flex flex-col items-end gap-4 min-w-[140px]">
                    <div className="flex flex-wrap justify-end gap-2">
                      {study.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold text-primary group-hover:underline mt-2">
                      {expandedId === study.id ? 'Close Preview' : 'Read Case Study'}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedId === study.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable Content (Preview) */}
              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800"
                  >
                    <div className="p-8">
                      
                      {/* Preview Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                        
                        {/* Challenge Preview */}
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-3">
                            <ShieldCheck className="w-5 h-5 text-red-500" /> The Challenge
                          </h3>
                          {/* Truncated / Preview Text */}
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
                            {study.fullContent.challenge.split('\n')[1]}... 
                          </p>
                        </div>

                        {/* Solution Preview */}
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-3">
                            <Code2 className="w-5 h-5 text-emerald-500" /> The Solution
                          </h3>
                          {/* Truncated / Preview Text */}
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
                            {study.fullContent.solution.split('\n')[1]}...
                          </p>
                        </div>
                      </div>

                      {/* Full Page Link Button */}
                      <div className="flex justify-center border-t border-slate-200 dark:border-slate-800 pt-8">
                        <Link to={`/case-studies/${study.id}`}>
                          <Button className="h-12 px-8 text-base shadow-lg hover:scale-105 transition-transform">
                            Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};

export default CaseStudies;