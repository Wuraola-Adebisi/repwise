import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-xs text-[var(--muted)]">
          © 2026 Repwise. Built for the day you're actually having.
        </p>

        <nav
          aria-label="Legal navigation"
          className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--muted)]"
        >
          <Link
            to="/privacy"
            className="transition hover:text-[var(--foreground)]"
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            className="transition hover:text-[var(--foreground)]"
          >
            Terms
          </Link>

          <Link
            to="/medical-disclaimer"
            className="transition hover:text-[var(--foreground)]"
          >
            Fitness & Health
          </Link>
        </nav>
      </div>
    </footer>
  )
}