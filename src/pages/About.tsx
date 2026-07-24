import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Premium comfort',
    description: 'Luxury transport, premium vehicles and curated routes designed for superior comfort on every trip.',
    icon: 'car',
  },
  {
    title: 'Trust & safety',
    description: 'Experienced drivers, safe vehicles and transparent pricing so every journey is smooth and secure.',
    icon: 'shield-check',
  },
  {
    title: 'Local expertise',
    description: 'Deep destination knowledge and local partnerships that make every itinerary feel authentic and unforgettable.',
    icon: 'map',
  },
];

export function About() {
  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>About | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Learn about Amar Tours & Travels, our mission for premium travel experiences, trusted transportation services, and authentic India tours."
        />
      </Helmet>

      <SectionHeading
        badge="About us"
        title="Crafting premium travel experiences across India"
        subtitle="From pilgrimage routes to family vacations, Amar Tours & Travels blends thoughtful planning with luxury comfort."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-text-secondary">
            Amar Tours & Travels is a premium travel company focused on delivering seamless, elegant journeys throughout India. With an emphasis on comfort, safety and personalized itineraries, we partner with experienced local guides, trusted hotel providers and professional drivers.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            Our mission is to make travel planning simple and enjoyable. Whether you are seeking a devotional tour to Tirupati, a family holiday in Goa, or a luxury hill station escape to Kashmir, we handle every detail with care.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/packages">
              <Button size="lg">View packages</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Talk to us</Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          {values.map((item) => (
            <ScrollReveal key={item.title} className="">
              <Card glass className="p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-accent/10 p-4 text-accent">
                    <DynamicIcon name={item.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Our promise</p>
            <h2 className="mt-4 text-4xl font-semibold text-primary">Travel with confidence from planning to return.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">Service quality</p>
              <p className="mt-4 text-lg font-semibold text-primary">High standards across every itinerary.</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-text-secondary">Guest support</p>
              <p className="mt-4 text-lg font-semibold text-primary">24/7 assistance for every journey.</p>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
