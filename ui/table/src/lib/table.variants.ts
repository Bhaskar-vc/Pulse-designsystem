import { tv } from 'tailwind-variants';

export const tableVariants = tv({
  base: 'data-table',
  variants: {
    variant: {
      default:  '',
      striped:  'striped',
      bordered: 'bordered',
      compact:  'compact',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
