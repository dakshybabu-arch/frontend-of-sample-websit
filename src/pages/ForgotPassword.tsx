import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPassword() {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (values: ForgotPasswordFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setMessage(`If an account exists for ${values.email}, password reset instructions were sent.`);
  };

  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Forgot Password | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Reset your Amar Tours & Travels account password and regain access to your bookings."
        />
      </Helmet>

      <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Password recovery</p>
          <h1 className="text-4xl font-semibold text-primary">Forgot your password?</h1>
          <p className="text-sm text-text-secondary">Enter your email and we will send a recovery link to your inbox.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
          <Button type="submit" size="lg" isLoading={isSubmitting}>Send reset link</Button>
          {isSubmitSuccessful && message && (
            <p className="rounded-3xl bg-accent/10 px-5 py-3 text-sm text-accent">{message}</p>
          )}
        </form>
      </div>
    </Container>
  );
}
