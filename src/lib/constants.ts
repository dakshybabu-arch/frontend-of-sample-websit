import type { ServiceItem, Destination, Testimonial, Package, FAQItem } from '@/types';

export const SITE_CONFIG = {
  name: 'Amar Tours & Travels',
  tagline: 'Explore India With Comfort',
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
  email: 'info@amartours.in',
  address: '42, MG Road, Near Central Mall, Bangalore, Karnataka 560001',
  socialMedia: {
    facebook: 'https://facebook.com/amartours',
    instagram: 'https://instagram.com/amartours',
    twitter: 'https://twitter.com/amartours',
    youtube: 'https://youtube.com/@amartours',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
] as const;

export const STATS = [
  { label: 'Happy Customers', value: 2500, suffix: '+' },
  { label: 'Destinations', value: 50, suffix: '+' },
  { label: 'Trips Completed', value: 5000, suffix: '+' },
  { label: 'Years Experience', value: 12, suffix: '' },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'transportation',
    title: 'Transportation Services',
    description: 'Comfortable AC vehicles with professional drivers for all your travel needs across India.',
    icon: 'car',
  },
  {
    id: 'devotional',
    title: 'Devotional Trips',
    description: 'Spiritual journeys to sacred temples, pilgrimage sites, and holy destinations with care.',
    icon: 'heart',
  },
  {
    id: 'family',
    title: 'Family Trips',
    description: 'Create unforgettable memories with thoughtfully planned family vacation packages.',
    icon: 'users',
  },
  {
    id: 'personalized',
    title: 'Personalized Trips',
    description: 'Custom-tailored itineraries designed around your preferences and schedule.',
    icon: 'sparkles',
  },
  {
    id: 'school',
    title: 'School & College Trips',
    description: 'Safe and fun educational tours with experienced guides for students of all ages.',
    icon: 'graduation-cap',
  },
  {
    id: 'group',
    title: 'Group Tours',
    description: 'Well-organized group travel packages with premium amenities and expert guidance.',
    icon: 'users-round',
  },
  {
    id: 'corporate',
    title: 'Corporate Trips',
    description: 'Professional corporate retreats, team outings, and business travel solutions.',
    icon: 'briefcase',
  },
  {
    id: 'solo',
    title: 'Solo Traveller Trips',
    description: 'Safe and exciting solo adventure packages with reliable support throughout.',
    icon: 'compass',
  },
  {
    id: 'holiday',
    title: 'Holiday Packages',
    description: 'Curated holiday packages to stunning destinations across India and beyond.',
    icon: 'palm-tree',
  },
  {
    id: 'hotel',
    title: 'Hotel Booking Assistance',
    description: 'Premium hotel bookings at best prices with verified reviews and instant confirmation.',
    icon: 'building',
  },
];

export const WHY_CHOOSE_US = [
  { title: 'Professional Drivers', description: 'Experienced, licensed drivers who prioritize your safety and comfort.', icon: 'shield-check' },
  { title: 'Comfortable Vehicles', description: 'Well-maintained, air-conditioned fleet for a smooth journey.', icon: 'car' },
  { title: 'Affordable Pricing', description: 'Competitive rates with transparent pricing and no hidden charges.', icon: 'indian-rupee' },
  { title: '24×7 Support', description: 'Round-the-clock customer support for any assistance you need.', icon: 'headphones' },
  { title: 'Trusted by Families', description: 'Hundreds of families trust us for their travel needs year after year.', icon: 'heart-handshake' },
  { title: 'Clean Vehicles', description: 'Sanitized and well-maintained vehicles for a hygienic travel experience.', icon: 'sparkles' },
  { title: 'Expert Planning', description: 'Years of experience in crafting perfect itineraries for every destination.', icon: 'map' },
  { title: 'Safe & Reliable', description: 'Your safety is our top priority with comprehensive travel insurance.', icon: 'lock' },
  { title: 'Quick Booking', description: 'Simple and fast booking process — plan your trip in minutes.', icon: 'zap' },
  { title: 'Customer Satisfaction', description: 'We go above and beyond to ensure every trip is memorable.', icon: 'trophy' },
];

