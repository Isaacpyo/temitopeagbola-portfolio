import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import { blogPosts } from '../data/mockData';
import Button from '../components/ui/Button';


const POSTS_PER_PAGE = 4;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter posts based on search query
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // 2. Reset to Page 1 if search query changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [searchQuery]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 4. Scroll to top of list when page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - CENTERED */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Technical Writings</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Thoughts on software architecture, cloud engineering, and the future of AI.
          </p>

          {/* Search Bar */}
          <div className="relative text-left">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles by title or tag..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white shadow-sm"
            />
          </div>
        </div>

        {/* Blog List - SINGLE COLUMN */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* 👇 Mapping 'currentPosts' instead of all filteredPosts */}
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/blog/${post.slug}`} 
                className="block group text-left p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  
                  {/* Left: Date (Desktop) */}
                  <div className="hidden md:flex flex-col items-center min-w-[80px] pt-1 text-slate-400 dark:text-slate-500">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                      {new Date(post.date).getDate()}
                    </span>
                    <span className="text-xs uppercase font-bold">
                      {new Date(post.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-xs">
                      {new Date(post.date).getFullYear()}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    {/* Mobile Date + Read Time */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-slate-500 dark:text-slate-400 md:hidden">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-xs font-medium text-primary mb-3">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md">
                            <Tag className="w-3 h-3" /> {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-primary font-medium group-hover:underline group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="max-w-2xl mx-auto text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 text-lg">No articles found matching your search.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {/* Only show if we have more posts than the limit */}
        {filteredPosts.length > POSTS_PER_PAGE && (
          <div className="flex justify-center items-center gap-6 mt-16">
            <Button 
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>

            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Page {currentPage} of {totalPages}
            </span>

            <Button 
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-2"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

      </div>
    </PageTransition>
  );
};

export default Blog;