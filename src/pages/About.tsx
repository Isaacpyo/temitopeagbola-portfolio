import PageTransition from '../components/layout/PageTransition';
import { experiences, education } from '../data/mockData';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Cpu, 
  GraduationCap, 
  Briefcase, 
  Database, 
  Cloud, 
  BookOpen, 
  Layout, 
  BrainCircuit, 
  Terminal, 
  Wrench 
} from 'lucide-react';

// UPDATED SKILLS based on your new list
const skills = [
  
  { 
    category: 'Frontend Development', 
    icon: <Layout className="w-5 h-5" />, 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'] 
  },
  { 
    category: 'Backend Architecture', 
    icon: <Server className="w-5 h-5" />, 
    items: ['Node.js', 'Express', 'Python (FastAPI/Flask)', 'RESTful APIs', 'WebSockets'] 
  },
  { 
    category: 'Database & Caching', 
    icon: <Database className="w-5 h-5" />, 
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Vector DBs'] 
  },
  { 
    category: 'DevOps & Cloud', 
    icon: <Cloud className="w-5 h-5" />, 
    items: ['Docker', 'AWS (EC2, S3)', 'GitHub Actions', 'Vercel', 'Netlify', 'CI/CD'] 
  },
  { 
    category: 'AI & Data ', 
    icon: <BrainCircuit className="w-5 h-5" />, 
    items: ['Python', 'Pandas & NumPy', 'Scikit-learn', 'NLP (spaCy)', 'RAG Pipelines', 'OpenAI API', 'Data Viz (Plotly)'] 
  },
  { 
    category: 'Tools & Practices', 
    icon: <Wrench className="w-5 h-5" />, 
    items: ['Git & GitHub', 'Agile/Scrum', 'Jest/Pytest', 'Swagger/OpenAPI', 'MLOps Basics'] 
  }
];

const About = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bio */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
            >
              Software that <br />
              <span className="text-primary">learns and adapts.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose dark:prose-invert text-lg text-slate-600 dark:text-slate-400 space-y-6"
            >
              <p>
                I'm a software engineer who builds intelligent, full-stack applications. 
                I'm passionate about creating products where <strong>AI isn't just a buzzword</strong> - it's a core feature that genuinely improves the user experience.
              </p>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What I Do</h3>
                <p className="mb-4">
                  I build end-to-end applications from the ground up, designing intuitive frontends, architecting scalable backends, deploying robust cloud infrastructure, and most importantly, <strong>integrating AI and machine learning to make applications smarter.</strong>
                </p>
                <p className="mb-4">
                  My work spans three core areas:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex gap-3">
                    <span className="text-xl">🎨</span>
                    <span><strong>Application Development:</strong> Crafting responsive, user-friendly interfaces and powerful backend systems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">☁️</span>
                    <span><strong>Infrastructure & DevOps:</strong> Building reliable, scalable cloud architecture with automated deployments.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">🤖</span>
                    <span><strong>AI & Data Engineering:</strong> Creating intelligent features through machine learning, data pipelines, and predictive models.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Current Focus</h3>
                <p>
                  I'm currently exploring <strong>MLOps workflows</strong> to streamline model deployment and diving deeper into real-time AI features like live content moderation. I believe the future of software isn't just reactive—it's predictive, personalized, and powered by intelligence.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Stats / Highlights Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 lg:sticky lg:top-24"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" /> Core Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Python', 'AWS', 'OpenAI', 'Next.js', 'Docker'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-700 rounded-md text-sm shadow-sm border border-slate-100 dark:border-slate-600">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-bold text-slate-900 dark:text-white">Always Building</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Currently building projects that showcase how AI can enhance everyday applications without overwhelming users.
              </p>
            </div>
          </motion.div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
             <Briefcase className="w-8 h-8 text-primary" /> Professional Experience
          </h2>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm z-10">
                   <Briefcase className="w-4 h-4" />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 mt-2 sm:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <div className="text-lg font-medium text-primary mb-2">{exp.company}</div>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
             <GraduationCap className="w-8 h-8 text-primary" /> Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-primary font-medium mb-4">{edu.school}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Technologies - UPDATED GRID */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-stretch">
            {skills.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                    {group.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{group.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 content-start">
                  {group.items.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-100 dark:border-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;