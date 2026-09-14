import {
  ArrowRight,
  BrainCircuit,
  Check,
  Clock3,
  Dumbbell,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const decisions = [
  ["TIME", "30 min"],
  ["ENERGY", "Low"],
  ["EQUIPMENT", "Dumbbells"],
  ["FOCUS", "Upper body"],
];

const reasons = [
  "Kept the session within your available time.",
  "Reduced volume because your energy is low.",
  "Used only the equipment you have available.",
  "Prioritised upper-body movements based on your goal.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              AI workout decision engine
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl"
            >
              Your workout should fit your day.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Tell Repwise your goal, available time, energy, equipment and
              anything else that matters. Its AI interprets the situation and
              builds a workout around it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/build"
                className="group inline-flex min-h-12 items-center justify-between gap-8 bg-[var(--foreground)] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#303030]"
              >
                Build my workout
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/how-it-works"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--border)] px-5 py-4 text-sm font-medium transition hover:border-[var(--foreground)]"
              >
                See how Repwise works
              </Link>
            </div>
          </div>

          {/* Decision map */}
          <div className="border border-[var(--border)] bg-[var(--surface)]">
            <div className="border-b border-[var(--border)] px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Repwise / Decision map
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] text-[var(--muted)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  AI
                </span>
              </div>
            </div>

            <div className="p-5 md:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                Your day
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {decisions.map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-[var(--border)] bg-[var(--background)] p-3"
                  >
                    <p className="font-mono text-[9px] tracking-[0.12em] text-[var(--muted)]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm">{value}</p>
                  </div>
                ))}
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <div className="flex h-8 w-8 items-center justify-center bg-[var(--foreground)] text-white">
                  <BrainCircuit size={15} aria-hidden="true" />
                </div>
                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              <div className="border border-[var(--foreground)] bg-[var(--background)] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
                    Repwise
                  </span>
                  <Sparkles size={14} aria-hidden="true" />
                </div>

                <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
                  Interprets your context, weighs your constraints and
                  determines what the session should prioritise.
                </p>
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <ArrowRight size={15} aria-hidden="true" />
                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                  Your session
                </p>

                <div className="mt-4 border border-[var(--border)] bg-[var(--background)] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-medium tracking-[-0.02em]">
                        Low-Energy Upper Body
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Built around today's constraints
                      </p>
                    </div>

                    <span className="font-mono text-xs">28 MIN</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["4 exercises", "Moderate load", "Dumbbells"].map(
                      (item) => (
                        <span
                          key={item}
                          className="border border-[var(--border)] px-2.5 py-1.5 text-[10px]"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          aria-labelledby="problem-heading"
          className="border-t border-[var(--border)] py-20 md:py-28"
        >
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                01 / The problem
              </p>

              <h2
                id="problem-heading"
                className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-5xl"
              >
                Plans don't know your day.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                A workout that made sense yesterday might not make sense today.
                You might have less time, less energy, different equipment or a
                completely different priority.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["30 MIN", "instead of an hour"],
                  ["LOW ENERGY", "instead of your usual pace"],
                  ["DUMBBELLS", "instead of a full gym"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="border border-[var(--border)] bg-[var(--surface)] p-5"
                  >
                    <p className="font-mono text-xs tracking-[0.12em]">
                      {title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Natural language */}
        <section
          aria-labelledby="context-heading"
          className="grid gap-10 border-t border-[var(--border)] py-20 md:grid-cols-[0.75fr_1.25fr] md:items-center md:py-28"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              02 / Natural language
            </p>

            <h2
              id="context-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-4xl"
            >
              Just tell Repwise what's going on.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">
              You don't have to translate your situation into fitness
              terminology. Give Repwise the details in your own words. Its AI
              extracts the constraints that matter.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                User context
              </span>
            </div>

            <p className="mt-5 text-lg leading-8 tracking-[-0.015em] md:text-2xl">
              "I've only got about 30 minutes. I'm tired today but still want to
              do something. I've got dumbbells and I'd rather focus on my upper
              body."
            </p>

            <div className="mt-7 border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-3">
                <Sparkles size={15} aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  Repwise interprets
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
                {decisions.map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-[var(--border)] bg-[var(--background)] p-3"
                  >
                    <p className="font-mono text-[9px] tracking-[0.1em] text-[var(--muted)]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Adaptation */}
        <section
          aria-labelledby="adaptation-heading"
          className="border-t border-[var(--border)] py-20 md:py-28"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              03 / Adaptation
            </p>

            <h2
              id="adaptation-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-5xl"
            >
              Your workout adapts.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted)] md:text-lg">
              Change the situation and Repwise changes the recommendation. The
              goal can stay the same while the workout changes around it.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              {
                before: "30 MIN",
                after: "15 MIN",
                label: "Available time changes",
              },
              {
                before: "GOOD ENERGY",
                after: "LOW ENERGY",
                label: "Energy changes",
              },
              {
                before: "FULL GYM",
                after: "DUMBBELLS",
                label: "Equipment changes",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6"
              >
                <p className="text-xs text-[var(--muted)]">{item.label}</p>

                <div className="mt-6 flex items-center gap-3 font-mono text-xs">
                  <span className="border border-[var(--border)] px-3 py-2">
                    {item.before}
                  </span>
                  <ArrowRight size={13} aria-hidden="true" />
                  <span className="border border-[var(--foreground)] bg-[var(--foreground)] px-3 py-2 text-white">
                    {item.after}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                  Repwise recalculates the session around the new constraint.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reasoning */}
        <section
          aria-labelledby="reasoning-heading"
          className="grid gap-10 border-t border-[var(--border)] py-20 md:grid-cols-[0.75fr_1.25fr] md:py-28"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              04 / Reasoning
            </p>

            <h2
              id="reasoning-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-4xl"
            >
              Don't just get a workout. Understand why.
            </h2>
          </div>

          <div className="border border-[var(--border)] bg-white">
            <div className="border-b border-[var(--border)] p-5 md:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                    Repwise recommendation
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    Low-Energy Upper Body
                  </h3>
                </div>

                <span className="font-mono text-xs">28 MIN</span>
              </div>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {reasons.map((reason, index) => (
                <div key={reason} className="flex gap-4 p-5 md:p-6">
                  <Check
                    size={16}
                    className="mt-1 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {reason}
                  </p>

                  <span className="ml-auto font-mono text-[10px] text-[var(--subtle)]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="system-heading"
          className="border-t border-[var(--border)] py-20 md:py-28"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                05 / The system
              </p>

              <h2
                id="system-heading"
                className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-5xl"
              >
                From your day to your workout.
              </h2>
            </div>

            <Link
              to="/how-it-works"
              className="group inline-flex items-center gap-4 text-sm font-medium"
            >
              Explore the system
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid border border-[var(--border)] md:grid-cols-4">
            {[
              {
                number: "01",
                icon: Zap,
                title: "You provide context",
                text: "Your goal, time, energy, equipment and anything else that matters.",
              },
              {
                number: "02",
                icon: BrainCircuit,
                title: "AI interprets it",
                text: "Repwise turns your input into constraints and priorities.",
              },
              {
                number: "03",
                icon: Dumbbell,
                title: "A session is built",
                text: "The workout is generated around those decisions.",
              },
              {
                number: "04",
                icon: Sparkles,
                title: "You see why",
                text: "The recommendation comes with the reasoning behind it.",
              },
            ].map(({ number, icon: Icon, title, text }, index) => (
              <div
                key={number}
                className={`p-5 md:p-6 ${
                  index > 0 ? "border-t md:border-l md:border-t-0" : ""
                } border-[var(--border)]`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {number}
                  </span>

                  <Icon size={16} aria-hidden="true" />
                </div>

                <h3 className="mt-10 text-sm font-medium">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-[var(--border)] py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Ready?
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              What's your workout today?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              Give Repwise the situation. Let its AI work out what fits.
            </p>

            <Link
              to="/build"
              className="group mt-8 inline-flex min-h-12 items-center gap-8 bg-[var(--foreground)] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#303030]"
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
