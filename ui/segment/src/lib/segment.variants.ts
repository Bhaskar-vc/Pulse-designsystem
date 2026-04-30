import { tv } from 'tailwind-variants';

export const segmentVariants = tv({
  base: 'segment',
  variants: {
    size: {
      sm: 'segment--sm',
      md: '',
      lg: 'segment--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
