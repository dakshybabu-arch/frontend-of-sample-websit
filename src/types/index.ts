export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  price?: string;
  duration?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  review: string;
  location?: string;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
  highlights: string[];
  image: string;
  featured: boolean;
}

export interface Booking {
  id: string;
  userId?: string;
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  travellers: number;
  requests?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: 'user' | 'admin';
  createdAt: string;
}
