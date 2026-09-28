import { socialLinks } from "@/data/socials";
import { navLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div>
          <p className="font-display text-lg text-ink-primary">
            Rassoul<span className="text-accent">Conceptor</span>
          </p>
          <p className="text-xs text-ink-secondary">Full-Stack Developer & Graphiste</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-ink-secondary hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-ink-secondary hover:border-accent-border hover:text-accent"
            >
              <Icon size={14} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-ink-secondary md:px-8">
        Designed &amp; Built by Mouhamed Niang — © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
