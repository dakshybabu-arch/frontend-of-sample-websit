import { motion, useScroll, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  rotateX?: number;
  rotateY?: number;
  scale?: number;
}

export function ParallaxScroll({
  children,
  className = '',
  speed = 0.2,
  rotateX = 0,
  rotateY = 0,
  scale = 1,
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const rotX = useTransform(scrollYProgress, [0, 1], [0, rotateX]);
  const rotY = useTransform(scrollYProgress, [0, 1], [0, rotateY]);
  const scl = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, scale, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        rotateX: rotX,
        rotateY: rotY,
        scale: scl,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}