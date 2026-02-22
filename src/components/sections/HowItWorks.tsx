'use client';

import Section from '../Section';
import Container from '../Container';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'You type a command',
    command: 'cortex debug --service=api',
    description: 'Simple commands for complex operations. No complex syntax to learn.',
  },
  {
    number: 2,
    title: 'Cortex analyzes the request',
    output: [
      '→ Detects: debugging session for api service',
      '→ Querying Semantic Memory: searching for related auth issues...',
      '→ Memory Match: Found resolution in PR #42 (race condition in middleware)',
      '→ Plans: log analysis → identify root cause → apply fix → verify',
    ],
    description: 'Uses Semantic Memory to recall past solutions and project-wide context.',
  },
  {
    number: 3,
    title: 'Specialist executes end-to-end',
    output: [
      '→ Analyzing logs: detected deadlock at auth.py:124',
      '→ Transaction Started: creating snapshot of affected files',
      '→ Applied Fix: replaced Mutex with RWMutex',
      '→ Running verification tests: 147 passed, 0 failed',
      '→ Transaction Committed: changes applied safely',
    ],
    description: 'Transactional safety ensures every modification is reversible and verified.',
  },
  {
    number: 4,
    title: 'You get results',
    output: [
      '✅ Debug complete in 1m 42s',
      '📊 Root cause: Race condition in auth middleware',
      '🔍 Fix: Applied RWMutex to shared session state',
      '🧠 Learning: Added solution to Semantic Memory for future recall',
    ],
    description: 'Clear, actionable output with continuous learning across sessions.',
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" bgColor="bg" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-sans font-light text-text mb-4">
            How it works
          </h2>
          <p className="text-body text-textDim max-w-2xl mx-auto">
            From command to completion. Every step is transparent and autonomous.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-medium">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-text mb-3">{step.title}</h3>
                
                {step.command && (
                  <div className="bg-codeBg rounded-lg p-4 font-mono text-sm text-textDim overflow-x-auto mb-4">
                    <span className="text-accent">$</span> {step.command}
                  </div>
                )}

                {step.output && (
                  <div className="bg-codeBg rounded-lg p-4 font-mono text-sm text-textDim overflow-x-auto mb-4">
                    {step.output.map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        {line}
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-sm text-textDim">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#commands"
            className="inline-block px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accentDim transition-colors duration-200"
          >
            Try it yourself →
          </a>
        </div>
      </Container>
    </Section>
  );
}