import SEO from '../components/SEO'
import { useState } from "react";
import {
  ArrowRight,
  Clock3,
  Dumbbell,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from '../components/Footer'

type WorkoutInput = {
  goal: string;
  duration: string;
  equipment: string;
  energy: string;
  context: string;
};

type Workout = {
  sessionTitle: string;
  duration: number;
  intensity: string;
  exercises: {
    name: string;
    sets: number;
    reps: number;
    reason: string;
  }[];
  considerations: string[];
};

const goals = ["Build strength", "Build muscle", "Improve fitness", "Mobility"];

const durations = ["15 min", "30 min", "45 min", "60+ min"];

const equipment = ["No equipment", "Dumbbells", "Home gym", "Full gym"];

const energyLevels = ["Low", "Okay", "Good", "Great"];

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-[var(--foreground)]">
        {label}
      </legend>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {options.map((option) => {
          const selected = value === option;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={`min-h-12 border px-3 text-left text-sm transition ${
                selected
                  ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--foreground)]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function Builder() {
  const [input, setInput] = useState<WorkoutInput>({
    goal: "Build strength",
    duration: "30 min",
    equipment: "Dumbbells",
    energy: "Okay",
    context: "",
  });

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateInput = (key: keyof WorkoutInput, value: string) => {
    setInput((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const buildWorkout = async () => {
    setLoading(true);
    setError("");
    setWorkout(null);

    try {
      const response = await fetch("/api/generate-workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to generate workout.");
      }

      setWorkout(data);

      setTimeout(() => {
        document.getElementById("generated-workout")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      console.error(error);
      setError(
        "We could not build your workout right now. Please make sure the Repwise server is running and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SEO
        title="Build a Workout — Repwise"
        description="Tell Repwise what you want to accomplish, how you're feeling, what you have available, and let AI build your workout."
      />
      <Header />

      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <section aria-labelledby="builder-heading">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Repwise / Workout builder
            </p>

            <h1
              id="builder-heading"
              className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl"
            >
              What does today look like?
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Give Repwise the details that matter. Its AI uses your time,
              energy, equipment, goal and context to decide what your workout
              should look like today.
            </p>
          </div>

          <div className="mt-12 border border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
            <div className="space-y-8">
              <OptionGroup
                label="What's your goal?"
                options={goals}
                value={input.goal}
                onChange={(value) => updateInput("goal", value)}
              />

              <OptionGroup
                label="How much time do you have?"
                options={durations}
                value={input.duration}
                onChange={(value) => updateInput("duration", value)}
              />

              <OptionGroup
                label="What do you have available?"
                options={equipment}
                value={input.equipment}
                onChange={(value) => updateInput("equipment", value)}
              />

              <OptionGroup
                label="How are you feeling?"
                options={energyLevels}
                value={input.energy}
                onChange={(value) => updateInput("energy", value)}
              />

              <div>
                <label
                  htmlFor="context"
                  className="mb-3 block text-sm font-medium"
                >
                  Anything else Repwise should know?
                </label>

                <textarea
                  id="context"
                  value={input.context}
                  onChange={(event) =>
                    updateInput("context", event.target.value)
                  }
                  placeholder="For example: I'm tired today but still want to train. My knee feels slightly uncomfortable, so I'd rather avoid anything too intense."
                  rows={5}
                  className="w-full resize-none border border-[var(--border)] bg-[var(--background)] p-4 text-sm leading-6 outline-none transition placeholder:text-[var(--subtle)] focus:border-[var(--foreground)]"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-[var(--muted)]">
                  Repwise's AI uses these details to build the session around
                  your current situation.
                </p>

                <button
                  type="button"
                  onClick={buildWorkout}
                  disabled={loading}
                  aria-busy={loading}
                  className="group inline-flex min-h-12 items-center justify-center gap-8 bg-[var(--foreground)] px-5 text-sm font-medium text-white transition hover:bg-[#303030] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Repwise is building..." : "Build my workout"}

                  {!loading && (
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-5 border border-[var(--accent)] bg-[var(--surface)] p-4 text-sm text-[var(--foreground)]"
            >
              {error}
            </p>
          )}
        </section>

        {workout && (
          <section
            id="generated-workout"
            aria-labelledby="generated-heading"
            aria-live="polite"
            className="mt-16 scroll-mt-24"
          >
            <div className="border border-[var(--border)] bg-white">
              <div className="border-b border-[var(--border)] p-5 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      Repwise recommendation
                    </p>

                    <h2
                      id="generated-heading"
                      className="mt-3 text-3xl font-semibold tracking-[-0.03em]"
                    >
                      {workout.sessionTitle}
                    </h2>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center bg-[var(--foreground)] text-white sm:flex">
                    <Sparkles size={17} aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs">
                    <Clock3 size={13} aria-hidden="true" />
                    {workout.duration} min
                  </span>

                  <span className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs">
                    <Dumbbell size={13} aria-hidden="true" />
                    {input.equipment}
                  </span>

                  <span className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs">
                    <HeartPulse size={13} aria-hidden="true" />
                    {workout.intensity}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[var(--border)]">
                {workout.exercises.map((exercise, index) => (
                  <article
                    key={`${exercise.name}-${index}`}
                    className="grid gap-4 p-5 md:grid-cols-[56px_1fr_auto] md:items-center md:p-6"
                  >
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-medium">{exercise.name}</h3>

                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {exercise.reason}
                      </p>
                    </div>

                    <span className="text-sm font-medium">
                      {exercise.sets} × {exercise.reps}
                    </span>
                  </article>
                ))}
              </div>

              <div className="border-t border-[var(--border)] bg-[var(--surface)] p-5 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Why this workout?
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  {workout.considerations.map((consideration) => (
                    <li key={consideration}>• {consideration}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-[var(--muted)]">
              Repwise provides workout-planning guidance, not medical advice. If
              you have an injury, medical condition or concerns about exercising
              safely, consult an appropriate healthcare professional.
            </p>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
