import { motion } from 'framer-motion';

interface DiagramProps {
  type: 'treny' | 'vitalos' | 'devops-pipeline' | string;
}

const ArchitectureDiagram = ({ type }: DiagramProps) => {
  // Simple SVG visualizations based on the study type
  
  if (type === 'treny') {
    return (
      <div className="w-full h-64 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden my-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Simple Flow Visualization */}
        <div className="flex items-center gap-4 z-10 text-xs font-bold text-slate-600 dark:text-slate-300">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">Orders</div>
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} className="h-0.5 bg-blue-500" />
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-blue-500 text-blue-600">AI Engine</div>
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} className="h-0.5 bg-blue-500" />
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">Dispatch</div>
        </div>
        <p className="absolute bottom-4 text-xs text-slate-400">System Architecture Flow</p>
      </div>
    );
  }

  if (type === 'vitalos') {
    return (
      <div className="w-full h-64 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden my-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="flex items-center gap-4 z-10 text-xs font-bold text-slate-600 dark:text-slate-300">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">Patient</div>
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} className="h-0.5 bg-emerald-500" />
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-emerald-500 text-emerald-600">NLP Triage</div>
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} className="h-0.5 bg-emerald-500" />
          <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">Clinician</div>
        </div>
        <p className="absolute bottom-4 text-xs text-slate-400">Data Privacy Flow</p>
      </div>
    );
  }

  // DevOps / Default
  return (
    <div className="w-full h-64 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden my-8">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="flex items-center gap-4 z-10 text-xs font-bold text-slate-600 dark:text-slate-300">
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">Git Commit</div>
        <motion.div initial={{ width: 0 }} animate={{ width: 40 }} className="h-0.5 bg-purple-500" />
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-purple-500 text-purple-600">ArgoCD</div>
        <motion.div initial={{ width: 0 }} animate={{ width: 40 }} className="h-0.5 bg-purple-500" />
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">Production</div>
      </div>
      <p className="absolute bottom-4 text-xs text-slate-400">CI/CD Pipeline</p>
    </div>
  );
};

export default ArchitectureDiagram;