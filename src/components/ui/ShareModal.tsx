import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link as LinkIcon, Check, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const ShareModal = ({ isOpen, onClose, title, url }: ShareModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Social Share Links
  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      color: 'hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20',
      href: `mailto:?subject=${encodeURIComponent(title)}&body=Check out this article: ${encodeURIComponent(url)}`
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Share this article</h3>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Social Grid */}
              <div className="p-6 grid grid-cols-4 gap-4">
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 group`}
                  >
                    <div className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-300 ${link.color}`}>
                      {link.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Copy Link Section */}
              <div className="p-6 pt-0">
                <div className="flex items-center gap-2 p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950">
                  <div className="p-3 text-slate-400">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <input 
              type="text" 
              readOnly 
              value={url} 
              className="bg-transparent border-none focus:ring-0 text-sm text-slate-600 dark:text-slate-300 w-full min-w-0"
            />
                  <button
                    onClick={handleCopy}
                    className={`flex-shrink-0 px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold rounded shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors ${
                      copied 
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm hover:shadow-md'
                    }`}
                  >
                    {copied ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4" /> Copied
                      </span>
                    ) : (
                      'Copy'
                    )}
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;