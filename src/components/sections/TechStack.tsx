'use client';

import Section from '../Section';
import Container from '../Container';

interface TechItem {
  name: string;
  version: string;
  icon?: string;
}

const techStack: TechItem[] = [
  { name: 'Python', version: '3.11+', icon: '🐍' },
  { name: 'React', version: '18+', icon: '⚛️' },
  { name: 'FastAPI', version: '0.100+', icon: '⚡' },
  { name: 'PostgreSQL', version: '15+', icon: '🐘' },
  { name: 'Docker', version: '24+', icon: '🐳' },
  { name: 'Kubernetes', version: '1.28+', icon: '☸️' },
  { name: 'Redis', version: '7+', icon: '🟦' },
  { name: 'OpenRouter', version: 'API', icon: '🌐' },
];

export default function TechStack() {
  return (
    <Section id="tech-stack" bgColor="bg" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-sans font-light text-text mb-4">
            Built with modern tools
          </h2>
          <p className="text-body text-textDim max-w-2xl mx-auto">
            Extensible plugin architecture. Bring your own tools and models.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-bgSecondary border border-border rounded-lg p-4 text-center hover:border-accentDim transition-colors duration-200"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-medium text-text text-sm">{tech.name}</div>
                <div className="text-xs text-textDim">{tech.version}</div>
              </div>
            ))}
          </div>

          {/* Extension Note */}
          <div className="text-center mt-12 p-6 bg-codeBg/50 rounded-xl border border-border">
            <p className="text-sm text-textDim">
              Cortex uses a plugin architecture that allows you to integrate any tool, model, or service.
              The core is designed to be extensible and modular.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}