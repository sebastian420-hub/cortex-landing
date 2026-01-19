import { Metadata } from 'next';
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import Capabilities from '@/components/sections/Capabilities';
import HowItWorks from '@/components/sections/HowItWorks';
import CommandReference from '@/components/sections/CommandReference';
import TechStack from '@/components/sections/TechStack';

export const metadata: Metadata = {
  title: 'Cortex - Autonomous Terminal Agent',
  description: 'Execute end-to-end operations autonomously. Local-first. Cloud-optional.',
  openGraph: {
    title: 'Cortex - Autonomous Terminal Agent',
    description: 'Execute end-to-end operations autonomously. Local-first. Cloud-optional.',
    type: 'website',
    url: 'https://github.com/sebastian420-hub/local_terminal_agent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cortex - Autonomous Terminal Agent',
    description: 'Execute end-to-end operations autonomously. Local-first. Cloud-optional.',
  },
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Capabilities />
      <HowItWorks />
      <CommandReference />
      <TechStack />
    </Layout>
  );
}