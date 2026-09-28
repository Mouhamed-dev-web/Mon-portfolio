export function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border-strong px-3 py-1 text-xs text-ink-secondary transition-colors hover:border-accent-border hover:text-accent">
      {label}
    </span>
  );
}
