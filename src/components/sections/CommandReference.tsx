'use client';

import Section from '../Section';
import Container from '../Container';
import Command from '../Command';
import { installCommands, runCommands, advancedCommands } from '@/data/commands';

export default function CommandReference() {
  return (
    <Section id="commands" bgColor="bgSecondary" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-sans font-light text-text mb-4">
            Get started
          </h2>
          <p className="text-body text-textDim max-w-2xl mx-auto">
            Install Cortex and start executing operations in minutes.
          </p>
        </div>

        {/* Command Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Install */}
          <div className="bg-bg rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-mono text-sm">
                &gt;
              </div>
              <h3 className="text-lg font-medium text-text">{installCommands.title}</h3>
            </div>
            {installCommands.description && (
              <p className="text-sm text-textDim mb-6">{installCommands.description}</p>
            )}
            <div className="space-y-2">
              {installCommands.commands.map((cmd, index) =>
                cmd.startsWith('#') ? (
                  <div key={index} className="text-xs text-textDim mt-2">
                    {cmd}
                  </div>
                ) : cmd === '' ? (
                  <div key={index} className="h-2" />
                ) : (
                  <Command key={index} command={cmd} index={index} />
                )
              )}
            </div>
          </div>

          {/* Run */}
          <div className="bg-bg rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-mono text-sm">
                ▷
              </div>
              <h3 className="text-lg font-medium text-text">{runCommands.title}</h3>
            </div>
            {runCommands.description && (
              <p className="text-sm text-textDim mb-6">{runCommands.description}</p>
            )}
            <div className="space-y-2">
              {runCommands.commands.map((cmd, index) =>
                cmd.startsWith('#') ? (
                  <div key={index} className="text-xs text-textDim mt-2">
                    {cmd}
                  </div>
                ) : cmd === '' ? (
                  <div key={index} className="h-2" />
                ) : (
                  <Command key={index} command={cmd} index={index} />
                )
              )}
            </div>
          </div>

          {/* Advanced */}
          <div className="bg-bg rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-mono text-sm">
                ⚡
              </div>
              <h3 className="text-lg font-medium text-text">{advancedCommands.title}</h3>
            </div>
            {advancedCommands.description && (
              <p className="text-sm text-textDim mb-6">{advancedCommands.description}</p>
            )}
            <div className="space-y-2">
              {advancedCommands.commands.map((cmd, index) =>
                cmd.startsWith('#') ? (
                  <div key={index} className="text-xs text-textDim mt-2">
                    {cmd}
                  </div>
                ) : cmd === '' ? (
                  <div key={index} className="h-2" />
                ) : (
                  <Command key={index} command={cmd} index={index} />
                )
              )}
            </div>
          </div>
        </div>

        {/* Quick Copy Section */}
        <div className="text-center mt-12">
          <p className="text-sm text-textDim mb-4">
            Pro tip: Click any command to copy it to your clipboard.
          </p>
          <a
            href="https://github.com/sebastian420-hub/cortex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-transparent text-text border border-border font-medium rounded-lg hover:bg-bg hover:text-text transition-all duration-200"
          >
            View full documentation →
          </a>
        </div>
      </Container>
    </Section>
  );
}