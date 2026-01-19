'use client';

import { useState } from 'react';

interface CommandProps {
  command: string;
  index?: number;
}

export default function Command({ command, index = 0 }: CommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className="group cursor-pointer transition-all duration-200"
      onClick={handleCopy}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCopy();
        }
      }}
    >
      <div className="bg-codeBg rounded-lg p-3 font-mono text-sm text-textDim overflow-x-auto hover:border hover:border-border transition-colors duration-200 group-hover:border-accentDim">
        <span className="text-accent">$</span> {command}
      </div>
      <div className="mt-2 text-xs text-textDim opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {copied ? (
          <span className="text-success">✓ Copied!</span>
        ) : (
          <span>Click to copy</span>
        )}
      </div>
    </div>
  );
}