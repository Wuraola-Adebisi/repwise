import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Sparkles, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'How it works', to: '/how-it-works' },
    { label: 'Workouts', to: '/workouts' },
    { label: 'About', to: '/about' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-sm"
          aria-label="Repwise home"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className="flex h-7 w-7 items-center justify-center bg-[var(--foreground)] text-white"
            aria-hidden="true"
          >
            <Sparkles size={13} />
          </span>

          <span className="text-sm font-semibold tracking-tight">
            REPWISE
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-sm text-sm transition ${
                isActive(item.to)
                  ? 'text-[var(--foreground)]'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
              aria-current={isActive(item.to) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/build"
            className="bg-[var(--foreground)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#303030]"
          >
            Build a workout
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--border)] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--border)] py-4 text-sm text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/build"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[var(--foreground)] px-4 py-3 text-center text-sm font-medium text-white"
            >
              Build a workout
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}