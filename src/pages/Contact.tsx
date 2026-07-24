import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitMessage('Thank you! Your message has been received. We will contact you shortly.');
    reset();
  };

  return (
    <Container className="pt-28 pb-20">
      <Helmet>
        <title>Contact | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Contact Amar Tours & Travels for premium tour planning, destination questions, booking help, or travel support."
        />
      </Helmet>

      <SectionHeading
        badge="Contact"
        title="Get in touch with our travel experts"
        subtitle="We are here to answer your questions, finalize your package and customize your next journey."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-border bg-surface p-10 shadow-lg dark:bg-surface-secondary dark:border-white/10">
          <div className="space-y-6">
            <div className="rounded-3xl bg-accent/10 p-5">
              <p className="text-xs uppercase tracking-[0.30em] text-accent">Office Address</p>
              <p className="mt-3 text-lg font-semibold text-primary">42, MG Road, Near Central Mall, Bangalore, Karnataka 560001</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" />
                <p className="text-sm text-text-secondary">Bangalore, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent" />
                <a href="tel:+919876543210" className="text-sm text-text-secondary hover:text-primary">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent" />
                <a href="mailto:info@amartours.in" className="text-sm text-text-secondary hover:text-primary">info@amartours.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-10 shadow-lg dark:bg-surface-secondary dark:border-white/10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Full Name" {...register('name')} error={errors.name?.message} />
              <Input label="Email Address" type="email" {...register('email')} error={errors.email?.message} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Phone Number" type="tel" {...register('phone')} error={errors.phone?.message} />
              <Input label="Subject" {...register('subject')} error={errors.subject?.message} />
            </div>
            <Textarea label="Message" rows={5} {...register('message')} error={errors.message?.message} />
            <Button type="submit" isLoading={isSubmitting}>Send Message</Button>
            {isSubmitSuccessful && submitMessage && (
              <p className="rounded-3xl bg-success/10 px-5 py-4 text-sm text-success">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}
