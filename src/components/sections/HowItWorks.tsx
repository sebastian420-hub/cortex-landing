'use client';

import Section from '../Section';
import Container from '../Container';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'You type a command',
    command: 'cortex deploy staging',
    description: 'Simple, natural language commands. No complex syntax to learn.',
  },
  {
    number: 2,
    title: 'Cortex analyzes the request',
    output: [
      '→ Detects: deployment to staging',
      '→ Chooses: deployment specialist model',
      '→ Plans: infrastructure validation → build → deploy → verify',
    ],
    description: 'Intelligent analysis determines the best approach and model.',
  },
  {
    number: 3,
    title: 'Specialist executes end-to-end',
    output: [
      '→ Validates infrastructure',
      '→ Builds artifacts',
      '→ Deploys with rollback strategy',
      '→ Runs verification tests',
    ],
    description: 'Specialized models work as a team to complete the task.',
  },
  {
    number: 4,
    title: 'You get results',
    output: [
      '✅ Deployment complete in 4m 23s',
      '📊 All services healthy',
      '🔍 Logs available at /var/log/deploy-20250115.log',
    ],
    description: 'Clear, actionable output with full transparency.',
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