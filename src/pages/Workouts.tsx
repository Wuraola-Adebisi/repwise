import { ArrowRight, Clock3, Dumbbell, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const scenarios = [
  {
    tag: "LOW ENERGY",
    context: "I'm tired today but still want to train.",
    title: "Low-Energy Upper Body",
    duration: "24 min",
    equipment: "Dumbbells",
    result: "Reduced volume, moderate intensity",
  },
  {
    tag: "SHORT ON TIME",
    context: "I only have a short break before my next thing.",
    title: "Quick Full-Body Strength",
    duration: "15 min",
    equipment: "No equipment",
    result: "Fewer movements, efficient compound work",
  },
  {
    tag: "MOBILITY",
    context: "I want to move today, not push hard.",
    title: "Everyday Mobility",
    duration: "20 min",
    equipment: "None",
    result: "Controlled movement, low impact",
  },
];

export default function Workouts() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <section className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Repwise / Examples
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            See what Repwise can build.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            These aren't fixed plans. They're examples of how Repwise's AI can
            respond when the situation changes.
          </p>
        </section>

        <section aria-labelledby="scenarios-heading" className="mt-14">
          <h2 id="scenarios-heading" className="sr-only">
            Workout scenarios
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="flex min-h-[430px] flex-col border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="border-b border-[var(--border)] p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Scenario
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </div>

                  <p className="mt-8 font-mono text-xs tracking-[0.12em]">
                    {scenario.tag}
                  </p>

                  <p className="mt-4 text-lg leading-7">"{scenario.context}"</p>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                      Repwise builds
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                    {scenario.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {scenario.result}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    <span className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs">
                      <Clock3 size={13} aria-hidden="true" />
                      {scenario.duration}
                    </span>

                    <span className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs">
                      <Dumbbell size={13} aria-hidden="true" />
                      {scenario.equipment}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-y border-[var(--border)] py-12 md:mt-28 md:py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                The idea
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                The point isn't to pick from a library.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
                It's to give Repwise enough context to build something that
                makes sense for you today. Change the situation and the
                recommendation changes with it.
              </p>

              <Link
                to="/build"
                className="group mt-7 inline-flex items-center gap-8 bg-[var(--foreground)] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#303030]"
              >
                Build my workout
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
