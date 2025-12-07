import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail,  Globe, MousePointerClick, Download, ShieldCheck, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import PageTransition from '../components/layout/PageTransition';
import ServiceDrawer, { type ServiceData } from '../components/ui/ServiceDrawer';
import { projects, blogPosts } from '../data/mockData';

const Home = () => {
  const [activeService, setActiveService] = useState<ServiceData | null>(null);

  // Define Services Data
  const services: ServiceData[] = [
    {
      id: 'app-dev',
      title: 'Application Development & Architecture',
      icon: <Globe className="w-7 h-7" />,
      shortDescription: 'Building scalable, user-centric web and mobile applications.',
      fullDescription: 'I specialize in full-stack development, creating pixel-perfect frontends and robust backends. I focus on clean architecture, modular codebases, and seamless user experiences across devices.',
      keyPoints: [
        'Full-Stack Web Development (React, Next.js, Node.js)',
        'Mobile App Development (React Native)',
        'API Design (REST & GraphQL)',
        'State Management & Performance Optimization'
      ],
      tools: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'infra-devops',
      title: 'Infrastructure, DevOps & Security',
      icon: <ShieldCheck className="w-7 h-7" />, 
      shortDescription: 'Ensuring reliable deployments, secure pipelines, and cloud scalability.',
      fullDescription: 'I implement secure CI/CD pipelines and manage cloud infrastructure to ensure applications are deployed reliably. I prioritize security best practices and automated testing to catch issues early.',
      keyPoints: [
        'CI/CD Pipeline Automation (GitHub Actions)',
        'Cloud Infrastructure (AWS/Docker)',
        'Containerization & Orchestration',
        'Security Best Practices & Identity Management'
      ],
      tools: ['Docker', 'AWS', 'GitHub Actions', 'Linux', 'Nginx', 'OAuth/JWT']
    },
    {
      id: 'data-ai',
      title: 'Data, AI & Machine Learning',
      icon: <BrainCircuit className="w-7 h-7" />,
      shortDescription: 'Integrating intelligent data pipelines and AI models into applications.',
      fullDescription: 'I bridge the gap between application logic and intelligent data systems. Whether it is building recommendation engines or integrating LLMs, I enable applications to leverage the power of data.',
      keyPoints: [
        'AI Model Integration (OpenAI, LangChain)',
        'Data Pipeline Engineering',
        'Vector Search & RAG Implementation',
        'Data Visualization & Analytics'
      ],
      tools: ['Python', 'SQL', 'Pinecone', 'LangChain', 'Redis', 'Pandas']
    }
  ];

  // Show up to 4 projects
  const featuredProjects = projects.slice(0, 4);
  const latestPost = blogPosts.slice(0, 2);

  // Animation Variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <PageTransition>
      <div className="overflow-hidden">
        
        {/* HERO SECTION */}
        <div className="min-h-screen flex items-center relative">
          
          {/* Animated Background Blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-purple-900 dark:mix-blend-lighten"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-yellow-900 dark:mix-blend-lighten"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-900 dark:mix-blend-lighten"></div>

          <img 
            src="/publiclogo.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-30 mix-blend-multiply dark:opacity-70 dark:mix-blend-overlay pointer-events-none"
          />

          <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/30 backdrop-blur-[1px] z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
            <motion.div variants={heroContainerVariants} initial="hidden" animate="visible" className="md:w-3/4">
              
              {/* UPDATED BADGE */}
              <motion.div variants={heroItemVariants} className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-sm font-semibold tracking-wide uppercase border border-blue-200 dark:border-blue-800">
                  Software Engineer
                </span>
              </motion.div>
              
              {/* UPDATED HEADLINE */}
              <motion.h1 variants={heroItemVariants} className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
                Building software <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  that learns
                </span> <br />
                and adapts.
              </motion.h1>
              
              {/* UPDATED SUBHEAD */}
              <motion.p variants={heroItemVariants} className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
                I'm Temitope. I build intelligent, end-to-end applications that genuinely improves the user experience.
              </motion.p>

              <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 items-center md:items-start">
                <Link to="/projects">
                  <Button className="h-14 px-8 text-lg w-auto justify-center">
                    View Projects <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                
                <a 
    href="/resume.docx" 
    download="Têmitope_Agbola_SD_D_2025.docx" // This name appears for the user when downloading
    target="_blank" 
    rel="noopener noreferrer"
  >
      <Button variant="outline" className="h-14 px-8 text-lg w-auto justify-center">
      Download CV <Download className="w-5 h-5 ml-2" />
    </Button>
  </a>

                <Link to="/contact">
                  <Button variant="outline" className="h-14 px-8 text-lg w-auto justify-center">
                    Contact Me
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={heroItemVariants} className="flex gap-8 text-slate-500 dark:text-slate-400 justify-center md:justify-start mb-12 md:mb-0">
  <a href="https://github.com/isaacpyo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
    <Github className="w-7 h-7" />
  </a>
  <a href="https://www.linkedin.com/in/temitopeagbola/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
    <Linkedin className="w-7 h-7" />
  </a>
  <a href="mailto:info@temitopeagbola.com" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
    <Mail className="w-7 h-7" />
  </a>
</motion.div>
            </motion.div>
          </div>
        </div>

        {/* WHAT I DO SECTION */}
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div 
                  key={service.id}
                  variants={fadeInUp  as never}
                  whileHover={{ y: -10 }} 
                  onClick={() => setActiveService(service)}
                  className="group relative bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    <MousePointerClick className="w-5 h-5" />
                  </div>
                  
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="mt-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Click to explore skills →
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-24 bg-slate-50 dark:bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</h2>
                <p className="text-slate-600 dark:text-slate-400">Recent projects and experiments.</p>
              </div>
              <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-blue-600 font-medium transition-colors">
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Link to="/projects" key={project.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl h-64 mb-6 border border-slate-200 dark:border-slate-700">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 md:hidden">
              <Link to="/projects" className="flex items-center gap-2 text-primary font-medium">
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* LATEST WRITING */}
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Latest Writing</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {latestPost.map((post) => (
                 // 👇 Ensuring we use the Slug for the URL
                 <Link key={post.id} to={`/blog/${post.slug}`} className="block group text-left p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors h-full flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <span className="text-sm font-mono text-primary">{post.date}</span>
                      <div className="flex flex-wrap gap-2">
                         {post.tags.map(tag => (
                           <span key={tag} className="text-xs px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                             {tag}
                           </span>
                         ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:underline mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                 </Link>
               ))}
             </div>
          </div>
        </section>

        {/* FINAL CTA - ADAPTIVE BACKGROUND & BUTTON */}
        <section className="py-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          
          {/* Radial Mask - Adaptive */}
          <div className="absolute inset-0 bg-white dark:bg-slate-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,#000_100%)] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm currently available for freelance projects and open to new full-time opportunities.
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact">
                {/* Adaptive Button: Dark in Light mode, White in Dark mode */}
                <Button className="h-20 px-12 text-2xl font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-blue-600 dark:hover:bg-slate-100 border-none shadow-2xl hover:scale-105 transition-transform">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICE DRAWER PORTAL */}
        <ServiceDrawer 
          service={activeService} 
          isOpen={!!activeService} 
          onClose={() => setActiveService(null)} 
        />

      </div>
    </PageTransition>
  );
};

export default Home;