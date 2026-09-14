import SEO from '../components/SEO'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MedicalDisclaimer() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SEO
        title="Fitness & Health Disclaimer — Repwise"
        description="Important information about using Repwise workout recommendations safely."
      />

      <Header />

      <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 border-b border-[var(--border)] pb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Legal
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Fitness & Health Disclaimer
          </h1>

          <p className="mt-5 text-sm text-[var(--muted)]">
            Last updated: September 14, 2026
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Repwise is not medical advice
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise provides general fitness and workout recommendations. It
              is not a doctor, physiotherapist, personal trainer, or other
              healthcare professional, and its recommendations are not
              medical advice, diagnosis, treatment, or rehabilitation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Know your limits
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              You are responsible for determining whether an exercise or
              workout is appropriate for your body, fitness level, and
              circumstances.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              Stop exercising if you experience significant pain, dizziness,
              fainting, unusual shortness of breath, chest pain, or other
              concerning symptoms and seek appropriate medical attention.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Existing conditions and injuries
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              If you have an injury, medical condition, physical limitation,
              are recovering from surgery, are pregnant or recently gave
              birth, or have another health concern that could affect
              exercise, consult an appropriately qualified healthcare
              professional before beginning or modifying an exercise
              program.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              AI-generated recommendations
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise may use automated decision-making and, as the product
              develops, AI systems to interpret the information you provide
              and generate workout recommendations. Automated systems can
              make mistakes and may not account for every relevant aspect of
              your individual circumstances.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              No guarantee of results
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise does not guarantee specific fitness, strength,
              endurance, muscle-building, mobility, weight, or health
              outcomes from following a recommendation.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-wrap gap-5 border-t border-[var(--border)] pt-8 text-sm">
          <Link to="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>

          <Link to="/terms" className="underline underline-offset-4">
            Terms of Service
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  )
}