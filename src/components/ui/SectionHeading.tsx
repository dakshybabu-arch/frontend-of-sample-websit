import { type ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'center',
  children,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn('mb-12 lg:mb-16', align === 'center' && 'text-center', className)}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 border-2 border-cyan-500/50 bg-cyan-500/10 rounded-none neon-text font-mono">
          {badge}
        </span>
      )}
      <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance uppercase neon-text">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-text-secondary max-w-2xl font-mono', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
      {children}
    </ScrollReveal>
  );
}
