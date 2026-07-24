import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const previousTestimonial = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Container className="pt-28 pb-20">
      <Helmet>
        <title>Testimonials | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Read premium customer testimonials and 5-star reviews from travelers who chose Amar Tours & Travels for unforgettable journeys across India."
        />
      </Helmet>

      <SectionHeading
        badge="Testimonials"
        title="What travelers love about Amar Tours & Travels"
        subtitle="Real stories and reviews from families, couples, groups and solo travelers."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Customer review</p>
              <h2 className="mt-3 text-3xl font-semibold text-primary dark:text-white">{current.name}</h2>
              <p className="mt-2 text-sm text-text-secondary">{current.location}</p>
            </div>
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: current.rating }).map((_, starIndex) => (
                <Star key={starIndex} size={20} />
              ))}
            </div>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-text-secondary">“{current.review}”</p>
        </motion.div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Feedback highlights</p>
            <ul className="mt-6 space-y-4 text-text-secondary">
              <li>• Organized travel routes for every group size.</li>
              <li>• Professional drivers and comfortable vehicles.</li>
              <li>• Transparent pricing with hassle-free booking.</li>
              <li>• Dedicated support throughout the journey.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm dark:bg-surface-secondary dark:border-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Browse more stories</p>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" size="sm" onClick={previousTestimonial}>Previous</Button>
              <Button variant="primary" size="sm" onClick={nextTestimonial}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