export const DESTINATIONS: Destination[] = [
  { id: 'kerala', name: 'Kerala', description: "God's Own Country — Backwaters, beaches & lush greenery", image: '', price: '₹12,999', duration: '4N/5D' },
  { id: 'munnar', name: 'Munnar', description: 'Rolling tea gardens, misty hills & serene landscapes', image: '', price: '₹8,999', duration: '3N/4D' },
  { id: 'wayanad', name: 'Wayanad', description: 'Pristine forests, wildlife & ancient caves', image: '', price: '₹7,999', duration: '2N/3D' },
  { id: 'ooty', name: 'Ooty', description: "Queen of Hill Stations — Nilgiri's finest retreat", image: '', price: '₹9,499', duration: '3N/4D' },
  { id: 'goa', name: 'Goa', description: 'Sun, sand & vibrant nightlife — India\'s party capital', image: '', price: '₹11,999', duration: '3N/4D' },
  { id: 'kashmir', name: 'Kashmir', description: 'Paradise on Earth — Houseboats, gardens & snow peaks', image: '', price: '₹18,999', duration: '5N/6D' },
  { id: 'manali', name: 'Manali', description: 'Adventure capital — Snowfall, trekking & mountain charm', image: '', price: '₹14,999', duration: '4N/5D' },
  { id: 'kanyakumari', name: 'Kanyakumari', description: "India's southern tip — Where three seas meet", image: '', price: '₹6,999', duration: '2N/3D' },
  { id: 'tirupati', name: 'Tirupati', description: 'Sacred abode of Lord Venkateswara — Divine blessings', image: '', price: '₹5,999', duration: '2N/3D' },
  { id: 'rameshwaram', name: 'Rameshwaram', description: 'Ancient temple town — Spiritual India at its finest', image: '', price: '₹7,499', duration: '2N/3D' },
  { id: 'shirdi', name: 'Shirdi', description: 'Holy shrine of Sai Baba — Peace and devotion', image: '', price: '₹6,499', duration: '2N/3D' },
  { id: 'custom', name: 'Custom Tour', description: 'Design your own dream trip — We make it happen', image: '', price: 'Custom', duration: 'Flexible' },
];

