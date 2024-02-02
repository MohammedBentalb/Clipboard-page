'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, ElementType, useRef } from 'react';

export function ScaleIn<T extends ElementType>({
  as,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
}) {
  // @ts-ignore
  const Component = as ? motion[as] : motion.div;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Component
      {...props}
      ref={ref}
      style={{
        scale: opacityProgress,
        opacity: scaleProgress,
      }}
    />
  );
}
