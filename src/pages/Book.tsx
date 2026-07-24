import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { DESTINATIONS } from '@/lib/constants';
import { bookingSchema, type BookingFormData } from '@/lib/validations';
import { createBooking } from '@/services/bookings';

export function Book() {
  const [statusMessage, setStatusMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      destination: '',
      travelDate: '',
      travellers: 1,
      requests: '',
    },
  });

  const destinationOptions = useMemo(
    () => DESTINATIONS.map((destination) => ({ value: destination.name, label: destination.name })),
    []
  );

  const onSubmit = async (data: BookingFormData) => {
    setStatusMessage('');
    try {
      await createBooking(data);
      setStatusMessage('Your booking request has been submitted successfully. Our travel team will contact you shortly.');
      reset();
    } catch (error) {
      setStatusMessage('Unable to submit booking right now. Please contact us directly or try again later.');
    }
  };

  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Book Now | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Book your next tour with Amar Tours & Travels. Submit your travel details and receive a premium itinerary recommendation from our team."
        />
      </Helmet>

      <SectionHeading
        badge="Book now"
        title="Reserve your premium travel experience"
        subtitle="Complete the form below and let Amar Tours & Travels handle the rest of your journey."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
        <div className="rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10">
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Booking details</p>
          <div className="mt-6 space-y-6 text-text-secondary">
            <p>Fill in your travel preferences, preferred destination and passenger details. Our team will review your request, prepare the best itinerary, and contact you with a confirmation.</p>
            <ul className="space-y-3">
              <li>• Personalized itinerary planning</li>
              <li>• Verified vehicles and professional drivers</li>
              <li>• Support through booking, travel and follow-up</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Full Name" {...register('name')} error={errors.name?.message} />
            <Input label="Phone Number" type="tel" {...register('phone')} error={errors.phone?.message} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Email Address" type="email" {...register('email')} error={errors.email?.message} />
            <div className="space-y-1.5">
              <label htmlFor="destination" className="block text-sm font-medium text-text-secondary">Destination</label>
              <select
                id="destination"
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:bg-surface-secondary"
                {...register('destination')}
              >
                <option value="">Select a destination</option>
                {destinationOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              {errors.destination && <p className="text-sm text-error">{errors.destination.message}</p>}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Travel Date" type="date" {...register('travelDate')} error={errors.travelDate?.message} />
            <Input label="Number of Travellers" type="number" min={1} max={50} {...register('travellers', { valueAsNumber: true })} error={errors.travellers?.message} />
          </div>
          <Textarea label="Special Requests" rows={5} {...register('requests')} error={errors.requests?.message} />
          <div className="space-y-3">
            <Button type="submit" size="lg" isLoading={isSubmitting}>Submit Booking</Button>
            {statusMessage && (
              <p className="rounded-3xl bg-accent/10 px-5 py-3 text-sm text-accent">{statusMessage}</p>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
}
