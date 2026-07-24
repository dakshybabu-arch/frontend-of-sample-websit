import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, glass, hover = true, gradient, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } } : undefined}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        glass
          ? 'glass-card'
          : 'bg-surface border border-border shadow-sm',
        hover && 'hover:shadow-xl cursor-pointer',
        gradient && 'bg-gradient-to-br from-accent/5 to-purple/5 border-accent/10',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
