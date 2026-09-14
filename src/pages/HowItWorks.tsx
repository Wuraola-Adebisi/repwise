import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  CircleAlert,
  Code2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const inputs = [
  ["GOAL", "Build strength"],
  ["TIME", "30 minutes"],
  ["ENERGY", "Low"],
  ["EQUIPMENT", "Dumbbells"],
];

const decisions = [
  ["Intensity", "Light to moderate"],
  ["Volume", "Reduced"],
  ["Focus", "Strength"],
  ["Duration", "≤ 30 min"],
];

const considerations = [
  "Keep the session within 30 minutes.",
  "Use only the available dumbbells.",
  "Reduce volume because energy is low.",
  "Prioritise strength-focused movements.",
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <section className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Repwise / How it works
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Your input becomes a workout through a series of decisions.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Repwise's AI interprets what you tell it, turns that context into
            constraints and priorities, then generates a structured session
            around them.
          </p>
        </section>

        {/* System */}
        <section aria-labelledby="system-heading" className="mt-16 md:mt-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                01 / The system
              </p>

              <h2
                id="system-heading"
                className="mt-3 text-2xl font-semibold tracking-[-0.025em] md:text-3xl"
              >
                From context to session.
              </h2>
            </div>

            <span className="font-mono text-xs text-[var(--muted)]">
              INPUT → INTERPRET → GENERATE → EXPLAIN
            </span>
          </div>

          <div className="mt-8 border border-[var(--border)] bg-[var(--surface)]">
            <div className="grid md:grid-cols-[1fr_56px_1fr_56px_1fr]">
              <div className="p-6 md:p-8">
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  01
                </span>

                <h3 className="mt-4 text-lg font-medium">Your day</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  You provide the details that change what makes sense today.
                </p>

                <div className="mt-6 space-y-2">
                  {inputs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border border-[var(--border)] bg-[var(--background)] px-3 py-3"
                    >
                      <span className="font-mono text-[10px] tracking-[0.12em] text-[var(--muted)]">
                        {label}
                      </span>

                      <span className="text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden items-center justify-center border-x border-[var(--border)] md:flex">
                <ArrowRight size={16} aria-hidden="true" />
              </div>

              <div className="border-t border-[var(--border)] p-6 md:border-t-0 md:p-8">
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  02
                </span>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center bg-[var(--foreground)] text-white">
                    <BrainCircuit size={15} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-medium">AI interprets</h3>
                </div>

                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                  The model turns your answers and free-form context into
                  decisions the workout can use.
                </p>

                <div className="mt-6 border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    Interpreted context
                  </p>

                  <div className="mt-4 space-y-3">
                    {decisions.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-[var(--muted)]">{label}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-center border-x border-[var(--border)] md:flex">
                <ArrowRight size={16} aria-hidden="true" />
              </div>

              <div className="border-t border-[var(--border)] p-6 md:border-t-0 md:p-8">
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  03
                </span>

                <h3 className="mt-4 text-lg font-medium">Your session</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  The structured result becomes the workout interface you
                  actually use.
                </p>

                <div className="mt-6 border border-[var(--border)] bg-[var(--background)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      Generated
                    </span>

                    <span className="text-xs">28 min</span>
                  </div>

                  <h4 className="mt-4 font-medium">
                    Low-Energy Strength Session
                  </h4>

                  <div className="mt-4 space-y-2">
                    {[
                      "Goblet Squat",
                      "Romanian Deadlift",
                      "Floor Press",
                      "One-Arm Row",
                    ].map((exercise) => (
                      <div
                        key={exercise}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check
                          size={13}
                          className="text-[var(--accent)]"
                          aria-hidden="true"
                        />
                        {exercise}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-[var(--border)] py-3 md:hidden">
              <ArrowDown size={16} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Natural language */}
        <section
          aria-labelledby="language-heading"
          className="mt-20 grid gap-10 md:mt-32 md:grid-cols-[0.8fr_1.2fr] md:items-center"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              02 / Natural language
            </p>

            <h2
              id="language-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
            >
              You don't have to know exactly what to ask for.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Structured controls give Repwise reliable inputs. The free-text
              field gives you somewhere to explain the things a form cannot
              anticipate.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                User context
              </span>
            </div>

            <blockquote className="mt-6 max-w-2xl text-xl leading-8 tracking-[-0.02em] md:text-2xl">
              "I've only got about 30 minutes. I'm tired today but still want to
              do something. I've got dumbbells and I'd rather focus on my upper
              body."
            </blockquote>

            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-3">
                <Sparkles size={16} aria-hidden="true" />

                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  AI extracts
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
                {inputs.map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-[var(--border)] bg-[var(--background)] p-3"
                  >
                    <p className="font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
                      {label}
                    </p>

                    <p className="mt-2 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reasoning */}
        <section aria-labelledby="reasoning-heading" className="mt-20 md:mt-32">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              03 / Reasoning
            </p>

            <h2
              id="reasoning-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
            >
              The recommendation should make sense to you.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Repwise doesn't just return exercises. The generated session
              carries the reasoning behind the important decisions.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="border border-[var(--border)] bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles size={17} aria-hidden="true" />
                <h3 className="font-medium">What Repwise considered</h3>
              </div>

              <ul className="mt-6 space-y-4">
                {considerations.map((item) => (
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

            <div className="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <CircleAlert size={17} aria-hidden="true" />
                <h3 className="font-medium">Where AI has limits</h3>
              </div>

              <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                Repwise is not a medical system. It should not diagnose
                injuries, assess medical conditions or determine whether someone
                is medically safe to exercise.
              </p>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                When important information is missing or a situation falls
                outside the product's intended use, the appropriate response is
                to acknowledge that limitation rather than invent certainty.
              </p>
            </div>
          </div>
        </section>

        {/* Technical */}
        <section
          aria-labelledby="architecture-heading"
          className="mt-20 border-y border-[var(--border)] py-12 md:mt-32 md:py-16"
        >
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                04 / Under the hood
              </p>

              <h2
                id="architecture-heading"
                className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              >
                Structured output keeps the interface predictable.
              </h2>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Code2 size={16} aria-hidden="true" />

                <p className="text-base leading-7 text-[var(--muted)]">
                  The model returns structured workout data. The application
                  turns those decisions into the interface.
                </p>
              </div>

              <div className="mt-6 overflow-hidden border border-[var(--border)] bg-[#181818]">
                <pre className="overflow-x-auto p-5 text-xs leading-6 text-white md:p-6">
                  <code>{`{
  "sessionTitle": "Low-Energy Strength Session",
  "duration": 28,
  "intensity": "Light to moderate",
  "exercises": [
    {
      "name": "Dumbbell Floor Press",
      "sets": 3,
      "reps": 10,
      "reason": "Fits the available equipment"
    }
  ],
  "considerations": [
    "Reduced volume",
    "30-minute limit"
  ]
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Ready?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Tell Repwise what today looks like.
            </h2>

            <Link
              to="/build"
              className="group mt-7 inline-flex min-h-12 items-center gap-8 bg-[var(--foreground)] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#303030]"
            >
              Build my workout
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
