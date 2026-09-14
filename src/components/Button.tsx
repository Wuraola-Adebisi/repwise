import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: React.ReactNode
  to: string
  variant?: 'dark' | 'light'
}

export default function Button({
  children,
  to,
  variant = 'dark',
}: ButtonProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center gap-8 px-5 py-4 text-sm font-medium transition ${
        variant === 'dark'
          ? 'bg-[var(--foreground)] text-white hover:bg-[#303030]'
          : 'border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--foreground)]'
      }`}
    >
      {children}

      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  )
}