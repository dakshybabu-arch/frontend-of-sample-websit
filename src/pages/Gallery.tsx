import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Modal } from '@/components/ui/Modal';
import { GALLERY_CATEGORIES } from '@/lib/constants';

const galleryItems = [
  {
    id: 'gallery-1',
    title: 'Munnar Tea Gardens',
    category: 'Nature',
    image:
      'https://images.unsplash.com/photo-1514578656750-8a9041aaebc6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gallery-2',
    title: 'Goa Sunset Beach',
    category: 'Beaches',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gallery-3',
    title: 'Kashmir Lake Houseboat',
    category: 'Mountains',
    image:
      'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gallery-4',
    title: 'Tirupati Temple Visit',
    category: 'Temples',
    image:
      'https://images.unsplash.com/photo-1547051536-6a65aeeb4d42?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gallery-5',
    title: 'Ooty Hill Station',
    category: 'Cities',
    image:
      'https://images.unsplash.com/photo-1534777402891-92696e1ec0d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gallery-6',
    title: 'Rameshwaram Shoreline',
    category: 'Beaches',
    image:
      'https://images.unsplash.com/photo-1456397807017-5a1dc45a7b75?auto=format&fit=crop&w=1200&q=80',
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | (typeof GALLERY_CATEGORIES)[number]>('All');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[number] | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <Container className="pt-28 pb-20">
      <Helmet>
        <title>Gallery | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Explore Amar Tours & Travels gallery featuring beautiful landscapes, temples, beaches and premium travel experiences from across India."
        />
      </Helmet>

      <SectionHeading
        badge="Gallery"
        title="Beautiful journeys captured in every destination"
        subtitle="Browse a curated gallery of premium travel experiences and inspiring landscapes."
      />

      <div className="flex flex-wrap gap-3 pb-8">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              activeCategory === category
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border bg-surface text-text-secondary dark:bg-surface-secondary dark:text-text'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-surface-secondary dark:border-white/10"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Modal isOpen={Boolean(selectedItem)} onClose={() => setSelectedItem(null)} title={selectedItem?.title}>
        {selectedItem && (
          <div className="space-y-6">
            <img src={selectedItem.image} alt={selectedItem.title} loading="lazy" className="w-full rounded-3xl object-cover" />
            <p className="text-sm text-text-secondary">{selectedItem.title} is part of our premium travel collection. Book a package today to explore similar experiences with luxury accommodations and expert local guides.</p>
            <div className="flex justify-end">
              <a href="/book">
                <Button>Book now</Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </Container>
  );
}
