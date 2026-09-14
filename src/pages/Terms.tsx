import SEO from '../components/SEO'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SEO
        title="Terms of Service — Repwise"
        description="The terms governing your use of the Repwise workout decision service."
      />

      <Header />

      <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 border-b border-[var(--border)] pb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Legal
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-5 text-sm text-[var(--muted)]">
            Last updated: September 14, 2026
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Using Repwise</h2>
            <p className="leading-7 text-[var(--muted)]">
              Repwise provides a tool for generating workout recommendations
              based on information supplied by the user. By using Repwise,
              you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Workout recommendations
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise generates recommendations based on the information you
              provide. The recommendations are not guaranteed to be suitable
              for every person or situation and should be treated as general
              fitness guidance.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              You are responsible for deciding whether an exercise,
              movement, intensity, or workout is appropriate for you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              3. Health and safety
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise is not a medical service and does not provide medical
              diagnosis, treatment, rehabilitation, or individualized
              medical advice.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              If you have an injury, medical condition, persistent pain,
              pregnancy-related concerns, or other health considerations,
              consult an appropriately qualified healthcare professional
              before beginning or changing an exercise program.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Acceptable use
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              You agree not to misuse Repwise, interfere with its operation,
              attempt to gain unauthorized access to its systems, abuse its
              infrastructure, or use the service in a way that violates
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              5. Intellectual property
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              The Repwise name, branding, website, interface, software, and
              original content are owned by or licensed to Repwise unless
              otherwise stated. These Terms do not transfer ownership of
              Repwise intellectual property to you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Generated content
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Workout recommendations are generated automatically and may
              contain errors, omissions, or unsuitable suggestions. You
              should evaluate recommendations before following them and stop
              any exercise that causes pain, dizziness, unusual discomfort,
              or other concerning symptoms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Availability
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              We may modify, suspend, or discontinue parts of Repwise at any
              time. We do not guarantee that the service will always be
              available, uninterrupted, or error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              8. Third-party services
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise may depend on third-party hosting, infrastructure, AI,
              analytics, or other services. Those services may have their own
              terms and policies, and their availability may affect Repwise.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Limitation of liability
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              To the maximum extent permitted by applicable law, Repwise and
              its operators will not be responsible for injuries, losses,
              damages, or other consequences arising from reliance on workout
              recommendations or use of the service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              10. Changes to these terms
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              We may update these Terms as the service changes. Continued use
              of Repwise after updated Terms are published constitutes
              acceptance of the revised Terms, to the extent permitted by
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              11. Governing law
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              These Terms are governed by the laws applicable to the operation
              of Repwise, subject to any mandatory consumer-protection or
              other applicable legal requirements.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-wrap gap-5 border-t border-[var(--border)] pt-8 text-sm">
          <Link to="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>

          <Link
            to="/medical-disclaimer"
            className="underline underline-offset-4"
          >
            Fitness & Health Disclaimer
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  )
}