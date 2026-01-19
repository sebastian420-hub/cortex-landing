'use client';

import Section from '../Section';
import Container from '../Container';
import CapabilityCard from '../CapabilityCard';
import { capabilities } from '@/data/capabilities';

export default function Capabilities() {
  return (
    <Section id="capabilities" bgColor="bgSecondary" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-sans font-light text-text mb-4">
            What can it do?
          </h2>
          <p className="text-body text-textDim max-w-2xl mx-auto">
            8 core capabilities, each powered by specialized models. Complete end-to-end operations autonomously.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.title} capability={capability} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-textDim">
            Each capability uses a specialized model with delegated tools for maximum accuracy.
          </p>
        </div>
      </Container>
    </Section>
  );
}