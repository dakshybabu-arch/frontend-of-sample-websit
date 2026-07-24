import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { FAQS } from '@/lib/constants';

export function FAQs() {
  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>FAQs | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Read frequently asked questions about Amar Tours & Travels, bookings, cancellations, travel packages, and services."
        />
      </Helmet>

      <SectionHeading
        badge="FAQs"
        title="Frequently asked questions"
        subtitle="Clear answers to help you book confidently and travel with ease."
      />

      <div className="grid gap-4">
        {FAQS.map((faq) => (
          <details
            key={faq.id}
            className="group rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm transition hover:border-accent/30 hover:shadow-lg dark:bg-surface-secondary dark:border-white/10"
          >
            <summary className="cursor-pointer text-lg font-semibold text-primary list-none marker:hidden">{faq.question}</summary>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}
