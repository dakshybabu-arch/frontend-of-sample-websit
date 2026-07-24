import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/context/AuthContext';
import { loginSchema, type LoginFormData } from '@/lib/validations';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Login() {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormData) => {
    setErrorMessage('');
    const { error } = await signIn(values.email, values.password);
    if (error) {
      setErrorMessage(error.message || 'Unable to sign in. Please try again.');
      return;
    }
    navigate('/');
  };

  const handleGoogleSignIn = async () => {
    const { error } = await signInWithGoogle();
    if (error) setErrorMessage(error.message || 'Google sign in failed.');
  };

  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Login | Amar Tours & Travels</title>
        <meta
          name="description"
          content="Login to Amar Tours & Travels to manage bookings, access your travel dashboard, and continue planning premium trips."
        />
      </Helmet>

      <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-border bg-surface p-10 shadow-glass dark:bg-surface-secondary dark:border-white/10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Welcome back</p>
          <h1 className="text-4xl font-semibold text-primary">Sign in to Amar Tours</h1>
          <p className="text-sm text-text-secondary">Access your booking history, manage travel requests and view exclusive offers.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" {...register('password')} error={errors.password?.message} />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/forgot-password" className="text-sm text-accent hover:underline">Forgot password?</Link>
            <Button type="submit" size="lg" isLoading={isSubmitting}>Sign in</Button>
          </div>
          {errorMessage && <p className="rounded-3xl bg-error/10 px-5 py-3 text-sm text-error">{errorMessage}</p>}
        </form>

        <div className="mt-8 border-t border-border pt-8">
          <Button variant="outline" size="lg" onClick={handleGoogleSignIn}>Continue with Google</Button>
          <p className="mt-6 text-sm text-text-secondary">
            New to Amar Tours?{' '}
            <Link to="/register" className="text-accent hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
