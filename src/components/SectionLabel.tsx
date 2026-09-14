type SectionLabelProps = {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
      {children}
    </p>
  )
}