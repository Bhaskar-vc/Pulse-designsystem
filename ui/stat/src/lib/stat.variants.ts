import { tv } from 'tailwind-variants';

export const statVariants = tv({
  variants: {
    iconColor: {
      purple: 'stat-figure-purple',
      green:  'stat-figure-green',
      blue:   'stat-figure-blue',
      orange: 'stat-figure-orange',
      red:    'stat-figure-red',
      none:   '',
    },
  },
  defaultVariants: {
    iconColor: 'none',
  },
});
