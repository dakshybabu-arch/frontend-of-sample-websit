import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Terms() {
  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Terms & Conditions | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Amar Tours & Travels booking services and travel packages."
        />
      </Helmet>

      <SectionHeading
        badge="Terms & Conditions"
        title="Terms for booking and travel services"
        subtitle="Please review our service terms before booking with Amar Tours & Travels."
      />

      <div className="space-y-8 text-text-secondary">
        <section className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
          <h2 className="text-2xl font-semibold text-primary">Booking and cancellations</h2>
          <p className="mt-4 leading-relaxed">
            Bookings are confirmed once payment is received and itinerary details are finalized. Cancellation policies may vary by package and are described in your booking confirmation. Refunds are subject to our cancellation terms.
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
          <h2 className="text-2xl font-semibold text-primary">Travel responsibility</h2>
          <p className="mt-4 leading-relaxed">
            Amar Tours & Travels works with vetted vehicles, drivers and vendors to provide safe travel. Travelers are responsible for their own passports, documents, and compliance with local regulations during the trip.
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
          <h2 className="text-2xl font-semibold text-primary">Acceptance of terms</h2>
          <p className="mt-4 leading-relaxed">
            By booking with Amar Tours & Travels, you agree to our terms, privacy policy, and any package-specific conditions. We reserve the right to modify terms with notice for future bookings.
          </p>
        </section>
      </div>
    </Container>
  );
}
