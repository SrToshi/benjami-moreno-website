const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-sm font-bold tracking-tight text-primary transition-colors hover:text-primary-light sm:text-base"
        >
          Benjamin Moreno Torres
        </a>

        <details className="group relative md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-border text-text transition-colors hover:border-primary hover:text-primary [&::-webkit-details-marker]:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>

          <div className="absolute right-0 top-12 w-56 border border-border bg-white p-3 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
