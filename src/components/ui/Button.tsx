import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'glass' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'border-2 border-cyan-500/50 bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:bg-cyan-500/30 neon-text font-mono uppercase',
  secondary:
    'border-2 border-pink-500/50 bg-pink-500/20 text-pink-400 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:bg-pink-500/30 neon-pink font-mono uppercase',
  ghost:
    'bg-transparent hover:bg-cyan-500/10 text-text font-mono uppercase',
  glass:
    'border border-cyan-500/30 bg-surface-secondary/80 text-text hover:bg-cyan-500/20 font-mono uppercase',
  outline:
    'border-2 border-pink-500/50 text-pink-400 hover:bg-pink-500/20 hover:shadow-pink-500/20 neon-pink font-mono uppercase',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-none',
  md: 'px-6 py-3 text-base rounded-none',
  lg: 'px-8 py-4 text-lg rounded-none',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...(props as object)}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
