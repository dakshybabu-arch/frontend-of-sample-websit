import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface Scroll3DProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  rotate?: boolean;
  scale?: boolean;
}

export function Scroll3D({
  children,
  className = '',
  direction = 'up',
  rotate = false,
  scale = false,
}: Scroll3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transforms: Record<string, MotionValue<number>> = {};

  // Direction-based movement (reduced intensity)
  if (direction === 'up') {
    transforms.y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  } else if (direction === 'down') {
    transforms.y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  } else if (direction === 'left') {
    transforms.x = useTransform(scrollYProgress, [0, 1], [50, -50]);
  } else if (direction === 'right') {
    transforms.x = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  }

  // Opacity
  transforms.opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  // 3D Rotation (reduced intensity)
  if (rotate) {
    transforms.rotateX = useTransform(scrollYProgress, [0, 1], [8, -8]);
    transforms.rotateY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  }

  // Scale (reduced range)
  if (scale) {
    transforms.scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        ...transforms,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}