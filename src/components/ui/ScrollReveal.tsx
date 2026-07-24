import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  scale?: boolean;
  rotate?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  scale = false,
  rotate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionOffset = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  const initialScale = scale ? 0.85 : 1;
  const initialRotate = rotate ? { rotateX: 15, rotateY: -15 } : {};

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction],
        scale: initialScale,
        ...initialRotate
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
