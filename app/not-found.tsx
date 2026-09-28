import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 font-display text-7xl text-accent">404</p>
      <p className="mb-8 text-ink-secondary">
        Looks like you&rsquo;ve reached an unknown dimension.
      </p>
      <Link
        href="/"
        className="rounded-md border border-border-strong px-6 py-3 text-sm text-ink-primary hover:border-accent-border hover:text-accent"
      >
        Back to home →
      </Link>
    </div>
  );
}
