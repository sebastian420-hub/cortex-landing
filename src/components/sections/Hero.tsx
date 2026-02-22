'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import Container from '../Container';

// Terminal content workflows
const workflows = {
  deploy: {
    title: 'Safe Deployment',
    command: 'cortex deploy --env=prod --services=api',
    steps: [
      { text: 'Analyzing infrastructure...', delay: 800 },
      { text: 'Transaction Started: creating file snapshots...', delay: 600 },
      { text: 'Building container images...', delay: 700 },
      { text: 'Deploying to production...', delay: 1000 },
      { text: 'Running smoke tests...', delay: 800 },
      { text: '✅ Commit complete. All services healthy.', delay: 400, success: true },
    ],
  },
  memory: {
    title: 'Semantic Context Recall',
    command: 'cortex memory --query "Explain the auth flow"',
    steps: [
      { text: 'Indexing codebase with Tree-sitter...', delay: 600 },
      { text: 'Querying project-wide vector database...', delay: 700 },
      { text: 'Found context in PR #42: Race condition fix...', delay: 900 },
      { text: 'Found context in auth.py: JWT middleware logic...', delay: 800 },
      { text: '✅ Explanation generated from project context.', delay: 400, success: true },
    ],
  },
  debug: {
    title: 'Autonomous Debugging',
    command: 'cortex debug --service=api',
    steps: [
      { text: 'Reading logs: detected deadlock at auth.py:124', delay: 600 },
      { text: 'Semantic Recall: Found similar issue in sessions #7', delay: 700 },
      { text: 'Applying transactional fix with rollback safety...', delay: 900 },
      { text: 'Running verification tests: 147 passed', delay: 800 },
      { text: '✅ Root cause fixed. Solution learned.', delay: 400, success: true },
    ],
  },
  secure: {
    title: 'Performance-First Audit',
    command: 'cortex audit --service=all',
    steps: [
      { text: 'Offloading AST parsing to Rust extensions...', delay: 600 },
      { text: 'Scanning for vulnerabilities (2.4k files/s)...', delay: 800 },
      { text: 'Analyzing dependencies with Go services...', delay: 700 },
      { text: 'Generating comprehensive security report...', delay: 900 },
      { text: '✅ 0 high-severity issues found. 100% secure.', delay: 400, success: true },
    ],
  },
};

export default function Hero() {
  const [currentWorkflow, setCurrentWorkflow] = useState<keyof typeof workflows>('deploy');
  const [isTyping, setIsTyping] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Rotate workflows
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        const keys = Object.keys(workflows) as (keyof typeof workflows)[];
        const currentIndex = keys.indexOf(currentWorkflow);
        const nextIndex = (currentIndex + 1) % keys.length;
        setCurrentWorkflow(keys[nextIndex]);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [currentWorkflow, isPaused]);

  // Typing animation for current workflow
  useEffect(() => {
    if (isPaused) return;
    
    setIsTyping(true);
    setVisibleSteps([]);
    const currentWorkflowSteps = workflows[currentWorkflow].steps;
    
    const timeoutIds: NodeJS.Timeout[] = [];
    let totalDelay = 0;

    currentWorkflowSteps.forEach((step, index) => {
      totalDelay += step.delay;
      const timeoutId = setTimeout(() => {
        if (!isPaused) {
          setVisibleSteps((prev) => [...prev, step.text]);
          if (index === currentWorkflowSteps.length - 1) {
            setIsTyping(false);
          }
        }
      }, totalDelay);
      timeoutIds.push(timeoutId);
    });

    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, [currentWorkflow, isPaused]);

  // Cursor blinking
  useEffect(() => {
    if (!isTyping) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [isTyping]);

  // Toggle pause on click
  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  return (
    <Section bgColor="bg" className="min-h-screen flex items-center justify-center">
      <Container className="max-w-5xl mx-auto">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-hero font-sans font-light text-text mb-6">
            Autonomous Terminal Agent
          </h1>
          <p className="text-body text-textDim max-w-2xl mx-auto mb-8">
            Execute end-to-end operations autonomously. Local-first. Cloud-optional. Zero friction.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#commands"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accentDim transition-colors duration-200"
            >
              Try It Free
            </motion.a>
            <motion.a
              href="#capabilities"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-text border border-border font-medium rounded-lg hover:bg-bgSecondary hover:text-text transition-all duration-200"
            >
              View Demo →
            </motion.a>
            <motion.a
              href="https://github.com/sebastian420-hub/cortex"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-text border border-border font-medium rounded-lg hover:bg-bgSecondary hover:text-text transition-all duration-200"
            >
              GitHub ⭐
            </motion.a>
          </div>
        </motion.div>

        {/* Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="bg-codeBg border border-border rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bgSecondary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
            </div>
            <div className="text-xs text-textDim font-mono">
              {workflows[currentWorkflow].title}
            </div>
            <button
              onClick={togglePause}
              className="text-xs text-textDim hover:text-text transition-colors font-mono"
            >
              {isPaused ? '▶ Play' : '⏸ Pause'}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 overflow-hidden">
            <div className="font-mono text-code text-sm">
              {/* Command Line */}
              <div className="mb-4">
                <span className="text-accent">$</span>{' '}
                <span className="text-textDim">{workflows[currentWorkflow].command}</span>
                {isTyping && showCursor && <span className="animate-pulse">▋</span>}
              </div>

              {/* Steps */}
              {visibleSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-2 text-textDim"
                >
                  {step}
                </motion.div>
              ))}

              {/* Progress indicators when typing */}
              {isTyping && visibleSteps.length < workflows[currentWorkflow].steps.length && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-textDim text-xs font-mono">
                    <div className="h-1 flex-1 bg-border rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>
                    <span>Processing...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}