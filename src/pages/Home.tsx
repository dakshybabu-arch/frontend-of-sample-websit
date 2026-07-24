import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { ParallaxScroll } from '@/components/ui/ParallaxScroll';
import { Card3D } from '@/components/ui/Card3D';
import { TripGallery } from '@/components/ui/TripGallery';
import { SERVICES, WHY_CHOOSE_US, DESTINATIONS, TESTIMONIALS } from '@/lib/constants';

const heroLines = [
  'Travel Better.',
  'Travel Together.',
  'Travel With Amar Tours & Travels.',
];

export function Home() {
  return (
    <div className="relative overflow-hidden bg-surface text-text grid-overlay">
      <Helmet>
        <title>Amar Tours & Travels | Premium Indian Travel Experiences</title>
        <meta
          name="description"
          content="Premium tour packages, devotional journeys, family travel, corporate trips, and luxury tours across India. Book secure travel with Amar Tours & Travels."
        />
      </Helmet>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/95 via-surface/92 to-surface/95 pointer-events-none" />

      <Container className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <section className="space-y-8">
            <ParallaxScroll speed={0.3} scale={1.05}>
              <div className="inline-flex items-center gap-3 rounded-none border-2 border-cyan-500/50 bg-surface-secondary/80 px-4 py-2 text-sm text-text-secondary backdrop-blur-xl">
                <span className="font-semibold text-cyan-400 neon-text">FUTURE TRAVEL SYSTEM</span>
                <span className="rounded-none border border-pink-500/50 bg-pink-500/10 px-3 py-1 text-pink-400 font-semibold neon-pink">NEON EDITION</span>
              </div>
            </ParallaxScroll>

            <div className="space-y-6 max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="font-mono text-5xl sm:text-6xl lg:text-7xl tracking-tight text-primary leading-tight neon-text uppercase"
              >
                EXPLORE INDIA IN THE DIGITAL AGE
              </motion.h1>

              <p className="max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed font-mono">
                [SYSTEM]: Premium tours loaded. Flexible packages initialized. Trusted drivers connected. From devotional journeys to luxury holidays — every trip optimized for maximum experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/book">
                <Button size="lg">Book Now</Button>
              </Link>
              <Link to="/packages" className="self-start sm:self-auto">
                <Button variant="secondary" size="lg">Explore Packages</Button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroLines.map((line) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + heroLines.indexOf(line) * 0.08, duration: 0.5 }}
                  className="rounded-none border-2 border-cyan-500/30 bg-surface-secondary/95 p-5 shadow-lg shadow-cyan-500/20 backdrop-blur-xl"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-400 font-mono">// FEATURED_DATA</p>
                  <p className="mt-3 text-2xl font-semibold text-primary neon-text">{line}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid gap-5">
            <Card3D intensity={4} className="relative overflow-hidden rounded-none border-2 border-cyan-500/50 bg-surface-secondary/95 p-6 shadow-lg shadow-cyan-500/20 backdrop-blur-3xl">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-mono">// QUICK_BOOK</p>
                    <h2 className="mt-2 text-3xl font-semibold text-primary neon-text uppercase">INITIATE TRAVEL SEQUENCE</h2>
                  </div>
                  <div className="rounded-none border-2 border-pink-500/50 bg-pink-500/10 px-4 py-3 text-pink-400 text-sm font-semibold neon-pink">-10% DISCOUNT</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-none bg-surface/80 p-5 border border-pink-500/30">
                    <p className="text-sm uppercase tracking-[0.25em] text-pink-400 font-mono">// DESTINATION</p>
                    <p className="mt-3 text-xl font-semibold text-pink-400 neon-pink">KERALA & GOA</p>
                  </div>
                  <div className="rounded-none bg-surface/80 p-5 border border-cyan-500/30">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-mono">// STARTING_PRICE</p>
                    <p className="mt-3 text-xl font-semibold text-cyan-400 neon-text">₹6,999</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-none bg-surface/80 p-4 border border-green-500/30">
                    <p className="text-xs uppercase tracking-[0.3em] text-green-400 font-mono">// SUPPORT</p>
                    <p className="mt-2 text-lg font-semibold text-green-400">24/7</p>
                  </div>
                  <div className="rounded-none bg-surface/80 p-4 border border-orange-500/30">
                    <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono">// GROUPS</p>
                    <p className="mt-2 text-lg font-semibold text-orange-400">FAMILY & CORP</p>
                  </div>
                  <div className="rounded-none bg-surface/80 p-4 border border-purple-500/30">
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono">// ROUTES</p>
                    <p className="mt-2 text-lg font-semibold text-purple-400 neon-purple">ALL INDIA</p>
                  </div>
                </div>
              </div>
            </Card3D>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card3D intensity={3} className="rounded-none">
                <div className="p-6 rounded-none bg-surface-secondary/90 border-2 border-pink-500/40 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.30em] text-pink-400 font-mono">// TRUSTED_FAMILIES</p>
                  <p className="mt-4 text-2xl font-semibold text-pink-400 neon-pink uppercase">HUNDREDS OF HAPPY GUESTS</p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed font-mono">We create all-inclusive travel experiences for every generation, with safety and care at the core.</p>
                </div>
              </Card3D>
              <Card3D intensity={3} className="rounded-none">
                <div className="p-6 rounded-none bg-surface-secondary/90 border-2 border-cyan-500/40 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.30em] text-cyan-400 font-mono">// FLEXIBLE_PLANNING</p>
                  <p className="mt-4 text-2xl font-semibold text-cyan-400 neon-text uppercase">CUSTOM ROUTES FOR EVERY TRIP</p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed font-mono">Need a devotional tour, a corporate retreat or a solo trip? We plan around your needs.</p>
                </div>
              </Card3D>
            </div>
          </section>
        </div>
      </Container>

      <Container className="pb-24">
        <div className="grid gap-20">
          <section>
            <SectionHeading
              badge="// SERVICES_MODULE"
              title="TRAVEL SERVICES DESIGNED FOR EVERY JOURNEY"
              subtitle="From family holidays to devotional travel and full-service transportation, our premium care makes every trip effortless."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {SERVICES.slice(0, 6).map((service, index) => {
                const borderColors = [
                  'border-cyan-500/50',
                  'border-pink-500/50',
                  'border-purple-500/50',
                  'border-green-500/50',
                  'border-orange-500/50',
                  'border-pink-500/50'
                ];
                const iconColors = [
                  'text-cyan-400',
                  'text-pink-400',
                  'text-purple-400',
                  'text-green-400',
                  'text-orange-400',
                  'text-pink-400'
                ];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    <Card3D intensity={2} className="h-full">
                      <div className={`h-full p-6 rounded-none bg-surface-secondary/95 border-2 ${borderColors[index % borderColors.length]} shadow-lg`}>                        
                        <div className="flex items-center justify-between">
                          <div className="rounded-none bg-surface/95 p-4 border border-cyan-500/30">
                            <DynamicIcon name={service.icon} size={28} className={iconColors[index % iconColors.length]} />
                          </div>
                        </div>
                        <h3 className="mt-8 text-xl font-semibold text-primary uppercase font-mono">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary font-mono">{service.description}</p>
                      </div>
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              badge="// WHY_CHOOSE_US"
              title="A TRAVEL PARTNER BUILT FOR COMFORT, RELIABILITY AND PREMIUM SERVICE"
              subtitle="We combine modern booking tools with local expertise, professional vehicles and exceptional hospitality."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {WHY_CHOOSE_US.map((item, index) => {
                const iconColors = [
                  'bg-surface/95 text-cyan-400 border-2 border-cyan-500/50',
                  'bg-surface/95 text-pink-400 border-2 border-pink-500/50',
                  'bg-surface/95 text-green-400 border-2 border-green-500/50',
                  'bg-surface/95 text-orange-400 border-2 border-orange-500/50',
                  'bg-surface/95 text-purple-400 border-2 border-purple-500/50',
                  'bg-surface/95 text-pink-400 border-2 border-pink-500/50'
                ];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4 }}
                    className=""
                  >
                    <Card3D intensity={2} className="h-full">
                      <div className="p-6 rounded-none bg-surface-secondary/95 border-2 border-cyan-500/30 shadow-lg backdrop-blur-xl">
                        <div className="flex items-center gap-4">
                          <div className={`rounded-none p-3 ${iconColors[index % iconColors.length]}`}>
                            <DynamicIcon name={item.icon} size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg text-primary uppercase font-mono">{item.title}</h4>
                            <p className="mt-2 text-sm text-text-secondary font-mono">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              badge="// DESTINATIONS_DB"
              title="POPULAR DESTINATIONS FOR EVERY TRAVELER"
              subtitle="Select from temple routes, luxury escapes, hill station hideaways and coastal retreats."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {DESTINATIONS.slice(0, 6).map((place, index) => {
                const borderColors = [
                  'border-pink-500/50',
                  'border-cyan-500/50',
                  'border-green-500/50',
                  'border-purple-500/50',
                  'border-orange-500/50',
                  'border-pink-500/50'
                ];
                return (
                  <motion.div
                    key={place.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    <Card3D intensity={5} className="h-full">
                      <div className="overflow-hidden">
                        <div className={`h-52 rounded-none bg-surface-secondary/95 p-6 flex flex-col justify-end border-2 ${borderColors[index % borderColors.length]} shadow-lg`}>
                          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-mono">// DURATION: {place.duration}</p>
                          <h3 className="mt-2 text-2xl font-semibold text-primary uppercase font-mono neon-text">{place.name}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-text-secondary font-mono">{place.description}</p>
                        </div>
                      </div>
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <TripGallery />

          <section>
            <ParallaxScroll speed={0.2} rotateX={5} rotateY={5}>
              <div className="rounded-none border-2 border-cyan-500/50 bg-surface-secondary/95 p-8 shadow-lg shadow-cyan-500/20 backdrop-blur-xl">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-none border-2 border-pink-500/50 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400 uppercase tracking-[0.24em] neon-pink">// SYSTEM_STATS</div>
                    <h2 className="mt-6 text-4xl font-semibold text-primary neon-text uppercase font-mono">TRAVEL DATA WITH A PREMIUM FEEL</h2>
                    <p className="mt-4 max-w-xl text-base text-text-secondary leading-relaxed font-mono">
                      We deliver thoughtful itineraries, trusted transport and seamless support for every stage of your journey.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-none bg-surface/80 p-6 border border-pink-500/30">
                      <p className="text-sm uppercase tracking-[0.24em] text-pink-400 font-mono">// HAPPY_CUSTOMERS</p>
                      <AnimatedCounter target={2500} suffix="+" className="mt-4 text-3xl font-semibold text-pink-400 neon-pink" />
                    </div>
                    <div className="rounded-none bg-surface/80 p-6 border border-cyan-500/30">
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-400 font-mono">// DESTINATIONS</p>
                      <AnimatedCounter target={50} suffix="+" className="mt-4 text-3xl font-semibold text-cyan-400 neon-text" />
                    </div>
                    <div className="rounded-none bg-surface/80 p-6 border border-green-500/30">
                      <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-mono">// TRIPS_COMPLETED</p>
                      <AnimatedCounter target={5000} suffix="+" className="mt-4 text-3xl font-semibold text-green-400" />
                    </div>
                    <div className="rounded-none bg-surface/80 p-6 border border-orange-500/30">
                      <p className="text-sm uppercase tracking-[0.24em] text-orange-400 font-mono">// YEARS_EXPERIENCE</p>
                      <AnimatedCounter target={12} suffix="" className="mt-4 text-3xl font-semibold text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxScroll>
          </section>

          <section>
            <SectionHeading
              badge="// TESTIMONIALS_DB"
              title="TRUSTED REVIEWS FROM HAPPY TRAVELERS"
              subtitle="Real feedback from travelers who enjoyed Amar Tours & Travels."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {TESTIMONIALS.slice(0, 3).map((testimonial, index) => {
                const borderColors = [
                  'border-pink-500/50',
                  'border-cyan-500/50',
                  'border-green-500/50'
                ];
                const ratingColors = [
                  'bg-surface/95 text-pink-400 border-2 border-pink-500/50',
                  'bg-surface/95 text-cyan-400 border-2 border-cyan-500/50',
                  'bg-surface/95 text-green-400 border-2 border-green-500/50'
                ];
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    <Card3D intensity={2} className="h-full">
                      <div className={`p-6 rounded-none bg-surface-secondary/95 border-2 ${borderColors[index % borderColors.length]} shadow-lg backdrop-blur-xl`}>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-primary uppercase font-mono">{testimonial.name}</p>
                            <p className="text-sm text-text-secondary font-mono">{testimonial.location}</p>
                          </div>
                          <div className={`rounded-none px-3 py-2 text-xs font-semibold ${ratingColors[index % ratingColors.length]}`}>5.0</div>
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-text-secondary font-mono">"{testimonial.review}"</p>
                      </div>
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section>
            <ParallaxScroll speed={0.15} scale={1.02}>
              <div className="rounded-none border-2 border-cyan-500/50 bg-surface-secondary/95 p-8 shadow-lg shadow-cyan-500/20 backdrop-blur-xl">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-400 font-semibold neon-text">// SYSTEM_READY</p>
                    <h2 className="mt-3 text-3xl font-semibold text-primary neon-text uppercase font-mono">BOOK YOUR JOURNEY IN MINUTES</h2>
                    <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-2xl font-mono">
                      Select a destination, customize your itinerary and enjoy a premium booking experience with transparent pricing and personalized support.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link to="/book">
                      <Button size="lg" className="border-2 border-cyan-500/50 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 neon-text uppercase font-mono">Start booking</Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" size="lg" className="border-2 border-pink-500/50 text-pink-400 hover:bg-pink-500/20 neon-pink uppercase font-mono">Contact support</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ParallaxScroll>
          </section>
        </div>
      </Container>
    </div>
  );
}
