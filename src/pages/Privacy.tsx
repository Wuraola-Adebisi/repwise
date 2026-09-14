import SEO from '../components/SEO'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SEO
        title="Privacy Policy — Repwise"
        description="Learn how Repwise handles information you provide when using the service."
      />

      <Header />

      <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 border-b border-[var(--border)] pb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Legal
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-sm text-[var(--muted)]">
            Last updated: September 14, 2026
          </p>
        </div>

        <div className="space-y-12 text-[var(--foreground)]">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">1. Overview</h2>
            <p className="leading-7 text-[var(--muted)]">
              Repwise is a workout decision tool that uses information you
              provide to generate a workout suited to your stated goals,
              available time, energy, equipment, and context.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Information you provide
            </h2>
            <p className="mb-4 leading-7 text-[var(--muted)]">
              When you use the workout builder, you may provide information
              including:
            </p>

            <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--muted)]">
              <li>Your workout goal.</li>
              <li>The amount of time you have available.</li>
              <li>The equipment you have available.</li>
              <li>Your reported energy level.</li>
              <li>Additional context you choose to provide.</li>
            </ul>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              Additional context may contain personal or health-related
              information if you choose to include it. You should avoid
              providing information that is unnecessary for generating your
              workout.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              3. How we use information
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Information submitted through the workout builder is used to
              interpret your request and generate a workout recommendation.
              It may also be processed to operate, maintain, secure, and
              improve the service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Data storage
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise does not currently require an account or maintain a
              user profile for the workout builder. Repwise does not
              intentionally store workout submissions in a Repwise database
              at this time. However, requests may be processed by the
              infrastructure used to host and operate the service, which may
              maintain technical logs for security, reliability, and
              operational purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              5. Third-party services
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise is hosted using third-party infrastructure. Those
              providers may process technical information necessary to
              deliver the service, subject to their own terms and privacy
              policies.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              If Repwise introduces an external AI provider for workout
              generation, this policy will be updated to explain the relevant
              processing before that functionality is introduced.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Information security
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              We take reasonable measures appropriate to the service to
              protect information against unauthorized access, alteration,
              disclosure, or destruction. No internet-based service can
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Your privacy rights
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Depending on applicable law, you may have rights relating to
              your personal data, including rights to access, correction,
              deletion, restriction, objection, or other rights provided by
              applicable data-protection law.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              To make a privacy request or ask a question about this policy,
              contact us using the contact information provided on the
              Repwise website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              8. Children's privacy
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Repwise is not intended to provide personalized workout
              recommendations to children. If you are under the age required
              to use the service independently in your jurisdiction, use
              Repwise only with appropriate parental or guardian involvement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Changes to this policy
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              We may update this Privacy Policy as Repwise develops. When we
              make material changes, we will update the date shown at the top
              of this page.
            </p>
          </section>

          <section className="border-t border-[var(--border)] pt-8">
            <p className="leading-7 text-[var(--muted)]">
              Questions about privacy? Contact the Repwise team through the
              contact method provided on the website.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-wrap gap-5 border-t border-[var(--border)] pt-8 text-sm">
          <Link to="/terms" className="underline underline-offset-4">
            Terms of Service
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