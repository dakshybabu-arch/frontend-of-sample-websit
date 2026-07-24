import type { BookingFormData } from '@/lib/validations';

const STORAGE_KEY = 'amar-tours-bookings';

export async function createBooking(data: BookingFormData) {
  const stored = localStorage.getItem(STORAGE_KEY);
  const bookings = stored ? JSON.parse(stored) : [];
  const bookingRecord = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'pending',
    ...data,
  };
  bookings.unshift(bookingRecord);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return new Promise<void>((resolve) => setTimeout(resolve, 500));
}

export function getBookings() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}
