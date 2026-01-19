import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cortex - Autonomous Terminal Agent',
  description: 'Execute end-to-end operations autonomously. Local-first. Cloud-optional.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}