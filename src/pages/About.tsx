import {
  ArrowRight,
  BrainCircuit,
  Check,
  Database,
  SlidersHorizontal,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const principles = [
  {
    icon: BrainCircuit,
    title: 'Understand the situation',
    text: "Repwise's AI interprets your goal, available time, energy, equipment and natural-language context before deciding what the session should look like.",
  },
  {
    icon: SlidersHorizontal,
    title: 'Adapt to constraints',
    text: 'The same goal can produce a different workout when your time, equipment, energy or priorities change.',
  },
  {
    icon: Database,
    title: 'Make the decision explainable',
    text: 'The generated session is structured so the application can show what was recommended and why it fits your situation.',
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <section className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Repwise / About
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            The right workout depends on what's true today.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Repwise is an AI workout decision engine built around that idea.
            Instead of starting with a fixed programme, it starts with the
            person and the situation.
          </p>
        </section>

        <section
          aria-labelledby="principles-heading"
          className="mt-20 md:mt-28"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              01 / Product principles
            </p>

            <h2
              id="principles-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
            >
              What Repwise is built around.
            </h2>
          </div>

          <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {principles.map((principle, index) => {
              const Icon = principle.icon

              return (
                <article
                  key={principle.title}
                  className="grid gap-5 py-7 md:grid-cols-[48px_220px_1fr] md:items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)]">
                    <Icon size={17} aria-hidden="true" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 font-medium">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {principle.text}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section
          aria-labelledby="architecture-heading"
          className="mt-20 border border-[var(--border)] bg-[var(--surface)] p-5 md:mt-28 md:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            02 / Under the hood
          </p>

          <h2
            id="architecture-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
          >
            Repwise is designed as a decision system, not a chatbot.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
            The AI interprets the user's situation and returns structured
            workout data. The application then turns those decisions into a
            consistent interface.
          </p>

          <div className="mt-10 grid border border-[var(--border)] md:grid-cols-5">
            {[
              ['01', 'Input', 'Your situation'],
              ['02', 'Interpret', 'What matters'],
              ['03', 'Decide', 'What fits'],
              ['04', 'Generate', 'The session'],
              ['05', 'Explain', 'Why it fits'],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`p-5 ${
                  index > 0 ? 'border-t md:border-l md:border-t-0' : ''
                } border-[var(--border)]`}
              >
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  {number}
                </span>

                <h3 className="mt-8 text-sm font-medium">{title}</h3>

                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="limits-heading"
          className="mt-20 md:mt-28"
        >
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                03 / Boundaries
              </p>

              <h2
                id="limits-heading"
                className="mt-4 text-3xl font-semibold tracking-[-0.03em]"
              >
                AI should know what it can't know.
              </h2>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 md:p-8">
              <ul className="space-y-5">
                {[
                  'Repwise does not diagnose injuries or medical conditions.',
                  'Repwise does not determine whether someone is medically safe to exercise.',
                  'When context is incomplete, recommendations should remain conservative rather than pretending to know more than they do.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    <Check
                      size={15}
                      className="mt-1 shrink-0 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-[var(--border)] py-16 md:mt-28 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Start with today
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            You don't need the perfect plan. You need one that fits.
          </h2>

          <Link
            to="/build"
            className="group mt-8 inline-flex min-h-12 items-center gap-8 bg-[var(--foreground)] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#303030]"
          >
            Build a workout
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </section>
      </div>
    </main>
  )
}