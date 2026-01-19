'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Capability } from '@/data/capabilities';

interface CapabilityCardProps {
  capability: Capability;
  index: number;
}

export default function CapabilityCard({ capability, index }: CapabilityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-bgSecondary border border-border rounded-lg overflow-hidden"
    >
      <div
        className="p-6 cursor-pointer hover:border-accentDim transition-colors duration-200"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-xl">
          {capability.icon}
        </div>
        <h3 className="text-lg font-medium text-text mb-1">{capability.title}</h3>
        <p className="text-sm text-textDim">{capability.subtitle}</p>
      </div>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 border-t border-border">
          <p className="text-sm text-textDim mb-4">{capability.description}</p>
          <div className="bg-codeBg rounded-lg p-3 font-mono text-xs text-textDim overflow-x-auto">
            <span className="text-accent">$</span> {capability.command}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(capability.command);
            }}
            className="mt-3 text-xs text-accent hover:text-accentDim transition-colors"
          >
            Copy command →
          </button>
        </div>
      </motion.div>

      {/* Expand indicator */}
      <div
        className="px-6 pb-4 flex items-center justify-between cursor-pointer"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <span className="text-xs text-textDim">{isExpanded ? 'Less details' : 'More details'}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-textDim"
        >
          ▼
        </motion.span>
      </div>
    </motion.div>
  );
}