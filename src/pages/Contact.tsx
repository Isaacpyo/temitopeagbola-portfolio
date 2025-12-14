import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Calendar, 
  Video,
  Clock
} from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/ui/Button';


const Contact = () => {
  // Tab State
  const [activeTab, setActiveTab] = useState<'message' | 'schedule'>('message');
  
  // Form State
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Web3Forms Logic
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // 👇 Replace with your actual Access Key
          access_key: "YOUR_ACCESS_KEY_HERE", 
          ...data 
        })
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Have a project in mind, or just want to chat? I'm currently open for new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Tabs (Form / Calendar) */}
          {/* 👇 Changed order logic: order-1 on mobile, order-1 on desktop */}
          <div className="lg:col-span-8 order-1 lg:order-1">
            
            {/* Tab Switcher */}
            <div className="flex p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-8 w-fit mx-auto lg:mx-0">
              <button
                onClick={() => setActiveTab('message')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'message' 
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                Send a Message
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'schedule' 
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <Calendar className="w-4 h-4" /> Schedule Meeting
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm min-h-[600px]">
              <AnimatePresence mode="wait">
                
                {/* TAB 1: FORM */}
                {activeTab === 'message' && (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send me a message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                          <input required name="name" type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                          <input required name="email" type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                        <textarea required name="message" id="message" rows={6} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white resize-none"></textarea>
                      </div>

                      {/* Status Messages */}
                      {status === 'success' && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-2 border border-green-100 dark:border-green-900">
                          <CheckCircle className="w-5 h-5" /> Message sent! I'll get back to you soon.
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-2 border border-red-100 dark:border-red-900">
                          <AlertCircle className="w-5 h-5" /> {errorMessage}
                        </div>
                      )}

                      <Button type="submit" disabled={status === 'submitting'} className="w-full justify-center h-12 text-lg">
                        {status === 'submitting' ? 'Sending...' : <>Send Message <Send className="w-5 h-5 ml-2" /></>}
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* TAB 2: CALENDLY */}
                {activeTab === 'schedule' && (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Book a Call</h2>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Select a time that works for you. It automatically syncs with Google, Apple, and Outlook calendars.
                      </p>
                    </div>

                    <div className="flex-grow w-full h-[720px] bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                      {/* Placeholder until you add your link */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="text-center p-6 opacity-50">
                          <Video className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                          <p className="text-slate-500 font-medium">Calendly Widget Loading...</p>
                        </div>
                      </div>
                      
                      {/* 👇 UNCOMMENT & REPLACE USERNAME */}
                      <iframe 
                        src="https://calendly.com/temitopeagbola/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=3b82f6" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0"
                        title="Calendly Scheduler"
                        className="relative z-10"
                      ></iframe> 
                     
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Info */}
          {/* 👇 Changed order logic: order-2 on mobile, order-2 on desktop */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-2">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-8">
              
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <a href="mailto:info@temitopeagbola.com" className="flex items-start gap-4 group">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                      <p className="text-slate-900 dark:text-white font-medium group-hover:text-primary transition-colors">
                        info@temitopeagbola.com
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                      <p className="text-slate-900 dark:text-white font-medium">London, UK (Remote)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Availability</p>
                      <p className="text-slate-900 dark:text-white font-medium">Mon - Fri, 9am - 5pm GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/temitopeagbola" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/isaacpyo" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/temitopeagbola" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;