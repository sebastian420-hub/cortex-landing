export interface CommandGroup {
  title: string;
  commands: string[];
  description?: string;
}

export const installCommands: CommandGroup = {
  title: 'Install',
  description: 'Get started in minutes',
  commands: [
    '# Install with pip',
    '$ pip install cortex',
    '',
    '# Install with hybrid native extensions',
    '$ pip install -e .[hybrid]',
    '',
    '# One-time setup',
    '$ cortex --help',
  ],
};

export const runCommands: CommandGroup = {
  title: 'Run',
  description: 'Execute operations',
  commands: [
    '# Interactive mode',
    '$ cortex',
    '',
    '# Enhanced mode (Planning + Memory)',
    '$ cortex --enhanced',
    '',
    '# Intelligent model orchestration',
    '$ cortex --routing',
    '',
    '# Auto-approve operations',
    '$ cortex --auto-approve',
  ],
};

export const advancedCommands: CommandGroup = {
  title: 'Advanced',
  description: 'Power user options',
  commands: [
    '# Specify model (Ollama)',
    '$ cortex --model llama3.3:70b',
    '',
    '# Specify provider (Cloud API)',
    '$ cortex --model deepseek-chat --provider deepseek',
    '',
    '# Auto-approve (dangerous!)',
    '$ cortex --auto-approve',
    '',
    '# Save/load sessions',
    '$ cortex --save-session my-work',
    '$ cortex --load-session my-work',
  ],
};