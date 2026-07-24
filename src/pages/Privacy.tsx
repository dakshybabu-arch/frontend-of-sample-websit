import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Privacy() {
  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Privacy Policy | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Read the privacy policy for Amar Tours & Travels, including how we collect and protect customer information."
        />
      </Helmet>

      <SectionHeading
        badge="Privacy Policy"
        title="Protecting your privacy and your travel data"
        subtitle="We take privacy seriously and only use your information to deliver better travel experiences."
      />

      <div className="space-y-8 text-text-secondary">
        <section className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
          <h2 className="text-2xl font-semibold text-primary">Information we collect</h2>
          <p className="mt-4 leading-relaxed">
            We collect contact details, booking preferences, payment information and travel details to complete your reservations and provide customer support. We do not share personal data with third parties except necessary vendors associated with your travel experience.
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
          <h2 className="text-2xl font-semibold text-primary">How we use your information</h2>
          <p className="mt-4 leading-relaxed">
            Your information helps us manage bookings, send travel confirmations, offer preferred packages, and respond to service requests. We keep data secure and use industry standard protection measures.
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
          <h2 className="text-2xl font-semibold text-primary">Security and retention</h2>
          <p className="mt-4 leading-relaxed">
            We retain booking and communication records only as long as needed to provide services and comply with legal obligations. We use secure storage practices and regularly review our privacy procedures.
          </p>
        </section>
      </div>
    </Container>
  );
}
