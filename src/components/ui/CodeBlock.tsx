import React, { useState } from "react";

interface CodeBlockProps {
  language?: string;
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const [copied, setCopied] = useState(false);
  const code = children.trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Copy failed");
    }
  };

  return (
    <div className="relative my-6 group">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="
          absolute right-3 top-3 rounded-md 
          bg-slate-800/80 px-3 py-1 text-xs 
          text-slate-200 border border-slate-700 
          hover:bg-slate-700 transition z-10
        "
      >
        {copied ? "Copied" : "Copy"}
      </button>

      {/* Code box - REMOVED 'border' class here */}
      <pre className="rounded-lg bg-slate-950 p-6 overflow-x-auto text-sm leading-relaxed">
        <code className={`language-${language || ""}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};