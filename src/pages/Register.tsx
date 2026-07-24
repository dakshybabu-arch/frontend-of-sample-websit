import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/context/AuthContext';
import { registerSchema, type RegisterFormData } from '@/lib/validations';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (values: RegisterFormData) => {
    setErrorMessage('');
    const { error } = await signUp(values.email, values.password, values.fullName);
    if (error) {
      setErrorMessage(error.message || 'Unable to create your account. Please try again.');
      return;
    }
    navigate('/');
  };

  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Register | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Register with Amar Tours & Travels to book premium travel packages, manage trips, and access exclusive support."
        />
      </Helmet>

      <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Create account</p>
          <h1 className="text-4xl font-semibold text-primary">Start booking with Amar Tours</h1>
          <p className="text-sm text-text-secondary">Register for secure booking, personalized recommendations, and premium support. </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input label="Full Name" {...register('fullName')} error={errors.fullName?.message} />
          <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" {...register('password')} error={errors.password?.message} />
          <Input label="Confirm password" type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
          <Button type="submit" size="lg" isLoading={isSubmitting}>Create account</Button>
          {errorMessage && <p className="rounded-3xl bg-error/10 px-5 py-3 text-sm text-error">{errorMessage}</p>}
        </form>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="text-accent hover:underline">Sign in</Link>
        </p>
      </div>
    </Container>
  );
}
