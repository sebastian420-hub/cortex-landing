export interface Capability {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  command: string;
}

export const capabilities: Capability[] = [
  {
    icon: '🚀',
    title: 'Deploy',
    subtitle: 'Anywhere',
    description: 'Full-stack deployment automation to any environment',
    command: 'cortex deploy --env=prod --services=api,web',
  },
  {
    icon: '🔍',
    title: 'Debug',
    subtitle: 'Deeply',
    description: 'Deep analysis and fix of complex issues',
    command: 'cortex debug --service=api --logs=recent',
  },
  {
    icon: '🛡️',
    title: 'Secure',
    subtitle: 'Thoroughly',
    description: 'Comprehensive security audits and fixes',
    command: 'cortex audit --service=all --severity=high',
  },
  {
    icon: '📊',
    title: 'Monitor',
    subtitle: 'Continuously',
    description: 'Real-time monitoring and alerting setup',
    command: 'cortex monitor --services=all --metrics=cpu,memory',
  },
  {
    icon: '🔄',
    title: 'Migrate',
    subtitle: 'Systems',
    description: 'Zero-downtime system migrations',
    command: 'cortex migrate --from=legacy --to=modern',
  },
  {
    icon: '⚙️',
    title: 'Config',
    subtitle: 'Management',
    description: 'Centralized configuration management',
    command: 'cortex config --set env=prod --services=api,web',
  },
  {
    icon: '🧪',
    title: 'Test',
    subtitle: 'Suite',
    description: 'End-to-end test suite generation',
    command: 'cortex test --type=integration --coverage=95',
  },
  {
    icon: '📜',
    title: 'Audit',
    subtitle: '& Report',
    description: 'Compliance and performance reporting',
    command: 'cortex report --type=security --format=pdf',
  },
];