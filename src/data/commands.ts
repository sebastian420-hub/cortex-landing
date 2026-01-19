export interface CommandGroup {
  title: string;
  commands: string[];
  description?: string;
}

export const installCommands: CommandGroup = {
  title: 'Install',
  description: 'Get started in minutes',
  commands: [
    '# Install via pip',
    '$ pip install cortex-ai',
    '',
    '# One-time setup',
    '$ cortex init',
    '',
    '# Update to latest version',
    '$ pip install -U cortex-ai',
  ],
};

export const runCommands: CommandGroup = {
  title: 'Run',
  description: 'Execute operations',
  commands: [
    '# Interactive mode',
    '$ cortex',
    '',
    '# One-shot with task',
    '$ cortex -p "Fix the bug in api.py"',
    '',
    '# Enhanced mode with planning',
    '$ cortex --enhanced',
    '',
    '# Intelligent model routing',
    '$ cortex --routing',
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