export const PACKAGES: Package[] = [
  {
    id: 'pkg-kerala-luxury',
    title: 'Kerala Luxury Escape',
    destination: 'Kerala',
    description: 'Experience the best of Kerala with houseboat stays, Ayurvedic spa, beach resorts, and guided backwater tours.',
    price: 24999,
    duration: '5N/6D',
    highlights: ['Houseboat Stay', 'Ayurvedic Spa', 'Munnar Tea Gardens', 'Alleppey Backwaters', 'Fort Kochi Tour'],
    image: '',
    featured: true,
  },
  {
    id: 'pkg-kashmir-paradise',
    title: 'Kashmir Paradise Tour',
    destination: 'Kashmir',
    description: 'Discover the breathtaking beauty of Kashmir with Shikara rides, Mughal gardens, and snow-capped mountain views.',
    price: 32999,
    duration: '6N/7D',
    highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens', 'Local Cuisine Tour'],
    image: '',
    featured: true,
  },
  {
    id: 'pkg-goa-beach',
    title: 'Goa Beach Bliss',
    destination: 'Goa',
    description: 'Sun-soaked beaches, vibrant nightlife, Portuguese heritage, and water sports — the ultimate Goa experience.',
    price: 15999,
    duration: '4N/5D',
    highlights: ['Beach Hopping', 'Water Sports', 'Old Goa Churches', 'Spice Plantation', 'Sunset Cruise'],
    image: '',
    featured: true,
  },
  {
    id: 'pkg-manali-adventure',
    title: 'Manali Adventure Trek',
    destination: 'Manali',
    description: 'Thrilling mountain adventures with paragliding, river rafting, trekking, and cozy mountain stays.',
    price: 19999,
    duration: '5N/6D',
    highlights: ['Solang Valley', 'Paragliding', 'River Rafting', 'Rohtang Pass', 'Old Manali Walk'],
    image: '',
    featured: false,
  },
  {
    id: 'pkg-tirupati-devotional',
    title: 'Tirupati Divine Darshan',
    destination: 'Tirupati',
    description: 'A spiritual journey to the abode of Lord Venkateswara with VIP darshan and comfortable stays.',
    price: 8999,
    duration: '2N/3D',
    highlights: ['VIP Darshan', 'Temple Tour', 'Tirumala Hills', 'Prasadam', 'AC Transport'],
    image: '',
    featured: false,
  },
  {
    id: 'pkg-ooty-family',
    title: 'Ooty Family Retreat',
    destination: 'Ooty',
    description: 'A perfect family getaway to the Nilgiris with toy train rides, botanical gardens, and lake boating.',
    price: 13999,
    duration: '3N/4D',
    highlights: ['Toy Train Ride', 'Botanical Garden', 'Ooty Lake', 'Doddabetta Peak', 'Tea Factory Visit'],
    image: '',
    featured: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    photo: '',
    rating: 5,
    review: 'Absolutely wonderful experience! Amar Tours planned our Kerala trip perfectly. The houseboat stay was magical and the driver was very professional. Highly recommend!',
    location: 'Bangalore',
  },
  {
    id: 't2',
    name: 'Rajesh Kumar',
    photo: '',
    rating: 5,
    review: 'We booked a family trip to Ooty and it was seamless. Clean vehicles, on-time pickups, and the hotel arrangements were top-notch. Will definitely book again.',
    location: 'Chennai',
  },
  {
    id: 't3',
    name: 'Anjali Menon',
    photo: '',
    rating: 5,
    review: 'The Tirupati darshan package was excellent. Everything was well-organized, from transport to accommodation. Made our spiritual journey stress-free.',
    location: 'Hyderabad',
  },
  {
    id: 't4',
    name: 'Suresh Patel',
    photo: '',
    rating: 4,
    review: 'Great service for our corporate team outing to Goa. The team loved every moment. Professional coordination and affordable pricing. Thank you Amar Tours!',
    location: 'Mumbai',
  },
  {
    id: 't5',
    name: 'Deepika Nair',
    photo: '',
    rating: 5,
    review: 'I traveled solo to Manali and felt completely safe throughout. The driver was courteous and the itinerary was perfectly paced. Amazing experience!',
    location: 'Kochi',
  },
  {
    id: 't6',
    name: 'Vikram Singh',
    photo: '',
    rating: 5,
    review: 'Booked a Kashmir tour for our honeymoon and it exceeded all expectations. The Shikara ride on Dal Lake was the highlight. Truly paradise on earth!',
    location: 'Delhi',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a tour with Amar Tours & Travels?',
    answer: 'You can book a tour through our website by filling out the booking form, calling us directly, or sending a WhatsApp message. Our team will get back to you within 30 minutes with a customized itinerary and quote.',
    category: 'booking',
  },
  {
    id: 'faq-2',
    question: 'What types of vehicles do you offer?',
    answer: 'We offer a range of well-maintained, air-conditioned vehicles including sedans (Swift Dzire, Honda Amaze), SUVs (Innova, Ertiga), and tempo travellers for larger groups. All vehicles are sanitized before each trip.',
    category: 'vehicles',
  },
  {
    id: 'faq-3',
    question: 'Can I customize my tour package?',
    answer: 'Absolutely! We specialize in personalized trip planning. Share your preferences, budget, and dates, and we will create a tailor-made itinerary just for you. No two trips need to be the same.',
    category: 'booking',
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 7+ days before travel get a full refund. Cancellations 3-7 days prior receive a 50% refund. Within 3 days, the booking is non-refundable. Special circumstances are considered on a case-by-case basis.',
    category: 'policy',
  },
  {
    id: 'faq-5',
    question: 'Are your drivers experienced and licensed?',
    answer: 'Yes, all our drivers are professionally licensed with 5+ years of experience. They undergo background verification, regular training, and health checkups. Your safety is our top priority.',
    category: 'safety',
  },
  {
    id: 'faq-6',
    question: 'Do you offer hotel booking assistance?',
    answer: 'Yes, we help you find and book the best hotels at every destination within your budget. We have partnerships with verified hotels ranging from budget-friendly to luxury resorts.',
    category: 'services',
  },
  {
    id: 'faq-7',
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI (GPay, PhonePe, Paytm), bank transfers (NEFT/IMPS), credit/debit cards, and cash. A 30% advance is required to confirm your booking, with the balance due before travel.',
    category: 'payment',
  },
  {
    id: 'faq-8',
    question: 'Is travel insurance included?',
    answer: 'Basic travel insurance is included with all our premium packages. For standard packages, we strongly recommend purchasing travel insurance and can assist you with the same at competitive rates.',
    category: 'policy',
  },
  {
    id: 'faq-9',
    question: 'Do you organize school and college trips?',
    answer: 'Yes, we have extensive experience organizing educational tours for schools and colleges. We ensure safety, fun learning experiences, and age-appropriate activities with dedicated tour managers.',
    category: 'services',
  },
  {
    id: 'faq-10',
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2 weeks in advance for domestic tours, especially during peak season (October-March). However, we also accommodate last-minute bookings based on availability.',
    category: 'booking',
  },
];

export const GALLERY_CATEGORIES = ['All', 'Mountains', 'Beaches', 'Temples', 'Nature', 'Cities'] as const;
