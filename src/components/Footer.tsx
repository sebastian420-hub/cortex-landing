import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'GitHub', href: 'https://github.com/cortex-ai/cortex' },
    { name: 'Documentation', href: 'https://github.com/cortex-ai/cortex/wiki' },
    { name: 'Discord', href: 'https://discord.gg/cortex' },
  ];

  return (
    <footer className="border-t border-border bg-bg">
      <div className="container mx-auto px-6 py-8">
        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-text hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright and License */}
        <div className="text-center">
          <p className="text-sm text-textDim">
            © {currentYear} Cortex. MIT License.
          </p>
          <p className="text-sm text-textDim mt-1">
            Open source. Community driven.
          </p>
        </div>
      </div>
    </footer>
  );
}