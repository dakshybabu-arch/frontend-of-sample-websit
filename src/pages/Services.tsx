import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/lib/constants';

export function Services() {
  return (
    <Container className="pt-28 pb-20">
      <Helmet>
        <title>Services | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Discover Amar Tours & Travels services including family trips, corporate tours, devotional journeys, hotel booking support and custom travel itineraries."
        />
      </Helmet>

      <SectionHeading
        badge="Services"
        title="Premium travel services for every journey"
        subtitle="Choose the perfect travel experience from our thoughtfully designed services and get support from booking to departure."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <Card className="h-full p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-accent/15 to-purple/10 text-accent shadow-sm">
                <DynamicIcon name={service.icon} size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{service.description}</p>
              <div className="mt-6">
                <Button variant="outline" size="sm">Learn more</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-border bg-surface-secondary p-10 shadow-glass backdrop-blur-xl dark:bg-surface-secondary/90 dark:border-white/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Need a tailored trip?</p>
            <h2 className="mt-3 text-4xl font-semibold text-primary">Build a custom itinerary with our travel experts.</h2>
            <p className="mt-4 max-w-2xl text-base text-text-secondary leading-relaxed">
              Share your destination preferences, travel dates, group size and interests. We will create a seamless personalized tour that matches your style.
            </p>
          </div>
          <Link to="/book">
            <Button size="lg">Request a quote</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
