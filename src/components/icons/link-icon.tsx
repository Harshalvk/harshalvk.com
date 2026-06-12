'use client';

import { useImperativeHandle } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export type LinkIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

export type LinkIconProps = React.ComponentPropsWithoutRef<'svg'> & {
  ref?: React.Ref<LinkIconHandle>;
  tooltip?: string;
};

export function LinkIcon({ ref, tooltip = 'Link', ...props }: LinkIconProps) {
  const controls = useAnimation();

  useImperativeHandle(ref, () => ({
    startAnimation: () => controls.start('animate'),
    stopAnimation: () => controls.start('normal'),
  }));

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          {...props}
        >
          {/* Static link paths — never change */}
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />

          {/* Animated tick lines — draw in on hover */}
          {[
            { x1: '8', y1: '2', x2: '8', y2: '5' },
            { x1: '2', y1: '8', x2: '5', y2: '8' },
            { x1: '16', y1: '19', x2: '16', y2: '22' },
            { x1: '19', y1: '16', x2: '22', y2: '16' },
          ].map((line, i) => (
            <motion.line
              key={i}
              {...line}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={controls}
              variants={{
                normal: { pathLength: 0, opacity: 0 },
                animate: { pathLength: 1, opacity: 1 },
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
                delay: i * 0.05,
              }}
            />
          ))}
        </svg>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
