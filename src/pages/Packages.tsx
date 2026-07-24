import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { PACKAGES } from '@/lib/constants';

export function Packages() {
  const featured = useMemo(() => PACKAGES.filter((item) => item.featured), []);

  return (
    <Container className="pt-28 pb-20">
      <Helmet>
        <title>Tour Packages | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Explore our premium tour packages across India including Kerala, Kashmir, Goa, Manali and custom holiday experiences."
        />
      </Helmet>

      <SectionHeading
        badge="Tour Packages"
        title="Premium packages for unforgettable journeys"
        subtitle="Discover curated travel experiences designed for couples, families, solo travelers, and groups."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {featured.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
          >
            <Card className="overflow-hidden p-8">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-3xl bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Featured</span>
                <span className="text-sm text-text-secondary">{pkg.duration}</span>
              </div>
              <h3 className="text-3xl font-semibold text-primary">{pkg.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{pkg.description}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {pkg.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl bg-surface p-4 text-sm text-text-secondary dark:bg-surface-secondary">
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-text-secondary">Starting from</p>
                  <p className="text-2xl font-semibold text-primary">₹{pkg.price.toLocaleString()}</p>
                </div>
                <Link to="/book">
                  <Button>Book now</Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-border bg-gradient-to-br from-surface to-surface-secondary p-10 shadow-glass backdrop-blur-xl dark:from-slate-900 dark:to-slate-950 dark:border-white/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-primary">Need a fully custom tour?</h2>
            <p className="mt-3 max-w-2xl text-base text-text-secondary leading-relaxed">
              We help plan private devotional journeys, corporate retreats and personalized family adventures with flexible itineraries and premium support.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline">Talk to our travel planners</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
