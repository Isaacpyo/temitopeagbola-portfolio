import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Activity, GitMerge, CheckCircle, Server, Database, ShieldCheck, Code2, Layers } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/ui/Button';
import ArchitectureDiagram from '../components/ui/ArchitectureDiagram'; // Import the new diagram
import { caseStudies } from '../data/mockData';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const study = caseStudies.find(s => s.id === id);

  const getIcon = (id: string) => {
    switch(id) {
      case 'treny': return <BrainCircuit className="w-12 h-12 text-blue-500" />;
      case 'vitalos': return <Activity className="w-12 h-12 text-emerald-500" />;
      case 'devops-pipeline': return <GitMerge className="w-12 h-12 text-purple-500" />;
      default: return <BrainCircuit className="w-12 h-12" />;
    }
  };

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Case Study not found</h2>
        <Button onClick={() => navigate('/case-studies')}>Back to Case Studies</Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <article className="pt-24 pb-20 min-h-screen bg-white dark:bg-slate-900">
        
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link to="/case-studies" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors group text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Overview
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              {getIcon(study.id)}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                {study.title}
              </h1>
              <p className="text-xl text-primary font-medium">{study.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Summary */}
          <div className="bg-slate-50 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4">Executive Summary</h2>
            <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 leading-relaxed font-light">
              {study.summary}
            </p>
          </div>

          {/* 1. THE CHALLENGE */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
            </div>
            <div className="prose dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-400">
              <div className="whitespace-pre-wrap font-sans leading-relaxed">
                {study.fullContent.challenge}
              </div>
            </div>
          </section>

          {/* 2. THE SOLUTION & ARCHITECTURE */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Solution</h2>
            </div>
            
            <div className="prose dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-400 mb-8">
              <div className="whitespace-pre-wrap font-sans leading-relaxed">
                {study.fullContent.solution}
              </div>
            </div>

            {/* DIAGRAM INSERT */}
            <ArchitectureDiagram type={study.id} />

            {/* Architecture List */}
            <div className="bg-slate-50 dark:bg-slate-950/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 mt-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-6">
                <Server className="w-5 h-5 text-blue-500" /> Technical Architecture
              </h3>
              <ul className="space-y-4">
                {study.fullContent.architecture.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. RESULTS */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
                <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Key Results</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.fullContent.results.map((item, i) => (
                <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="text-center pt-10 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Ready to build something similar?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" onClick={() => navigate('/case-studies')} className="w-full sm:w-auto justify-center">
                View Other Studies
              </Button>
              <Button onClick={() => navigate('/contact')} className="w-full sm:w-auto justify-center">
                Start a Project
              </Button>
            </div>
          </div>

        </div>
      </article>
    </PageTransition>
  );
};

export default CaseStudyDetail;