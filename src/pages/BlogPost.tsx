/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Calendar, Share2, Tag } from "lucide-react";

import { blogPosts } from "../data/mockData";
import { CodeBlock } from "../components/ui/CodeBlock"; 
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";
import ShareModal from "../components/ui/ShareModal";

type RouteParams = {
  slug: string;
};

const BlogPost = () => {
  const { slug } = useParams<RouteParams>();
  const navigate = useNavigate();
  const [isShareOpen, setIsShareOpen] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Article not found
        </h2>
        <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <article className="pt-8 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 relative">
        
        {/* HEADER / HERO SECTION */}
        <div className="bg-white dark:bg-slate-900/50 py-16 border-b border-slate-200 dark:border-slate-800 mb-12 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <Link
              to="/blog"
              className="group flex items-center text-slate-500 dark:text-slate-400 hover:text-primary transition-colors mb-8 w-fit"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all posts
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-primary border border-slate-200 dark:border-slate-700 flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-200 dark:border-slate-700 pt-8 mt-8">
              
              {/* Author Profile */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src="/logoCopy.png" 
                    alt="Temi Agbola" 
                    className="w-12 h-12 rounded-full object-cover grayscale bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-600"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">Written by</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">Temi Agbola</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose dark:prose-invert prose-lg max-w-none prose-slate prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl prose-headings:text-slate-900 dark:prose-headings:text-white">
            <ReactMarkdown
              components={{
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                h2({ node, ...props }) {
                  return <h2 className="mt-12 mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2" {...props} />;
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                h3({ node, ...props }) {
                  return <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white" {...props} />;
                },
                p({ node, ...props }) {
                  return <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300" {...props} />;
                },
                ul({ node, ...props }) {
                  return <ul className="my-6 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300" {...props} />;
                },
                ol({ node, ...props }) {
                  return <ol className="my-6 list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300" {...props} />;
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                code({ inline, className, children, ...props } : any) {
                  const match = /language-(\w+)/.exec(className || "");
                  const text = String(children || "").replace(/\n$/, "");

                  if (inline) {
                    return (
                      <code
                        className="rounded bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 text-[0.9em] font-mono text-primary font-medium dark:text-sky-400"
                        {...props}
                      >
                        {text}
                      </code>
                    );
                  }

                  return (
                    <div className="my-8 rounded-xl overflow-hidden shadow-lg bg-slate-950">
                      <CodeBlock language={match?.[1] || "text"}>
                        {text}
                      </CodeBlock>
                    </div>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Enjoyed this article?
            </h3>
            
            <button 
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:scale-105 transition-transform shadow-lg"
            >
              <Share2 className="w-4 h-4" /> Share this post
            </button>
          </div>
        </div>

        <ShareModal 
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          title={post.title}
          url={window.location.href}
        />

      </article>
    </PageTransition>
  );
};

export default BlogPost;