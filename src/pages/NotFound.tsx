import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function NotFound() {
  return (
    <Container className="pt-28 pb-24 text-center">
      <Helmet>
        <title>404 | Amar Tours & Travels</title>
        <meta name="description" content="Page not found. Return to Amar Tours & Travels home page." />
      </Helmet>

      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-surface p-16 shadow-glass dark:bg-surface-secondary dark:border-white/10">
        <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">404 error</p>
        <h1 className="mt-6 text-5xl font-semibold text-primary">Page not found</h1>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">The page you are looking for does not exist or has been moved. Return to the homepage or explore our premium travel services.</p>
        <div className="mt-10">
          <Link to="/">
            <Button size="lg">Return home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
