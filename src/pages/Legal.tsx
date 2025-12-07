import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, Accessibility, FileText, CheckCircle } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

const Legal = () => {
  const { hash } = useLocation();

  // Handle anchor scrolling
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const sections = [
    { id: 'accessibility', title: 'Accessibility Statement', icon: <Accessibility className="w-5 h-5" /> },
    { id: 'privacy', title: 'Privacy Policy', icon: <Shield className="w-5 h-5" /> },
    { id: 'cookies', title: 'Cookie Policy', icon: <Eye className="w-5 h-5" /> },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* SIDEBAR NAVIGATION (Hidden on mobile, Sticky on Desktop) */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Legal Documents</h3>
              {sections.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    hash === `#${item.id}` 
                      ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="col-span-1 lg:col-span-3 space-y-24">
            
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Legal & Utility</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Transparency matters. Here is how I handle your data, ensure accessibility, and manage cookies.
              </p>
              <div className="mt-4 text-sm text-slate-500">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 1. ACCESSIBILITY */}
            <section id="accessibility" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                  <Accessibility className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Accessibility Statement</h2>
              </div>
              
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                <p>
                  I am committed to ensuring digital accessibility for people with disabilities. I am continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">Conformance Status</h3>
                <p>
                  The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                </p>
                <p>
                  This portfolio is <strong>partially conformant</strong> with <strong>WCAG 2.1 level AA</strong>.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">Measures Taken</h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Semantic HTML5 markup for screen readers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Sufficient color contrast ratios (4.5:1) for text elements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Keyboard navigation support for all interactive elements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Aria-labels and roles used where visual cues are insufficient.</span>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 2. PRIVACY POLICY */}
            <section id="privacy" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                <p>
                  This privacy policy describes how I collect, use, and protect your information when you visit my portfolio.
                </p>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">Information Collection</h3>
                <p>
                  I collect minimal information to improve the site experience and communicate with you.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Voluntary Information:</strong> When you use the Contact Form, I collect your Name and Email address solely to reply to your inquiry.</li>
                  <li><strong>Usage Data:</strong> This site may use analytics tools (like Vercel Analytics or Google Analytics) to collect anonymous usage data such as pages visited, time spent, and browser type.</li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">How I Use Your Information</h3>
                <p>
                  I strictly use your data to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Respond to your professional inquiries.</li>
                  <li>Analyze site traffic to optimize performance and content.</li>
                </ul>
                <p className="mt-4">
                  <strong>I do not sell, trade, or rent your personal identification information to others.</strong>
                </p>
              </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* 3. COOKIE POLICY */}
            <section id="cookies" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Cookie Policy</h2>
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                <p>
                  Cookies are small text files stored on your device. This website keeps cookie usage to an absolute minimum.
                </p>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">Types of Cookies Used</h3>
                
                <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg mt-4">
                  <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                    <thead className="bg-slate-50 dark:bg-slate-900">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">Essential</td>
                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                          Used to remember your <strong>Light/Dark mode</strong> preference (`theme`). These are stored in LocalStorage, not strictly cookies.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">Analytics</td>
                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                          (Optional) Third-party cookies from Google Analytics or Vercel to help me understand which projects are most popular.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-3">Managing Cookies</h3>
                <p>
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Legal;