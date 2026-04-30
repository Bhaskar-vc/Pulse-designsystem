import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  variants: {
    type: {
      light: 'type-light',
      dark:  'type-dark',
      bold:  'type-bold',
    },
  },
  defaultVariants: {
    type: 'dark',
  },
});
