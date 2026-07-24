import { motion } from 'framer-motion';
import { Card3D } from './Card3D';

interface TripImage {
  id: string;
  title: string;
  category: string;
  image: string;
  fallbackImage: string;
  description: string;
}

const tripImages: TripImage[] = [
  {
    id: '1',
    title: 'Tirupati Temple',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    description: 'Famous Lord Venkateswara temple in Andhra Pradesh'
  },
  {
    id: '2', 
    title: 'Dal Lake Kashmir',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1602351447937-745e720619a7?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    description: 'Beautiful shikara rides in Srinagar, Jammu & Kashmir'
  },
  {
    id: '3',
    title: 'Golden Temple',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1564754667731-961f2394f0a7?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80',
    description: 'Sri Harmandir Sahib in Amritsar, Punjab'
  },
  {
    id: '4',
    title: 'Alleppey Backwaters',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1596423648773-7ef55da043cd?w=800&q=80',
    description: 'Kerala houseboat paradise in God\'s Own Country'
  },
  {
    id: '5',
    title: 'Jaisalmer Fort',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    description: 'Golden city of Rajasthan in Thar Desert'
  },
  {
    id: '6',
    title: 'Palolem Beach Goa',
    category: 'Leisure',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    description: 'Scenic crescent-shaped beach in South Goa'
  },
  {
    id: '7',
    title: 'Varanasi Ghats',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    description: 'Sacred Ganges river rituals in Uttar Pradesh'
  },
  {
    id: '8',
    title: 'Manali Mountains',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    description: 'Himachal Pradesh hill station in Kullu Valley'
  },
  {
    id: '9',
    title: 'Ellora Caves',
    category: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1599423630418-4c3e70e7d92f?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80',
    description: 'UNESCO World Heritage site in Aurangabad, Maharashtra'
  }
];

const categoryColors: Record<string, string> = {
  'Spiritual': 'bg-gradient-to-r from-orange-500/30 to-amber-500/30 text-orange-600 dark:text-orange-400 border border-orange-500/40',
  'Nature': 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-600 dark:text-green-400 border border-green-500/40',
  'Adventure': 'bg-gradient-to-r from-red-500/30 to-rose-500/30 text-red-600 dark:text-red-400 border border-red-500/40',
  'Leisure': 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40'
};

const cardGradients = [
  'from-pink-500/20 via-purple-500/15 to-blue-500/20',
  'from-green-500/20 via-emerald-500/15 to-teal-500/20',
  'from-orange-500/20 via-amber-500/15 to-yellow-500/20',
  'from-cyan-500/20 via-blue-500/15 to-indigo-500/20',
  'from-red-500/20 via-rose-500/15 to-pink-500/20',
  'from-purple-500/20 via-violet-500/15 to-indigo-500/20',
  'from-amber-500/20 via-orange-500/15 to-red-500/20',
  'from-lime-500/20 via-green-500/15 to-emerald-500/20',
  'from-sky-500/20 via-cyan-500/15 to-blue-500/20'
];

export function TripGallery() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 px-4 py-2 text-sm font-semibold bg-gradient-to-r"
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Photo Gallery
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Capture Your Travel Memories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          From spiritual journeys to adventurous expeditions, explore our diverse travel experiences through stunning visuals
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tripImages.map((trip, index) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card3D intensity={3} className="h-full">
              <div className={`relative h-72 rounded-3xl overflow-hidden group cursor-pointer bg-gradient-to-br ${cardGradients[index % cardGradients.length]} dark:from-slate-800/90 dark:to-slate-900/90 border border-pink-500/30`}>
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== trip.fallbackImage) {
                      target.src = trip.fallbackImage;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[trip.category]} backdrop-blur-sm`}>
                    {trip.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{trip.title}</h3>
                  <p className="text-sm text-gray-200">{trip.description}</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}